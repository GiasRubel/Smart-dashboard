<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-12">
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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Tax Rules List
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;"
                                         tag="button" to="/dashboard/icons/tax-rules/create" type="button">
                                <i class="fa fa-plus"></i> Create New Tax Class
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
                                <b-button @click="deleteTaxClass(taxIds)" size="sm" style="margin-bottom: 10px; margin-right: 100px;"
                                          v-if="taxIds.length"
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
                                <th class="mobile-hide">Priority</th>
                                <th class="mobile-hide">Applicable For Subtotal</th>
                                <th>Groups</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="taxclass,key in taxclases">
                                <td><input :value="taxclass.id" @change="select" type="checkbox" v-model="taxIds"></td>

                                <td>{{taxclass.title}}</td>
                                <td class="mobile-hide">{{taxclass.priority}}</td>
                                <td class="mobile-hide">
                                    <template v-if="taxclass.applicable_for_subtotal">
                                        Yes
                                    </template>
                                    <template v-else>No</template>
                                </td>
                                <td>
                                    <template v-if="taxclass.taxgrouprule.length">
                                        <span class="bg-info" v-for="taxgroup in taxclass.taxgrouprule">{{taxgroup.title}}  </span>
                                    </template>
                                    <template v-else>None</template>
                                </td>
                                <td>

                                    <router-link :to="{name: 'Tax Rules Edit', params: {id: taxclass.id}}"
                                                 class="btn btn-sm btn-success" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteTaxClass(taxclass.id, key)" size="sm" v-if="taxIds.length==''"
                                              variant="warning"><i
                                            class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="taxclassList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div>
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
                allSelected: false,
                taxIds: [],
                perlist: 10,
                taxclases: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'priority', value: 'Priority'},
                ],
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
                        this.taxclassList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.taxclassList(true)
                }
            },
            perlist: function (value) {
                this.taxclassList();
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            taxclassList(st = false) {
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
                axios.get('/dashboard/tax-rules?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.taxclases = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            deleteTaxClass(id, key) {

                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/tax-rules/' + id).then((response) => {
                    console.log(response.data);
                    this.taxclassList();
                    this.taxIds = [];
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
                this.field = 'title';
                this.perlist = 10;
                this.taxclassList();
            },

            selectAll() {
                this.taxIds = [];
                if (this.allSelected) {
                    for (this.taxclass in this.taxclases) {
                        this.taxIds.push(this.taxclases[this.taxclass].id);
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
            this.taxclassList();
            this.showAlert();
        }

    }
</script>

<style>
    .bg-info {
        margin-right: 4px;
    }
</style>
