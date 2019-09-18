<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-6 col-lg-3 dashboard-grid">
                <b-card class="bg-success" :no-block="true">
                    <router-link :to="{ name: 'List' }" tag="div"  class = "add-anchor">
                        <div class="pb-0">
                            <h4 class="mb-0">{{ dashboard.users }}</h4>
                            <router-link :to="{ name: 'List' }" tag="p">Total users
                            </router-link>
                        </div>
                    </router-link>
                </b-card>
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3 dashboard-grid">
                <b-card class="bg-info" :no-block="true">
                    <router-link :to="{ name: 'Admin User' }" tag="div"  class = "add-anchor">
                        <div class="pb-0">
                            <h4 class="mb-0">{{ dashboard.admin }}</h4>
                            <router-link :to="{ name: 'Admin User' }" tag="p" style="cursor: pointer;">Admin</router-link>
                        </div>
                    </router-link>
                </b-card>
            </div><!--/.col-->

            <div class="col-sm-6 col-lg-3 dashboard-grid">
                <b-card class="bg-info" :no-block="true">
                    <router-link :to="{ name: 'Order List' }" tag="div"  class = "add-anchor">
                        <div class="pb-0">
                            <h4 class="mb-0">{{ dashboard.orders }}</h4>
                            <router-link :to="{ name: 'Order List' }" tag="p" style="cursor: pointer;">Total orders
                            </router-link>
                        </div>
                    </router-link>
                </b-card>
            </div><!--/.col-->
            <div class="col-sm-6 col-lg-3 dashboard-grid" v-for="(status, index) in dashboard.statuses">
                <b-card :class="status.alias" :no-block="false">
                    <router-link v-if="status.alias !== 'pending-for-review'"
                                 :to="{ name: 'Order List', query: { 'status': status.alias } }" tag="p"
                                 style="cursor: pointer;" class = "add-anchor">
                        <div class="pb-0">
                            <h4 class="mb-0">{{ status.last_orders_count }}</h4>
                                {{ status.title }}
                        </div>
                    </router-link>
                    <router-link v-if="status.alias === 'pending-for-review'"
                                 :to="{ name: 'Pending List' }" tag="p"
                                 style="cursor: pointer;" class = "add-anchor">
                        <div class="pb-0">
                            <h4 class="mb-0">{{ status.last_orders_count }}</h4>
                            {{ status.title }}
                        </div>
                    </router-link>
                    <div class="float-right" style="margin-top: 90px;">
                        <a target="_blank" :href="'/dashboard/status/order/report/'+status.alias"><i class="pdf fa fa-file-pdf-o"></i></a>
                    </div>
                </b-card>
            </div><!--/.col-->
        </div><!--/.row-->
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'dashboard',
        data: function () {
            return {
                bgs: ['bg-warning', 'bg-primary', 'bg-info', 'bg-success', 'bg-danger', 'bg-row'],
                dashboard: '',
                tableItems: [
                    {
                        avatar: {url: 'static/img/avatars/1.jpg', status: 'success'},
                        user: {name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'USA', flag: 'static/img/flags/USA.png'},
                        usage: {value: 50, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Mastercard', icon: 'fa fa-cc-mastercard'},
                        activity: '10 sec ago'
                    },
                    {
                        avatar: {url: 'static/img/avatars/2.jpg', status: 'danger'},
                        user: {name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015'},
                        country: {name: 'Brazil', flag: 'static/img/flags/Brazil.png'},
                        usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Visa', icon: 'fa fa-cc-visa'},
                        activity: '5 minutes ago'
                    },
                    {
                        avatar: {url: 'static/img/avatars/3.jpg', status: 'warning'},
                        user: {name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'India', flag: 'static/img/flags/India.png'},
                        usage: {value: 74, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Stripe', icon: 'fa fa-cc-stripe'},
                        activity: '1 hour ago'
                    },
                    {
                        avatar: {url: 'static/img/avatars/4.jpg', status: ''},
                        user: {name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'France', flag: 'static/img/flags/France.png'},
                        usage: {value: 98, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'PayPal', icon: 'fa fa-paypal'},
                        activity: 'Last month'
                    },
                    {
                        avatar: {url: 'static/img/avatars/5.jpg', status: 'success'},
                        user: {name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'Spain', flag: 'static/img/flags/Spain.png'},
                        usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Google Wallet', icon: 'fa fa-google-wallet'},
                        activity: 'Last week'
                    },
                    {
                        avatar: {url: 'static/img/avatars/6.jpg', status: 'danger'},
                        user: {name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'Poland', flag: 'static/img/flags/Poland.png'},
                        usage: {value: 43, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Amex', icon: 'fa fa-cc-amex'},
                        activity: 'Last week'
                    }
                ],
                tableFields: {
                    avatar: {
                        label: '<i class="icon-people"></i>',
                        class: 'text-center'
                    },
                    user: {
                        label: 'User'
                    },
                    country: {
                        label: 'Country',
                        class: 'text-center'
                    },
                    usage: {
                        label: 'Usage'
                    },
                    payment: {
                        label: 'Payment method',
                        class: 'text-center'
                    },
                    activity: {
                        label: 'Activity'
                    }
                }
            }
        },
        methods: {
            variant(value) {
                let $variant
                if (value <= 25) {
                    $variant = 'info'
                } else if (value > 25 && value <= 50) {
                    $variant = 'success'
                } else if (value > 50 && value <= 75) {
                    $variant = 'warning'
                } else if (value > 75 && value <= 100) {
                    $variant = 'danger'
                }
                return $variant
            },
            fetchDashboard() {
                axios.get('/dashboard/details').then((response) => {
                    this.dashboard = response.data;
                });
            }
        },
        watch: {
            fetchDashboard: {
                immediate: true,
                handler: 'fetchDashboard'
            }
        }
    }
</script>

<style lang="scss" scoped >
    .bg-row {
        background: #ffc108;
    }
    .dashboard-grid .card-body{
        height: 120px;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .pdf{
        color: #fff !important;
        background: #afd138;
        padding: 3px;
        font-size: 24px !important;
    }
</style>
