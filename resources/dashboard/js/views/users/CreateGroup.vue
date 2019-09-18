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

                        <template>
                            <router-link :to="{name: 'Group List'}"><i class="fa fa-arrow-left"></i>&nbsp;Groups</router-link>
                        </template>
                    </div>
                    <div class="">

                        <b-form-fieldset>
                            <label>Group name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text" placeholder="Group name"
                                              name="Name" v-validate="'required'"
                                              v-model="group.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Name')" class="text-danger">{{ errors.first('Name')}}</span>
                            <strong v-if="groupError.title" class="has-text-danger">{{ groupError.title[0] }}</strong>
                        </b-form-fieldset>
                    </div>

                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset()">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitGroupForm()">
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
                group: {},
                message: '',
                groupError: {},
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getGroupInfo();
            }
        },
        methods: {
            submitGroupForm() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        storeUrl('/dashboard/group' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.group)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000)
                                this.$validator.reset()
                                this.message && this.$route.params.id ? this.$router.push({name: 'Group List', params: {message: response.data.success}}) :
                                    this.group = {},this.groupError = {};

                            }).catch(error => {
                            this.groupError = error.response.data;
                        });
                    }
                })


            },



            getGroupInfo() {
                axios.get('/dashboard/group/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.group = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.group = {}
                this.groupError = {}
            }

        }
    }
</script>
