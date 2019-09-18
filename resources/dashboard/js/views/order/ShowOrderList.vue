
<template>
    <div class="wrapper">
        <div class="animated fadeIn">
            <div class="row">
                <div class="col-lg-12">
                    <details-component v-if="orders" :orders="orders" :options="options"></details-component>
                    <div class="row">
                        <div class="col-md-6">
                            <order-address v-if="orders.address" :address="orders.address" :delivery-date="orders.delivery_date"></order-address>
                        </div>
                        <div class="col-md-6" v-if="orders">
                            <customer v-if="orders" :orders="orders"></customer>
                        </div>
                    </div> 
                    <items v-if="orders" :orders="orders" :options="options"></items>
                    <div class="row">
                        <div class="col-md-6">
                            <payments v-if="orders" :orders="orders" :currencies="currencies"></payments>
                        </div>
                        <div class="col-md-6" v-if="orders">
                            <order-status v-if="orders" :status="orders.status" :delivery-date="orders.delivery_date"></order-status>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import Tables from "../components/Tables";
    import DetailsComponent from './component/OrderDetails'
    import OrderAddress from './component/OrderAddress'
    import Customer from './component/Customer'
    import Items from './component/Items'
    import Payments from './component/Payments'
    import OrderStatus from './component/OrderStatus'

    import moment from 'moment';

    export default {
        data() {
            return {
                orders: {},
                myModal: false,
                currencies: {},
                options: []
            }
        },
        components: {
            Tables,
            DetailsComponent,
            OrderAddress,
            Customer,
            Items,
            Payments,
            OrderStatus
        },
        methods: {
            orderList() {
                axios.get('/dashboard/order/'+ this.$route.params.id)
                    .then(response => {
                        this.orders = response.data;

                        this.orders.user.created_at = moment.utc(this.orders.user.created_at).local().format('lll');

                        this.orders.order_date = moment.utc(this.orders.order_date).local().format('lll');
                        _.forEach( this.orders.payments, value => {
                            value.create_at = moment.utc(value.create_at).local().format('lll');
                        });




                    })
            },

            showItemDetails(id){
                let item = this.orders.items.find(function (item) {
                    return item.id === id
                });
                this.item = item;
            },
            fetchListCurrencies(){
                axios.get('/dashboard/currencies')
                    .then(response => {
                        this.currencies = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },
            fetchStatuses(){
                axios.get("/dashboard/status/1").then(response => {
                    this.options = response.data;
                });
            }
        },
        watch: {
            fetchOrder: {
                handler: 'orderList',
                immediate: true,
            },
            fetchCurrencies: {
                handler: 'fetchListCurrencies',
                immediate: true
            }
        },
        created() {
            this.fetchStatuses()
        }

    }
</script>

<style>
    .lg-title{
        font-size: 16px;
        font-weight: bold;
        line-height: 35px;
    }
    .font-default{
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
    .font-default-15{
        font-size: 15px;
        font-weight: 400;
    }

    #table td, #table th {
        border: 1px solid #fff;
        padding: 5px;
    }


    #table tr:hover {background-color: #ddd;}

    #table th {
        padding-top: 8px;
        padding-bottom: 8px;
        text-align: left;
        background-color: #f05561;
        color: white;
        font-size: 14px;
    }
</style>
