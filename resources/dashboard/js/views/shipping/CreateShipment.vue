<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-12">
                <b-alert v-if="message" variant="success" show fades dismissible><strong>{{message}}</strong></b-alert>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <b-card>

                    <div slot="header">
                        <router-link :to="{name: 'Shipping List'}"><i class="fa fa-arrow-left"></i>&nbsp; Shipping List</router-link>
                    </div>
                    <b-form-fieldset>
                        <label>Shipment Title<span class="star-req"> *</span></label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input type="text"
                                          name="title"
                                          v-validate="'required'"
                                          v-model="shipments.title">

                            </b-form-input>
                        </b-input-group>
                        <span v-if="shipinError.title" class="text-danger">{{ shipinError.title[0] }}</span>
                        <span v-if="errors.has('title')" class="text-danger">{{ errors.first('title') }}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Country<span class="star-req"> *</span></label>
                        <select size="0"
                                class="form-control"
                                name="country"
                                v-validate="'required'"
                                v-model="shipments.country_id" @change="getState(shipments.country_id)">
                            <option value="" selected>Please select country</option>
                            <option value="*">All</option>
                            <option v-for="(country,key) in countries"
                                    :value="key">{{ country }}
                            </option>
                        </select>
                        <span v-if="errors.has('country')" class="text-danger">{{ errors.first('country') }}</span>
                        <span v-if="shipinError.country_id" class="text-danger">{{ shipinError.country_id[0] }}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>State</label>
                        <select size="0"
                                class="form-control"
                                name="state"
                                v-model="shipments.state_id">
                            <option value="" selected>
                                <template v-if="shipments.country_id">Please select state</template>
                                <template v-else>Please select Country First</template>
                            </option>
                            <option value="*">All</option>
                            <option v-for="(state,key) in states" :value="key">{{ state }}</option>
                        </select>
                    </b-form-fieldset>

                    <div class="form-group">
                        <label for="district">District</label>
                        <select id="district" v-model="shipments.district" class="form-control">
                            <option value="*">All</option>
                            <option v-for="(district, index) in districts" :key="index" :value="district.id">{{ district.title }}</option>
                        </select>
                    </div>

                    <!--<b-form-fieldset>-->
                        <!--<label>Zip Code</label>-->
                        <!--<b-input-group right="<i class='fa fa-envelope-o'></i>">-->
                            <!--<b-form-input type="text"-->
                                          <!--name="zip"-->
                                          <!--v-validate="'required'"-->
                                          <!--v-model="shipments.zip_code"></b-form-input>-->
                        <!--</b-input-group>-->
                        <!--<span v-if="errors.has('zip')" class="text-danger">{{ errors.first('zip') }}</span>-->
                        <!--<span v-if="shipinError.zip_code" class="text-danger">{{ shipinError.zip_code[0] }}</span>-->
                    <!--</b-form-fieldset>-->


                    <b-form-fieldset>
                        <label>Weight Range<span class="star-req"> *</span> <span class="eg">( eg. 12-15 )</span></label>
                        <b-input-group right="<i class='fa fa-envelope-o'></i>">
                            <b-form-input type="text"
                                          name="Weight"
                                          v-validate="'required'"
                                          v-model="shipments.weight_range"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('Weight')" class="text-danger">{{ errors.first('Weight') }}</span>
                        <span v-if="shipinError.weight_range" class="text-danger">{{ shipinError.weight_range[0] }}</span>
                    </b-form-fieldset>

                    <!--<b-form-fieldset>-->
                        <!--<label>Dimension</label>-->
                        <!--<b-input-group right="<i class='fa fa-envelope-o'></i>">-->
                            <!--<b-form-input type="text"-->
                                          <!--name="Dimension"-->
                                          <!--v-validate="'required'"-->
                                          <!--v-model="shipments.dimension"></b-form-input>-->
                        <!--</b-input-group>-->
                        <!--<span v-if="errors.has('Dimension')" class="text-danger">{{ errors.first('Dimension') }}</span>-->
                        <!--<span v-if="shipinError.dimension" class="text-danger">{{ shipinError.dimension[0] }}</span>-->
                    <!--</b-form-fieldset>-->

                    <!--<b-form-fieldset>-->
                        <!--<label>Items</label>-->
                        <!--<b-input-group right="<i class='fa fa-envelope-o'></i>">-->
                            <!--<b-form-input type="text"-->
                                          <!--placeholder="Items"-->
                                          <!--name="Item"-->
                                          <!--v-validate="'required'"-->
                                          <!--v-model="shipments.items"></b-form-input>-->
                        <!--</b-input-group>-->
                        <!--<span v-if="errors.has('Item')" class="text-danger">{{ errors.first('Item') }}</span>-->
                        <!--<span v-if="shipinError.items" class="text-danger">{{ shipinError.items[0] }}</span>-->
                    <!--</b-form-fieldset>-->

                    <b-form-fieldset>
                        <label>Price<span class="star-req"> *</span></label>
                        <b-input-group right="<i class='fa fa-envelope-o'></i>">
                            <b-form-input type="text"
                                          placeholder="Price"
                                          name="Price"
                                          v-validate="'required|decimal'"
                                          v-model="shipments.price"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('Price')" class="text-danger">{{ errors.first('Price') }}</span>
                        <span v-if="shipinError.price" class="text-danger">{{ shipinError.price[0] }}</span>
                    </b-form-fieldset>

                    <!--<b-form-fieldset>-->
                        <!--<label>Order</label>-->
                        <!--<b-input-group right="<i class='fa fa-envelope-o'></i>">-->
                            <!--<b-form-input type="text"-->
                                          <!--placeholder="Order"-->
                                          <!--name="order"-->
                                          <!--v-validate="'required|numeric'"-->
                                          <!--v-model="shipments.order"></b-form-input>-->
                        <!--</b-input-group>-->
                        <!--<span v-if="errors.has('order')" class="text-danger">{{ errors.first('order') }}</span>-->
                        <!--<span v-if="shipinError.order" class="text-danger">{{ shipinError.order[0] }}</span>-->
                    <!--</b-form-fieldset>-->

                    <b-form-fieldset>
                        <label>Type</label>
                        <select size="0"
                                class="form-control"
                                v-model="shipments.product_type">
                            <option value="" selected>Please select Type</option>
                            <option value="document">Documented</option>
                            <option value="non document">Non Documented</option>
                        </select>
                    </b-form-fieldset>

                    <div slot="footer">
                        <b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset</b-button>

                        <b-button type="submit" size="sm" variant="success" @click="storeShipment"><i
                                class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'CreateRole',
        data() {
            return {
                shipments: {
                    country_id: '',
                    state_id : '',
                    product_type: '',
                    district: '*'

                },
                message: '',
                shipinError: {},
                countries: {},
                states: {},
                districts: []
            }
        },
        created() {
            this.getCountry();
            if (this.$route.params.id) {
                this.getShipment();
            }
        },
        methods: {
            storeShipment() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

              this.$validator.validateAll().then((valid) => {
                  if (valid)
                  {
                      storeUrl('/dashboard/shipment' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.shipments)
                          .then(response => {
                              this.message = response.data.success;
                              setTimeout(() => {
                                  this.message = ''
                              },3000)
                              this.message && this.$route.params.id ? this.$router.push({name: 'Shipping List', params: {message: response.data.success}}) :
                              this.shipments = {
                                  country_id: '',
                                  state_id : '',
                                  product_type: '',
                                  district: '*'
                              };
                              this.shipinError = {};
                              this.$validator.reset()
                          }).catch(error => {
                          this.shipinError = error.response.data;
                      });
                  }
              })
            },

            getCountry() {
                axios.get('/dashboard/shipment/create')
                    .then(response => {
                        this.countries = response.data;
                    }).catch(error => {
                    console.log(error);
                });
            },

            getState(countryId) {
                axios.get('/dashboard/shipment/country/' + countryId + '/states')
                    .then(response => {
                        this.states = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            getShipment() {
                axios.get('/dashboard/shipment/' + this.$route.params.id + '/edit')
                    .then(response => {

                        this.shipments = response.data

                        this.shipments.country_id ? this.getState(this.shipments.country_id) : '';
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset() {
                this.shipments = {
                    country_id: '',
                    state_id : '',
                    product_type: ''
                };
                this.shipinError = {};
                this.$validator.reset()
            }
        },
        watch: {
            'shipments.state_id': async function (newValue) {
                if (newValue !== '*' || newValue !== ''){
                   let result = await axios.get(`/dashboard/shipment/state/${newValue}/districts`);
                   this.districts = result.data;
                }
            }
        }
    }
</script>

<style>
    .eg{
        font-weight: lighter;
        font-size: 12px;
        color: grey;
    }
</style>
