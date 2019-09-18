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
                                <h4>Cash Payment List</h4>
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
                            <tr v-for="(cash,key) in cashPayments">
                                <td>{{cash.order_number}}</td>
                                <td>
                                    <template class="mobile-hide" v-if="cash.user">{{cash.user.name}}</template>
                                    <template v-else>{{cash.user_id}}</template>
                                </td>
                                <td>{{cash.order_date}}</td>
                                <td>
                                    <template v-if="cash.last_status">

                                        <span :style="helper.color(cash.last_status.alias)" v-if="cash.last_status">
                                            {{ cash.last_status ? cash.last_status.title : '' }}
                                            <span v-if="cash.last_status && cash.last_status.alias === 'cash-pending'">
                                                <span class="fa fa-check"
                                                      title="Receipt provided" v-b-tooltip.hover
                                                      v-if="helper.objectCount(cash.money_receipt) > 0"></span>
                                                <span class="fa fa-times" title="No receipt provided" v-b-tooltip.hover
                                                      v-else></span>
                                            </span>
                                        </span>

                                    </template>
                                    <template v-else>{{cash.last_status_id}}</template>
                                </td>
                                <td>
                                    <router-link :to="{name: 'Cash Payment show', params: {id: cash.id}}"
                                                 class="btn btn-primary btn-sm" tag="button" type="button">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="fetchCashPaymentList"
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
    import helper from '../../../helper/helpers'
    import pagination from '../../../components/Pagination'
    import search from '../../../components/Search'
    import duration from '../../../config/duration'
    export default {
        components: {
            pagination, search
        },
        data() {
            return {
                country: helper.getCookie('country'),
                cashPayments: {},
                msg: '',

                field: 'order_number',
                query: '',
                searchBy: [
                    {id: 'order_number', value: 'Number'},
                    {id: 'order_date', value: 'Date'},

                ],
                allSelected: false,
                Ids: [],
                perlist: 10,

                pagination: {
                    'current_page': 1
                },
                interval: '',
                dismissSecs: 3,
                dismissCountDown: 0,
                helper
            }
        },

        watch: {
            query: function (value) {
                clearTimeout(this.interval);
                this.interval = setTimeout(() => {
                    this.fetchCashPaymentList(true)
                }, duration.timeToWait)
            },
            perlist: function (value) {
                this.fetchCashPaymentList();
            },
            country: {
                handler: function () {
                    this.pagination.current_page = 1;
                    this.fetchCashPaymentList();
                }
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            fetchCashPaymentList(st = false) {
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
                axios.get('/dashboard/order/cash-payment?page=' + this.pagination.current_page + '&fields=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.cashPayments = response.data.data;
                        _.forEach(this.cashPayments, (value, key) => {
                            this.cashPayments[key].order_date =
                                moment.utc(this.cashPayments[key].order_date).local().format('lll');
                        });
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            refresh() {
                this.query = '';
                this.field = 'order_number';
                this.perlist = 10;
                this.fetchCashPaymentList();
            },

            selectAll() {
                this.Ids = [];
                if (this.allSelected) {
                    for (this.cash in this.cashPayments) {
                        this.Ids.push(this.cashPayments[this.cash].id);
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
            this.fetchCashPaymentList();
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
