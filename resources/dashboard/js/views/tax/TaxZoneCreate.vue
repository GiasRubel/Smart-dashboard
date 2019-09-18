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
                        <router-link :to="{name: 'Tax Zone List'}"><i class="fa fa-arrow-left"></i>&nbsp; Tax rules list</router-link>
                    </div>
                    <b-form-fieldset>
                        <label>Tax Zone Title<span class="star-req"> *</span></label>
                            <b-form-input type="text"
                                          v-model="taxzones.title"
                                          v-validate="'required'" name="title"></b-form-input>

                        <span v-if="taxError.title" class="text-danger">{{ taxError.title[0] }}</span>
                        <span v-if="errors.has('title')" class="text-danger">{{ errors.first('title')}}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>

                        <label>Country<span class="star-req"> *</span></label>
                        <select size="0" class=
                                "form-control"
                                v-model="taxzones.country_id"
                                name="country"
                                v-validate="'required'"
                                @change="getState(taxzones.country_id)">

                            <option value="" selected>Please select country</option>
                            <option value="*">All</option>
                            <option v-for="(country,key) in countries"
                                    :value="key">{{ country }}
                            </option>

                        </select>
                        <span v-if="errors.has('country')" class="text-danger">{{ errors.first('country')}}</span>
                        <span v-if="taxError.country_id" class="text-danger">{{ taxError.country_id[0] }}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>State</label>
                        <select size="0"
                                class="form-control"
                                name="state"
                                v-model="taxzones.state_id">
                            <option value="" selected>
                                <template v-if="taxzones.country_id">Please select state</template>
                                <template v-else>Please select first country</template>
                            </option>
                            <option value="*">All</option>
                            <option v-for="(state,key) in states" :value="key">{{ state }}</option>
                        </select>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Zip Code</label>
                        <b-input-group right="<i class='fa fa-envelope-o'></i>">
                            <b-form-input type="text"
                                          placeholder="Zip_Code"
                                          name="Zip"
                                          v-model="taxzones.zip">

                            </b-form-input>
                        </b-input-group>
                    </b-form-fieldset>
                    <div slot="footer">
                        <b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset</b-button>

                        <b-button type="submit" size="sm" variant="success" @click="storeTaxZoneRate"><i
                                class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CreateRole',
        data() {
            return {
                taxzones: {
                    country_id: '',
                    state_id : '',
                },
                message: '',
                taxError: {},
                countries: {},
                states: {}
            }
        },
        created() {
            this.getCountry();
            if (this.$route.params.id) {
                this.getTaxZoneRate();
            }
        },
        methods: {
            storeTaxZoneRate() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        storeUrl('/dashboard/tax-zone-rate' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.taxzones)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000)
                                this.message && this.$route.params.id ? this.$router.push({name: 'Tax Zone List', params: {message: response.data.success}}) :
                                    this.taxzones = {
                                        country_id: '',
                                        state_id : '',
                                    }, this.taxError = {}
                                this.$validator.reset()
                            }).catch(error => {
                            this.taxError = error.response.data;
                        });

                        this.errors.clear();
                    }
                })

            },

            getCountry() {
                axios.get('/dashboard/shipment/create')
                    .then(response => {
                        this.countries = response.data;
                        // console.log(this.countries);

                    }).catch(error => {
                    console.log(error);
                });
            },

            getState(countryId) {
                axios.get('/dashboard/shipment/country/' + countryId + '/states')
                    .then(response => {
                        this.states = response.data;
                        // console.log(this.states);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            getTaxZoneRate() {
                axios.get('/dashboard/tax-zone-rate/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.taxzones = response.data;
                        this.taxzones.country_id ? this.getState(this.taxzones.country_id) : '';
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.taxzones = {
                    country_id: '',
                    state_id : '',
                }, this.taxError = {}
            }
        }
    }
</script>
