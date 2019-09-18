<template>
    <div class="animated fadein">
        <div class="card">
            <div class="card-header">
                <div class="float-left">
                    <router-link :to="{name: 'Configuration List'}" class="btn btn-xs btn-link" tag="button"
                                 type="button" style="margin-top: 0px;">
                        <i class="fa fa-arrow-left"></i>&nbsp;Configurations
                    </router-link>
                </div>
                <div class="text-center">
                    <span v-if="message"
                          :class="{ 'text-danger': !status, 'text-success': status }">{{ message }}</span>
                </div>
            </div>
            <div class="card-body">
                <form action="#" method="post" @submit.prevent="saveConfigurations">
                    <div class="form-group">
                        <label>Title<span class="star-req"> *</span></label>
                        <input type="text"
                               name="title" v-validate="'required'"
                               data-vv-as="Title"
                               class="form-control" v-model="configurations.title"/>
                        <span v-if="errors.has('title')" class="text-danger">{{ errors.first('title')}}</span>
                        <span class="text-danger" v-if="configureError.title">{{ configureError.title[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label>Purpose</label>
                        <input type="text" class="form-control" v-model="configurations.purpose"/>
                        <span class="text-danger" v-if="configureError.purpose">{{ configureError.purpose[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label>Alias<span class="star-req"> *</span>
                            <info-tool-tip title="Must be small letter and word connected with dash( - )"></info-tool-tip>
                        </label>
                        <input v-if="$route.params.id" type="text"  v-model="configurations.alias" class="form-control" disabled>
                        <input v-else type="text"
                               name="alias" v-validate="'required'"
                               data-vv-as="Alias"
                               class="form-control" v-model="configurations.alias"/>
                        <span v-if="errors.has('alias')" class="text-danger">{{ errors.first('alias')}}</span>
                        <span class="text-danger" v-if="configureError.alias">{{ configureError.alias[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label>Status
                            <info-tool-tip title="Mostly controls the values"></info-tool-tip>
                        </label>
                        <input type="text" class="form-control" v-model="configurations.status"/>
                        <span class="text-danger" v-if="configureError.status">{{ configureError.status[0] }}</span>
                    </div>
                    <div class="form-group">
                        <span v-if="message" class="text-success">{{ message }}</span>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary"><i v-show="loader" class="fa fa-spinner fa-spin"></i>&nbsp;Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import InfoToolTip from "../../components/InfoToolTip";

    export default {
        name: "CreateConfiguration",
        components: {InfoToolTip},
        data() {
            return {
                configurations: {},
                status: false,
                configureError: {},
                loader: false,
                message: false,
            }
        },
        methods: {
            saveConfigurations() {
                this.loader = true;

                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    this.loader = false;
                    if (valid) {
                        storeUrl('/dashboard/configurations' + (this.$route.params.id ? '/' + this.$route.params.id : ''), this.configurations)

                            .then(response => {
                                this.loader = false;
                                this.configureError = {};
                                this.status = response.data.status;
                                this.message = response.data.message;
                                this.$validator.reset();
                                !this.$route.params.id ? this.configurations = {} : '';
                                setTimeout(() => {
                                    this.message = false
                                }, 3000)
                            }).catch(error => {
                            this.configureError = error.response.data;
                            this.loader = false;
                            setTimeout(() => {
                                this.configureError = {}
                            }, 3000)
                        });
                    }
                })

            },
            fetchConfiguration() {
                if (!this.$route.params.id)
                    return;
                axios.get('/dashboard/configurations/' + this.$route.params.id).then(response => {
                    this.configurations = response.data
                }).catch(error => {
                    alert("Something went wrong. Please try again");
                });
            }
        },
        watch: {
            statuss: {
                handler: 'fetchConfiguration',
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>