import axios from 'axios'
export default {
    data(){
      return{
          message: '',
          error: false
      }
    },
    methods: {
        /*
        *this method will calculate all price for order
        */
        calculateTotalPrice(){
            let totalWeight = 0;
            let totalSubtotalPrice = 0;
            this.order.items.forEach((element) => {
                totalWeight = parseInt(element.quantity) * parseFloat(element.weight);
                totalSubtotalPrice += parseInt(element.quantity) * !isNaN(parseFloat(element.item_price)) ? parseFloat(element.item_price) * parseInt(element.quantity) : 0;
            });
            this.order.item_sub_total = totalSubtotalPrice;
            this.order.total_price = this.totalSubPrice();
            this.serviceCharge();
        },
        /*
        *@param $totalWeight,
        *get shipping cost from database
        */
        shippingCost(totalWeight){
            this.message = '';
            this.error = false;
            let address = this.userAddress.find((element) => {
               return element.id === this.order.address;
            });
            if (typeof address == 'undefined' || address === 0){
                this.order.shipping_cost = 0;
                if (this.order.user === ''){
                    this.message = "Please select a user";
                    this.error = true;
                }else{
                    this.message = "Please select an address for delivery and calculate shipping cost";
                    this.error = true;
                }
                return;
            }
            let area = address.district_id !== null ?
                'district='+address.district_id :
                'state='+address.state_id;
            if (parseFloat(totalWeight) <= 0 || isNaN(totalWeight)){ return; }
            axios.get('/dashboard/shipping/cost?country='+address.country_id+'&'+area+'&range='+totalWeight).then((response) =>{
                if (!response.data.status){
                    this.error = true;
                    this.message = response.data.message;
                    this.order.shipping_cost = 0;
                    return;
                }
                this.order.shipping_cost = response.data.cost;
                this.order.total_price = this.totalSubPrice();
            }).catch((error) =>{
                console.log(error.response);
            });
        },
        totalSubPrice(){
            return parseFloat(this.order.item_sub_total) +
                parseFloat(this.usaTax) +
                parseFloat(this.order.shipping_cost) +
                parseFloat(this.order.tax_bd) +
                parseFloat(this.order.service_charge);
        },
        serviceCharge(){
            let itemSubtotal = parseFloat(this.order.item_sub_total);
            let chargePercentage = parseFloat(window.settings.royalty_charge_percentage);
            let service_charge =  itemSubtotal * chargePercentage;
            if (this.order.includeServiceCharge){
                this.order.service_charge = service_charge;
                return service_charge;
            }else{
                this.order.service_charge = 0;
                return 0;
            }
        }
    },
    computed: {
        usaTax(){
            let itemSubtotal = parseFloat(this.order.item_sub_total);
            let taxPercentage = parseFloat(window.settings.taxPercentage);
            let tax =  itemSubtotal * taxPercentage;
            this.order.tax_usa = parseFloat(tax);
            return tax;
        }
    }
}