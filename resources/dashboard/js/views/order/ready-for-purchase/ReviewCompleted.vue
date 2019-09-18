<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-10">
                <b-alert dismissible v-if="msg" variant="warning" show><strong>{{msg}}</strong></b-alert>

                <b-alert v-if="this.$route.params.message"
                         :show="dismissCountDown"
                         dismissible
                         fade
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
                                <router-link :to="{name: 'Order List'}"><i class="fa fa-arrow-left"></i>&nbsp; Order list</router-link>
                            </div>
                            <div class="col-lg-7">
                                <h4>Review Completed List</h4>
                            </div>
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
                            <tr v-for="complete,key in completeReviews">

                                <td>{{complete.order_number}}</td>
                                <td class="mobile-hide">
                                    <template v-if="complete.user" class="mobile-hide">{{complete.user.name}}</template>
                                    <template v-else>{{complete.user_id}}</template>
                                </td>
                                <td>{{complete.order_date}}</td>
                                <td>
                                    <template v-if="complete.last_status">{{complete.last_status.title}}</template>
                                    <template v-else>{{complete.last_status_id}}</template>
                                </td>
                                <td>
                                    <router-link :to="{name: 'Show Completed Review', params: {id: complete.id}}"
                                                 class="btn btn-primary btn-sm" tag="button" type="button">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <pagination :pagination="pagination" @paginate="fetchCompletedReview"
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
                completeReviews: {},
                msg: '',
                field: 'order_number',
                query: '',
                searchBy: [
                    {id: 'order_number', value: 'Number'},
                    {id: 'order_date', value: 'order_date'},
                ],
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
                    this.fetchCompletedReview(true)
                }, duration.timeToWait)
            },
            perlist: function (value) {
                this.fetchCompletedReview();
            },
            country: {
                handler: function () {
                    this.pagination.current_page = 1;
                    this.fetchCompletedReview();
                }
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            fetchCompletedReview(st = false) {
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
                axios.get('/dashboard/order/review-complete?page=' + this.pagination.current_page + '&fields=' + this.field + '&q=' + this.query +'&per_page='+this.perlist)
                    .then(response => {
                        this.completeReviews = response.data.data;
                        _.forEach(this.completeReviews, (value, key) => {
                            this.completeReviews[key].order_date =
                                moment.utc(this.completeReviews[key].order_date).local().format('lll');
                        });
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            refresh() {
                this.query = '';
                this.field = 'order_number';
                this.perlist = 10;
                this.fetchCompletedReview();
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.complete in this.completeReviews) {
                        this.Ids.push(this.completeReviews[this.complete].id);
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
            this.fetchCompletedReview();
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
