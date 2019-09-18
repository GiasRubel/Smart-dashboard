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
                        <router-link :to="{name: 'State List'}"><i class="fa fa-arrow-left"></i>&nbsp; State List
                        </router-link>
                    </div>
                    <div class="">
                        <b-form-fieldset>
                            <label>State Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="State" v-validate="'required'"
                                              data-vv-as="State name"
                                              v-model="state.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('State')" class="text-danger">{{ errors.first('State')}}</span>
                            <span v-if="stateError.title" v-for="error in stateError.title" class="text-danger">{{error}}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Select Country<span class="star-req"> *</span></label>
                            <select size="0" class="form-control"
                                    name="Country" v-validate="'required'"
                                    data-vv-as="Country name"
                                    v-model="state.country_id">
                                <option value="" selected>Please select country</option>
                                <option value="*">All</option>
                                <option v-for="(country,key) in countries" :value="key">{{ country }}</option>
                            </select>
                            <span v-if="errors.has('Country')" class="text-danger">{{ errors.first('Country')}}</span>
                            <span v-if="stateError.country_id" v-for="error in stateError.country_id"
                                  class="text-danger">{{error}}</span>
                        </b-form-fieldset>
                    </div>

                    <div slot="footer">

                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitState()">
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
                state: {
                    country_id: '',
                },
                countries: {},
                message: '',
                stateError: {},
            }
        },
        created() {
            this.getCountries();
            if (this.$route.params.id) {
                this.getStateInfo();
            }
        },
        methods: {
            submitState() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                // this.$validator.validateAll().then((valid) => {
                //     if (valid) {
                storeUrl('/dashboard/state' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.state)
                    .then(response => {
                        console.log(response.data);
                        this.message = response.data.success;
                        setTimeout(() => {
                            this.message = ''
                        }, 3000);
                        this.$validator.reset();
                        this.message && this.$route.params.id ? this.$router.push({
                                name: 'State List',
                                params: {message: response.data.success}
                            }) :
                            this.state = {}, this.stateError = {};

                    }).catch(error => {
                    this.stateError = error.response.data;
                });
                //     }
                // })


            },


            getStateInfo() {
                axios.get('/dashboard/state/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.state = response.data;
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

            reset() {
                this.$validator.reset()
                this.state = {}, this.stateError = {}
            }

        }
    }
</script>
