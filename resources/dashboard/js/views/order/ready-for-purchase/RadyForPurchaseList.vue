<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-10">
                <b-alert dismissible show v-if="msg" variant="warning"><strong>{{msg}}</strong></b-alert>

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
                        <div class="row">
                            <div class="col-lg-5">
                                <router-link :to="{name: 'Order List'}"><i class="fa fa-arrow-left"></i>&nbsp; Order
                                    list
                                </router-link>
                            </div>
                            <div class="col-lg-7">
                                <h4>Ready For Purchase List</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <br>
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
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Orer Number</th>
                                <th class="mobile-hide">Customer Name</th>
                                <th>Order Date</th>
                                <th>status</th>
                                <th>Action</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(ready,key) in readyPurchases">
                                <td>{{ready.order_number}}</td>
                                <td>
                                    <template class="mobile-hide" v-if="ready.user">{{ready.user.name}}</template>
                                    <template v-else>{{ready.user_id}}</template>
                                </td>
                                <td>{{ready.order_date}}</td>
                                <td>
                                    <template v-if="ready.last_status">{{ready.last_status.title}}</template>
                                    <template v-else>{{ready.last_status_id}}</template>
                                </td>
                                <td>
                                    <router-link :to="{name: 'Redy purchase show', params: {id: ready.id}}"
                                                 class="btn btn-primary btn-sm" tag="button" type="button">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <pagination :pagination="pagination" @paginate="fetchRedyPurchaseList"
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
    import pagination from '../../../components/Pagination'
    import search from '../../../components/Search'
    import duration from '../../../config/duration'
    import helper from '../../../helper/helpers'

    export default {
        components: {
            pagination, search
        },
        data() {
            return {
                country: helper.getCookie('country'),
                readyPurchases: {},
                msg: '',
                searchBy: [
                    {id: 'order_number', value: 'Number'},
                    {id: 'order_date', value: 'Date'},

                ],
                field: 'order_number',
                query: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                pagination: {
                    'current_page': 1
                },
                dismissSecs: 3,
                dismissCountDown: 0,
                interval: '',
            }
        },

        watch: {
            query: function (value) {
                clearTimeout(this.interval);
                this.interval = setTimeout(() => {
                    this.fetchRedyPurchaseList(true)
                }, duration.timeToWait)
            },
            perlist: function (value) {
                this.fetchRedyPurchaseList();
            },
            country: {
                handler: function () {
                    this.pagination.current_page = 1;
                    this.fetchRedyPurchaseList();
                }
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            fetchRedyPurchaseList(st = false) {
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
                axios.get('/dashboard/order/ready-for-purchase?page=' + this.pagination.current_page + '&fields=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.readyPurchases = response.data.data;
                        _.forEach(this.readyPurchases, (value, key) => {
                            this.readyPurchases[key].order_date =
                                moment.utc(this.readyPurchases[key].order_date).local().format('lll');
                        });
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            refresh() {
                this.query = '';
                this.perlist = 10;
                this.field = 'order_number';
                this.fetchRedyPurchaseList();
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.ready in this.readyPurchases) {
                        this.Ids.push(this.readyPurchases[this.ready].id);
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
            this.fetchRedyPurchaseList();
            this.showAlert();
            setInterval(() => {
                this.country = helper.getCookie('country');
            }, 500);
        }
    }
</script>

<style scoped>
    .bg-info {
        margin: 0 2px;
        padding: 3px 5px;
    }
</style>
