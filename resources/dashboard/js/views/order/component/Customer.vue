<template>
    <div>
        <div class="card" style="margin-bottom: 10px">
            <div class="card-header">
                Customer
            </div>
            <div class="card-body">
                <table class="table table-sm table-bordered table-hover mg-0" v-if="orders.user">
                    <tr>
                        <td width="25%">Name</td>
                        <td>{{ orders.user.name }}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{ orders.user.email }}</td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>{{ orders.user.mobile }}</td>
                    </tr>
                    <tr>
                        <td>Member since</td>
                        <td>{{ orders.user.created_at }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <table class="table table-bordered table-sm mg-0">
                    <tr>
                        <td width="40%">Order date</td>
                        <td>{{ orders.order_date }}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>
                            <b v-if="orders.last_status">
                                {{ orders.last_status.title }}
                                ({{
                                    orders.last_status.alias === 'delivered' ? helper.timeConverter(orders.delivery_date) :
                                    orders.status ? helper.timeConverter(orders.status[Object.keys(orders.status).length-1].pivot.created_at) : ''
                                }})
                            </b>
                        </td>
                    </tr>
                    <tr v-if="orders.last_status && orders.last_status.alias == 'cancel'">
                        <td>Cancel reason</td>
                        <td><span title="Order cancel reason" v-for="(reason, index) in orders.reasons" :key="index">{{ reason.title }}&nbsp;
                            <span v-if="reason.pivot.other_reason" @click="showReason(reason.id)" class="btn btn-primary btn-sm fa fa-inbox" style="cursor: pointer"></span></span>
                        </td>
                    </tr>
                    <tr v-else>
                        <td>Order number</td>
                        <td>{{ orders.order_number }}</td>
                    </tr>
                    <tr v-if="orders.delivery_date">
                        <td>Delivery date</td>
                        <td>
                            {{ helper.timeConverter(orders.delivery_date) }}
                            <span class="btn btn-primary btn-sm fa fa-inbox" @click="showDeliveryInfo"></span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <b-modal v-model="reasonModal" hide-header hide-footer>
            <div class="card" style="margin:0px">
                <div class="card-header">
                    Message from user
                    <div class="float-right">
                        <span class="fa fa-times" style="cursor: pointer;" @click="reasonModal = false"></span>
                    </div>
                </div>
                <div class="card-body">
                    <p v-if="message.pivot">{{ message.pivot.other_reason }}</p>
                </div>
            </div>
        </b-modal>
        <b-modal v-model="showDeliveryModal" hide-header hide-footer v-if="Object.keys(delivered).length > 0">
            <div class="card" style="margin-bottom: 0">
                <div class="card-header">
                    Delivdery information
                    <div class="float-right">
                        <i class="fa fa-times" style="cursor: pointer" @click="showDeliveryModal = false"></i>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-hover mg-0">
                        <tr>
                            <td>Delivered to</td>
                            <td>
                                {{ delivered.delivered_to }}
                            </td>
                        </tr>
                        <tr>
                            <td>Delivery date</td>
                            <td>{{ helper.timeConverter(orders.delivery_date) }}</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <img style="width: 100%" :src="'/storage/'+delivered.image" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import helper from '../../../helper/helpers'

    export default {
        props: ['orders'],
        name: "Customer",
        data(){
            return {
                status: [],
                helper,
                reasonModal: false,
                message: {},
                delivered: {},
                showDeliveryModal: false
            }
        },
        methods: {
            showReason(id){
                this.reasonModal = true;
                this.message = this.orders.reasons.find((reason) => {
                    return reason.id === id;
                });
            },
            showDeliveryInfo(){
                this.showDeliveryModal = true;
                let status = this.orders.status.find((st) => {
                    return st.alias === 'delivered'
                });
                this.delivered = JSON.parse(status.pivot.description);
            }
        },
        created(){
            this.status = this.orders.status
        }
    }
</script>

<style scoped>

</style>