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
                        <router-link :to="{name: 'Banner Lists'}"><i class="fa fa-arrow-left"></i>&nbsp; Banner
                            list
                        </router-link>
                    </div>
                    <div class="payment-method">
                        <b-form-fieldset>
                            <label>Title <span class="star-req"> *</span> </label>
                                <b-form-input type="text"
                                              name="title" v-validate="'required'"
                                              v-model="banners.title"></b-form-input>
                            <span v-if="errors.has('title')" class="text-danger">{{ errors.first('title')}}</span>
                            <strong v-if="bannerError.title" class="has-text-danger">{{ bannerError.title[0] }}</strong>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Type: <span class="star-req"> *</span></label>
                            <select class="form-control"
                                    data-vv-as="First Name"
                                    name="type"
                                    size="0"
                                    v-model="banners.type"
                                    v-validate="'required'">
                                <option selected value="">Please select Type</option>
                                <option value="homepage">Home Page</option>
                                <option value="dashboard">Dash board</option>
                                <option value="home-mobile">Home Page Mobile</option>
                            </select>
                            <span class="text-danger" v-if="errors.has('type')">{{ errors.first('type')}}</span>
                            <span class="text-danger"
                                  v-if="bannerError.type">{{ bannerError.type[0] }}</span>
                        </b-form-fieldset>
                        <div class="form-group">
                            <label>Country</label>
                            <select class="form-control" v-model="banners.country_id">
                                <option value="">All</option>
                                <option v-for="country in countries" :value="country.id">{{ country.title }}</option>
                            </select>
                        </div>
                        <b-form-fieldset>
                            <div class="row">
                                <div class="col-md-3">status:</div>
                                <div class="col-md-7">
                                    <c-switch :pill="true" off="Off" on="On" type="text" v-model="banners.status"
                                              variant="primary"/>
                                </div>
                            </div>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Image: <span class="star-req"> *</span></label>
                            <div class="row">
                                <div class="col-md-6">
                                    <input @change="onFileChange"
                                           accept="image/*"
                                           alt="user-image"
                                           class="file-upload"
                                           data-vv-as="Image"
                                           name="file"
                                           type="file"
                                           v-validate="{required:isEdit, image:isEdit}">
                                    <template v-if="$route.params.id">
                                        <img :src="banners.image" width="200"/>
                                    </template>
                                    <span class="text-danger" v-if="errors.has('file')">{{ errors.first('file')}}</span>
                                    <span class="text-danger"
                                          v-if="bannerError.image">{{ bannerError.image[0] }}</span>
                                </div>
                            </div>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <div class="row">
                                <div class="col-md-3">
                                    Default:
                                    <info-tool-tip v-if="showTooltip"
                                            title="Careful There might be no default banner set if you disable it!">
                                    </info-tool-tip>
                                </div>
                                <div class="col-md-7">
                                    <c-switch :pill="true" off="Off" on="On" type="text" v-model="banners.default_img" @change="warning"
                                              variant="primary"/>
                                </div>
                            </div>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Activated_at:</label>
                            <div class="row">
                                <div class="col-md-4">
                                    <date-picker v-model="banners.activated_at" :config="{format:'lll'}" ></date-picker>
                                </div>
                            </div>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Expire_at:</label>
                            <div class="row">
                                <div class="col-md-4">
                                    <date-picker v-model="banners.expire_at" :config="{format:'lll'}"></date-picker>
                                </div>
                            </div>
                        </b-form-fieldset>
                    </div>
                    <div slot="footer">
                        <b-button @click="reset" size="sm" type="submit" variant="danger">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button @click="submitBannerForm()"
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
    import cSwitch from '../../components/Switch'
    import DatePicker from "vue-bootstrap-datetimepicker/src/component";
    import moment from 'moment';
    import InfoToolTip from "../../components/InfoToolTip";
    export default {
        components: {
            InfoToolTip,
            DatePicker,
            cSwitch
        },
        data() {
            return {
                banners: {
                    type: '',
                    country_id: ''
                },
                file: {},
                message: '',
                showTooltip: false,
                bannerError: {},
                countries: []
            }
        },
        computed: {
            isEdit() {
                return !this.$route.params.id;
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getBannerInfo();
            }
            this.countries = JSON.parse(window.localStorage.getItem('countries'))
        },
        methods: {
            warning(){
                if (!this.banners.default_img) {
                    this.showTooltip = true;
                }else {
                    this.showTooltip = false;
                }
            },
            onFileChange(e) {
                this.file = e.target.files[0];
            },
            submitBannerForm: function () {
                this.banners.status = this.banners.status === true ? 1 : 0;
                this.banners.default_img = this.banners.default_img === true ? 1 : 0;
                this.banners.activated_at = this.banners.activated_at ? moment(this.banners.activated_at).utc().format() : null;
                this.banners.expire_at = this.banners.expire_at ? moment(this.banners.expire_at).utc().format() : null;
                const formData = new FormData();
                _.forEach(this.banners, (value, key) => {
                    formData.append(key, value);
                });
                formData.append('image', this.file);

                if (this.$route.params.id) {
                    formData.append('_method', 'PATCH');
                }
                let storeUrl = axios.post;
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        storeUrl('/dashboard/banner-list' + (this.$route.params.id ? '/' + this.$route.params.id : ''), formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                }
                            })
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                }, 3000);
                                this.$validator.reset();
                                this.message && this.$route.params.id ? this.$router.push({
                                        name: 'Banner Lists',
                                        params: {message: response.data.success}
                                    }) :
                                    this.banners = {};
                                this.bannerError = {};

                            }).catch(error => {
                            this.bannerError = error.response.data;
                        });
                    }

                })
            },
            getBannerInfo() {
                axios.get('/dashboard/banner-list/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.banners = response.data;
                        this.banners.status = (this.banners.status === 1);
                        this.banners.default_img = (this.banners.default_img === 1);
                        this.banners.activated_at = moment.utc(response.data.activated_at).local().format('lll');
                        this.banners.expire_at = moment.utc(this.banners.expire_at).local().format('lll');
                    }).catch(error => {
                    console.log(error)
                })
            },
            reset() {
                this.$validator.reset();
                this.banners = {};
                this.bannerError = {};
            }

        }
    }
</script>
