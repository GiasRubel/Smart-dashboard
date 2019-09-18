<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-10">
                <b-alert dismissible show v-if="msg" variant="danger"><strong>{{msg}}</strong></b-alert>

                <b-alert :show="dismissCountDown"
                         dismissible
                         fade
                         v-if="this.$route.params.message"
                         variant="success">
                    {{this.$route.params.message}}
                </b-alert>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> User List
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;" tag="button" to="/dashboard/users/create"
                                         type="button">
                                <i class="fa fa-plus"></i> Create New User
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row serch-input">
                            <div class="col-md-12">
                                <search :field.sync="field"
                                        :perlist.sync="perlist"
                                        :query.sync="query"
                                        :searchBy="searchBy"
                                        @refresh="refresh()">
                                </search>
                            </div>
                        </div>
                        <br>
                        <div class="row pull-right">
                            <div class="col-md-12">
                                <b-button @click="deleteUser(Ids)" size="sm" style="margin-bottom: 10px; margin-right: 100px;"
                                          v-if="Ids.length"
                                          variant="warning">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                            <tr>
                                <th><input @change="selectAll" type="checkbox" v-model="allSelected"></th>

                                <th>Username</th>
                                <th class="mobile-hide">Email</th>
                                <th class="mobile-hide">Phone</th>
                                <th class="mobile-hide">Date registered</th>
                                <th>Role</th>
                                <th class="mobile-hide">Admin</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user,key in users">
                                <td><input :value="user.id" @change="select" type="checkbox" v-model="Ids"></td>

                                <td>{{user.name}}</td>
                                <td class="mobile-hide">{{user.email}}</td>
                                <td class="mobile-hide">{{user.mobile}}</td>
                                <td class="mobile-hide">{{user.created_at}}</td>
                                <td>
                                    <template v-if="user.roles.length">
                                        <span class="bg-info" v-for="role in user.roles">{{role.title}}  </span>
                                    </template>
                                    <template v-else>Member</template>
                                </td>
                                <td class="mobile-hide">
                                    <template v-if="user.is_admin == 1"><span>Yes</span></template>
                                    <template v-else><span>No</span></template>
                                </td>

                                <td>
                                    <router-link :to="{name: 'Individual User', params: {id: user.id}}"
                                                 class="btn btn-primary btn-sm" tag="button" type="button">
                                        <i class="fa fa-eye"></i>
                                    </router-link>

                                    <router-link :to="{name: 'Edit User', params: {id: user.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteUser(user.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i
                                            class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="userList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        components: {
            pagination, search
        },
        data() {
            return {
                users: {},
                msg: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                field: 'name',
                query: '',
                searchBy: [
                    {id: 'name', value: 'Name'},
                    {id: 'email', value: 'Email'},
                    {id: 'mobile', value: 'Phone'},
                ],
                pagination: {
                    'current_page': 1
                },
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },
        watch: {
            query: function (value) {
                if (value.length >= 3) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.userList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.userList(true)
                }
            },
            perlist: function (value) {
                this.userList();
            }
        },

        methods: {

            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            userList(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                this.$router.push({
                    query:
                        {
                            page: this.pagination.current_page,
                            field: this.field,
                            per_page: this.perlist,
                            q: this.query
                        }
                });
                axios.get('/dashboard/user?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.users = response.data.data;
                        _.forEach(this.users, value => {
                            value.created_at = moment.utc(value.created_at).local().format('lll')
                        })
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            refresh() {
                this.query = '';
                this.perlist = 10;
                this.field = 'name';
                this.userList();
            },


            deleteUser(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/user/' + id)
                    .then((response) => {
                        this.userList();
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
        created() {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.userList();
            this.showAlert();
        }
    }
</script>

<style scoped>
    .bg-info {
        margin: 0 2px;
        padding: 3px 5px;
    }
</style>
