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
                        <router-link :to="{name: 'payment List Method'}"><i class="fa fa-arrow-left"></i>&nbsp; Method
                            list
                        </router-link>
                    </div>
                    <div class="payment-method">

                        <b-form-fieldset>
                            <label>Title<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title" v-validate="'required'"
                                              v-model="paymentMethods.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="payMethodError.title"
                                  class="has-text-danger">{{ payMethodError.title[0] }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <div class="row">
                                <div class="col-md-5">Is Online ?</div>
                                <div class="col-md-7">
                                    <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                              v-model="paymentMethods.is_online"/>
                                </div>
                            </div>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <div class="row">
                                <div class="col-md-5">Is card Applicable ?</div>
                                <div class="col-md-7">
                                    <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                              v-model="paymentMethods.is_card_applicable"/>
                                </div>
                            </div>
                        </b-form-fieldset>
                    </div>

                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitPaymentMethodForm()">
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
                paymentMethods: {},
                paymentByCards: {},
                message: '',
                payMethodError: {},
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getPaymentMethosInfo();
            }
        },
        methods: {
            submitPaymentMethodForm() {
                // console.log('submit payment method form');
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        storeUrl('/dashboard/payment-methods' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.paymentMethods)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                }, 3000)
                                this.$validator.reset()
                                this.message && this.$route.params.id ? this.$router.push({
                                        name: 'payment List Method',
                                        params: {message: response.data.success}
                                    }) :
                                    this.paymentMethods = {}, this.payMethodError = {};

                            }).catch(error => {
                            this.payMethodError = error.response.data;
                        });
                    }

                })

            },


            getPaymentMethosInfo() {
                axios.get('/dashboard/payment-methods/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.paymentMethods = response.data;
                        // this.paymentMethods.is_online = response.data.is_online === 1 ? true : false;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset() {
                this.$validator.reset()
                this.paymentMethods = {}, this.payMethodError = {};
            }

        }
    }
</script>
