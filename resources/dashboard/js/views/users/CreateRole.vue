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
                                <router-link :to="{name: 'Role List'}"><i class="fa fa-arrow-left"></i>&nbsp;Roles</router-link>
                            </template>
                        </div>
                        <b-form-fieldset>
                            <label>Role Title<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title" v-validate="'required'"
                                              v-model="title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="roleError.title" class="text-danger">{{ roleError.title[0] }}</span>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Role Alias<span class="star-req"> *</span>
                                <info-tool-tip title="Must be small letter and word connected with dash( - )"></info-tool-tip>
                            </label>
                            <b-input-group right="<i class='fa fa-envelope-o'></i>">
                                <b-form-input type="text"
                                              name="Alias" v-validate="'required'"
                                              v-model="alias"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Alias')" class="text-danger">{{ errors.first('Alias')}}</span>
                            <span v-if="roleError.alias" class="text-danger">{{ roleError.alias[0] }}</span>
                        </b-form-fieldset>
                        <div slot="footer">
                            <b-button type="reset" size="sm" variant="danger" @click="reset()"><i class="fa fa-ban"></i> Reset</b-button>

                            <b-button type="submit" size="sm" variant="success" @click="storeRoles"><i class="fa fa-dot-circle-o"></i> Submit
                            </b-button>
                        </div>
                    </b-card>
                </div>
        </div>
    </div>
</template>

<script>
    import InfoToolTip from "../../components/InfoToolTip";
    export default {
        name: 'CreateRole',
        components: {InfoToolTip},
        data(){
            return {
                title: '',
                alias: '',
                message: '',
                roleError: '',
            }
        },
        methods: {
            storeRoles(){
                // alert(this.title)
                var vm = this;
                this.$validator.validateAll().then((valid) => {
                    if (valid){
                        axios.post('/dashboard/role', {
                            title: this.title,
                            alias: this.alias
                        }).then(function (response) {
                                console.log(response.data.success);
                                vm.message = response.data.success;
                            setTimeout(() => {
                                vm.message = ''
                            },3000)
                            vm.$validator.reset()
                            vm.title = vm.alias = " ";
                            vm.roleError = '';

                            }).catch(function (error) {
                                // console.log(error);
                                vm.roleError = error.response.data
                            });
                    }
                })

            },

            reset(){
                this.title = this.alias = ''
            }
        }
    }
</script>
