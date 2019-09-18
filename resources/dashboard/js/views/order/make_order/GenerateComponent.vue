<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                <div class="form-group user-select">
                    <label>User</label>
                    <model-list-select :list="options"
                                       style="margin-top: 5px"
                                       v-model="generateOrder.user"
                                       option-value="value"
                                       option-text="id"
                                       @searchchange="fetchUser"
                    ></model-list-select>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                <div class="form-group">
                    <label for="spc">Shipping cost per pound</label>
                    <input id="spc" class="form-control" v-model="generateOrder.shipping_cost_per_item" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">Order's</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for="(order, index) in generateOrder.orders" >
                                <input type="checkbox" :id="index" @change="selectOrder(order.id)" v-model="generateOrder.selectedOrder" :value="order.id" />
                                <label :for="index" style="cursor: pointer">{{ order.order_number }}({{ moment.utc(order.order_date).local().format('MM.DD.YY h:m:a') }})</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal hide-header hide-footer v-model="showOrderModal" size="lg">
            <div class="card">
                <div class="card-header">
                    Order
                    <div class="float-right">
                        <span class="fa fa-times pointer" @click="showOrderModal = false"></span>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table" style="margin-bottom: 0">
                        <thead>
                            <tr>
                                <th>Order number</th>
                                <th>Order date</th>
                                <th>Grand price</th>
                                <th>Total price</th>
                                <th>USA Tax</th>
                                <th>Local Tax</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ order.order_number }}</td>
                                <td>{{ moment.utc(order.order_date).local().format('MM.DD.YY h:m:a') }}</td>
                                <td>{{ order.master_price }}</td>
                                <td>{{ order.total_price }}</td>
                                <td>{{ helper.fixed(order.tax_usa) }}</td>
                                <td>{{ helper.fixed(order.tax_bd) }}</td>
                            </tr>
                            <tr>
                                <td colspan="6" align="right">
                                    <router-link :to="'/dashboard/orders/list/show/'+order.id" target="_blank">Check out full details</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card" style="margin-bottom: 0">
                <div class="card-header">
                    Items
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Item weight</th>
                                <th>Item price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in order.items">
                                <td>{{ helper.subString(item.title, 30)+"..." || item.url }}</td>
                                <td>
                                    <input type="text" class="form-control" v-model="item.weight" />
                                </td>
                                <td>
                                    <input type="text" class="form-control" v-model="item.item_price.item_current_price">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
                    <div class="float-right">
                        <button class="btn btn-primary" type="button" @click="submitOrder">
                            <span class="fa fa-spinner fa-spin" v-if="orderLoader"></span>&nbsp;Save
                        </button>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import {ModelListSelect} from 'vue-search-select'
    import moment from 'moment'
    import helper from '../../../helper/helpers'
    export default {
        components: {ModelListSelect},
        name: "GenerateComponent",
        data(){
            return {
                options: [],
                generateOrder: {
                    user: 0,
                    shipping_cost_per_item: 0,
                    orders: [],
                    selectedOrder: []
                },
                order: {},
                showOrderModal: false,
                orderLoader: false,
                moment,
                helper
            }
        },
        methods: {
            fetchUser(text){
                if (typeof text !== 'undefined' && text.length > 1){
                    axios.get('/dashboard/user/list/'+text).then(response => {
                        this.options = [];
                        response.data.forEach((element) => {
                            this.options.push({
                                value: element.id,
                                id: `${element.name} (${element.email})`
                            })
                        })
                    });
                }
            },
            fetchOrder() {
                if (this.generateOrder.user !== 0){
                    axios.get('/dashboard/order/get-user-order/'+this.generateOrder.user).then((response) => {
                        this.generateOrder.orders = response.data;
                    }).catch(error => {
                        console.log(error);
                    });
                }
            },
            selectOrder(orderId){
                this.order = this.generateOrder.orders.find((order) => {
                    return orderId === order.id
                });
                this.showOrderModal = this.generateOrder.selectedOrder.includes(orderId);
            },
            submitOrder(){
                this.orderLoader = true;
                axios.patch("/dashboard/order/save-order-item-weight/"+this.order.id, this.order).then((response) =>  {
                    this.orderLoader = false;
                    console.log(response);
                }).catch((error) => {
                    this.orderLoader = false;
                    console.log(error.response);
                });
            }
        },
        watch: {
            'generateOrder.user': {
                handler: function (newValue) {
                    this.fetchOrder();
                }
            }
        },
        created() {
            this.fetchUser('user');
        }
    }
</script>

<style scoped>
    .user-select{
        width: 100%;
    }
    .user-select >>> .search{
        border-radius: 0;
        padding: 5px 5px 7px 15px;
    }
    .user-select >>> .ui{
        border-radius: 0;
        padding: 5px 5px 7px 15px;
    }
    .wd-82 {
        width: 82%;
    }
    .btn-flex{
        padding: 8px 10px;
    }
    .pd-0{
        padding: 0px
    }
</style>