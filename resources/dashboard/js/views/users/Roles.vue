<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-12">
                <b-alert v-if="msg" variant="danger" show dismissible><strong>{{msg}}</strong></b-alert>

                <b-alert v-if="$route.params.message"
                         :show="dismissCountDown"
                         dismissible
                         fade
                         variant="success">
                    {{$route.params.message}}
                </b-alert>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Role List
                        <div class="float-right">
                            <router-link to="/dashboard/users/roles/create" class="btn btn-primary" tag="button"
                                         type="button" style="margin-top: 0px;">
                                <i class="fa fa-plus"></i> Create New Roles
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
                                <b-button v-if="Ids.length" variant="warning" size="sm"
                                          @click="deleteRole(Ids)"
                                          style="margin-bottom: 10px; margin-right: 100px;">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                            <tr>
                                <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>
                                <th>Title</th>
                                <th>Alias</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(role,key) in roles">
                                <td><input type="checkbox" v-model="Ids" @change="select" :value="role.id"></td>
                                <td>{{role.title}}</td>
                                <td>{{ role.alias }}</td>
                                <td>
                                    <router-link :to="{name: 'Edit Role', params: {id: role.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button v-if="Ids.length==''" variant="warning" size="sm" @click="deleteRole(role.id, key)"><i
                                            class="fa fa-trash"></i></b-button>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="roleList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        components: {
            pagination, search
        },
        data() {
            return {
                roles: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                field: 'title',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'alias', value: 'Alias'}
                ],
                allSelected: false,
                Ids: [],
                perlist: 10,
                query: '',
                dismissSecs: 3,
                dismissCountDown: 0,
                interval: '',
            }
        },
        watch: {
            query: function (value) {
                if (value.length >= 3) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.roleList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.roleList(true)
                }
            },
            perlist: function (value) {
                this.roleList();
            }
        },
        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            roleList(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                this.$router.push({
                    query:
                        {
                            page: this.pagination.current_page,
                            field: this.field,
                            q: this.query,
                            per_page: this.perlist,
                        }
                });
                axios.get('/dashboard/role?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.roles = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    });
            },

            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.roleList();
            },

            deleteRole(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/role/' + id).then((response) => {
                    this.roleList();
                    this.Ids = [];
                    this.allSelected = false;
                    this.msg = response.data.success;
                    setTimeout(() => {
                        this.msg = ''
                    }, 3000)
                }).catch(function (error) {
                    console.log(error);
                });
            },
            selectAll() {
                this.Ids = [];
                if (this.allSelected) {
                    for (this.role in this.roles) {
                        this.Ids.push(this.roles[this.role].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
        },

        created: function () {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.query = this.$route.query.q;
                this.perlist = this.$route.query.per_page;
            }
            this.roleList();
            this.showAlert();
        }

    }
</script>
