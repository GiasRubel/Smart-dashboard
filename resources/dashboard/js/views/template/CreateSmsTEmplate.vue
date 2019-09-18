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
                        <router-link :to="{name: 'Sms Template List'}"><i class="fa fa-arrow-left"></i>&nbsp;SMS template</router-link>
                    </div>
                    <div class="">

                        <b-form-fieldset>
                            <label>Sms Template Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title"
                                              v-validate="'required'"
                                              v-model="smsTemp.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="smsError.title" class="text-danger">{{ smsError.title[0] }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Message<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Message"
                                              v-validate="'required'"
                                              v-model="smsTemp.message"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Message')" class="text-danger">{{ errors.first('Message')}}</span>
                            <span v-if="smsError.message" class="text-danger">{{ smsError.message[0] }}</span>
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
                smsTemp: {},
                message: '',
                smsError: {},
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
                    if (valid){
                        storeUrl('/dashboard/sms-template' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.smsTemp)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000)
                                this.message && this.$route.params.id ? this.$router.push({name: 'Sms Template List', params: {message: response.data.success}}) :
                                    this.smsTemp = {},this.smsError = {}
                                this.$validator.reset()

                            }).catch(error => {
                            this.smsError = error.response.data;
                        });
                    }
                })

            },



            getTemplateInfo() {
                axios.get('/dashboard/sms-template/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.smsTemp = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.smsTemp = {}
            }

        }
    }
</script>
