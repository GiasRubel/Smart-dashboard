<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-12">
                <b-alert dismissible fades show v-if="message" variant="success"><strong>{{message}}</strong></b-alert>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <b-card>
                    <div slot="header">
                        <router-link :to="{name: 'District List'}"><i class="fa fa-arrow-left"></i>&nbsp; District List
                        </router-link>
                    </div>
                    <div class="">
                        <b-form-fieldset>
                            <label>District Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input data-vv-as="District name"
                                              name="district" type="text"
                                              v-model="district.title"
                                              v-validate="'required'"></b-form-input>
                            </b-input-group>
                            <span class="text-danger" v-if="errors.has('District')">{{ errors.first('District')}}</span>
                            <span class="text-danger" v-for="error in districtError.title" v-if="districtError.title">{{error}}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Country<span class="star-req"> *</span></label>
                            <select @change="getState(district.country_id)"
                                    class="form-control"
                                    name="country"
                                    size="0"
                                    v-model="district.country_id" v-validate="'required'">
                                <option selected value="">Please select country</option>
                                <option :value="key"
                                        v-for="(country,key) in countries">{{ country }}
                                </option>
                            </select>
                            <span class="text-danger" v-if="errors.has('country')">{{ errors.first('country') }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>State</label>
                            <select size="0"
                                    class="form-control"
                                    name="state"
                                    v-model="district.state_id">
                                <option value="" selected>
                                    <template v-if="district.country_id">Please select state</template>
                                    <template v-else>Please select Country First</template>
                                </option>
                                <option v-for="(state,key) in states" :value="key">{{ state }}</option>
                            </select>
                        </b-form-fieldset>
                    </div>

                    <div slot="footer">

                        <b-button @click="reset" size="sm" type="submit" variant="danger">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button @click="submitDistrict()"
                                  size="sm"
                                  type="submit"
                                  variant="success">
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
                district: {
                    state_id: '',
                    country_id: '',
                },
                states: {},
                countries: {},
                message: '',
                districtError: {},
            }
        },
        created() {
            this.getCountry();
            if (this.$route.params.id) {
                this.getDistrictInfo();
            }
        },
        methods: {
            submitDistrict() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                storeUrl('/dashboard/district' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.district)
                    .then(response => {
                        this.message = response.data.success;
                        setTimeout(() => {
                            this.message = ''
                        }, 3000);
                        this.$validator.reset();
                        this.message && this.$route.params.id ? this.$router.push({
                                name: 'District List',
                                params: {message: response.data.success}
                            }) :
                            this.district = {
                                state_id: '',
                                country_id: '',
                            };
                        this.districtError = {};

                    }).catch(error => {
                    this.districtError = error.response.data;
                });
            },

            getDistrictInfo() {
                axios.get('/dashboard/district/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.district = response.data;
                        if(this.district.country_id) {
                            this.getState(this.district.country_id);
                        }
                    }).catch(error => {
                    console.log(error)
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

            reset() {
                this.$validator.reset();
                this.district = {};
                this.districtError = {}
            }

        }
    }
</script>
