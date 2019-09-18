<template>
    <div class="animated fadeIn">
        <div class="row make-order">
            <div class="col-12">
                <form method="post" @submit.prevent="saveOrder()">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Make Order</div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label>User</label>
                                    <model-list-select :list="options"
                                                       v-model="order.user"
                                                       option-value="value"
                                                       option-text="id"
                                                       placeholder="Please type user name or email"
                                                       @searchchange="fetchUser"
                                    ></model-list-select>
                                    <span class="text-danger" v-if="orderErrors.user">{{ orderErrors.user[0] }}</span>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="address">Address</label>
                                    <div class="form-group">
                                        <select id="address" class="form-control" v-model="order.address">
                                            <option value="0">Select one</option>
                                            <option v-for="address in userAddress" :value="address.id">{{ address.address }}</option>
                                            <option v-if="order.user !== ''" value="showModal">
                                                Add Address
                                            </option>
                                        </select>
                                    </div>
                                    <span class="text-danger" v-if="orderErrors.address">{{ orderErrors.address[0] }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b-alert variant="danger"
                             dismissible
                             :show="error"
                             @dismissed="error=false">
                        {{ message }}
                    </b-alert>
                    <div class="card">
                        <div class="card-header">
                            Items
                            <div class="float-right">
                                <button type="button" class="btn btn-primary btn-sm" @click="increaseCounter"><i class="fa fa-plus"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th width="30%" style="text-align: center">Title</th>
                                        <th width="27%" style="text-align: center">Weight</th>
                                        <th width="15%" style="text-align: center">Quantity</th>
                                        <th width="28%" style="text-align: center">Price</th>
                                    </tr>
                                </thead>
                                <tbody class="make-order-table">
                                    <tr v-for="(item, index) in itemsCounter" :key="index">
                                        <td>
                                            <input type="text" class="form-control" v-model="order.items[index].title"/>
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="order.items[index].weight" />
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" v-model="order.items[index].quantity"/>
                                            <span class="text-danger" v-if="orderErrors['items.'+index+'.quantity']">{{ orderErrors['items.'+index+'.quantity'][0].replace('.'+index+'.', ' ') }}</span>
                                        </td>
                                        <td>
                                            <div class="form-inline btn-trash">
                                                <input @input="calculateTotalPrice()" type="text" class="form-control wd-82" v-model="order.items[index].item_price"/>
                                                <button type="button" @click="removeItem(index)" class="btn btn-danger btn-flex"><i class="fa fa-trash"></i></button>
                                                <span class="text-danger" v-if="orderErrors['items.'+index+'.item_price']">{{ orderErrors['items.'+index+'.item_price'][0].replace('.'+index+'.', ' ') }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" align="right">Item subtotal</td>
                                        <td align="right" class="pd-0">
                                            <input type="text" class="form-control" v-model="order.item_sub_total" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" align="right">US Tax&nbsp;</td>
                                        <td align="right" class="pd-0">
                                            <input type="text" class="form-control" v-model="order.tax_usa" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" align="right">International Shipping&nbsp;</td>
                                        <td align="right" class="pd-0">
                                            <input class="form-control" v-model="order.shipping_cost" type="text" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" align="right">Local Customs and Taxes&nbsp;</td>
                                        <td align="right" class="pd-0">
                                            <input type="text" class="form-control" @input="calculateTotalPrice" v-model="order.tax_bd" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" align="right">Service Charge&nbsp;</td>
                                        <td align="right" class="pd-0">
                                            <input type="text" class="form-control" v-model="order.service_charge" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" align="right">
                                            <span v-if="order.cash" class="text-warning">{{ cashMessage }} </span>
                                            <input type="checkbox" v-model="order.cash" id="cash" />
                                            <label for="cash">Cash</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" v-if="success" class="text-success" align="center">{{ message }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" align="right">
                                            <button class="btn btn-primary" style="width: 140px;"><i class="fa fa-spinner fa-spin" v-if="loading"></i>&nbsp;Make order</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <b-modal v-model="addAddressModal" hide-header hide-footer size="lg" >
            <create-order :user="selectedUser"></create-order>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import {ModelListSelect} from 'vue-search-select'
    import MakeOrderMixins from './MakeOrderMixins'
    import CreateOrder from './CreateAddress'
    export default {
        mixins: [MakeOrderMixins],
        name: "MakeOrder",
        components: {ModelListSelect, CreateOrder},
        data(){
            return{
                order: {
                    user: '',
                    address: 0,
                    items: [
                        {
                            title: '',
                            weight: 0,
                            quantity: 1,
                            sku: '',
                            item_price: 0
                        }
                    ],
                    item_sub_total: 0,
                    shipping_cost: 0,
                    tax_bd: 0,
                    tax_usa: 0,
                    service_charge: 0,
                    total_price: 0
                },
                options: [],
                userAddress: [],
                itemsCounter: 1,
                orderErrors: [],
                loading: false,
                success: false,
                addAddressModal: false,
                selectedUser: {},
                cashMessage: 'The user has been completed his payment by cash.'
            }
        },
        methods: {
            fetchUser(text){
                if (typeof text !== 'undefined' && text.length > 1){
                    axios.get('/dashboard/user/list/'+text).then(response => {
                        this.options = [];
                        response.data.forEach((element) => {
                            this.options.push({
                                value: element.id,
                                id: `${element.name} (${element.email})`
                            })
                        })
                    });
                }
            },
            increaseCounter(){
                this.itemsCounter++;
                this.order.items.push({
                    title: '',
                    weight: 0,
                    quantity: 1,
                    sku: '',
                    item_price: 0
                })
            },
            removeItem(index){
                if(this.itemsCounter === 1)
                    return;
                this.itemsCounter--;
                this.order.items.splice(index, 1);
                this.calculateTotalPrice()
            },
            changeTotalPriceToZero(){
                this.order.total_price = 0;
            },
            saveOrder(){
                this.orderErrors = [];
                this.loading = true;
                axios.post("/dashboard/make-order", this.order).then((response) => {
                    this.loading = false;
                    this.message = response.data.message;
                    this.success = response.data.status;
                    setTimeout(() => {
                        this.$router.push({
                            path: '/dashboard/orders/list/show/'+response.data.order_id,
                        });
                    }, 4000);
                }).catch((error) => {
                    this.orderErrors = error.response.data;
                    this.loading = false;
                    setTimeout(() => {
                        this.orderErrors = [];
                    }, 4000)
                })
            },
            createAddressModal(){
                if (this.order.user !== ''){
                    this.selectedUser = this.options.find((user) => {
                       return this.order.user === user.value;
                    });
                    this.addAddressModal = true;
                }
            },
            closeAddressModal(st = false){
                this.addAddressModal = false;
                if (!st){
                    this.order.address = 0;
                }
            },
            setUserCreatedAddress(address){
                this.$set(this.order, 'address', address);
            },
            fetchAddress(){
                this.order.address = 0;
                axios.get('/dashboard/user/address-list/'+this.order.user).then((response) => {
                    this.userAddress = response.data;
                    if (this.userAddress.length){
                        this.userAddress.forEach((element) => {
                            if (element.is_default){
                                this.order.address = element.id
                            }
                        });
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }
        },
        watch: {
            user(){
                this.fetchAddress()
            },
            'order.shipping_cost': {
                handler: function(newValue) {
                    if (newValue === 0 || this.order.item_sub_total === 0){
                        this.changeTotalPriceToZero();
                    }
                }
            },
            'order.tax_bd': {
                handler: function (newValue) {
                    if (this.order.item_sub_total === 0 || this.order.shipping_cost === 0){
                        this.order.total_price = 0;
                    }
                }
            },
            totalWeight: {
                handler: function (newValue) {
                    this.shippingCost(newValue);
                }
            },
            'order.address': {
                handler: function (newValue) {
                    if (newValue === 'showModal'){
                        this.createAddressModal()
                    }else{
                        this.shippingCost(this.totalWeight);
                    }
                }
            }
        },
        computed: {
            user(){
                return this.order.user;
            },
            totalWeight(){
                let weight = 0;
                this.order.items.forEach((element) => {
                    weight += parseFloat(element.weight) * parseInt(element.quantity);
                });
                return weight;
            }
        },
        created() {
            this.fetchUser('user');
        }
    }
</script>

<style scoped>
    .user-select{
        width: 50%;
    }
    .user-select >>> .search{
        border-radius: 0;
        padding: 5px 5px 7px 15px;
    }
    .user-select >>> .ui{
        border-radius: 0;
        padding: 5px 5px 7px 15px;
    }
    .wd-82 {
        width: 82%;
    }
    .btn-flex{
        padding: 8px 10px;
    }
    .pd-0{
        padding: 0px
    }
    .animated >>> .modal-lg{
        margin-top: 60px;
    }
</style>