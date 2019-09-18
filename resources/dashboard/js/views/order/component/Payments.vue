<template>
    <div class="card add-payment-options">
        <div class="card-header">
            <span>Payment</span>
            <div class="float-right">
                <button v-if="orders.paymentmethod && !orders.paymentmethod.is_online" title="Add payment" v-b-tooltip.hover class="btn btn-primary btn-sm" @click="paymentStoreModal = !paymentStoreModal">
                    <i class="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
        <div class="card-body"  v-if="orders">
            <div class="font-default-15" v-if="orders.paymentmethod"><b>Pay by</b>:
                {{  orders.paymentmethod.title }} &nbsp;
                <button class="btn btn-success btn-sm" @click="showReceipts" v-if="Object.keys(orders.money_receipt).length">Show receipt</button>
                <button class="btn btn-danger btn-sm" v-else-if="orders.paymentmethod && !orders.paymentmethod.is_online">No receipt provided</button>
            </div><br v-if="paymentMessage">
            <span v-if="paymentMessage" :class="{ 'text-success': !status, 'text-danger':status }">{{ paymentMessage }}</span>
            <div v-if="helper.objectCount(orders.payments)">
                <div class="table-mobile desktop-hide table-bordered">
                    <table class="table table-hover" v-for="payment in orders.payments">
                        <tbody>
                        <tr>
                            <td colspan="2" align="center">
                                <div>
                                    <button class="btn pd-5 btn-success" title="View" v-b-tooltip.hover @click="paymentModal(payment.id)"><i class="fa fa-arrow-circle-right"></i></button>
                                    <button class="btn pd-5 btn-success" v-if="payment.status === 'uncaptured'" title="Capture" v-b-tooltip.hover @click="capturePayment(payment.id)">
                                        <span v-if="loader[payment.id] === true" class="fa fa-spinner fa-spin"></span>
                                        <span v-else class="fa fa-download" aria-hidden="true"></span>
                                    </button>
                                    <button class="btn btn-primary pd-5" v-if="orders.paymentmethod && !orders.paymentmethod.is_online" @click="showPaymentEditModal(payment)"><i class="fa fa-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{{ payment.create_at }}</td>
                        </tr>
                        <tr>
                            <td>Transaction ID</td>
                            <td>{{ payment.charge_id }}</td>
                        </tr>
                        <tr>
                            <td>Gateway</td>
                            <td>{{ payment.online ? payment.online.title : '' }}</td>
                        </tr>
                        <tr>
                            <td>Amount(USD)</td>
                            <td>${{ ((payment.amount - payment.gateway_charge_amount)/payment.conversion_rate).toFixed(2) }}</td>
                        </tr>
                        <tr v-if="helper.curencyDecider(orders) ==='BDT'">
                            <td>Amount(BDT)</td>
                            <td>BDT {{ helper.fixed(helper.bdtConverter(payment.currency, (payment.amount - payment.gateway_charge_amount))) }}
                            </td>
                        </tr>

                        <tr v-if="helper.curencyDecider(orders) ==='PKR'">
                            <td>Amount(PKR)</td>
                            <td>PKR {{ helper.fixed(helper.rsConverter(payment.currency, (payment.amount - payment.gateway_charge_amount))) }}
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <table class="table-bordered table-sm mobile-hide">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Gateway</th>
                        <th width="15%">Amount(USD)</th>
                        <th width="25%">Amount({{ helper.curencyDecider(orders) }})</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="orders" v-for="payment in orders.payments">
                        <td>
                            <button class="btn pd-5 btn-success" title="View" v-b-tooltip.hover @click="paymentModal(payment.id)"><i class="fa fa-arrow-circle-right"></i></button>
                            <button class="btn pd-5 btn-success" v-if="payment.status == 'uncaptured'" title="Capture" v-b-tooltip.hover @click="capturePayment(payment.id)">
                                <span v-if="loader[payment.id] == true" class="fa fa-spinner fa-spin"></span>
                                <span v-else class="fa fa-download" aria-hidden="true"></span>
                            </button>
                            <button class="btn btn-primary pd-5" v-if="orders.paymentmethod && !orders.paymentmethod.is_online" @click="showPaymentEditModal(payment)"><i class="fa fa-edit"></i></button>
                        </td>
                        <!--<td>{{ new Date(Date.parse(payment.create_at)).toDateString() }}</td>-->
                        <td>{{ payment.create_at }}</td>
                        <td>{{ payment.online ? payment.online.title : '' }}</td>
                        <td>${{ ((payment.amount - payment.gateway_charge_amount)/payment.conversion_rate).toFixed(2) }}</td>
                        <td>{{ helper.curencyDecider(orders) }}
                            {{
                                helper.curencyDecider(orders) === 'BDT' ?
                                    helper.fixed(
                                        helper.bdtConverter(payment.currency, (payment.amount - payment.gateway_charge_amount))
                                    )
                                :
                                    helper.fixed(
                                        helper.rsConverter(payment.currency, (payment.amount - payment.gateway_charge_amount))
                                    )
                            }}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="text-center text-danger">No records</div>
        </div>
        <b-modal hide-footer hide-header no-fade v-model="paymentStoreModal" size="lg" >
            <form method="post" action="" @submit.prevent="storePayment">
                <div class="row" v-if="orderPayment">
                    <div class="col-6 add-payment">
                        <div class="form-group">
                            <label>Date</label>
                            <date-picker v-model="orderPayment.create_at" :config="options"></date-picker>
                            <span v-if="error.create_at" class="text-danger">{{ error.create_at[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Amount</label>
                            <input class="form-control" v-model="orderPayment.amount" type="text" />
                            <span v-if="error.amount" class="text-danger">{{ error.amount[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Transaction ID</label>
                            <input type="text" class="form-control" v-model="orderPayment.charge_id">
                            <span v-if="error.charge_id" class="text-danger">{{ error.charge_id[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Currency</label>
                            <select class="form-control" v-model="orderPayment.currency">
                                <option value="0">Select one</option>
                                <option v-for="currency in currencies">{{ currency.title }}</option>
                            </select>
                            <span v-if="error.currency" class="text-danger">{{ error.currency[0] }}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label>Bank name</label>
                            <input class="form-control" type="text" v-model="orderPayment.bank_name">
                            <span v-if="error.bank_name" class="text-danger">{{ error.bank_name[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Bank branch</label>
                            <input class="form-control" type="text" v-model="orderPayment.bank_branch">
                            <span v-if="error.bank_branch" class="text-danger">{{ error.bank_branch[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Account name</label>
                            <input class="form-control" type="text" v-model="orderPayment.account_name">
                            <span v-if="error.account_name" class="text-danger">{{ error.account_name[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Account number</label>
                            <input class="form-control" type="text" v-model="orderPayment.account_number">
                            <span v-if="error.account_number" class="text-danger">{{ error.account_number[0] }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <span class="text-success text-center" v-if="paymentMessage">{{ paymentMessage }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="float-right form-group">
                            <button class="btn btn-primary btn-sm"><i v-show="status" class="fa fa-spinner fa-spin"></i>&nbsp;Save</button>
                            <button class="btn btn-danger btn-sm" type="button" @click="paymentStoreModal = !paymentStoreModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal title="Payment" ref="paymentModal" hide-footer size="lg" v-model="paymentModalView">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            Payment
                        </div>
                        <div class="card-body pd-5">
                            <table class="table table-bordered table-hover desktop-hide" style="margin: 0px">
                                <tr>
                                    <td>Date</td>
                                    <td>{{ payment.create_at }}</td>
                                </tr>
                                <tr>
                                    <td>Transaction ID</td>
                                    <td>{{ payment.charge_id }}</td>
                                </tr>
                                <tr>
                                    <td>Currency</td>
                                    <td>{{ payment.currency }}</td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>{{ (payment.amount - (payment.gateway_charge_amount ? payment.gateway_charge_amount : 0)).toFixed(2) }}</td>
                                </tr>
                                <tr>
                                    <td>Gate way charge amount</td>
                                    <td>{{ payment.gateway_charge_amount ? payment.gateway_charge_amount.toFixed(2) : 0.00 }}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{{ payment.status }}</td>
                                </tr>
                            </table>
                            <table class="table table-bordered table-hover mobile-hide" style="margin: 0px">
                                <tr>
                                    <td>Date</td>
                                    <td>Transaction ID</td>
                                    <td>Currency</td>
                                    <td>Amount</td>
                                    <td>Gate way charge amount</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <!--<td>{{ new Date(Date.parse(payment.create_at)).toDateString() }}</td>-->
                                    <td>{{ payment.create_at }}</td>
                                    <td>{{ typeof payment.charge_id == 'string' ? helper.subString(payment.charge_id) : '' }}</td>
                                    <td>
                                       <span>{{ typeof payment.currency == 'string' ? payment.currency.toUpperCase() : '' }}</span>
                                    </td>
                                    <td>{{ (payment.amount - (payment.gateway_charge_amount ? payment.gateway_charge_amount : 0)).toFixed(2) }}</td>
                                    <td>{{ payment.gateway_charge_amount ? payment.gateway_charge_amount.toFixed(2) : 0.00 }}</td>
                                    <td>{{ payment.status }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            All refunds
                        </div>
                        <div class="card-body pd-5">
                            <table class="table table-bordered table-hover mobile-hide" style="margin: 0px">
                                <tr>
                                    <td>Refund id</td>
                                    <td>Refund by</td>
                                    <td>Refund at</td>
                                    <td>Refund amount</td>
                                </tr>
                                <tr v-for="refund in payment.refunds">
                                    <td>{{ refund.refund_id }}</td>
                                    <td>{{ refund.user.name }}</td>
                                    <td>{{ new Date(Date.parse(refund.created_at)).toString() }}</td>
                                    <td align="right">{{ refund.refund_amount }}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td colspan="3" v-if="payment.refunds" align="right">{{ totalRefund(payment.refunds) }}</td>
                                </tr>
                            </table>
                            <table class="table table-bordered table-hover desktop-hide" style="margin: 0px">
                                <tbody v-for="refund in payment.refunds">
                                    <tr>
                                        <td>Refund id</td>
                                        <td>{{ refund.refund_id }}</td>
                                    </tr>
                                    <tr>
                                        <td>Refund by</td>
                                        <td>{{ refund.user.name }}</td>
                                    </tr>
                                    <tr>
                                        <td>Refund at</td>
                                        <td>{{ new Date(Date.parse(refund.created_at)).toString() }}</td>
                                    </tr>
                                    <tr>
                                        <td>Refund amount</td>
                                        <td align="right">{{ refund.refund_amount }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Total</td>
                                        <td v-if="payment.refunds" align="right">{{ totalRefund(payment.refunds) }}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            Refund payment
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label>Transaction ID</label>
                                <input type="text" class="form-control" v-model="payment.charge_id" />
                            </div>
                            <div class="form-group">
                                <label>Amount</label>
                                <input type="text" class="form-control" v-model="payment.amounts" />
                            </div>
                            <div class="form-group">
                                <span v-show="message" :class="{ 'text-danger': errorss, 'text-success' : !errorss }">{{ message }}</span>
                            </div>
                            <div class="form-group ">
                                <div class="row">
                                    <!--<div class="col-5">-->
                                        <!--<button class="btn btn-danger" :disabled="status" @click="releasePayment"><i v-show="status" class="fa fa-spinner fa-spin"></i>&nbsp;Completely refund</button>-->
                                    <!--</div>-->
                                    <div class="col-12">
                                        <div class="pull-right">
                                            <button class="btn btn-success" :disabled="status" @click="refund()"><i v-show="status" class="fa fa-spinner fa-spin"></i>&nbsp;Refund</button>
                                            <button class="btn btn-danger" @click="paymentModalView = !paymentModalView">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal hide-header hide-footer size="lg" v-model="showReceipt">
            <div class="row">
                <div class="col-12">
                    <div class="form-group float-right">
                        <button class="btn btn-danger btn-sm" @click="showReceipt = false" ><i class="fa fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6" v-for="(money_receipt, inidex) in orders.money_receipt">
                    <img :src="'/storage/money_receipt/'+money_receipt.receipt_image" class="img-responsive img-thumbnail">
                </div>
            </div>
        </b-modal>
        <b-modal hide-header hide-footer v-model="paymentEditModal">
            <form method="post" action="" @submit.prevent="editPayments">
                <div class="row" v-if="editPayment">
                    <div class="col-6 add-payment">
                        <div class="form-group">
                            <label>Date</label>
                            <date-picker v-model="editPayment.create_at" :config="options"></date-picker>
                            <span v-if="error.create_at" class="text-danger">{{ error.create_at[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Amount</label>
                            <input class="form-control" v-model="editPayment.amount" />
                            <span v-if="error.amount" class="text-danger">{{ error.amount[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Transaction ID</label>
                            <input type="text" class="form-control" v-model="editPayment.charge_id">
                            <span v-if="error.charge_id" class="text-danger">{{ error.charge_id[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Currency</label>
                            <select class="form-control" v-model="editPayment.currency">
                                <option value="0">Select one</option>
                                <option v-for="currency in currencies">{{ currency.title }}</option>
                            </select>
                            <span v-if="error.currency" class="text-danger">{{ error.currency[0] }}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label>Bank name</label>
                            <input class="form-control" type="text" v-model="editPayment.bank_name">
                            <span v-if="error.bank_name" class="text-danger">{{ error.bank_name[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Bank branch</label>
                            <input class="form-control" type="text" v-model="editPayment.bank_branch">
                            <span v-if="error.bank_branch" class="text-danger">{{ error.bank_branch[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Account name</label>
                            <input class="form-control" type="text" v-model="editPayment.account_name">
                            <span v-if="error.account_name" class="text-danger">{{ error.account_name[0] }}</span>
                        </div>
                        <div class="form-group">
                            <label>Account number</label>
                            <input class="form-control" type="text" v-model="editPayment.account_number">
                            <span v-if="error.account_number" class="text-danger">{{ error.account_number[0] }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <span class="text-success text-center" v-if="paymentMessage">{{ paymentMessage }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="float-right form-group">
                            <button class="btn btn-primary btn-sm"><i v-show="status" class="fa fa-spinner fa-spin"></i>&nbsp;Save</button>
                            <button class="btn btn-danger btn-sm" type="button" @click="paymentEditModal = !paymentEditModal">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    import moment from 'moment'
    import helper from '../../../helper/helpers'
    export default {
        props: ['orders', 'currencies'],
        name: "Payments",
        components: {
            datePicker
        },
        data(){
            return {
                showReceipt: false,
                paymentStoreModal: false,
                orderPayment: {
                    create_at: moment().toLocaleString(),
                    currency: 0,
                    order_id: this.$route.params.id
                },
                options: {},
                error: {},
                status: false,
                paymentModalView: false,
                payment: {},
                message: '',
                errorss: false,
                loader: [],
                paymentMessage: false,
                editPayment: {},
                paymentEditModal: false,
                helper
            }
        },
        methods: {
            storePayment(){
                this.error = {};
                this.status = true;
                axios.post('/dashboard/order-payment/store', this.orderPayment).then(response => {
                    this.status = false;
                    this.$parent.orderList();
                    this.paymentMessage = response.data.message;
                    setTimeout(() => {
                        this.paymentStoreModal = false;
                        this.paymentMessage = false
                        this.orderPayment = {
                            create_at: moment().toLocaleString(),
                            currency: 0,
                            order_id: this.$route.params.id
                        }
                    }, 4000);
                }).catch(error => {
                    this.status = false;
                    this.error = error.response.data;
                    setTimeout(() => {
                        this.error = {}
                    }, 4000)
                });
            },
            paymentModal(id){
                this.$refs.paymentModal.show()
                const payment = this.orders.payments.find(function (payment) {
                    return payment.id == id;
                })
                this.payment = payment
            },
            refund(validation = true){
                if(validation){
                    if (isNaN(this.payment.amounts)){
                        this.errorss = true
                        this.message = "Amount must be a number"
                        return
                    }
                    if (typeof this.payment.amounts === 'undefined') {
                        this.errorss = true
                        this.message = "Enter amount to refund"
                        return
                    }
                }
                this.status = true
                axios.post('/dashboard/payment/release', this.payment).then(response => {
                    //strip refund error success handler
                    if(response.data.status){
                        this.message = response.data.message
                        this.$parent.orderList()
                        this.status = false
                        this.errorss = false
                        setTimeout(() => {
                            this.$refs.paymentModal.hide()
                            this.message = false
                        }, 2000)
                        return;
                    }else if(!response.data.status){
                        this.message = response.data.message
                        this.errorss = true
                        setTimeout(() => {
                            this.message = false
                        }, 2000)
                    }
                    //end of stripe

                    ///cash on delivery error and success handling
                    this.$parent.orderList()
                    this.status = false
                    this.message = response.data[0].message
                    this.errorss = !response.data[0].status;
                    //end of cash on delivery
                    setTimeout(() => {
                        this.$refs.paymentModal.hide()
                        this.message = false
                    }, 2000)
                }).catch(error => {
                    this.status = false
                })
            },
            totalRefund(refunds){
                var totalRefund = 0;
                refunds.forEach(function (refund) {
                    totalRefund += parseInt(refund.refund_amount)
                });
                return totalRefund;
            },
            capturePayment(id){
                this.loader = []
                this.loader[id] = true
                const payment = this.orders.payments.find(function (payment) {
                    return payment.id == id;
                })
                this.payment = payment
                axios.post('/dashboard/payment/capture', {id: id})
                    .then(response => {
                        this.$parent.orderList()
                        this.loader = []
                        this.paymentMessage = response.data.message
                        if(!response.data.status){
                            this.status = true
                        }
                        setTimeout(() => {
                            this.paymentMessage = false
                            this.status = false
                            this.error = false
                        }, 2000)
                    }).catch(error => {
                        console.log(error)
                })
            },
            releasePayment(){
                this.refund(false)
            },
            showReceipts(){
                this.showReceipt = true;
            },
            showPaymentEditModal(payment){
                this.editPayment = payment;
                this.editPayment.bank_name = payment.cash.bank_name
                this.editPayment.bank_branch = payment.cash.branch_name
                this.editPayment.account_number = payment.cash.account_number
                this.editPayment.account_name = payment.cash.account_name
                this.paymentEditModal = true;
            },
            editPayments(){
                this.status = true;
                axios.post('/dashboard/order-payment/store', this.editPayment).then((response) => {
                    this.status = false;
                    this.paymentMessage = response.data.message;
                    setTimeout(() => {
                        this.paymentEditModal = false;
                        this.paymentMessage = false
                    }, 4000);
                    this.$parent.orderList();
                }).catch((error) => {
                    this.status = false;
                    this.paymentMessage = response.data.message;
                });
                console.log(this.editPayment);
            }
        }
    }
</script>

<style>
    .modal{
        margin-top: 60px;
    }
</style>