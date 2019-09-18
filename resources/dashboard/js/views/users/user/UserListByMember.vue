<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-10">
                <b-alert v-if="msg" variant="danger" show dismissible><strong>{{msg}}</strong></b-alert>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-5">
                                <router-link :to="{name: 'List'}"><i class="fa fa-arrow-left"></i>&nbsp; User list
                                </router-link>
                            </div>
                            <div class="col-lg-7">
                                <h4>Member List</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-2">
                                <h4>Search By</h4>
                            </div>
                            <div class="col-lg-2">
                                <b-form-select name="" id="" v-model="field">
                                    <option value="name">Name</option>
                                    <option value="email">Email</option>
                                    <option value="mobile">Phone</option>

                                </b-form-select>
                            </div>
                            <div class="col-lg-4">
                                <b-form-input v-model="query"
                                              type="text"
                                              placeholder="search">

                                </b-form-input>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-primary" @click="refresh">
                                    <i class="fa fa-refresh" aria-hidden="true"></i> Reset Filter
                                </button>
                            </div>

                            <div class="col-lg-2">
                                <div class="row">
                                    <div class="col-md-6"><p>per page:</p></div>
                                    <div class="col-md-6 per-page">
                                        <b-form-select v-model="perlist" @input="userList">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                        </b-form-select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br>

                        <div class="row pull-right">
                            <div class="col-md-12">
                                <b-button v-if="Ids.length" variant="warning" size="sm"
                                          @click="deleteUser(Ids)"
                                          style="margin-bottom: 10px; margin-right: 100px;">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>


                        <table class="table">
                            <thead>
                            <tr>
                                <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>

                                <th>Username</th>
                                <th class="mobile-hide">Email</th>
                                <th class="mobile-hide">Phone</th>
                                <th class="mobile-hide">Date registered</th>
                                <th>Role</th>
                                <th class="mobile-hide">Admin</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user,key in users">
                                <td><input type="checkbox" v-model="Ids" @change="select" :value="user.id"></td>

                                <td>{{user.name}}</td>
                                <td class="mobile-hide">{{user.email}}</td>
                                <td class="mobile-hide">{{user.mobile}}</td>
                                <td class="mobile-hide">{{user.created_at}}</td>
                                <td>
                                    <template v-if="user.roles.length">
                                        <span v-for="role in user.roles" class="bg-info">{{role.title}}  </span>
                                    </template>
                                    <template v-else>Member</template>
                                </td>
                                <td class="mobile-hide">
                                    <template v-if="user.is_admin == 1"><span>Yes</span></template>
                                    <template v-else><span>No</span></template>
                                </td>

                                <td>
                                    <b-button v-if="Ids.length==''" variant="warning" size="sm"
                                              @click="deleteUser(user.id, key)"><i
                                            class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <div class="mobile-hide">
                            <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="10"
                                        @paginate="userList()"></pagination>
                        </div>
                        <div class="desktop-hide">
                            <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="3"
                                        @paginate="userList()"></pagination>
                        </div>
                    </div>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

    Vue.component('pagination', require('../../../components/Pagination'));

    export default {

        data() {
            return {
                users: {},
                msg: '',

                allSelected: false,
                Ids: [],
                perlist: 10,

                field: 'name',
                query: '',
                pagination: {
                    'current_page': 1
                },


            }
        },

        watch: {
            query: function (newQ, old) {
                this.userList(true);
            }
        },

        methods: {

            userList(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                axios.get('/dashboard/user/by-member?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.users = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            refresh() {
                this.query = ''
                this.field = 'name'
                this.userList();
            },

            deleteUser(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/user/' + id)
                    .then((response) => {
                        this.userList()
                        this.Ids = [];
                        this.allSelected = false;
                        this.msg = response.data.success;
                        setTimeout(() => {
                            this.msg = ''
                        }, 3000)
                    }).catch((error) => {
                    console.log(error);
                });
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.user in this.users) {
                        this.Ids.push(this.users[this.user].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },


        },


        mounted() {
            this.userList();

        }
    }
</script>

<style scoped>
    .bg-info {
        margin: 0 2px;
        padding: 3px 5px;
    }
</style>
