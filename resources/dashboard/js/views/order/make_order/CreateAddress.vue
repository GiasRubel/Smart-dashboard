<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-12">
                <div class="card" style="padding-bottom: 0px">
                    <div class="card-header">
                        Add new address
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="full_name">Full name</label>
                                <input id="full_name" class="form-control" v-model="address.full_name" />
                                <span v-if="addressErrors.full_name">{{ addressErrors.full_name[0] }}</span>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="address1">Address 1</label>
                                <input id="address1" class="form-control" v-model="address.address_1" placeholder="Street and number, P.O. box, c/o." />
                                <span v-if="addressErrors.address_1">{{ addressErrors.address_1[0] }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="address2">Address 2</label>
                                <input id="address2" class="form-control" v-model="address.address_2" placeholder="Street and number, P.O. box, c/o." />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="city">City</label>
                                <input id="city" class="form-control" v-model="address.city" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="country">Country/Region</label>
                                <select class="form-control pdt-5" id="country" v-model="address.country" >
                                    <option value="0">Select one</option>
                                    <option v-for="(country, index) in countries" :value="country.id">{{ country.title }}</option>
                                </select>
                                <span v-if="addressErrors.country">{{ addressErrors.country[0] }}</span>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="district">Districts</label>
                                <select class="form-control pdt-5" id="district" v-model="address.district" >
                                    <option value="0">Select one</option>
                                    <option v-for="(district, index) in districts" :value="district.id">
                                        {{ district.title }}
                                    </option>
                                </select>
                                <span v-if="addressErrors.district">{{ addressErrors.district[0] }}</span>
                            </div>
                        </div>
                        <div class="row pdt-5">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="zip_code">Zip Code</label>
                                <input id="zip_code" class="form-control" v-model="address.zip_code" placeholder="1208" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <label for="phone_number">Phone number</label>
                                <input id="phone_number" class="form-control" v-model="address.phone_number"  />
                                <span v-if="addressErrors.phone_number">{{ addressErrors.phone_number[0] }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <span class="text-success" v-if="message">{{ message }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="float-right">
                                    <button class="btn btn-primary" @click="saveAddress">
                                        <span class="fa fa-spinner fa-spin" v-if="loader"></span>&nbsp;Save
                                    </button>
                                    <button class="btn btn-danger" @click="closeModal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: {
            user: {
                require: false
            }
        },
        name: "CreateAddress",
        data() {
          return {
              address: {
                  country: 0,
                  district: 0,
                  state: 0,
                  user: ''
              },
              countries: [],
              districts: [],
              loader: false,
              addressErrors: [],
              message: '',
              closeA: false
          }
        },
        methods:{
            closeModal(){
                this.$parent.$parent.closeAddressModal(this.closeA);
            },
            saveAddress(){
                this.loader = true;
                this.address.user = this.user.value;
                this.addressErrors = [];
                axios.post("/dashboard/save-user-address", this.address).then(response => {
                    this.loader = false;
                    this.$parent.$parent.fetchAddress();
                    this.message = response.data.message;
                    setTimeout(() => {
                        this.$parent.$parent.setUserCreatedAddress(response.data.address_id);
                        this.closeA = true;
                        this.closeModal();
                    }, 3000);
                }).catch(error => {
                    this.loader = false;
                    this.addressErrors = error.response.data;
                });
            },
            fetchCountry(){
                axios.get("/dashboard/country?page=1&field=title&q=&per_page=100").then((response) => {
                    this.countries = response.data.data;
                }).catch(error => {
                    console.log(error);
                })
            }
        },
        created() {
            this.fetchCountry();
        },
        watch: {
            'address.country': async function (newValue) {
                this.address.district = 0;
                if (newValue != 0){
                    let result = await axios.get(`/dashboard/shipment/state/${newValue}/districts/1`);
                    this.districts = result.data;
                }
            },
            'address.district': function (newValue) {
                if (newValue != 0){
                    let district = this.districts.find((district) => {
                        return district.id === newValue;
                    });
                    return this.address.state = district.state_id;
                }
                this.address.state = 0;
            }
        }
    }
</script>

<style scoped>
    .pdt-5{
        padding-top: 5px;
    }
    span{
        color: Red;
    }
</style>