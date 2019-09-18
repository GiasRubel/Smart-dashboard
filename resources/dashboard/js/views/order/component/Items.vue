<template>
    <div class="card order-list-menu">
        <div class="card-header">
            Items
            <div class="float-right">
                <button class="btn btn-primary btn-sm" style="margin: 0px;" @click="changeItemsStatus">Change status</button>
            </div>
        </div>
        <div class="card-body items-table">
            <div class="row" v-if="orders.items">
                <div class="col-12">
                    <div class="table-mobile desktop-hide table-bordered" v-for="(item, index) in orders.items">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <td>Action</td>
                                <td>
                                    <div class="btn-group">
                                        <a class="btn-primary btn pd-5 text-white" style="cursor:pointer;"
                                           v-b-tooltip.hover title="View" @click="showItemDetails(item.id)">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <button class="btn-success btn pd-5" v-b-tooltip.hover title="Edit"
                                                @click="showIteEditModal(item.id)"><i class="fa fa-edit"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Item from</td>
                                <td><b>{{ item.store ? item.store.store_name: '' }}</b></td>
                            </tr>
                            <tr>
                                <td>Item title</td>
                                <td><a :href="item.url" target="_blank">{{ item.title || helper.subString(item.url) }}</a></td>
                            </tr>
                            <tr>
                                <td>Weight(lb)</td>
                                <td>{{ helper.fixed(item.volumetric_weight) }}</td>
                            </tr>
                            <tr>
                                <td>Item status</td>
                                <td>
                                    <label>
                                        <select class="form-control" v-model="item.item_status" @change="changeItemStatus(index)">
                                            <option value="0">Select one</option>
                                            <option v-for="status in options" :value="status.id">{{ status.title }}</option>
                                        </select>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Item price</td>
                                <td>{{ item.item_price ? helper.fixed(item.item_price.price): 0.00 }}</td>
                            </tr>
                            <tr>
                                <td>QTY</td>
                                <td>{{ item.item_price ? item.item_price.quantity: 0.00 }}</td>
                            </tr>
                            <tr>
                                <td>Item total price</td>
                                <td>{{ item.item_price ? helper.fixed(item.item_price.item_subtotal_price) : 0.00 }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="item-grand-total desktop-hide">
                        <table>
                            <tr>
                                <td>Total:</td>
                                <td>{{ helper.fixed(orders.total_price) }}</td>
                            </tr>
                        </table>
                    </div>

                    <table class="table table-bordered table-sm mg-0 mobile-hide">
                        <thead>
                        <tr>
                            <th>Action</th>
                            <td style="font-weight: 700;" width="7%">Item from</td>
                            <th width="25%">Item title</th>
                            <th>Weight(lb)</th>
                            <th width="20%">Item status</th>
                            <th>Item price</th>
                            <th>QTY</th>
                            <th width="8%">Shipping cost</th>
                            <th>Item total price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in orders.items">
                            <td>
                                <div class="btn-group">
                                    <a class="btn-primary btn pd-5 text-white" style="cursor:pointer;" v-b-tooltip.hover
                                       title="View" @click="showItemDetails(item.id)">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <button class="btn-success btn pd-5" v-b-tooltip.hover title="Edit"
                                            @click="showIteEditModal(item.id)"><i class="fa fa-edit"></i></button>
                                </div>
                            </td>
                            <td width="7%"><b>{{ item.store ? item.store.store_name: '' }}</b></td>
                            <td><a :href="item.url" target="_blank">{{ item.title || helper.subString(item.url) }}</a></td>
                            <td>{{ helper.fixed(item.volumetric_weight) }}</td>
                            <td width="10%">
                                <label>
                                   <select class="form-control" v-model="item.item_status" @change="changeItemStatus(index)">
                                        <option value="0">Select one</option>
                                        <option v-for="status in options" :value="status.id">{{ status.title }}</option>
                                   </select>
                                </label>
                            </td>
                            <td>{{ helper.fixed(item.item_price.item_current_price) }}</td>
                            <td>{{ item.item_price ? item.item_price.quantity: 0.00 }}</td>
                            <td  width="8%">{{ helper.fixed(item.item_price.shipping_cost) }}</td>
                            <td align="right">{{ helper.fixed(item.item_price.item_subtotal_price)}}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="8">Total</td>
                            <td align="right">{{ helper.fixed(orders.total_price) }}</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <b-modal hide-footer hide-header no-fade size="lg" v-model="itemModal">
            <div class="card item-modal" v-if="item">
                <div class="card-header item-header">
                    <b>{{ item.title || item.url }}</b>
                    <div class="float-right">
                        <i class="fa fa-times-circle-o c-pointer" @click="itemModal = !itemModal"></i>
                    </div>
                </div>
                <div class="card-body pd-5">
                    <table class="table table-bordered table-hover table-sm mg-0">
                        <tr>
                            <td width="30%">Item from</td>
                            <td>{{ item.store ? item.store.store_name : '' }}</td>
                        </tr>
                        <tr>
                            <td>Item weight</td>
                            <td>{{ item.weight }}</td>
                        </tr>
                        <tr>
                            <td>Item dimension</td>
                            <td>{{ item.dimension }}</td>
                        </tr>
                        <tr>
                            <td>Special description</td>
                            <td>{{ item.description }}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td>{{ item.item_price ? item.item_price.quantity : '' }}</td>
                        </tr>
                        <tr>
                            <td>Item total price</td>
                            <td v-if="item.item_price">{{ helper.fixed(item.item_price.item_subtotal_price) }}</td>
                        </tr>
                        <tr v-if="item.item_admin_operation_info">
                            <td>Purchase invoice number</td>
                            <td>{{ item.item_admin_operation_info.purchase_invoice_number }}</td>
                        </tr>
                        <tr>
                            <td>SKU</td>
                            <td>{{ item.sku }}</td>
                        </tr>
                        <tr>
                            <td>Is gift</td>
                            <td>{{ item.is_gift ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr>
                            <td>Is apply insurance</td>
                            <td>{{ item.is_apply_insurance ? 'Yes' : 'No' }}</td>
                        </tr>
                        <tr>
                            <td>Item status</td>
                            <td>{{ item.item_status }}</td>
                        </tr>
                        <tr>
                            <td>Volumetric Weight</td>
                            <td>{{ item.volumetric_weight }}(Pounds)</td>
                        </tr>
                        <tr v-if="item.item_admin_operation_info">
                            <td>Custom amount</td>
                            <td>{{ helper.fixed(item.item_admin_operation_info.custom_amount) }}</td>
                        </tr>
                        <tr v-if="item.item_admin_operation_info">
                            <td colspan="2" align="center"><b>Custom amount reason</b></td>
                        </tr>
                        <tr v-if="item.item_admin_operation_info">
                            <td colspan="2" align="center">{{ item.item_admin_operation_info.custom_amount_reason }}
                            </td>
                        </tr>
                        <tr>
                            <td>Show in popular</td>
                            <td>
                                <input type="checkbox" v-model="item.is_in_popular" @change="showInPopular" />
                            </td>
                        </tr>
                        <tr v-if="popularMessage">
                            <td colspan="2" style="color: GREEN">{{ popularMessage }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </b-modal>
        <b-modal hide-footer hide-header no-fade v-model="itemEditModal" size="md">
            <form action="/dashboard/order/update-admin-operation" method="post"
                  @submit.prevent="updateAdminOperation()">
                <div class="card">
                    <div class="card-header">
                        <b>{{ item.title || item.url }}</b>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label>Item weight</label>
                            <input type="text" class="form-control" v-model="admin_operation.weight"/>
                        </div>
                        <div class="form-group">
                            <label>Custom amount</label>
                            <input type="text" class="form-control" v-model="admin_operation.custom_amount">
                        </div>
                        <div class="form-group">
                            <label>Custom amount reason</label>
                            <textarea id="" cols="30" rows="5" class="form-control"
                                      v-model="admin_operation.custom_amount_reason"></textarea>
                        </div>
                        <div class="form-group">
                            <span v-if="message" :class="{ 'text-danger' : error, 'text-success' : !error }">{{ message }}</span>
                            <b-alert v-if="errorss" show variant="danger" dismissible>
                                <ul>
                                    <li v-for="err in errorss">{{ err[0] }}</li>
                                </ul>
                            </b-alert>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="pull-right">
                            <button class="btn btn-primary btn-sm" :disabled="status"><i class="fa fa-spinner fa-spin"
                                                                                         v-if="status"></i>&nbsp;Save
                            </button>
                            <button @click="itemEditModal = !itemEditModal" type="button" class="btn btn-danger btn-sm">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal v-model="modalMessage" hide-footer hide-header>
            <div class="card" style="margin: 0px">
                <div class="card-header">{{ title }}</div>
                <div class="card-body text-center">
                    {{ messageSuccess }}
                </div>
            </div>
        </b-modal>


        <b-modal v-model="usOnHandModal" hide-header hide-footer>
            <div class="card">
                <div class="card-header">
                    {{ item.title }}
                    <div class="float-right">
                        <button class="btn-primary btn-sm btn" @click="++counter"><i class="fa fa-plus"></i></button>
                        <button class="btn-danger btn-sm btn" @click="counter > 1 ? --counter : 1"><i
                                class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="text-warning pd-5">Height Weight Length must be in INCH</div>
                    <table class="table table-bordered table-hover mobile-hide">
                        <thead>
                        <tr>
                            <td>Wight</td>
                            <td>Dimension</td>
                            <td>Volumetric weight</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(cnt,index) in range(counter)">
                            <td>
                                <input type="text" class="form-control"
                                       name="weight" v-validate="'required'"
                                       data-vv-as="Weight"
                                       @input="calculateVolumetricWeightMultiple(item, index)"
                                       v-model="review.w[index]" placeholder="Weight"/>
                                <span v-if="errors.has('weight')" class="text-danger">{{ errors.first('weight')}}</span>
                            </td>
                            <td>
                                <div class="form-inline">
                                    <input type="text" class="form-control"
                                           name="length" v-validate="'required|decimal'"
                                           data-vv-as="Length"
                                           @input="calculateVolumetricWeightMultiple(item, index)" style="width: 33%"
                                           v-model="review.d.l[index]" placeholder="Length"/>

                                    <input type="text" class="form-control"
                                           name="width" v-validate="'required|decimal'"
                                           data-vv-as="Width"
                                           @input="calculateVolumetricWeightMultiple(item, index)" style="width: 33%"
                                           v-model="review.d.w[index]" placeholder="Width"/>

                                    <input type="text" class="form-control"
                                           name="height" v-validate="'required|decimal'"
                                           data-vv-as="Height"
                                           @input="calculateVolumetricWeightMultiple(item, index)" style="width: 33%"
                                           v-model="review.d.h[index]" placeholder="Height"/>
                                    <span v-if="errors.has('length')"
                                          class="text-danger">{{ errors.first('length')}}</span><br>
                                    <span v-if="errors.has('width')"
                                          class="text-danger">{{ errors.first('width')}}</span>

                                    <span v-if="errors.has('height')"
                                          class="text-danger">{{ errors.first('height')}}</span>

                                </div>
                            </td>
                            <td>
                                <input type="text" class="form-control"
                                       name="volumetric" v-validate="'required|decimal'"
                                       data-vv-as="Volumetric Weight"
                                       v-model="review.v[index]"
                                       placeholder="Volumetric weight"/>
                                <span v-if="errors.has('volumetric')"
                                      class="text-danger">{{ errors.first('volumetric')}}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <table class="table table-hover table-bordered desktop-hide">
                        <tbody v-for="(cnt,index) in range(counter)">
                            <tr>
                                <td width="30%">Wight</td>
                                <td>
                                    <input type="text" class="form-control"
                                           name="weight" v-validate="'required'"
                                           data-vv-as="Weight"
                                           @input="calculateVolumetricWeightMultiple(item, index)"
                                           v-model="review.w[index]" placeholder="Weight"/>
                                    <span v-if="errors.has('weight')" class="text-danger">{{ errors.first('weight')}}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Dimension</td>
                                <td>
                                    <div class="form-inline">
                                        <input type="text" class="form-control"
                                               name="length" v-validate="'required|decimal'"
                                               data-vv-as="Length"
                                               @input="calculateVolumetricWeightMultiple(item, index)" style="width: 33%"
                                               v-model="review.d.l[index]" placeholder="Length"/>

                                        <input type="text" class="form-control"
                                               name="width" v-validate="'required|decimal'"
                                               data-vv-as="Width"
                                               @input="calculateVolumetricWeightMultiple(item, index)" style="width: 33%"
                                               v-model="review.d.w[index]" placeholder="Width"/>

                                        <input type="text" class="form-control"
                                               name="height" v-validate="'required|decimal'"
                                               data-vv-as="Height"
                                               @input="calculateVolumetricWeightMultiple(item, index)" style="width: 33%"
                                               v-model="review.d.h[index]" placeholder="Height"/>
                                        <span v-if="errors.has('length')"
                                              class="text-danger">{{ errors.first('length')}}</span><br>
                                        <span v-if="errors.has('width')"
                                              class="text-danger">{{ errors.first('width')}}</span>

                                        <span v-if="errors.has('height')"
                                              class="text-danger">{{ errors.first('height')}}</span>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Volumetric weight</td>
                                <td>
                                    <input type="text" class="form-control"
                                           name="volumetric" v-validate="'required|decimal'"
                                           data-vv-as="Volumetric Weight"
                                           v-model="review.v[index]"
                                           placeholder="Volumetric weight"/>
                                    <span v-if="errors.has('volumetric')"
                                          class="text-danger">{{ errors.first('volumetric')}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <div class="float-right pd-5">
                        <button class="btn btn-primary btn-sm" @click="saveItemReview(item)"><i v-if="rLoading"
                                                                                                class="fa fa-spinner fa-spin"></i>&nbsp;Save
                        </button>
                        <button class="btn btn-sm btn-danger" type="button" @click="usOnHandModal = !usOnHandModal">Close
                        </button>
                    </div>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
    import axios from 'axios'
    import helper from '../../../helper/helpers'

    export default {
        props: ['orders', 'options'],
        name: "Items",
        data() {
            return {
                counter: 1,
                itemModal: false,
                item: {},
                itemEditModal: false,
                admin_operation: {
                    order_id: this.$route.params.id,
                    weight: '',
                    item_id: ''
                },
                review: {
                    w: [],
                    d: {
                        h: [],
                        w: [],
                        l: []
                    },
                    v: []
                },
                itemStatusMessage: [],
                status: false,
                message: false,
                error: false,
                errorss: false,
                messageSuccess: '',
                title: '',
                modalMessage: false,
                usOnHandModal: false,
                rLoading: false,
                popularMessage: '',
                helper
            }
        },
        methods: {
            showItemDetails(id) {
                this.itemModal = true
                this.item = this.orders.items.find(function (it) {
                    return it.id === id;
                })
            },
            showIteEditModal(id) {
                this.itemEditModal = true
                let item = this.orders.items.find(function (it) {
                    return it.id === id;
                });
                this.item = item
                if (item.item_admin_operation_info) {
                    this.admin_operation = item.item_admin_operation_info
                }
                this.admin_operation.weight = item.weight;
                this.admin_operation.item_id = item.id;
                this.admin_operation.order_id = this.$route.params.id;
            },
            updateAdminOperation() {
                this.status = true;
                axios.post('/dashboard/order/update-admin-operation', this.admin_operation).then(response => {
                    this.status = false
                    this.message = response.data.message
                    this.error = !response.data.status
                    setTimeout(() => {
                        this.itemEditModal = false
                        this.message = false
                    }, 4000);
                    this.$parent.orderList()
                }).catch(error => {
                    this.status = false
                    this.errorss = error.response.data
                    setTimeout(() => {
                        this.errorss = false
                    }, 2000)
                })
            },
            changeItemsStatus(){
                this.modalMessage = true;
                this.title = 'Loading...';
                this.messageSuccess = 'Loading...'
                axios.post('/dashboard/item/change-status', this.orders.items).then((response) => {
                    this.title = 'Message';
                    this.messageSuccess = response.data.message;
                    this.$parent.orderList()
                    setTimeout(() => {
                        this.modalMessage = false;
                    }, 2000)
                }).catch((error) => {
                    console.log(error.response);
                });
            },
            changeItemStatus(index){
                let item = this.orders.items[index];
                let status = this.options.find((status) => {
                    return status.id === item.item_status;
                });

                if (status.alias === 'us-on-hand'){
                    this.usOnHandModal = true;
                    this.item = item;
                }
            },
            saveItemReview(){
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        this.rLoading = true;
                        axios.post("/dashboard/item/save-multiple-review", {
                            review: this.review,
                            item: this.item
                        }).then(response => {
                            this.rLoading = false;
                            this.review = {
                                w: [],
                                d: {
                                    h: [],
                                    w: [],
                                    l: []
                                },
                                v: []
                            };
                            alert(response.data.message)
                            this.usOnHandModal = false;
                        }).catch(err => {
                            this.usOnHandModal = false;
                            this.rLoading = false;
                            alert("Something went wrong, Please provide every single information");
                        });
                    }
                })
            },
            calculateVolumetricWeightMultiple(item, index) {
                let height = this.review.d.h[index];
                let width = this.review.d.w[index];
                let length = this.review.d.l[index];
                let dimension = height + "x" + width + "x" + length;
                let weight = this.review.w[index];
                let weightInLb = parseFloat(helper.convertToLb(weight));
                let dWeightInLb = parseFloat(helper.convertToVolumetricWeight(dimension));
                let volumeMetricWight = (weightInLb > dWeightInLb) ? weightInLb : dWeightInLb;
                this.review.v[index] = 0;
                this.review.v[index] = volumeMetricWight.toFixed(2);
            },
            range(counter) {
                let arr = [];
                for (let i = 1; i <= counter; i++) {
                    arr.push(i);
                }
                return arr;
            },
            submitCustomPrice() {
                this.cLoader = true;
                this.cPriceErrors = false;
                axios.post('/dashboard/order/update-custom-price', this.changedItem).then(response => {
                    this.message = response.data.message;
                    this.cLoader = false;
                    setTimeout(() => {
                        this.customPriceModal = false;
                        this.message = ''
                    }, 6000)
                }).catch(error => {
                    this.cLoader = false;
                    this.cPriceErrors = error.response.data;
                    console.log(this.errorss);
                    setTimeout(() => {
                        this.cPriceErrors = false
                    }, 4000)
                })
            },
            showInPopular(){
                axios.post("/dashboard/item/show-in-popular/"+this.item.id, this.item).then(response => {
                    this.popularMessage = response.data.message;
                    setTimeout(() => {
                        this.popularMessage = ''
                    }, 4000);
                }).catch(error => {

                });
            }
        }
    }
</script>

<style scoped>

</style>