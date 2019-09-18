<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-10">
                <b-alert dismissible show v-if="msg" variant="danger"><strong>{{msg}}</strong></b-alert>
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
                                <h4>Pending Review List</h4>
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
                            <tr v-for="(pending,key) in pendingReviews">
                                <td>{{pending.order_number}}</td>
                                <td class="mobile-hide">
                                    <template v-if="pending.user">{{pending.user.name}}</template>
                                    <template v-else>{{pending.user_id}}</template>
                                </td>
                                <td>{{pending.order_date}}</td>
                                <td>
                                    <template v-if="pending.last_status">{{pending.last_status.title}}</template>
                                    <template v-else>{{pending.last_status_id}}</template>
                                </td>
                                <td>
                                    <router-link :to="{name: 'pending Order', params: {id: pending.id}}"
                                                 class="btn btn-primary btn-sm" tag="button" type="button">
                                        <i class="fa fa-eye"></i>
                                    </router-link>

                                    <b-button @click="deletePendingOrderModal(pending.id)" variant="warning"><i
                                            class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <pagination :pagination="pagination" @paginate="fetchPendingReview"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
            <b-modal hide-footer hide-header v-model="deleteModal">
                <h5 class="modal-title">Are you really want to delete this Order?</h5>
                <div class="text-center">
                    <button @click="deletePendingOrder" class="btn btn-primary">Delete</button>
                    <button @click="deleteModal = false" class="btn btn-danger">Cancel</button>
                </div>
            </b-modal>
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
                pendingReviews: {},
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
                delete_id: '',
                deleteModal: false,
                interval: '',
            }
        },

        watch: {
            query: function (value) {
                clearTimeout(this.interval);
                this.interval = setTimeout(() => {
                    this.fetchPendingReview(true)
                }, duration.timeToWait)
            },
            perlist: function (value) {
                this.fetchPendingReview();
            },
            country: {
                handler: function () {
                    this.pagination.current_page = 1;
                    this.fetchPendingReview();
                }
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            fetchPendingReview(st = false) {
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
                axios.get('/dashboard/order/pending-for-review?page=' + this.pagination.current_page + '&fields=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.pendingReviews = response.data.data;
                        _.forEach(this.pendingReviews, (value, key) => {
                            this.pendingReviews[key].order_date =
                                moment.utc(this.pendingReviews[key].order_date).local().format('lll');
                        });
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },
            deletePendingOrderModal(id) {
                this.delete_id = id;
                this.deleteModal = true;
            },
            deletePendingOrder() {
                let id = this.delete_id;
                axios.delete('/dashboard/order/' + id).then((response) => {
                    if (response.data.status) {
                        this.fetchPendingReview();
                        alert(response.data.message);
                        this.deleteModal = false;
                    } else {
                        alert(response.data.message);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },

            refresh() {
                this.query = '';
                this.perlist = 10;
                this.field = 'order_number';
                this.fetchPendingReview();
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.pending in this.pendingReviews) {
                        this.Ids.push(this.pendingReviews[this.pending].id);
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
            this.fetchPendingReview();
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

    .row >>> .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        display: none;
        overflow: hidden;
        outline: 0;
        margin-top: 60px;
    }
</style>
