<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-10">
                <b-alert dismissible show v-if="msg" variant="danger"><strong>{{msg}}</strong></b-alert>
                <b-alert :show="dismissCountDown"
                         dismissible
                         fade
                         v-if="$route.params.message"
                         variant="success">
                    {{$route.params.message}}
                </b-alert>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Status list  {{$route.params.message}}
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;" tag="button"
                                         to="/dashboard/settings/status/create" type="button">
                                <i class="fa fa-plus"></i> Create new
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
                                <b-button @click="deleteStatus(Ids)" size="sm"
                                          style="margin-bottom: 10px; margin-right: 100px;"
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
                                <th>Title</th>
                                <th>Alias</th>
                                <th class="mobile-hide">Has Notify user</th>
                                <th>Notify By</th>
                                <th class="mobile-hide">Index</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(status,key) in statuses">
                                <td><input :value="status.id" @change="select" type="checkbox" v-model="Ids"></td>

                                <td>{{status.title}}</td>
                                <td>{{status.alias}}</td>
                                <td class="mobile-hide">
                                    <template v-if="status.has_notify_user"> Yes</template>
                                    <template v-else> No</template>
                                </td>
                                <td>{{status.notify_by}}</td>
                                <td class="mobile-hide">{{status.index}}</td>
                                <td>
                                    <router-link :to="{name: 'Edit Status', params: {id: status.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <b-button @click="deleteStatus(status.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i class="fa fa-trash"></i>
                                    </b-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="statusList"
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
                statuses: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'alias', value: 'Alias'},
                    {id: 'index', value: 'Index'},
                    {id: 'notify_by', value: 'Notify By'},
                ],
                allSelected: false,
                Ids: [],
                perlist: 10,
                isCheckAll: false,
                statusId: [],
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
                        this.statusList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.statusList(true)
                }
            },
            perlist: function (value) {
                this.statusList();
            }
        },
        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            statusList(st = false) {
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
                axios.get('/dashboard/status?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.statuses = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    });
            },
            deleteStatus(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/status/' + id).then((response) => {
                    this.statusList();
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

            refresh() {
                this.query = '';
                this.perlist = 10;
                this.field = 'title';
                this.statusList();
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.status in this.statuses) {
                        this.Ids.push(this.statuses[this.status].id);
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
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.statusList();
            this.showAlert();
        }

    }
</script>
