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
                        <router-link :to="{name: 'Email Template List'}"><i class="fa fa-arrow-left"></i>&nbsp;Email template</router-link>
                    </div>
                    <div class="">

                        <b-form-fieldset>
                            <label>Email Template Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title"
                                              v-validate="'required'"
                                              v-model="emailTemp.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="emailError.title" class="text-danger">{{ emailError.title[0] }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Source<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Source"
                                              v-validate="'required'"
                                              v-model="emailTemp.source"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Source')" class="text-danger">{{ errors.first('Source')}}</span>
                            <strong v-if="emailError.source" class="has-text-danger">{{ emailError.source[0] }}</strong>
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
                emailTemp: {},
                message: '',
                emailError: {},
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

                        storeUrl('/dashboard/email-template' + (this.$route.params.id ? '/'+ this.$route.params.id : ''), this.emailTemp)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                }, 3000);
                                this.message && this.$route.params.id ? this.$router.push({name: 'Email Template List', params: {message: response.data.success}}) :
                                    this.emailTemp = {},this.emailError = {};
                                    this.$validator.reset()



                            }).catch(error => {
                            this.emailError = error.response.data;
                        });
                    }
                })


            },



            getTemplateInfo() {
                axios.get('/dashboard/email-template/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.emailTemp = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.emailTemp = {}
            }

        }
    }
</script>
