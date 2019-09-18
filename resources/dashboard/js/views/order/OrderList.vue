<template>
    <div class="animated fadeIn order-list-menu">

        <div class="row">
            <div slot="header">
                <b-alert show v-if="this.$route.params.message" variant="success"><strong>{{ this.$route.params.message
                    }}</strong></b-alert>
            </div>

        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="collapse" id="filterDiv">
                    <div class="card">
                        <div class="card-header">
                            Filter orders
                            <div class="float-right">
                                <button class="btn-primary btn" data-target="#filterDiv" data-toggle="collapse"
                                        style="margin-top: 0px;"><i class="fa fa-minus"></i>&nbsp;Hide
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="orderList(true)" method="post">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4 col-xs-12">
                                        <div class="form-group">
                                            <label>From&nbsp;</label>
                                            <date-picker :config="{format: 'll'}"
                                                         v-model="fromDate"></date-picker>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-12">
                                        <div class="form-group">
                                            <label>&nbsp;To&nbsp;</label>
                                            <date-picker :config="{format: 'll'}"
                                                         v-model="toDates"></date-picker>
                                        </div>
                                    </div>
                                    <div class="col-4 modify-header">
                                        <div class="form-group modify-select">
                                            <label>&nbsp;&nbsp;</label>
                                            <select class="form-control" v-model="fStatus">
                                                <option value="0">All</option>
                                                <option :value="status.alias" v-for="status in options">{{ status.title }}
                                                </option>
                                            </select>
                                        </div>&nbsp;&nbsp;
                                    </div>
                                    <div class="col-12">
                                        <div class="float-right">
                                            <button class="btn btn-primary"><i
                                                    :class="{ 'fa fa-filter' : !fLoading, 'fa fa-spinner fa-spin' : fLoading }"></i>&nbsp;Filter
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header modify-header">
                        <div class="row">
                            <div class="col-md-1">
                                <div class="float-left btn" style="margin-top: 0px;"><i class='fa fa-align-justify'></i>&nbsp;Order's
                                </div>
                            </div>
                            <div class="col-md-3 text-center input-one">
                                <input class="form-control" placeholder="Enter text to search" type="text"
                                       v-model="searchText"/>
                            </div>
                            <div class="col-md-8 input-two">
                                <div class="float-sm-right float-md-right">
                                    <div class="form-inline">
                                        <select class="form-control filter-max-width" v-model="status">
                                            <option value="0">Select status</option>
                                            <option :value="status.id" v-for="status in options">{{ status.title }}
                                            </option>
                                        </select>
                                        <b-button :disabled="loading" @click="applyStatus" style="margin-top: 0px;"
                                                  variant="primary">
                                            <i :class="{ 'fa fa-spinner fa-spin' : loading }"></i>&nbsp;Change status
                                        </b-button>&nbsp;
                                        <button aria-controls="filterDiv" aria-expanded="false" class="btn btn-primary"
                                                data-target="#filterDiv" data-toggle="collapse" style="margin-top: 0px;"
                                                type="button">
                                            <i class="fa fa-filter"></i>&nbsp;Filter
                                        </button>

                                        <button class="btn btn-danger" style="margin-top: 0;" @click="showBatchDeleteModal" v-if="orderId.length">
                                            <i class="fa fa-trash"></i> Delete
                                        </button>&nbsp;
                                        <button class="btn btn-warning d-lg-none" @click="showReportOfOrder()">
                                            <span class="fa fa-file-pdf"></span>&nbsp;PDF
                                        </button>
                                    </div>
                                    <span v-bind:class="{'text-danger': errorsss }" v-for="error in errorsss">
                                        {{ error[0] }}
                                    </span>
                                    <span v-bind:class="{'text-success': msg }">
                                        {{ msg }}
                                    </span>
                                    <span class="text-danger" v-if="errorMenssage">{{ errorMenssage }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="custom-table desktop-hide">
                            <div class="table-header">
                                <div class="table-column">
                                    <input :checked="isCheckAll" @click="checkAll" type="checkbox"/>
                                </div>
                                <div class="table-column pointer">Name</div>
                                <div class="table-column pointer" @click="changeSortOrder('order_number')">
                                    <i :class="{'fa fa-sort-asc' : sort.order_number === 'asc',
                                         'fa fa-sort-desc' : sort.order_number === 'desc'}">
                                        &nbsp;Order number
                                    </i>
                                </div>
                                <div class="table-column pointer" @click="changeSortOrder('order_date')">
                                    <i :class="{'fa fa-sort-asc' : sort.order_date === 'asc',
                                        'fa fa-sort-desc' : sort.order_date === 'desc'}">
                                        &nbsp;Order date
                                    </i>
                                </div>
                                <div class="table-column">Status</div>
                            </div>
                            <div class="table-body" v-for="(order,key) in orders">
                                <div class="table-row">
                                    <div class="table-column">
                                        <input :value="order.id" @change="unselect" type="checkbox" v-model="orderId"
                                               style="z-index: -1"/>
                                    </div>

                                    <router-link class="pointer table-column" :to="{name: 'Show Order', params: {id: order.id}}"
                                                 v-if="order.user">
                                        {{order.user.name}}
                                    </router-link>

                                    <router-link class="pointer table-column"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        {{ order.order_number.substr(4,8 ) }}
                                    </router-link>

                                    <router-link class="pointer table-column"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        <!--{{ new Date(Date.parse(order.order_date)).toDateString() }}-->
                                        {{  order ? moment(order.order_date, 'MM.DD.YY h:m:a').format('MM.DD.YY') : ''}}
                                    </router-link>

                                    <router-link class="pointer table-column"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        <span v-if="order.last_status" :style="helper.color(order.last_status.alias)">
                                            {{ order.last_status ? order.last_status.title : '' }}
                                            <span v-if="order.last_status && order.last_status.alias == 'cash-pending'">
                                                <span v-if="helper.objectCount(order.money_receipt) > 0" class="fa fa-check text-success" v-b-tooltip.hover title="Receipt provided"></span>
                                                <span v-else v-b-tooltip.hover title="No receipt provided" class="fa fa-times text-danger" ></span>
                                            </span>
                                        </span>
                                    </router-link>

                                    <div class="action-button">
                                        <b-button @click="deleteOrderModal(order.id, key)" variant="warning"><i
                                                class="fa fa-trash"></i></b-button>

                                        <!--<router-link :to="{name: 'Show Order', params: {id: order.id}}"-->
                                                     <!--class="btn btn-primary" tag="button" type="button">-->
                                            <!--<i class="fa fa-eye"></i>-->
                                        <!--</router-link>-->
                                        <button @click="showInvoice(order.id)" class="btn btn-success" target="_blank">
                                            <i aria-hidden="true" class="fa fa-file-pdf-o"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <table class="table table-hover mobile-hide">
                            <thead>
                                <tr>
                                    <th><input :checked="isCheckAll" @click="checkAll" type="checkbox"/></th>
                                    <th class="pointer" @click="changeSortOrder('order_number')">
                                        <i :class="{'fa fa-sort-asc' : sort.order_number === 'asc',
                                         'fa fa-sort-desc' : sort.order_number === 'desc'}">
                                            &nbsp;Order number
                                        </i>
                                    </th>
                                    <th class="pointer" @click="changeSortOrder('name')">
                                        <i :class="{'fa fa-sort-asc' : sort.name === 'asc',
                                        'fa fa-sort-desc' : sort.name === 'desc'}">
                                            &nbsp;Customer name
                                        </i>
                                    </th>
                                    <th class="pointer" @click="changeSortOrder('master_price')">
                                        <i :class="{'fa fa-sort-asc' : sort.master_price === 'asc',
                                        'fa fa-sort-desc' : sort.master_price === 'desc'}">
                                            &nbsp;Grand total
                                        </i>
                                    </th>
                                    <th class="pointer" @click="changeSortOrder('shipping_cost')">
                                        <i :class="{'fa fa-sort-asc' : sort.shipping_cost === 'asc',
                                        'fa fa-sort-desc' : sort.shipping_cost === 'desc'}">
                                            &nbsp;Shipping cost
                                        </i>
                                    </th>
                                    <th class="pointer" @click="changeSortOrder('order_date')">
                                        <i :class="{'fa fa-sort-asc' : sort.order_date === 'asc',
                                        'fa fa-sort-desc' : sort.order_date === 'desc'}">
                                            &nbsp;Order date
                                        </i>
                                    </th>
                                    <th class="pointer" @click="changeSortOrder('status')">
                                        <i :class="{'fa fa-sort-asc' : sort.status ==='asc',
                                        'fa fa-sort-desc' : sort.status === 'desc' }">
                                            &nbsp;Status
                                        </i>
                                    </th>
                                    <th>
                                        <button class="btn btn-warning btn-sm" style="padding: 5px;" @click="showReportOfOrder()">
                                            <span class="fa fa-file-pdf"></span>&nbsp;PDF
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(order,key) in orders">
                                    <td>
                                        <input :value="order.id" @change="unselect" type="checkbox" v-model="orderId"
                                               style="z-index: -1"/>
                                    </td>
                                    <router-link class="pointer" tag="td"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        {{ order.order_number }}({{ order.items.length }} products)
                                    </router-link>
                                    <router-link class="pointer" tag="td" :to="{name: 'Show Order', params: {id: order.id}}"
                                                 >
                                        {{ order.user ? order.user.name : '' }}
                                    </router-link>
                                    <router-link class="pointer" tag="td"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        {{ order ? order.master_price.toFixed(2) : ''}}
                                    </router-link>
                                    <router-link class="pointer" tag="td"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        {{ order ? order.shipping_cost.toFixed(2) : ''}}
                                    </router-link>
                                    <router-link class="pointer" tag="td"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        <!--{{ new Date(Date.parse(order.order_date)).toDateString() }}-->
                                        {{  order ? order.order_date : ''}}
                                    </router-link>
                                    <router-link class="pointer" tag="td"
                                                 :to="{name: 'Show Order', params: {id: order.id}}">
                                        <span v-if="order.last_status" :style="helper.color(order.last_status.alias)">
                                            {{ order.last_status ? order.last_status.title : '' }}
                                            <span v-if="order.last_status && order.last_status.alias == 'cash-pending'">
                                                <span v-if="helper.objectCount(order.money_receipt) > 0" class="fa fa-check text-success" v-b-tooltip.hover title="Receipt provided"></span>
                                                <span v-else v-b-tooltip.hover title="No receipt provided" class="fa fa-times text-danger" ></span>
                                            </span>
                                        </span>
                                    </router-link>
                                    <td>
                                        <div class="btn-group order-button">
                                            <b-button @click="deleteOrderModal(order.id, key)" variant="warning"><i
                                                    class="fa fa-trash"></i></b-button>

                                            <router-link :to="{name: 'Show Order', params: {id: order.id}}"
                                                         class="btn btn-primary" tag="button" type="button">
                                                <i class="fa fa-eye"></i>
                                            </router-link>
                                            <button @click="showInvoice(order.id)" class="btn btn-success" target="_blank">
                                                <i aria-hidden="true" class="fa fa-file-pdf-o"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mobile-hide">
                            <pagination :offset="10" :pagination="pagination" @paginate="orderList()"
                                        v-if="pagination.last_page > 1"></pagination>
                        </div>
                        <div class="desktop-hide">
                            <pagination :offset="3" :pagination="pagination" @paginate="orderList()"
                                        v-if="pagination.last_page > 1"></pagination>
                        </div>
                    </div>
                </div>
            </div><!--/.col-->
            <b-modal hide-footer hide-header v-model="purchasedModal" size="md">
                <form @submit.prevent="submitPurchasedNumber()" method="post">
                    <div class="row">
                        <div class="col-12 form-inline">
                            <input class="form-control" style="width: 75%" type="text"
                                   v-model="order.purchase_invoice_number" @input="applySame">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12">
                            <table class="table table-bordered table-hover table-sm">
                                <thead>
                                <tr>
                                    <td width="50%">Item name</td>
                                    <td width="30%">Purchase invoice number</td>
                                    <td width="20%">Show in popular</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in measurementItems">
                                    <td>{{ item.title ? item.title : item.url }}</td>
                                    <td>
                                        <input class="form-control" type="text"
                                               v-model="item.purchase_invoice_number"/>
                                    </td>
                                    <td>
                                        <input type="checkbox" v-model="item.is_in_popular" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-12">
                            <span :class="{ 'text-success' : !error, 'text-danger' : error }">{{ msg }}</span>
                        </div>
                        <div class="col-12">
                            <button :disabled="pLoading" class="btn btn-success btn-sm"><i class="fa fa-spinner fa-spin"
                                                                                          v-if="pLoading"></i>Save
                            </button>
                            <button @click="purchasedModal = !purchasedModal" class="btn btn-danger btn-sm"
                                    type="button">Close
                            </button>
                        </div>
                    </div>
                </form>
            </b-modal>
            <b-modal hide-header hide-footer v-model="confirmModal" size="lg">
                <div class="card">
                    <div class="card-body">
                        <b-alert show dismissible variant="danger">
                            {{ confirmMessage }}
                        </b-alert>
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-bordered table-sm">
                                    <thead>
                                        <tr>
                                            <th>Order number</th>
                                            <th>Grand total</th>
                                            <th>Order date</th>
                                            <th>Payment status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{ confirmOrder.order_number }}</td>
                                            <td>{{ confirmOrder.master_price }}</td>
                                            <td>{{ helper.dateString(confirmOrder.order_date) }}</td>
                                            <td>Not found</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <button class="btn btn-success" v-b-tooltip.hover title="Grant permission" @click="grantPermission">
                                    <i class="fa fa-check"></i> Yes
                                </button>
                            </div>
                            <div class="col-6">
                                <div class="float-right">
                                    <button class="btn btn-danger" v-b-tooltip.hover title="Skip this status" @click="skipOrder">
                                        <i class="fa fa-times"></i> Skip
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-modal>
            <b-modal hide-header hide-footer v-model="deleteModal">
                <h5 class="modal-title">Are you really want to delete this Order?</h5>
                <div class="text-center">
                    <button class="btn btn-primary" @click="deleteOrder">Delete</button>
                    <button @click="deleteModal = false" class="btn btn-danger">Cancel</button>
                </div>
            </b-modal>
            <b-modal hide-header hide-footer v-model="invoice_modal">
                <div>
                    <div class="card" style="margin: 0">
                        <div class="card-header">
                            PDF invoice of order
                            <div class="float-right"><i class="fa fa-times" style="cursor: pointer;" @click="invoice_modal = false"></i></div>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <a class="btn btn-success btn-sm" :href="'/dashboard/orders/order-invoice/'+invoice_id" target="_blank" >Invoice</a>&nbsp;&nbsp;
                                <a class="btn btn-primary btn-sm" :href="'/dashboard/orders/order-invoice-without-price/'+invoice_id" target="_blank" >Delivery note</a>
                            </div>
                        </div>
                    </div>
                </div>
            </b-modal>
            <b-modal v-model="batchDeleteModal" hide-header hide-footer>
                <batch-delete-component :order-id="orderId"></batch-delete-component>
            </b-modal>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import DatePicker from "vue-bootstrap-datetimepicker/src/component";
    import helper from '../../helper/helpers'
    import moment from 'moment';
    import pagination from '../../components/Pagination'
    import BatchDeleteComponent from './component/BatchDeleteComponent'

    export default {
        name: 'OrderList',
        components: {DatePicker, pagination, BatchDeleteComponent},
        data() {
            return {
                sort:{
                    order_number: '',
                    name: '',
                    master_price: '',
                    shipping_cost: '',
                    order_date: '',
                    status: ''
                },
                confirmModal: false,
                confirmMessage: '',
                confirmOrder: {},
                country: helper.getCookie('country'),
                grant: '',
                confirmIds: [],
                orders: {},
                order: {},
                pagination: {
                    'current_page': 1
                },
                selectedOrder: 0,
                msg: '',
                isCheckAll: false,
                orderId: [],
                options: [],
                status: 0,
                errorsss: [],
                errorMenssage: false,
                loading: false,
                fromDate: moment(helper.subDate(new Date(), helper.getCurrentMonthDays())).format('ll'),
                toDates: moment(helper.addDate(new Date(), 1)).format('ll'),
                fLoading: false,
                fStatus: this.$route.query.status || 0,
                searchText: '',
                purchasedModal: false,
                measurementItems: {},
                error: {},
                pLoading: false,
                id_order: '',
                deleteModal: false,
                delete_id: '',
                invoice_modal: false,
                invoice_id: '',
                batchDeleteModal:false,
                orderIds:[],
                helper,
                moment
            }
        },
        methods: {
            orderList(st = false, orderBy = ['id' , 'desc'], searchText = '') {
                this.fLoading = true;
                let fStatus = this.fStatus !== 0 ? this.fStatus : '';
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                this.$router.push({
                    query:
                        {
                            page: this.pagination.current_page,
                        }
                });
                let page = this.pagination.current_page || 1;
                let url = '/dashboard/order?page=' + page + "&statuses=" + fStatus+"&queryOrder="+orderBy;
                if (searchText !== ''){
                    url = url+"&search="+searchText;
                }
                if (st){
                    let formDate = new Date(this.fromDate).toISOString().slice(0,10);
                    let toDate = new Date(this.toDates).toISOString().slice(0,10);
                    url = '/dashboard/order?page=' + page +
                        "&between=" + [toDate, formDate] + "&statuses=" + fStatus+"&queryOrder="+orderBy;
                }
                axios.get(url)
                    .then(response => {
                        this.fLoading = false;
                        this.orders = response.data.data;
                        _.forEach( this.orders, value => {
                            value.order_date = moment.utc(value.order_date).local().format('MM.DD.YY h:m:a');
                            this.orderIds.push(value.id);
                        });
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                });
            },
            deleteOrderModal(id){
                this.deleteModal =true;
                this.delete_id = id;
            },
            deleteOrder() {
                let id = this.delete_id;
                axios.delete(`/dashboard/order/${id}`).then((response) => {
                    if(response.data.status){
                        this.orderList();
                        alert(response.data.message);
                    }else{
                        alert(response.data.message);
                    }
                    this.deleteModal = false;
                }).catch(function (error) {
                    this.deleteModal = false;
                    console.log(error);
                });


            },
            checkAll() {
                this.orderId = [];
                this.isCheckAll = !this.isCheckAll;
                if (this.isCheckAll) {
                    this.orders.forEach(el => {
                        this.orderId.push(el.id)
                    });
                } else {
                    this.orders.forEach(el => {
                        this.orderId = [];
                    });
                }
            },

            unselect() {
                this.isCheckAll = false;
            },
            fetchStatuses() {
                axios.get("/dashboard/status/1").then(response => {
                    this.options = response.data;
                });
            },
            applyStatus() {
                if (this.status === 0 || Object.keys(this.orderId).length === 0) {
                    this.errorMenssage = "Please select an order to change status";
                    return;
                }
                this.errorMenssage = false;
                let status = this.options.find((el) => {
                    return el.id === this.status
                });
                if (status.alias === 'purchased') {
                    this.purchasedModal = true;
                    this.selectedOrder = 0;
                    this.selectOrder();
                    return;
                }
                this.loading = true;
                axios.post("/dashboard/order-status-update", {
                    orderId: this.orderId,
                    status: this.status,
                    grant: this.grant
                }).then(response => {
                    if (response.data.status){
                        this.msg = response.data.message;
                        this.orderList();
                    }else if (response.data.status_confirm) {
                        this.confirmModal = response.data.status_confirm;
                        this.confirmMessage = response.data.status_message;
                        this.confirmOrder = response.data.order;
                        this.grant = response.data.skip
                        this.confirmIds = response.data.orderIds
                    }
                    this.errorsss = [];
                    this.loading = false;
                    this.isCheckAll = false;
                    this.orderId = [];
                    setTimeout(() => {
                        this.msg = ''
                    }, 10000)
                }).catch(error => {
                    this.msg = '';
                    this.errorsss = error.response.data;
                    this.loading = false;
                    setTimeout(() => {
                        this.errorsss = []
                    }, 5000)
                });
            },
            showInvoice(id) {
                this.invoice_id = id;
                this.invoice_modal = true;
            },
            searchOrder() {
                if (typeof this.searchText !== 'undefined') {
                    axios.get("/dashboard/order/search?order=" + this.searchText).then(response => {
                        this.orders = response.data.data;
                        _.forEach( this.orders, value => {
                            value.order_date = moment.utc(value.order_date).local().format('MM.DD.YY h:m:a');
                        });
                        this.pagination = response.data;
                        this.orderId = [];
                        this.pagination.data = undefined;
                    }).catch(err => {
                        this.orderList();
                    })
                }
            },
            applySame() {
                let items = this.measurementItems;
                items.forEach((el) => {
                    el.purchase_invoice_number = this.order.purchase_invoice_number
                });
            },
            submitPurchasedNumber() {
                this.selectedOrder += 1;
                this.pLoading = true;
                let items = this.measurementItems;
                axios.post("/dashboard/change-order-invoice-number", {
                    items: items,
                    orderId: [this.id_order],
                    status: this.status,
                    orderInvoice: this.orders.purchase_invoice_number
                })
                    .then(response => {
                        this.error = !response.data.status
                        this.msg = response.data.message
                        this.pLoading = false;
                        setTimeout(() => {
                            this.error = false;
                            this.msg = '';
                            this.orderList();
                            this.selectOrder();
                        }, 3000)
                    }).catch(error => {
                    console.log(error);
                    this.loading = false
                });
            },
            selectOrder() {
                if (typeof this.orderId[this.selectedOrder] === 'undefined') {
                    this.purchasedModal = false;
                    this.orderId = [];
                    this.isCheckAll = false;
                    return;
                }
                this.order = this.orders.find((el) => {
                    return el.id === this.orderId[this.selectedOrder]
                });
                this.id_order = this.order.id
                this.measurementItems = this.order.items;
                this.measurementItems.forEach(function (el) {
                    el.purchase_invoice_number = el.item_admin_operation_info ? el.item_admin_operation_info.purchase_invoice_number : ''
                });
            },
            grantPermission(){
                this.orderId = this.confirmIds;
                if (typeof this.orderId === 'object') {
                    this.orderId = Object.values(this.orderId);
                }
                this.applyStatus();
                this.confirmModal = false;
            },
            skipOrder(){
                this.grant = '';
                let ids = this.confirmIds;
                if (typeof ids === 'object') {
                    ids = Object.values(ids);
                }
                ids.shift();
                this.orderId = ids;
                this.applyStatus();
                this.confirmModal = false;
            },
            showBatchDeleteModal(){
                this.errorMenssage = "";
                if (this.orderId.length){
                    this.batchDeleteModal = true;
                }else{
                    this.errorMenssage = "Please select order to delete";
                }
            },
            changeSortOrder(field) {
                if (field === 'order_number'){
                    this.sort = {
                        name: '',
                        master_price: '',
                        shipping_cost: '',
                        order_date: '',
                        status: '',
                        order_number: (this.sort.order_number === '' ? 'asc' : this.sort.order_number === 'asc' ? 'desc' : 'asc' )
                    };
                    this.orderList(false, ['order_number', this.sort.order_number])
                }else if (field === 'name') {
                    // this.sort = {
                    //     name: (this.sort.name === '' ? 'asc' : this.sort.name === 'asc' ? 'desc' : 'asc' ),
                    //     master_price: '',
                    //     shipping_cost: '',
                    //     order_date: '',
                    //     status: '',
                    //     order_number: ''
                    // };
                }else if (field === 'master_price'){
                    // this.sort = {
                    //     name: '',
                    //     master_price: (this.sort.master_price === '' ? 'asc' : this.sort.master_price === 'asc' ? 'desc' : 'asc' ),
                    //     shipping_cost: '',
                    //     order_date: '',
                    //     status: '',
                    //     order_number: ''
                    // };
                }else if (field === 'shipping_cost'){
                    this.sort = {
                        name: '',
                        master_price: '',
                        shipping_cost: (this.sort.shipping_cost === '' ? 'asc' : this.sort.shipping_cost === 'asc' ? 'desc' : 'asc' ),
                        order_date: '',
                        status: '',
                        order_number: ''
                    };
                    this.orderList(false, ['shipping_cost', this.sort.shipping_cost])
                }else if(field === 'order_date'){
                    this.sort = {
                        name: '',
                        master_price: '',
                        shipping_cost: '',
                        order_date: (this.sort.order_date === '' ? 'asc' : this.sort.order_date === 'asc' ? 'desc' : 'asc' ),
                        status: '',
                        order_number: ''
                    };
                    this.orderList(false, ['order_date', this.sort.order_date])
                }else if (field === 'status'){
                    // this.sort = {
                    //     name: '',
                    //     master_price: '',
                    //     shipping_cost: '',
                    //     order_date: '',
                    //     status: (this.sort.status === '' ? 'asc' : this.sort.status === 'asc' ? 'desc' : 'asc' ),
                    //     order_number: ''
                    // };
                }
            },
            showReportOfOrder(){
                if (this.searchText === ''){
                    let orderIds = this.orderId.length > 0 ? this.orderId : this.orderIds;
                    return window.open('/dashboard/order/orders-report?ids='+orderIds, '_blank')
                } else{
                    return window.open('/dashboard/order/orders-report?text='+this.searchText, '_blank')
                }
            }

        },

        created: function () {
            if (_.size(this.$route.query)) {
                this.pagination.current_page = this.$route.query.page;
            }
            this.orderList();
            this.fetchStatuses();
            setInterval(() => {
                this.country = helper.getCookie('country');
            }, 500);
        },
        watch: {
            searchText: function(newValue){
                this.pagination.current_page = 1;
                this.orderList(false, ['id' , 'desc'], newValue);
            },
            country: {
                handler: function () {
                    this.pagination.current_page = 1;
                    this.orderList(false, ['id' , 'desc'], this.searchText);
                }
            }
        }

    }
</script>

<style scoped>
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
    .pointer{
        cursor: pointer;
    }
</style>

