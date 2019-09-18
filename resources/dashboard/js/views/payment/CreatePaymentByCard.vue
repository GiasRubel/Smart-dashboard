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
                        <router-link :to="{name: 'payment By Card List'}"><i class="fa fa-arrow-left"></i>&nbsp; Payment
                            By Card List
                        </router-link>
                    </div>
                    <div class="payment-method">
                        <b-form-fieldset>
                            <label>Title<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title" v-validate="'required'"
                                              v-model="paymentByCards.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="payCardError.title" class="text-danger">{{ payCardError.title[0] }}</span>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Alias<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Alias" v-validate="'required'"
                                              v-model="paymentByCards.alias"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Alias')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="payCardError.alias" class="text-danger">{{ payCardError.alias[0] }}</span>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Charge amount</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="paymentByCards.charge_amount"></b-form-input>
                            </b-input-group>

                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Secret Id</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="paymentByCards.secret_id"></b-form-input>
                            </b-input-group>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Secret Token</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="paymentByCards.secret_token"></b-form-input>
                            </b-input-group>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Others</label>
                            <b-form-input :textarea="true" :rows="9" v-model="paymentByCards.others"></b-form-input>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Order</label>
                                <b-form-input type="number"
                                              min="0"
                                              v-model="paymentByCards.order">
                                </b-form-input>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Country</label>
                            <select size="0" class="form-control"
                                    v-model="paymentByCards.applicable_country">
                                <option value="" selected>Please select country</option>
                                <option value="*">All</option>
                                <option v-for="(country,key) in countries"
                                        :value="key">{{ country }}
                                </option>

                            </select>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Payment Method<span class="star-req"> *</span></label>
                            <select size="0" class="form-control"
                                    name="Method" v-validate="'required'"
                                    v-model="paymentByCards.payment_method_id">
                                <option value="" selected>Please select Methods</option>
                                <option v-for="(method,key) in paymentMethods"
                                        :value="key">{{ method }}
                                </option>

                            </select>
                            <span v-if="errors.has('Method')" class="text-danger">{{ errors.first('Method')}}</span>
                            <span v-if="payCardError.payment_method_id" class="text-danger">{{ payCardError.payment_method_id[0] }}</span>
                        </b-form-fieldset>


                    </div>


                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitPaymentCardForm()">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </b-button>

                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import cSwitch from '../../components/Switch'

    export default {
        components: {
            cSwitch
        },
        data() {
            return {
                paymentByCards: {
                    applicable_country: '',
                    payment_method_id: '',
                },
                countries: {},
                paymentMethods: {},
                message: '',
                payCardError: {},

            }
        },
        created() {
            this.getCountries();
            this.getPaymentMethodId()
            if (this.$route.params.id) {
                this.getPaymentByCardInfo();
            }
        },
        methods: {
            submitPaymentCardForm() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        storeUrl('/dashboard/payment-by-card' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.paymentByCards)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                }, 3000)
                                this.$validator.reset()
                                this.message && this.$route.params.id ? this.$router.push({
                                        name: 'payment By Card List',
                                        params: {message: response.data.success}
                                    }) :
                                    this.paymentByCards = {
                                        applicable_country: '',
                                        payment_method_id: '',
                                    }, this.payCardError = {};

                            }).catch(error => {
                            this.payCardError = error.response.data;
                        });
                    }
                })

            },


            getPaymentByCardInfo() {
                axios.get('/dashboard/payment-by-card/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.paymentByCards = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            getCountries() {
                axios.get('/dashboard/shipment/create')
                    .then(response => {
                        this.countries = response.data;
                        console.log(this.countries);

                    }).catch(error => {
                    console.log(error);
                });
            },

            getPaymentMethodId() {
                axios.get('/dashboard/payment-by-card/create')
                    .then(response => {
                        this.paymentMethods = response.data;
                        // console.log(this.paymentMethods);

                    }).catch(error => {
                    console.log(error);
                });
            },

            reset() {
                this.$validator.reset()
                this.paymentByCards = {
                    applicable_country: '',
                    payment_method_id: '',
                }, this.payCardError = {};
            }


        }
    }
</script>
