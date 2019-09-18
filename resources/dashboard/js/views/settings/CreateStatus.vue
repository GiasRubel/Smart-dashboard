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
                        <router-link :to="{name: 'Status List'}"><i class="fa fa-arrow-left"></i> Status list
                        </router-link>
                    </div>
                    <b-form-fieldset>
                        <label>Status Title<span class="star-req"> *</span></label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input name="Title"
                                          type="text"
                                          v-model="statuses.title"
                                          v-validate="'required'"></b-form-input>
                        </b-input-group>
                        <span class="text-danger" v-if="errors.has('Title')">{{ errors.first('Title')}}</span>
                        <span class="text-danger" v-if="statusError.title">{{ statusError.title[0] }}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Alias<span class="star-req">*</span>
                            <info-tool-tip
                                    title="Must be small letter and word connected with dash( - )"></info-tool-tip>
                        </label>
                        <input class="form-control" disabled type="text" v-if="$route.params.id"
                               v-model="statuses.alias">
                        <b-form-input name="Alias" type="text"
                                      v-else v-model="statuses.alias"
                                      v-validate="'required'"></b-form-input>
                        <span class="text-danger" v-if="errors.has('Alias')">{{ errors.first('Alias')}}</span>
                        <span class="text-danger" v-if="statusError.alias">{{ statusError.alias[0] }}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <div class="row">
                            <div class="col-md-4">Has Notify User ?</div>
                            <div class="col-md-8">
                                <c-switch @change="toggleSelect" :pill="true" off="Off" on="On" type="text" v-model="statuses.has_notify_user"
                                          variant="primary"/>
                            </div>
                        </div>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Notify By {{statuses.notify_by}}<span class="star-req"> *</span></label>
                        <select @change="toggleSwitch" class="form-control"
                                name="NotifyBy" size="0" v-model="statuses.notify_by"
                                v-validate="'required'">
                            <option selected value="">Please select From List</option>
                            <option :value="notify"
                                    v-for="(notify,key) in notifyBy">{{ notify }}
                            </option>

                        </select>
                        <span class="text-danger" v-if="errors.has('NotifyBy')">{{ errors.first('NotifyBy')}}</span>
                        <span class="text-danger" v-if="statusError.notify_by">{{ statusError.notify_by[0] }}</span>
                    </b-form-fieldset>
                    <b-form-fieldset>
                        <label>Index
                            <info-tool-tip title="Maintain the serial number in the Dashboard stack"></info-tool-tip>
                        </label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input type="text" v-model="statuses.index"></b-form-input>
                        </b-input-group>
                        <span class="text-danger" v-if="errors.index">{{ errors.index[0] }}</span>
                    </b-form-fieldset>
                    <div slot="footer">
                        <b-button @click="reset" size="sm" type="submit" variant="danger">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                        <b-button @click="submitStatusForm()"
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
    import InfoToolTip from "../../components/InfoToolTip";

    export default {
        components: {
            InfoToolTip: InfoToolTip,
            cSwitch
        },
        data() {
            return {
                statuses: {
                    notify_by: '',
                },
                notifyBy: ['all', 'email', 'sms', 'system', 'none'],
                message: '',
                statusError: {},
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getStatusInfo();
            }
        },
        methods: {
            submitStatusForm() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        storeUrl('/dashboard/status' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.statuses)
                            .then(response => {
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                }, 3000);
                                this.$validator.reset();
                                this.message && this.$route.params.id ? this.$router.push({
                                        name: 'Status List',
                                        params: {message: response.data.success}
                                    }) :
                                    this.statuses = {
                                        notify_by: '',
                                    };
                                this.statusError = {};
                            }).catch(error => {
                            this.statusError = error.response.data;
                        });
                    }
                })
            },
            getStatusInfo() {
                axios.get('/dashboard/status/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.statuses = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },
            toggleSwitch() {
                this.statuses.has_notify_user = !(this.statuses.notify_by === '' || this.statuses.notify_by === 'none');
            },
            toggleSelect() {
                if (this.statuses.notify_by === '')
                {
                    this.$validator.validate('NotifyBy', this.statuses.notify_by);
                }
            },
            reset: function () {
                this.$validator.reset();
                this.statuses = {
                    notify_by: '',
                };
                statusError = {};
            }
        }
    }
</script>

<style>

</style>