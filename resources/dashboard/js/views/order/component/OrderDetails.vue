<template>
    <div class="card">
        <div class="card-header">
            <div class="float-left">
                <router-link to="/dashboard/orders/list" class="btn btn-xs btn-link" tag="button" type="button" style="margin-top: 0px;">
                    <i class="fa fa-arrow-left"></i>&nbsp;Orders
                </router-link>
            </div>
            <div class="float-right">
                <div class="form-inline modify-show-order">
                    <span v-bind:class="{'text-danger': errorss }" v-for="error in errorss">
                        {{ error[0] }}&nbsp;
                    </span>&nbsp;
                    <span v-bind:class="{'text-success': msg }" >
                        {{ msg }}&nbsp;
                    </span>&nbsp;
                    <select class="form-control" v-model="status" style="margin-top: 0.5px;">
                        <option value="0">Select status</option>
                        <option v-for="status in options" :value="status.id">{{ status.title }}</option>
                    </select>
                    <b-button variant="primary" :disabled="loading" @click="applyStatus" style="margin-top: 0px;" v-b-tooltip.hover title="Change status">
                        <i :class="{ 'fa fa-spinner fa-spin' : loading }"></i>&nbsp;Change status
                    </b-button>&nbsp;
                    <button class="btn btn-primary" @click="showNotifyModal = true" style="margin-top: 0;" v-b-tooltip.hover title="Notify customer">
                        <i class="fa fa-bell"></i>
                    </button>&nbsp;
                    <button class="btn btn-primary" @click="invoice_modal = true" style="margin-top: 0;" v-b-tooltip.hover title="Show invoice">
                        <i class="fa fa-file-pdf"></i>
                    </button>
                    <button class="btn btn-warning" @click="deleteModalOrder = true" style="margin-top: 0;" v-b-tooltip.hover title="Delete order">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-mobile desktop-hide table-bordered">
                <table class="table table-hover">
                    <tbody>
                    <tr>
                        <td>Order number</td>
                        <td>
                            #{{ orders.order_number }}
                        </td>
                    </tr>
                    <tr>
                        <td>Vendor Order number</td>
                        <td>{{ orders.purchase_invoice_number }}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td v-if="orders.currencies">{{ orders.currencies.title }}</td>
                    </tr>
                    <tr>
                        <td>Grand price</td>
                        <td>{{ helper.fixed(orders.master_price) }}</td>
                    </tr>
                    <tr>
                        <td>Total price</td>
                        <td>{{ helper.fixed(orders.total_price) }}</td>
                    </tr>
                    <tr>
                        <td>Shipping cost</td>
                        <td>{{ helper.fixed(orders.shipping_cost) }}</td>
                    <tr>
                        <td>Local Tax</td>
                        <td>{{ helper.fixed(orders.tax_bd) }}</td>
                    </tr>
                    <tr>
                        <td>USA Tax</td>
                        <td>{{ helper.fixed(orders.tax_usa) }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <table class="table table-sm table-bordered mg-0 mobile-hide" v-if="orders">
                <thead>
                <tr>
                    <th>Order number</th>
                    <th>Vendor Order number</th>
                    <th>Currency</th>
                    <th>Grand price</th>
                    <th>Total price</th>
                    <th>Shipping cost</th>
                    <th>Local Tax</th>
                    <th>USA Tax</th>
                </tr>
                </thead>
                <tr v-if="Object.keys(orders).length">
                    <td>#{{ orders.order_number }}</td>
                    <td>{{ orders.purchase_invoice_number }}</td>
                    <td v-if="orders.currencies">{{ orders.currencies.title }}</td>
                    <td>{{ helper.fixed(orders.master_price) }}</td>
                    <td>{{ helper.fixed(orders.total_price) }}</td>
                    <td>{{ helper.fixed(orders.shipping_cost) }}</td>
                    <td>{{ helper.fixed(orders.tax_bd) }}</td>
                    <td>{{ helper.fixed(orders.tax_usa) }}</td>
                </tr>
            </table>
        </div>
        <b-modal hide-footer v-model="purchasedModal" title="Vendor Order number" size="lg">
            <form method="post" @submit.prevent="submitPurchasedNumber()">
                <div class="row">
                    <div class="col-12 ">
                        <input type="text" class="form-control" @input="applySame" placeholder="Vendor order number" v-model="orders.purchase_invoice_number">
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
                                <tr v-for="item in measureMentItems">
                                    <td>{{ item.title }}</td>
                                    <td>
                                        <input type="text" class="form-control" v-model="item.purchase_invoice_number" />
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
                        <button class="btn btn-success btn-sm" :disabled="loading"><i v-if="loading" class="fa fa-spinner fa-spin"></i>Save</button>
                        <button class="btn btn-danger btn-sm" @click="purchasedModal = !purchasedModal" type="button">Close</button>
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal hide-header hide-footer v-model="showNotifyModal">
            <form method="post" @submit.prevent="sendNotification">
                <div class="card" style="margin: 0px;">
                    <div class="card-body">
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="notification.title" v-b-tooltip.hover title="Subject of email also for user dashboard notification" />
                            <span class="text-danger" v-if="notificationError.title">{{ notificationError.title[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea class="form-control" rows="10" style="resize: none;" v-model="notification.message"></textarea>
                            <span class="text-danger" v-if="notificationError.message">{{ notificationError.message[0] }}</span>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" id="email" v-model="notification.email" checked />
                            <label for="email">Email</label>
                        </div>
                        <div class="form-group" v-if="notification.email">
                            <label>CC Email</label>
                            <input type="text" class="form-control" v-model="notification.cc" />
                        </div>
                        <div class="form-group" v-if="notificationMessage">
                            <span class="text-success">{{ notificationMessage }}</span>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-success">
                                <i :class="{ 'fa fa-send' : !notificationLoader, 'fa fa-spinner fa-spin': notificationLoader }"></i>&nbsp;Send
                            </button>
                            <button class="btn btn-danger" type="button" @click="showNotifyModal = false"><i class="fa fa-times"></i>&nbsp;Close</button>
                        </div>
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal hide-header hide-footer v-model="confirmModal">
            <div class="card">
                <div class="card-body">
                    <b-alert show dismissible variant="danger">
                        {{ confirmMessage }}
                    </b-alert>
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
        <b-modal hide-header hide-footer v-model="deleteModalOrder">
            <h5 class="modal-title">Are you really want to delete this Order?</h5>
            <div class="text-center">
                <button class="btn btn-primary" @click="deleteOrder">Delete</button>
                <button @click="deleteModalOrder = false" class="btn btn-danger">Cancel</button>
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
                            <a class="btn btn-success btn-sm" :href="'/dashboard/orders/order-invoice/'+orderId" target="_blank" >Invoice</a>&nbsp;&nbsp;
                            <a class="btn btn-primary btn-sm" :href="'/dashboard/orders/order-invoice-without-price/'+orderId" target="_blank" >Delivery note</a>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal hide-header hide-footer v-model="cancelModal">
            <div class="card" style="margin-bottom: 0px;">
                <div class="card-header">
                    Cancel reason
                    <div class="float-right">
                        <span class="fa fa-times pointer" @click="cancelModal = false"></span>
                    </div>
                </div>
                <div class="card-body" style="padding: 5px;">
                    <b-list-group>
                        <b-list-group-item v-for="(reason, index) in cancelReasons" :key="++index" style="padding: 0 0 0 5px ;">
                            <input type="radio"
                                   v-model="reasonId" :value="reason.id"
                                   style="margin-top: 10px;"
                                   :id="'reasonId'+reason.id" @change="showOtherReason">&nbsp;
                            <label :for="'reasonId'+reason.id">
                                {{ reason.title }}
                            </label>
                        </b-list-group-item>
                        <span v-if="cancelOrderErrors.reasaon" class="text-danger">{{ cancelOrderErrors.reasaon[0] }}</span>
                        <textarea class="form-control" v-if="showOtherReasonText" v-model="other_reason" rows="3" style="resize: none" placeholder="Other reason"></textarea>
                        <span class="text-danger" v-if="cancelOrderErrors.other_message">{{ cancelOrderErrors.other_message[0] }}</span>
                    </b-list-group>
                    <div class="text-success text-center" v-if="cancelOrderSuccess">{{ cancelOrderSuccess }}</div>
                    <div class="float-right" style="margin-top: 8px;">
                        <button class="btn btn-primary btn-sm" type="button" @click="cancelOrder()">Submit</button>
                        <button class="btn btn-danger btn-sm" type="button" @click="cancelModal = false">Close</button>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal hide-header hide-footer v-model="deliveredModal">
            <delivered-modal :order-id="orderId" :order-status="status"></delivered-modal>
        </b-modal>
    </div>
</template>

<script>
    import helper from '../../../helper/helpers'
    import DeliveredModal from './DeliveredModal'
    export default {
        props: ['orders', 'options'],
        name: "OrderDetails",
        components: {
            DeliveredModal
        },
        data(){
            return {
                helper,
                grant: '',
                confirmModal: false,
                confirmMessage: '',
                notificationMessage: '',
                notificationStatus: false,
                notificationLoader: false,
                notification: {
                    title: '',
                    message: '',
                    email: true,
                    cc: 'info@shopnshipbd.com',
                    order_id: this.$route.params.id
                },
                notificationError: {},
                showNotifyModal: false,
                counter: {},
                status: 0,
                orderId: this.$route.params.id,
                errorss: [],
                msg: '',
                error: false,
                loading: false,
                receivedModal: false,
                measureMentItems: {},
                purchasedModal: false,
                sameAll: false,
                dimension: {
                    h: [],
                    w: [],
                    l: []
                },
                reviewItem: '',
                invoice_modal: false,
                deleteModalOrder: false,
                cancelModal: false,
                cancelReasons: [],
                reasonId: 0,
                other_reason: '',
                showOtherReasonText: false,
                cancelOrderErrors: [],
                cancelOrderSuccess: '',
                deliveredModal: false
            }
        },
        methods: {
            applyStatus(){
                //this.loading = true
                let options = this.options;
                let option = options.find((status) => {
                    return status.id === this.status
                });
                if (typeof option.alias === 'undefined')
                    alert("Please select a status to update");
                if(option.alias === 'us-on-hand'){
                    this.$router.push({ name: 'Measurement', params: { id: this.orderId, status: this.status } });
                    return;
                }
                if (option.alias === 'purchased'){
                    this.purchasedModal = true;
                    this.fetchOrderedItems();
                    return;
                }
                if (option.alias === 'cancel'){
                    this.cancelModal = true;
                    this.fetchCancelReason();
                    return;
                }
                if (option.alias === 'delivered'){
                    this.deliveredModal = true;
                    return;
                }
                this.loading = true;
                axios.post("/dashboard/order-status-update-single", { orderId: [this.orderId], status: this.status, grant: this.grant }).then(response => {
                    if (response.data.status){
                        this.msg = response.data.message;
                        this.$parent.orderList();
                    }else if (response.data.status_confirm) {
                        this.confirmModal = response.data.status_confirm;
                        this.confirmMessage = response.data.status_message;
                        this.grant = response.data.skip
                    }
                    this.errorss = [];
                    this.loading = false;
                    setTimeout(() => {
                        this.msg = ''
                    }, 10000)
                }).catch(error => {
                    this.msg = '';
                    this.errorss = error.response;
                    this.loading = false;
                    setTimeout(() => {
                        this.errorss = []
                    }, 2000)
                });
            },
            fetchOrderedItems(){
                axios.get('/dashboard/order/product-measurement/'+this.orderId+'/purchased').then((response) => {
                    let items = this.measureMentItems = response.data;
                    items.forEach((el) => {
                        el.purchase_invoice_number = el.item_admin_operation_info ? el.item_admin_operation_info.purchase_invoice_number : ''
                    });
                }).catch((error) => {
                    console.log(error.response)
                })
            },

            submitPurchasedNumber(){
                this.loading = true;
                let items = this.measureMentItems;
                axios.post("/dashboard/change-order-invoice-number", { items: items, orderId: [this.orderId], status: this.status, orderInvoice: this.orders.purchase_invoice_number})
                    .then(response => {
                        this.errorss = !response.data.status;
                        this.msg = response.data.message;
                        this.loading = false;
                        setTimeout(() => {
                            this.errorss = false;
                            this.msg = '';
                            this.$parent.orderList();
                            this.purchasedModal = false;
                        }, 10000)
                    }).catch(error => {
                        this.loading = false
                });
            },
            applySame(){
                let items = this.measureMentItems;
                items.forEach((el) => {
                    el.purchase_invoice_number = this.orders.purchase_invoice_number
                });
                // items.forEach((item) => {
                //     item.purchase_invoice_number = this.orders.purchase_invoice_number
                // });
            },
            multipleReviewModal(item, index){
                this.reviewItem = item;
                this.$refs.reviewModal.show();
            },
            sendNotification(){
                this.notificationError = {};
                this.notificationLoader = true;
                axios.post("/dashboard/user/send-notification", this.notification).then((response) => {
                    this.notificationLoader = false;
                    this.notificationStatus = response.data.status;
                    this.notificationMessage = response.data.message;
                    this.notification = {
                        order_id: this.$route.params.id
                    };
                    setTimeout(() => {
                        this.showNotifyModal = false;
                        this.notificationMessage = "";
                    }, 5000);
                }).catch((error) => {
                    this.notificationLoader = false;
                    this.notificationError = error.response.data
                });
            },
            skipOrder(){
                this.confirmModal = false;
                this.confirmModal = false;
                this.grant = '';
            },
            grantPermission(){
                this.applyStatus();
                this.confirmModal = false;
                this.grant = '';
            },
            deleteOrder(){
                let id = this.orderId;
                axios.delete(`/dashboard/order/${id}`).then((response) => {
                    if(response.data.status){
                        alert(response.data.message);
                        this.$router.push({path: '/dashboard/orders/list'})
                    }else{
                        alert(response.data.message);
                        this.deleteModalOrder = false
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            fetchCancelReason(){
                axios.get('/dashboard/reasons').then(response => {
                    this.cancelReasons = response.data;
                });
            },
            showOtherReason(){
                let reason = this.cancelReasons.find((element) => {
                    return element.id === this.reasonId;
                });
                let lastReason = this.cancelReasons[this.cancelReasons.length-1];
                this.showOtherReasonText = lastReason.order === reason.order;
            },
            cancelOrder(){
                axios.post("/dashboard/order/cancel-order", {
                    orderId: this.orderId,
                    status: this.status,
                    reason: this.reasonId,
                    other_message: this.other_reason,
                    showOtherReasonText: this.showOtherReasonText
                }).then(response => {
                    this.cancelOrderSuccess = response.data.message;
                    this.$parent.orderList();
                    this.other_reason = '';
                    this.reasonId = 0;
                    setTimeout(() => {
                        this.cancelModal = false;
                    }, 4000)
                }).catch(error => {
                    this.cancelOrderErrors = error.response.data;
                });
            }
        }
    }
</script>

<style scoped>
    .card >>> .modal-lg{
        min-width: auto;
        margin: auto;
    }

</style>