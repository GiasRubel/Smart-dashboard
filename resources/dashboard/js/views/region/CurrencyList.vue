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
        <br>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Currency List
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;"
                                         tag="button" to="/dashboard/region/currency/create" type="button">
                                <i class="fa fa-plus"></i> Add new
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
                                <b-button @click="deleteCurrency(Ids)" size="sm" style="margin-bottom: 10px; margin-right: 100px;"
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
                                <th>Code</th>
                                <th>Sign</th>
                                <th>Usd Convertion Ammount</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(currency,key) in currencies">
                                <td><input :value="currency.id" @change="select" type="checkbox" v-model="Ids"></td>

                                <td>{{currency.title}}</td>
                                <td>
                                    <template v-if="currency.code == null"> No</template>
                                    <template v-else>{{currency.code}}</template>
                                </td>
                                <td>
                                    <template v-if="currency.code == null"> No</template>
                                    <template v-else>{{currency.sign}}</template>
                                </td>
                                <td>{{currency.usd_conversion_amount}}</td>

                                <td>
                                    <router-link :to="{name: 'Edit Currency', params: {id: currency.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteCurrency(currency.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i class="fa fa-trash"></i>
                                    </b-button>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="currencyList"
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
                currencies: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'code', value: 'Code'},
                ],
                allSelected: false,
                Ids: [],
                perlist: 10,
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },

        watch: {
            query: function (value) {
                if (value.length >= 3) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.currencyList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.currencyList(true)
                }
            },
            perlist: function (value) {
                this.currencyList();
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            currencyList(st = false) {
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
                axios.get('/dashboard/currency?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.currencies = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.currencyList();
            },
            deleteCurrency(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/currency/' + id).then((response) => {
                    this.currencyList();
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
                    for (this.currency in this.currencies) {
                        this.Ids.push(this.currencies[this.currency].id);
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
            this.currencyList();
            this.showAlert();
        }

    }
</script>
