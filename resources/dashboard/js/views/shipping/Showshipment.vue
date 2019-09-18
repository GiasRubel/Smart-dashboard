
<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-2">

                <router-link to="/dashboard/shipping" class="btn btn-primary" tag="button" type="button">
                    <i class="fa fa-arrow-left"></i> Back
                </router-link>
            </div>

        </div>
        <hr>
        <div class="row">
            <div class="col-lg-12">
                <b-card header="<i class='fa fa-align-justify'></i> Simple Table">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th class="mobile-hide">Country</th>
                            <th>State</th>
                            <th class="mobile-hide">Zip_Code</th>
                            <th class="mobile-hide">Weight_Range</th>
                            <th class="mobile-hide">Dimension</th>
                            <th class="mobile-hide">Items</th>
                            <th>Price</th>
                            <th class="mobile-hide">Order</th>
                            <th>Product_Type</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                           <!--{{shipment}}-->
                            <td>{{shipments.title}}</td>
                            <td v-if="shipments.country" class="mobile-hide">{{shipments.country.title}}</td>
                            <td v-else> {{shipments.country_id}}</td>
                            <td v-if="shipments.state">{{shipments.state.title}}</td>
                            <td v-else> {{shipments.state_id}}</td>
                            <td class="mobile-hide">{{shipments.zip_code}}</td>
                            <td class="mobile-hide">{{shipments.weight_range}}</td>
                            <td class="mobile-hide">{{shipments.dimension}}</td>
                            <td class="mobile-hide">{{shipments.items}}</td>
                            <td>{{shipments.price}}</td>
                            <td class="mobile-hide">{{shipments.order}}</td>
                            <td>{{shipments.product_type}}</td>

                        </tr>
                        </tbody>

                    </table>
                </b-card>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

    Vue.component('pagination', require('../../components/Pagination'));


    export default {
        name: 'Users',
        data() {
            return {
                shipments: {},


            }
        },
        methods: {
            shipmentList() {
               axios.get('/dashboard/shipment/'+ this.$route.params.id)
                   .then(response => {
                       console.log(response.data);
                       this.shipments = response.data;
                   })
            },


        },
        mounted() {
            this.shipmentList();
        }
    }
</script>
