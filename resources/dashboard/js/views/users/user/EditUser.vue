<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <b-alert dismissible v-if="message" variant="success" show><strong>{{message}}</strong></b-alert>
                <!--<p v-if="$route.params.id">{{$route.params.id}}</p>-->
                <!--<p v-else>{{$route.params.adminid}}</p>-->
            </div>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-sm-12">
                        <b-card>
                            <div slot="header">
                                <router-link :to="{name: 'List'}"><i class="fa fa-arrow-left"></i>&nbsp;Users</router-link>
                            </div>
                            <b-form-fieldset>
                                <label>Name<span class="star-req"> *</span></label>
                                <b-input-group left="<i class='fa fa-user'></i>">
                                    <b-form-input type="text" placeholder="Username"
                                                  name="Name" v-validate="'required'"
                                                  v-model="users.name"></b-form-input>
                                </b-input-group>
                                <span v-if="errors.has('Name')" class="text-danger">{{ errors.first('Name')}}</span>
                                <strong v-if="userError.name" class="text-danger">{{ userError.name[0] }}</strong>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Email<span class="star-req"> *</span></label>
                                <b-input-group right="<i class='fa fa-envelope-o'></i>">
                                    <b-form-input type="email" placeholder="Email"
                                                  name="Email" v-validate="'required'"
                                                  v-model="users.email"></b-form-input>
                                </b-input-group>
                                <span v-if="errors.has('Email')" class="text-danger">{{ errors.first('Email')}}</span>
                                <strong v-if="userError.email" class="text-danger">{{ userError.email[0] }}</strong>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Phone number</label>
                                <b-input-group left="<i class='fa fa-euro'></i>" right=".00">
                                    <b-form-input type="text" placeholder="Phone Number"
                                                  v-model="users.mobile"></b-form-input>
                                </b-input-group>
                            </b-form-fieldset>
                            <b-form-fieldset label="Admin:">
                                <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                          v-model="users.is_admin"/>
                                <br>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Roles<span class="star-req"> *</span></label>
                                <multiselect v-model="users.roles"
                                             tag-placeholder="Add this as new tag"
                                             placeholder="Add Role"
                                             label="title"
                                             track-by="id"
                                             :options="roleTags"
                                             :multiple="true"
                                             :taggable="true"></multiselect>
                                <strong v-if="userError.roles" class="text-danger">{{ userError.roles[0] }}</strong>
                            </b-form-fieldset>

                            <div slot="footer">
                                <b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset</b-button>

                                <b-button type="submit" size="sm" variant="success" @click="updateUserForm()"><i
                                        class="fa fa-dot-circle-o"></i> Update
                                </b-button>
                            </div>
                        </b-card>
                    </div>

                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Multiselect from 'vue-multiselect'
    import cSwitch from '../../../components/Switch'
    import _ from 'lodash';

    export default {
        components: {
            Multiselect,
            cSwitch
        },
        data() {
            return {
                roleTags: [],
                users: {},
                userError: {},
                message:'',
                id: '',
            }
        },
        created: function () {
            this.getUserData();
            this.getRoleInfo();
        },
        methods: {
            updateUserForm() {
                let clonedUser = _.clone(this.users);

                if (_.isArray(this.users['roles']) && this.users['roles'].length) {
                    clonedUser['roles'] = _.map(this.users['roles'], 'id');
                }
              // console.log(clonedUser);
                var vm = this;
                // let id = vm.$route.params.id;

                this.$validator.validateAll().then((valid) => {
                   if (valid){
                       if (this.$route.params.id){
                           this.id =  this.$route.params.id
                           axios.patch('/dashboard/user/' + this.id, clonedUser)
                               .then((response) => {
                                   console.log(response.data);
                                   vm.$router.push({name: 'List', params: {message: response.data.success}})
                               })
                               .catch((error) => {
                                   console.log(error);
                                   vm.userError = error.response.data;
                               });
                       } else {
                           this.id =  this.$route.params.adminid
                           axios.patch('/dashboard/user/' + this.id, clonedUser)
                               .then((response) => {
                                   console.log(response.data);
                                   vm.$router.push({name: 'Admin User', params: {message: response.data.success}})
                               })
                               .catch((error) => {
                                   console.log(error);
                                   vm.userError = error.response.data;
                               });
                       }

                   }
                })

            },
            getUserData() {
                if (this.$route.params.id){
                    this.id =  this.$route.params.id
                } else {
                    this.id =  this.$route.params.adminid
                }
                axios.get('/dashboard/user/' + this.id + '/edit')
                    .then(response => {
                        this.users = response.data;
                        // this.users.is_admin = response.data.is_admin === 1 ? true : false;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            getRoleInfo() {
                axios.get('/dashboard/user/create')
                    .then((response) => {
                        this.roleTags = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

            reset() {
                this.roleTags = {}
                this.users = {}
                this.userError = {}
            },
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
    .multiselect--active {
        z-index: 3;
    }
</style>
