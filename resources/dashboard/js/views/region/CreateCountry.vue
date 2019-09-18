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
                        <router-link :to="{name: 'Country List'}"><i class="fa fa-arrow-left"></i>&nbsp; Country List</router-link>
                    </div>
                    <div class="">
                        <b-form-fieldset>
                            <label>Country Name <span class="star-req"> *</span> </label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Country" v-validate="'required'"
                                              v-model="Country.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Country')" class="text-danger">{{ errors.first('Country')}}</span>
                            <strong v-if="countryError.title" class="has-text-danger">{{ countryError.title[0] }}</strong>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Country Code <span class="star-req"> *</span> </label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="code" v-validate="'required'"
                                              v-model="Country.country_code"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('code')" class="text-danger">{{ errors.first('code')}}</span>
                            <strong v-if="countryError.country_code" class="has-text-danger">{{ countryError.country_code[0] }}</strong>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Currency </label>
                            <select size="0" class="form-control"
                                    v-model="Country.default_currency">
                                <option value="" selected>Please select Currency</option>
                                <option value="*">All</option>
                                <option v-for="(curency,key) in currencies"
                                        :value="key">{{ curency }}
                                </option>
                            </select>
                        </b-form-fieldset>
                        <div class="form-group">
                            <label>Site domain</label>
                            <input type="text" class="form-control" v-model="Country.domain_url" />
                        </div>
                        <b-form-fieldset>
                            <div class="row">
                                <div class="col-md-3">Is Shippable:</div>
                                <div class="col-md-7">
                                    <c-switch :pill="true" off="Off" on="On" type="text" v-model="Country.is_shippable"
                                              variant="primary"/>
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
                                  @click="submitCountryForm()">
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
                Country: {
                    default_currency: '',
                },
                currencies:{},
                message: '',
                countryError: {},
            }
        },
        created() {
            this.getcurrency();
            if (this.$route.params.id) {
                this.getCountryInfo();
            }
        },
        methods: {
            submitCountryForm() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if (valid){
                        storeUrl('/dashboard/country' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.Country)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000);
                                this.message && this.$route.params.id ? this.$router.push({name: 'Country List', params: {message: response.data.success}}) :
                                    this.$validator.reset();
                                    this.Country = {
                                        default_currency: '',
                                    };
                                    this.countryError = {};

                            }).catch(error => {
                            this.countryError = error.response.data;
                        });
                    }
                })

            },



            getCountryInfo() {
                axios.get('/dashboard/country/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.Country = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },


            getcurrency(){
                axios.get('/dashboard/country/create')
                    .then(response => {
                        this.currencies = response.data;
                    }).catch(error => {
                        console.log(error)
                })
            },

            reset(){
                this.$validator.reset();
                this.Country = {
                    default_currency: '',
                };
                this.countryError = {};
            }

        }
    }
</script>
