<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-12">
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
                                    <router-link :to="{name: 'List'}"><i class="fa fa-arrow-left"></i>&nbsp;Users</router-link>
                                </template>
                            </div>

                            <b-form-fieldset>
                                <label>Name<span class="star-req"> *</span></label>
                                <b-input-group left="<i class='fa fa-user'></i>">
                                    <b-form-input type="text" placeholder="Username"
                                                  name="Name" v-validate="'required'"
                                                  v-model="name"></b-form-input>
                                </b-input-group>
                                <span v-if="errors.has('Name')" class="text-danger">{{ errors.first('Name')}}</span>
                                <strong v-if="userError.name" class="has-text-danger">{{ userError.name[0] }}</strong>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Email<span class="star-req"> *</span></label>
                                <b-input-group right="<i class='fa fa-envelope-o'></i>">
                                    <b-form-input type="email" placeholder="Email"
                                                  name="Email" v-validate="'required'"
                                                  v-model="email"></b-form-input>
                                </b-input-group>
                                <span v-if="errors.has('Email')" class="text-danger">{{ errors.first('Email')}}</span>
                                <strong v-if="userError.email" class="has-text-danger">{{ userError.email[0] }}</strong>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Phone number</label>
                                <b-input-group left="<i class='fa fa-euro'></i>" right=".00">
                                    <b-form-input type="text" placeholder="Phone Number"
                                                  v-model="phone"></b-form-input>
                                </b-input-group>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Password<span class="star-req"> *</span></label>
                                <b-input-group left="<i class='fa fa-euro'></i>" right=".00">
                                    <b-form-input type="text" placeholder="password"
                                                  name="password" v-validate="'required|min:6'"
                                                  v-model="pass"></b-form-input>
                                </b-input-group>
                                <span v-if="errors.has('password')" class="text-danger">{{ errors.first('password')}}</span>
                                <strong v-if="userError.password" class="has-text-danger">{{ userError.password[0] }}</strong>
                            </b-form-fieldset>
                            <b-form-fieldset>
                                <label>Roles<span class="star-req"> *</span></label>
                                <multiselect
                                        v-if="options" v-model="value"
                                        tag-placeholder="Add this as new tag"
                                        placeholder="Add role"
                                        label="title"
                                        track-by="id"
                                        :options="options"
                                        :multiple="true"
                                        :taggable="true">
                                </multiselect>
                            </b-form-fieldset>

                            <b-form-fieldset>
                                <div class="row">
                                    <div class="col-md-2">Is Admin ?</div>
                                    <div class="col-md-10">
                                        <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                                  v-model="status"/>
                                    </div>
                                </div>
                            </b-form-fieldset>
                            <div slot="footer">
                                <b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset
                                </b-button>
                                <b-button type="submit" size="sm" variant="success" @click="storeUser"><i
                                        class="fa fa-dot-circle-o"></i> Submit
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
    import Vue from 'vue';
    import Multiselect from 'vue-multiselect'
    import cSwitch from '../../../components/Switch'


    export default {
        name: 'CreateUser',

        components: {Multiselect, cSwitch},
        data() {
            return {

                value: '',
                pass: '',
                options: '',
                name: '',
                email: '',
                phone: '',
                status: '',
                message: '',
                userError: {},

            }
        },


        created: function () {
            axios.get('/dashboard/user/create')
                .then((response) => {
                    this.options = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        methods: {

            storeUser() {
                let vm = this;
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        axios.post('/dashboard/user', {
                            password: vm.pass,
                            role: vm.value,
                            name: vm.name,
                            email: vm.email,
                            phone: vm.phone,
                            status: vm.status === true ? 1 : 0,

                        })
                            .then(function (response) {
                                vm.pass = vm.value = vm.name = vm.email = vm.phone = '' ;
                                vm.userError = {};
                                vm.$validator.reset();
                                console.log(response.data.success);
                                vm.message = response.data.success;
                                setTimeout(() => {
                                    vm.message = ''
                                },3000)
                                this.$validator.reset()
                            })
                            .catch(function (error) {
                                console.log(error);
                                vm.userError = error.response.data
                            });
                    }
                })

            },

            reset(){
                let vm = this;
                vm.pass = vm.value = vm.name = vm.email = vm.phone = '' ;
                vm.userError = {};
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
