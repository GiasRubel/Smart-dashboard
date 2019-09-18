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
                        <router-link :to="{name: 'Role List'}"><i class="fa fa-arrow-left"></i>&nbsp;Roles</router-link>
                    </div>
                    <b-form-fieldset>
                        <label>Title<span class="star-req"> *</span></label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input type="text" placeholder="Title"
                                          name="Title" v-validate="'required'"
                                          v-model="role.title"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                        <small v-if="roleError.title" class="has-text-danger">{{ roleError.title[0] }}</small>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Alias<span class="star-req"> *</span></label>
                        <b-input-group right="<i class='fa fa-envelope-o'></i>">
                            <b-form-input type="text" placeholder="Aliases"
                                          name="Alias" v-validate="'required'"
                                          v-model="role.alias"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('Alias')" class="text-danger">{{ errors.first('Alias')}}</span>
                        <small v-if="roleError.alias" class="has-text-danger">{{ roleError.alias[0] }}</small>
                    </b-form-fieldset>
                    <div slot="footer">
                        <b-button type="reset" size="sm" variant="danger" @click="reset()"><i class="fa fa-ban"></i> Reset</b-button>

                        <b-button type="submit" size="sm" variant="success" @click="updateRoles"><i class="fa fa-dot-circle-o"></i> Update
                        </b-button>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditRole',
        data(){
            return {
                role: {},
                message: '',
                roleError: '',
            }
        },

        created: function(){
            // this.id = this.$route.params.id;
            axios.get('/dashboard/role/'+this.$route.params.id+'/edit')
                .then((response) => {
                    this.role = response.data;
                });
        },

        methods: {

            updateRoles(){
                // alert(this.title)
                var vm = this;
                let id = vm.$route.params.id;
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        axios.patch('/dashboard/role/' + id , this.role)
                            .then(function (response) {

                                console.log(response.data.success);
                                // vm.message = response.data.success;
                                vm.$router.push({name: 'Role List', params: {message: response.data.success}})

                            })
                            .catch(function (error) {
                                vm.roleError = error.response.data.roleError
                            });
                    }

                })

            },

            reset(){
                this.role = {}
            }
        }
    }
</script>
