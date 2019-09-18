<template>
    <div class="card">
        <div class="card-header">
            <!--<router-link :to="{name: 'Cart Item List'}"><i class="fa fa-arrow-left"></i>&nbsp; Cart list</router-link>-->
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-8 cart-list-responsive" >
                    <table class="table table-hover table-sm table-bordered mg-0 show-cart-item">
                        <tr>
                            <td width="25%"><b>Title</b></td>
                            <td width="25%">{{item.title}}</td>
                        </tr>
                        <tr>
                            <td><b>Store</b></td>
                            <td width="25%">
                                <template v-if="item.store">{{item.store.store_name}}</template>
                                <template v-else>No</template>
                            </td>
                        </tr>

                        <tr>
                            <td><b>User</b></td>
                            <td width="25%">
                                <template v-if="item.user">{{item.user.name}}</template>
                                <template v-else>No</template>
                            </td>
                        </tr>

                        <tr>
                            <td><b>Weight</b></td>
                            <td width="25%">{{item.weight}}</td>
                        </tr>
                        <tr>
                            <td><b>Price</b></td>
                            <td width="25%">
                                <template v-if="item.item_price">{{item.item_price.item_price}}</template>
                                <template v-else>No</template>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Dimension</b></td>
                            <td width="25%">{{item.dimension}}</td>
                        </tr>

                        <tr>
                            <td><b>Quantity</b></td>
                            <td width="25%">
                                <template v-if="item.item_price">{{item.item_price.quantity}}</template>
                                <template v-else>No</template>
                            </td>
                        </tr>

                        <tr>
                            <td><b>URL</b></td>
                            <td width="25%"><a :href="item.url" target="_blank">{{item.url}}</a></td>
                        </tr>
                        <tr>
                            <td><b>Image URL</b></td>
                            <td width="25%"><a :href="item.imageUrl" target="_blank">{{item.imageUrl}}</a></td>
                        </tr>
                        <tr>
                            <td><b>SKU</b></td>
                            <td width="25%">{{item.sku}}</td>
                        </tr>
                        <tr>
                            <td><b>Maximum Available Quantity</b></td>
                            <td width="25%">{{item.available_quantity}}</td>
                        </tr>
                        <tr>
                            <td><b>Volumetric Weight</b></td>
                            <td width="25%">{{item.volumetric_weight}}</td>
                        </tr>
                        <tr>
                            <td><b>User Instruction</b></td>
                            <td width="25%">{{item.description}}</td>
                        </tr>
                        <tr>
                            <td><b>Is Gift</b></td>
                            <td width="25%">
                                <template v-if="item.is_gift">Yes</template>
                                <template v-else>No</template>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Is Apply Insurence</b></td>
                            <td width="25%">
                                <template v-if="item.is_apply_insurance">Yes</template>
                                <template v-else>No</template>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Added Time</b></td>
                            <td width="25%">{{item.created_at}}</td>
                        </tr>
                        <tr>
                            <td><b>Status serial</b></td>
                            <td width="25%">{{item.item_status}}</td>
                        </tr>

                    </table>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <router-link v-if="$route.params.id" :to="{name: 'Edit Cart Item', params: {id: item.id}}"
                                 class="btn btn-success btn-sm" tag="button" type="button">
                        <i class="fa fa-edit"></i> Edit
                    </router-link>

                    <router-link v-else :to="{name: 'Edit Cart Review Item', params: {cid: item.id}}"
                                 class="btn btn-success btn-sm" tag="button" type="button">
                        <i class="fa fa-edit"></i> Edit
                    </router-link>



                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import moment from 'moment';
    export default {
        name: "ShowUser",

        data() {
            return {
                item : {},
                id : '',
            }
        },

        created () {
            this.getIndividualUser()
        },

        methods :  {
            getIndividualUser () {
                if (this.$route.params.id)
                {
                    this.id = this.$route.params.id
                }else {
                    this.id = this.$route.params.cid
                }

                axios.get('/dashboard/carts/' + this.id)
                    .then(response => {
                        this.item = response.data

                        this.item.created_at = moment.utc(this.item.created_at).local().format('lll');

                        console.log(this.item)
                    })
            }
        }
    }
</script>

<style scoped>

</style>