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
                       <router-link :to="{name: 'Notification Type List'}"><i class="fa fa-arrow-left"></i>&nbsp;Notifications type</router-link>
                    </div>
                    <div class="">

                        <b-form-fieldset>
                            <label>Notification Type Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title"
                                              v-validate="'required'"
                                              v-model="nType.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <strong v-if="notificationError.title" class="has-text-danger">{{ notificationError.title[0] }}</strong>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Type<span class="star-req"> *</span></label>
                            <select size="0"
                                    class="form-control"
                                    name="Type"
                                    v-validate="'required'"
                                    v-model="nType.type">
                                <option value="" selected>Please select Type</option>
                                <option value="user_registration">user_registration</option>
                                <option value="reset_password">reset_password</option>
                                <option value="order_complete">order_complete</option>
                            </select>
                            <span v-if="errors.has('Type')" class="text-danger">{{ errors.first('Type')}}</span>
                            <strong v-if="notificationError.type" class="has-text-danger">{{ notificationError.type[0] }}</strong>
                        </b-form-fieldset>

                    </div>

                    <div slot="footer">

                        <b-button type="submit" size="sm" variant="danger" @click="reset()">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitEmailTemplate()">
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
                nType: {
                    type: '',
                },
                message: '',
                notificationError: {},
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getTemplateInfo();
            }
        },
        methods: {
            submitEmailTemplate() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if(valid){
                        storeUrl('/dashboard/notification-type' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.nType)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000)
                                this.message && this.$route.params.id ? this.$router.push({name: 'Notification Type List', params: {message: response.data.success}}) :
                                    this.nType = {
                                        type: '',
                                    },this.notificationError = {}
                                this.$validator.reset()

                            }).catch(error => {
                            this.notificationError = error.response.data;
                        });
                    }
                })


            },



            getTemplateInfo() {
                axios.get('/dashboard/notification-type/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.nType = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.nType = {
                    type: '',
                }
            }

        }
    }
</script>
