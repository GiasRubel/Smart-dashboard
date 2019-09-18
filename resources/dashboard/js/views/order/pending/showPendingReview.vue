<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        Order
                        <!--<router-link to="/dashboard/orders/pending-review"><i class="fa fa-arrow-left"></i>&nbsp;Order's (Pending for review)</router-link>-->
                    </div>
                    <div class="card-body">
                        <div class="table-mobile desktop-hide table-bordered">
                            <table class="table table-hover">
                                <tbody>
                                <tr>
                                    <td>Order number</td>
                                    <td>
                                        <router-link :to="{ name: 'Show Order', params: { id: order.id } }">{{ order.order_number }}</router-link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Order date</td>
                                    <!--<td>{{ helper.dateString(order.order_date) }}</td>-->
                                    <td>{{  order.order_date }}</td>
                                </tr>
                                <tr>
                                    <td>Customer name</td>
                                    <td>{{ order.user ? order.user.name : '' }}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{{ order.user ? order.user.email : '' }}</td>

                                </tr>
                                <tr>
                                    <td>Phone number</td>
                                    <td>{{ order.user ? order.user.mobile : '' }}</td>
                                </tr>
                                <tr>
                                    <td>Edit BD Tax (USD)</td>
                                    <td>
                                        <input type="number" min="0" v-model="tax.tax_bd"
                                               @keyup.enter="changeTax(order.id)"/>

                                        <b-button type="submit" size="sm" variant="primary"
                                                  @click="changeTax(order.id)">
                                            <i class="fa fa-check"></i>
                                        </b-button>
                                        <br>

                                        <span v-if="msg" class="text-success">{{msg}}</span>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                        <table class="table table-hover table-bordered mobile-hide">
                            <thead>
                            <tr>
                                <th>Order number</th>
                                <th>Order date</th>
                                <th>Customer name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                                <th>Edit BD Tax (USD)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <router-link :to="{ name: 'Show Order', params: { id: order.id } }">
                                        {{ order.order_number }}
                                    </router-link>
                                </td>
                                <!--<td>{{ helper.dateString(order.order_date) }}</td>-->
                                <td>{{ order.order_date }}</td>
                                <td>{{ order.user ? order.user.name : '' }}</td>
                                <td>{{ order.user ? order.user.email : '' }}</td>
                                <td>{{ order.user ? order.user.mobile : '' }}</td>
                                <td>
                                    <input type="number" min="0" v-model="tax.tax_bd"
                                           @keyup.enter="changeTax(order.id)"/>

                                    <b-button type="submit" size="sm" variant="primary" @click="changeTax(order.id)">
                                        <i class="fa fa-check"></i>
                                    </b-button>
                                    <br>

                                    <span v-if="msg" class="text-success">{{msg}}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card card-item-responsive">
                    <div class="card-header">
                        Items
                    </div>
                    <div class="card-body">
                        <!--mobile section-->
                        <form method="post" @submit.prevent="submitForReview">
                            <div class="table-mobile desktop-hide table-bordered" v-for="(item, index) in items">
                                <table class="table table-hover item-two-column">
                                    <tbody>
                                    <tr>
                                        <td colspan="2" align="center">
                                            <button class="btn btn-danger btn-sm" @click="deleteItemModal(item.id)"
                                                    type="button" v-b-tooltip.hover title="Delete item"><i
                                                    class="fa fa-close"></i></button>
                                            <a class="btn btn-primary btn-sm" :href="item.url" target="_blank"
                                               v-b-tooltip.hover title="View source"><i class="fa fa-eye"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>
                                            <input type="text" class="form-control"
                                                   v-model="item.title"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Instruction</td>
                                        <td>{{ item.description }}</td>
                                    </tr>
                                    <tr>
                                        <td>Image</td>
                                        <td>
                                            <template v-if="item.imageUrl">
                                                <img class="item-image-url" :src="item.imageUrl"/>
                                            </template>
                                            <template v-if="!item.imageUrl || errors.has('image_url_'+index)">
                                                <input type="url" class="form-control"
                                                       placeholder="image url"
                                                       :name="'image_url_'+index"
                                                       v-validate="'url'"
                                                       v-model="item.imageUrl" />
                                            </template>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td>{{ item.item_price ? item.item_price.quantity : 1 }}</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td>
                                            <input type="text" class="form-control"
                                                   @input="calculateVolumetricWeight(item, index)"
                                                   v-model="item.weight"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dimension</td>
                                        <td>
                                            <div class="form-inline">
                                                <input type="number" @input="calculateVolumetricWeight(item, index)"
                                                       class="form-control" v-model="dimension.l[index]" placeholder="L"
                                                       step=".01" style="width: 33%"/>
                                                <input type="number" @input="calculateVolumetricWeight(item, index)"
                                                       class="form-control" v-model="dimension.w[index]" placeholder="W"
                                                       step=".01" style="width: 33%"/>
                                                <input type="number" @input="calculateVolumetricWeight(item, index)"
                                                       class="form-control" v-model="dimension.h[index]" placeholder="H"
                                                       step=".01" style="width: 33%"/>
                                            </div>
                                            <input type="hidden" class="form-control"
                                                   @input="calculateVolumetricWeight(item, index)"
                                                   v-model="item.dimension"/>
                                            <span class="text-danger" v-if="errrors['items.'+index+'.dimension']">
                                                {{ errrors['items.'+index+'.dimension'][0].replace('items.'+index+'.', '') }}
                                            </span>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>Volumetric weight</td>
                                        <td>
                                            <input type="text" class="form-control" :name="'v_weight'+ index"
                                                   v-validate="'required|decimal'" data-vv-as="Volumetric Weight"
                                                   v-model="item.volumetric_weight"/>
                                            <span v-if="errors.has('v_weight'+ index)" class="text-danger">{{ errors.first('v_weight'+ index)}}</span>
                                            <span class="text-danger" v-if="errrors['items.'+index+'.volumetric_weight']">
                                                {{ errrors['items.'+index+'.volumetric_weight'][0].replace('items.'+index+'.', '') }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>US shipping</td>
                                        <td><input type="text" class="form-control" v-model="item.shipping_cost" /></td>
                                    </tr>
                                    <tr>
                                        <td>Item price</td>
                                        <td>
                                            <input type="text" class="form-control" :name="'Price' + index"
                                                   v-validate="'required|decimal|min_value:.01'" data-vv-as="Price"
                                                   v-model="item.item_current_price"/>
                                            <span v-if="errors.has('Price'+ index)" class="text-danger">{{ errors.first('Price'+ index)}}</span>
                                            <span class="text-danger" v-if="errrors['items.'+index+'.item_current_price']">
                                                {{ errrors['items.'+index+'.item_current_price'][0].replace('items.'+index+'.', '') }}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr v-if="error">
                                        <td colspan="2" class="text-danger">Please provide valid data for item</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-mobile desktop-hide">
                                <table class="table table-hover">
                                    <tr v-if="message">
                                        <td colspan="2" :class="cls">
                                            {{ message }}
                                        </td>
                                    </tr>
                                    <tr v-if="excced"><br>
                                        <b-alert show variant="warning">{{ wMessage }}</b-alert>
                                    </tr>
                                    <tr v-if="excced">
                                        <td>
                                            <div class="form-group">
                                                <label>Shipping cost per pound</label>
                                                <input type="text" class="form-control" v-model="order.shipping_cost" />
                                                <span class="text-danger" v-if="errrors.shipping_cost">{{ errrors.shipping_cost[0] }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="7" align="right">
                                            <button class="btn btn-primary"><i class="fa fa-spinner fa-spin"
                                                                               v-if="loading"></i>&nbsp;Save
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </form>
                        <!--end of mobile section-->
                        <!--desktop section-->
                        <form method="post" @submit.prevent="submitForReview">
                            <table class="table table-hover table-bordered mobile-hide">
                                <thead>
                                <tr>
                                    <th width="15%">Title</th>
                                    <th>Image</th>
                                    <th width="5%">Qty</th>
                                    <th>Weight</th>
                                    <th>Dimension</th>
                                    <th>V_weight</th>
                                    <th>Us shipping</th>
                                    <th>Item price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(item, index) in order.items">
                                    <td>
                                        <input type="text" class="form-control" name="Title" v-model="item.title"/>
                                    </td>
                                    <td>
                                        <template v-if="item.imageUrl">
                                            <img class="item-image-url" :src="item.imageUrl" :alt="item.imageUrl">
                                        </template>
                                        <template v-if="!item.imageUrl || errors.has('image_url_'+index)">
                                            <input type="url" class="form-control"
                                                   placeholder="image url"
                                                   :name="'image_url_'+index"
                                                   v-validate="'url'"
                                                   v-model="item.imageUrl" />
                                        </template>
                                    </td>
                                    <td>
                                        {{ item.item_price ? item.item_price.quantity : 1 }}
                                    </td>
                                    <td>
                                        <input type="text" class="form-control"
                                               @input="calculateVolumetricWeight(item, index)"
                                               v-model="item.weight"/>

                                    </td>
                                    <td class="align-content-center">
                                        <div class="form-inline">
                                            <input type="number" @input="calculateVolumetricWeight(item, index)"
                                                   class="form-control" v-model="dimension.l[index]" placeholder="L"
                                                   step=".01" style="width: 33%"/>
                                            <input type="number" @input="calculateVolumetricWeight(item, index)"
                                                   class="form-control" v-model="dimension.w[index]" placeholder="W"
                                                   step=".01" style="width: 33%"/>
                                            <input type="number" @input="calculateVolumetricWeight(item, index)"
                                                   class="form-control" v-model="dimension.h[index]" placeholder="H"
                                                   step=".01" style="width: 33%"/>
                                        </div>
                                        <input type="hidden" class="form-control"
                                               @input="calculateVolumetricWeight(item, index)"
                                               v-model="item.dimension"/>
                                        <span class="text-danger" v-if="errrors[index+'.dimension']">
                                            {{ errrors['items.'+index+'.dimension'][0].replace(index+'.', '') }}
                                        </span>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" :name="'v_weight'+ index"
                                               v-validate="'required|decimal'" data-vv-as="Volumetric Weight"
                                               v-model="item.volumetric_weight"/>
                                        <span v-if="errors.has('v_weight'+ index)" class="text-danger">{{ errors.first('v_weight'+ index)}}</span>
                                        <span class="text-danger" v-if="errrors['items.'+index+'.volumetric_weight']">
                                            {{ errrors['items.'+index+'.volumetric_weight'][0].replace('items.'+index+'.', '') }}
                                        </span>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" v-model="item.shipping_cost" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" :name="'Price' + index"
                                               v-validate="'required|decimal|min_value:.01'" data-vv-as="Price"
                                               v-model="item.item_current_price"/>
                                        <span v-if="errors.has('Price'+ index)" class="text-danger">{{ errors.first('Price'+ index)}}</span>
                                        <span class="text-danger" v-if="errrors['items.'+index+'.item_current_price']">
                                            {{ errrors[index+'.item_current_price'][0].replace('items.'+index+'.', '') }}
                                        </span>
                                    </td>
                                    <td>
                                        <button style="margin-top: 8px;" class="btn btn-danger btn-sm" @click="deleteItemModal(item.id)"
                                                type="button" v-b-tooltip.hover title="Delete item"><i
                                                class="fa fa-close"></i></button>
                                        <a class="btn btn-primary btn-sm" :href="item.url" target="_blank"
                                           v-b-tooltip.hover title="View source" style="margin-top: 8px;">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <button class="btn btn-warning pd-5" style="margin-top: 8px;" type="button" v-b-tooltip.hover :title="'Instruction: '+item.description">
                                            <i class="fa fa-arrow-up"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr v-if="error">
                                    <td colspan="9" class="text-danger">Please provide valid data for item</td>
                                </tr>
                                <tr v-if="message">
                                    <td colspan="9" :class="cls">
                                        {{ message }}
                                    </td>
                                </tr>
                                <tr v-if="excced">
                                    <td colspan="9" style="padding-bottom: 0px;">
                                        <b-alert show variant="warning">{{ wMessage }}</b-alert>
                                    </td>
                                </tr>
                                <tr v-if="excced">
                                    <td colspan="9">
                                        <input type="text" class="form-control"
                                               placeholder="Shipping cost per pound"
                                               v-model="order.shipping_cost"
                                        />
                                        <span class="text-danger" v-if="errrors.shipping_cost">{{ errrors.shipping_cost[0] }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="9" align="right">
                                        <button class="btn btn-primary"><i class="fa fa-spinner fa-spin"
                                                                           v-if="loading"></i>&nbsp;Save
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                        <!--end of desktop section-->
                    </div>
                </div>
            </div>
            <b-modal hide-header hide-footer v-model="deleteModal">
                <h5 class="modal-title">Are you really want to delete this Order?</h5>
                <div class="text-center">
                    <button class="btn btn-primary" @click="deletePendingItem">Delete</button>
                    <button @click="deleteModal = false" class="btn btn-danger">Cancel</button>
                </div>
            </b-modal>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import Tables from "../../components/Tables";
    import Items from '../component/Items'
    import helper from '../../../helper/helpers'
    import moment from 'moment';

    export default {
        data() {
            return {
                order: {},
                tax: {
                    tax_bd: '',
                },
                msg: '',
                myModal: false,
                currencies: {},
                helper,
                items: [],
                error: false,
                loading: false,
                message: false,
                cls: 'text-success',
                errrors: [],
                dimension: {
                    l: [],
                    h: [],
                    w: []
                },
                deleteModal: false,
                delete_id: '',
                excced: false,
                wMessage: "",
                volumetric_weight: 0
            }
        },
        components: {
            Tables,
            Items,
        },
        methods: {
            imageExists(image_url){

                let http = new XMLHttpRequest();

                http.open('HEAD', image_url, false);
                http.send();

                return http.status != 404;

            },
            orderList() {
                axios.get('/dashboard/order/pending-for-review/' + this.$route.params.id)
                    .then(response => {
                        this.order = response.data.order;
                        this.order.order_date = moment.utc(this.order.order_date).local().format('lll');
                        this.tax.tax_bd = this.order.tax_bd;
                        this.items = this.order.items;
                        this.excced = response.data.excced;
                        this.wMessage = response.data.message;
                        this.volumetric_weight = response.data.volumetric_weight;
                        this.order.shipping_cost = this.order.shipping_cost === 0 ? '' : this.order.shipping_cost;
                        this.items.forEach((el, index) => {
                            if (el.dimension) {
                                let dimension = el.dimension.split('x');
                                this.dimension.h[index] = typeof dimension[2] != 'undefined' ? dimension[2].replace(/\s[ a-zA-Z]+\w/, '').trim() : 0;
                                this.dimension.w[index] = typeof dimension[1] != 'undefined' ? dimension[1].replace(/\s[ a-zA-Z]+\w/, '').trim() : 0;
                                this.dimension.l[index] = typeof dimension[0] != 'undefined' ? dimension[0].replace(/\s[ a-zA-Z]+\w/, '').trim() : 0;
                                this.calculateVolumetricWeight(el, index, true);
                            }
                            el.item_current_price = el.item_price ? el.item_price.item_current_price : 0.0;
                            el.shipping_cost = el.item_price ? el.item_price.shipping_cost : 0.0;
                        });
                    })
            },

            changeTax(id) {
                axios.patch('/dashboard/order/edit-tax-bd/' + id, this.tax).then(response => {
                    this.msg = response.data.message;
                    setTimeout(() => {
                        this.msg = ''
                    }, 3000)

                }).catch(error => {
                    console.log(error.response.data)
                })
            },

            calculateVolumetricWeight(item, index, checker = false) {
                let height = isNaN(this.dimension.h[index]) ? 0 : this.dimension.h[index];
                let length = isNaN(this.dimension.l[index]) ? 0 : this.dimension.l[index];
                let width = isNaN(this.dimension.w[index]) ? 0 : this.dimension.w[index];
                let dimension = length + "x" + width + "x" + height;
                item.dimension = dimension;
                let weight = item.weight;
                let weightInLb = helper.convertToLb(weight);
                let dimensionToWeight = helper.convertToVolumetricWeight(dimension);
                let volumetric_weight = this.items[index].volumetric_weight;
                if (checker && volumetric_weight)
                    this.items[index].volumetric_weight = volumetric_weight;
                if (!checker)
                    this.items[index].volumetric_weight = weightInLb >= dimensionToWeight ? weightInLb : dimensionToWeight;
            },


            submitForReview() {
                this.$validator.validateAll().then((valid) => {
                    if (Object.keys(this.errors.items).length) {
                        return;
                    }
                    this.error = false;
                    this.loading = true;
                    this.errrors = [];
                    this.order.exceed = this.excced;
                    this.order.volumetric_weight = this.volumetric_weight;
                    if (valid) {
                        axios.patch('/dashboard/order/review-submit-item/' + this.order.id, this.order).then((response) => {
                            this.order.exceed = false;
                            this.loading = false;
                            this.message = response.data.message;
                            this.cls = response.data.status ? 'text-success' : 'text-danger';
                            setTimeout(() => {
                                this.message = false;
                                console.log(response.data.excced);
                                if (response.data.excced) {
                                    this.orderList();
                                }
                                if (response.data.status) {
                                    this.$router.push({path: '/dashboard/orders/pending-review'})
                                }
                            }, 4000);
                        }).catch((error) => {
                            this.loading = false;
                            this.errrors = error.response.data;
                        });
                    }
                })
            },
            deleteItemModal(id) {
                this.deleteModal = true;
                this.delete_id = id;
            },
            deletePendingItem() {
                let id = this.delete_id;
                axios.delete('/dashboard/carts/' + id).then(response => {
                    this.message = response.data.success;
                    this.orderList()
                    this.deleteModal = false;
                })
            }
        },
        watch: {
            fetchOrder: {
                handler: 'orderList',
                immediate: true,
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

    .lg-title {
        font-size: 16px;
        font-weight: bold;
        line-height: 35px;
    }

    .font-default {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }

    .font-default-15 {
        font-size: 15px;
        font-weight: 400;
    }

    #table td, #table th {
        border: 1px solid #fff;
        padding: 5px;
    }


    #table tr:hover {
        background-color: #ddd;
    }

    #table th {
        padding-top: 8px;
        padding-bottom: 8px;
        text-align: left;
        background-color: #f05561;
        color: white;
        font-size: 14px;
    }
    .item-image-url{
        max-width: 50px;
    }
</style>
