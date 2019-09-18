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
                        <router-link :to="{name: 'Currency List'}"><i class="fa fa-arrow-left"></i>&nbsp; Currency List</router-link>
                    </div>
                    <!--{{errors}}-->
                    <div class="">
                        <b-form-fieldset>
                            <label>Currency Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Currency" v-validate="'required'"
                                              v-model="currency.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Currency')" class="text-danger">{{ errors.first('Currency')}}</span>
                            <strong v-if="currencyError.title" class="has-text-danger">{{ currencyError.title[0] }}</strong>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Currency Code</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="currency.code"></b-form-input>
                            </b-input-group>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Currency Sign</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="currency.sign"></b-form-input>
                            </b-input-group>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Usd Conversion Amount <span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Convertion Ammount" v-validate="'required|decimal'"
                                              v-model="currency.usd_conversion_amount"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Convertion Ammount')" class="text-danger">{{ errors.first('Convertion Ammount')}}</span>
                            <strong v-if="currencyError.usd_conversion_amount" class="has-text-danger">{{ currencyError.usd_conversion_amount[0] }}</strong>
                        </b-form-fieldset>
                    </div>

                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitCurrency()">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </b-button>

                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currency: {},
                message: '',
                currencyError: {},
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getCurrencyInfo();
            }
        },
        methods: {
            submitCurrency() {

                this.$validator.validateAll().then((valid) => {
                    if (valid){
                        if (this.$route.params.id)
                        {
                            axios.patch('/dashboard/currency/' +this.$route.params.id, this.currency)
                                .then(response => {
                                    console.log(response.data);
                                    this.message = response.data.success;
                                    this.$router.push({name: 'Currency List', params: {message: response.data.success}})

                                }).catch(error => {
                                this.currencyError = error.response.data;
                            });
                        }else{
                            axios.post('/dashboard/currency', this.currency)
                                .then(response => {
                                    console.log(response.data);
                                    this.message = response.data.success;
                                    setTimeout(() => {
                                        this.message = ''
                                    },3000)
                                    this.$validator.reset()
                                    this.currency = {},this.currencyError = {};

                                }).catch(error => {
                                this.currencyError = error.response.data;
                            });
                        }
                    }
                })


            },



            getCurrencyInfo() {
                axios.get('/dashboard/currency/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.currency = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.$validator.reset()
                this.currency = {},this.currencyError = {};

            }

        }
    }
</script>
