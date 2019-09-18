<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-8">
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
        <br>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Review Cart Item List
                        <div class="float-right search-button">
                            <div class="form-inline">
                                <select class="form-control" v-model="filterTable">
                                    <option value="0">By Price</option>
                                    <option value="1">By Weight</option>
                                </select>
                                <b-button :disabled="loading" @click="filterReviewTable(true)" style="margin-top: 0px;"
                                          variant="primary">
                                    <i :class="{ 'fa fa-spinner fa-spin' : loading }"></i>&nbsp;Filter
                                </b-button>&nbsp;
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
                        <div class="row pull-right">
                            <div class="col-md-12">
                                <b-button @click="deteteCartItem(Ids)" size="sm"
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
                                <th class="mobile-hide">User</th>
                                <th class="mobile-hide">Volumetric Weight</th>
                                <th>Price</th>
                                <th class="mobile-hide">Added Time</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,key) in cartItems">
                                <td><input :value="item.id" @change="select" type="checkbox" v-model="Ids"></td>
                                <td>
                                    <template v-if="item.title">
                                        <a :href="item.url" target="_blank">{{ item.title | snippet }}</a>
                                    </template>
                                    <template v-else><a :href="item.url" target="_blank">{{ item.url | snippet }}</a>
                                    </template>
                                </td>
                                <td class="mobile-hide" v-if="item.user_id">
                                    <template v-if="item.user">{{item.user.name}}</template>
                                    <template v-else>No User</template>
                                </td>
                                <td class="mobile-hide" v-else><span>Guest user</span></td>
                                <td class="mobile-hide">
                                    <template v-if="item.volumetric_weight">{{item.volumetric_weight | toFix}}
                                    </template>
                                    <template v-else>0.0</template>
                                </td>
                                <td v-if="item.item_price">{{item.item_price.item_price | toFix}}</td>
                                <td v-else>No Price Gven</td>
                                <td class="mobile-hide">{{item.created_at}}</td>
                                <td>
                                    <router-link :to="{name: 'Show Cart Review Item', params: {cid: item.id}}"
                                                 class="btn btn-primary btn-sm" tag="button" type="button">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                    <router-link :to="{name: 'Edit Cart Review Item', params: {cid: item.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <b-button @click="deteteCartItem(item.id)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="filterReviewTable"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div>
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
                cartItems: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                filterTable: 0,
                loading: false,
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'weight', value: 'Weight'},
                    {id: 'sku', value: 'Sku'},
                    {id: 'url', value: 'Url'},
                    {id: 'user.name', value: 'User'}
                ],
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },


        watch: {
            query: function (value) {
                if (value.length >= 3) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.filterReviewTable(true);
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.filterReviewTable(true);
                }
            },
            perlist: function (value) {
                this.filterReviewTable();
            }
        },

        methods: {

            fetchByWeight() {
                console.log(this.filterTable)
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            filterReviewTable(st = false) {
                this.loading = false;
                let url = '';
                url = (this.filterTable === 0) ? '/dashboard/cart-review-item-by-price?page=' : '/dashboard/cart-review-item?page=';
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                axios.get(url + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.loading = (this.filterTable !== 0);
                        this.cartItems = response.data.data;
                        _.forEach(this.cartItems, value => {
                            value.created_at = moment.utc(value.created_at).local().format('lll');
                        });
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                        this.loading = false;
                    });
            },
            deteteCartItem(id) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/carts/' + id).then((response) => {
                    this.filterReviewTable();
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
                    for (this.cart in this.cartItems) {
                        this.Ids.push(this.cartItems[this.cart].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.filterReviewTable();
            },
        },

        created: function () {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.filterReviewTable();
            this.showAlert();

        }

    }
</script>
