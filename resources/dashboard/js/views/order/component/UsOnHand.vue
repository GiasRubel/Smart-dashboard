<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <form method="post" action="#" @submit.prevent="submitProductMeasurementDetails">
                            <div class="row">
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="card">
                                        <div class="card-header">Ordered items details</div>
                                        <div class="card-body pd-5">
                                            <table class="table-bordered table table-hover">
                                                <thead>
                                                <tr>
                                                    <th width="25%">Item name</th>
                                                    <th width="25%">Weight</th>
                                                    <th width="25%"> Dimension</th>
                                                    <th width="25%">Volumetric weight</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="item in measurementItems">
                                                    <td>{{ item.title ? helper.subString(item.title) : helper.subString(item.url) }}</td>
                                                    <td>{{ item.product_measurement ? item.product_measurement.weight :
                                                        0.00 }}
                                                    </td>
                                                    <td>{{ item.product_measurement? item.product_measurement.dimension
                                                        : 0.00 }}
                                                    </td>
                                                    <td>{{ item.product_measurement && item.product_measurement.volumetric_weight ?
                                                        Number(item.product_measurement.volumetric_weight).toFixed(2) : 0.00 }}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div class="card">
                                        <div class="card-header">
                                            Received items details
                                        </div>
                                        <div class="card-body pd-5">
                                            <div class="text-warning pd-5">Height Weight Length must be in INCH</div>
                                            <table class="table table-bordered table-hover table-sm">
                                                <thead>
                                                <tr>
                                                    <th width="30%">Item name</th>
                                                    <th width="15%">Weight</th>
                                                    <th width="30%">Dimension</th>
                                                    <th width="25%">Volumetric weight</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(item, index) in measurementItems">
                                                    <td>{{ item.title ? helper.subString(item.title) : helper.subString(item.url) }}</td>
                                                    <td style="padding: 2px;">
                                                        {{ item.product_measurement ? helper.fixed(item.product_measurement.review_weight) : '0.00' }}
                                                    </td>
                                                    <td style="padding: 2px;">
                                                        <div class="form-inline">
                                                            <span v-if="Object.keys(item.product_measurement.reviews).length > 0">
                                                                <div v-for="dimension in item.product_measurement.reviews">{{ dimension.item_from_dimension+"   " }}</div>
                                                            </span>
                                                            <span v-else>{{ item.product_measurement.dimension }}</span>
                                                        </div>
                                                    </td>
                                                    <td style="padding: 2px;">
                                                        <div class="form-inline">
                                                            {{ item.product_measurement ?
                                                                helper.fixed(item.product_measurement.approved_weight) : '0.00'
                                                            }}&nbsp;&nbsp;
                                                            <p style="width: 100%; margin: 0;">
                                                                <button class="btn btn-success pd-5"
                                                                        v-if="!item.product_measurement.approved_by"
                                                                        type="button"
                                                                        @click="approvedMeasurement(item.product_measurement.id)">
                                                                    <i class="fa fa-check"></i></button>
                                                                <button class="btn btn-primary pd-5" type="button"
                                                                        @click="multipleReviewModal(item, index)"><i
                                                                        class="fa fa-pencil"></i></button>
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <span :class="{ 'text-success' : !error, 'text-danger' : error }">{{ msg }}</span>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="delivered_document">Image</label><br>
                                        <input type="file" id="delivered_document" name="file" @change="selectImage">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="pull-right">
                                        <button class="btn btn-success" :disabled="loading"><i v-if="loading"
                                                                                               class="fa fa-spinner fa-spin"></i>&nbsp;Change
                                            status
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <b-modal ref="reviewModal" hide-footer hide-header size="lg" v-model="reviewModal">
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
                    <table class="table table-bordered table-hover">
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
                    <div class="float-right pd-5">
                        <button class="btn btn-primary btn-sm" @click="saveItemReview(item)"><i v-if="rLoading"
                                                                                                class="fa fa-spinner fa-spin"></i>&nbsp;Save
                        </button>
                        <button class="btn btn-sm btn-danger" type="button" @click="reviewModal = !reviewModal">Close
                        </button>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal hide-footer hide-header v-model="customPriceModal" size="lg">
            <div class="card" style="margin: 0">
                <div class="card-body">
                    <b-alert show dismissible>
                        {{ message }}
                    </b-alert>
                    <form method="post" @submit.prevent="submitCustomPrice">
                        <div class="row">
                            <div class="col-md-6" v-for="(item, index) in changedItem">
                                <div class="form-group sp">
                                    <label>{{ ++index }}.&nbsp;{{ item.item_name }}
                                        ({{
                                        item.ordered_item_volumetric_weight?Number(item.ordered_item_volumetric_weight).toFixed(2):0.0
                                        }} -> {{ item.new_volumetric_weight?Number(item.new_volumetric_weight).toFixed(2):0.0
                                        }})</label>
                                    <input type="text" class="form-control" v-model="item.custom_amount"
                                           placeholder="Custom amount" v-b-tooltip.hover :title="'Custom amount'"/>
                                    <textarea class="form-control" rows="2" v-model="item.reason" style="resize: none;"
                                              placeholder="Custom amount reason" v-b-tooltip.hover
                                              :title="'Custom amount reason'"></textarea>

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="alert alert-danger fade show" role="alert"
                                     v-if="Object.keys(cPriceErrors).length">
                                    <ul>
                                        <li v-for="error in cPriceErrors">{{ error[0] }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="float-right">
                                    <button class="btn btn-success" type="submit"><i class="fa fa-spinner fa-spin"
                                                                                     v-if="cLoader"></i>&nbsp;Save
                                    </button>
                                    <button class="btn btn-danger" type="button" @click="customPriceModal = false">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import helper from '../../../helper/helpers'
    import axios from 'axios'

    export default {
        name: "UsOnHand",
        data() {
            return {
                counter: 1,
                reviewModal: false,
                measurementItems: {},
                error: false,
                errorss: {},
                msg: '',
                message: '',
                loading: false,
                orderId: this.$route.params.id,
                status: this.$route.params.status,
                item: {},
                review: {
                    w: [],
                    d: {
                        h: [],
                        w: [],
                        l: []
                    },
                    v: []
                },
                rLoading: false,
                customPriceModal: false,
                changedItem: [],
                cLoader: false,
                cPriceErrors: false,
                image: '',
                helper
            }
        },
        methods: {
            fetchOrderedItems() {
                axios.get('/dashboard/order/product-measurement/' + this.orderId).then((response) => {
                    this.measurementItems = response.data;
                    if (!Object.keys(this.measurementItems).length) {
                        axios.post('/dashboard/order-status-update', {
                            orderId: [this.orderId],
                            status: this.status,
                            grant: this.orderId
                        }).then((response) => {
                            alert("It seems that the added product's has no weight or dimension. For that reason, no item is available for review");
                            return this.$router.back();
                        });
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            // calculateVolumetricWeight: function (id, index) {
            //     let items = this.measurementItems;
            //     let item = items.find(function (itm) {
            //         return itm.id === id
            //     });
            //     let weight = item.product_measurement.volumetric_weight;
            //     let height = this.dimension.h[id] || 0;
            //     let width = this.dimension.w[id] || 0;
            //     let length = this.dimension.l[id] || 0;
            //     let dimension = height + "x" + width + "x" + length;
            //     let weightInLb = parseFloat(helper.convertToLb(weight));
            //     let dWeightInLb = parseFloat(helper.convertToVolumetricWeight(dimension));
            //     let volumeMetricWight = (weightInLb > dWeightInLb) ? weightInLb : dWeightInLb;
            //     this.measurementItems[index].volumetric_weight = volumeMetricWight.toFixed(2)
            //     this.measurementItems[index].dimension = dimension
            //
            // },
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
            submitProductMeasurementDetails() {
                this.loading = true;
                let formData = new FormData();
                formData.append('file', this.image);
                formData.append('status', this.status);
                formData.append('orderId', this.orderId);
                axios.post('/dashboard/order/product-measurement', formData)
                    .then(response => {
                        this.loading = false;
                        if (response.data.confirm) {
                            this.message = response.data.confirmMessage;
                            this.error = !response.data.status;
                            this.customPriceModal = true;
                            this.changedItem = response.data.changedItem
                        } else {
                            this.msg = response.data.message;
                            this.error = !response.data.status;
                        }
                        setTimeout(() => {
                            this.msg = '';
                            this.error = false;
                        }, 6000)
                    }).catch(error => {
                    this.loading = false;
                    alert(error.response.data.file[0])
                })
            },
            multipleReviewModal(item, index) {
                this.item = item;
                this.$refs.reviewModal.show();
            },
            approvedMeasurement(id) {
                axios.patch('/dashboard/item/approved/' + id).then((response) => {
                    if (response.data.status) {
                        alert(response.data.message);
                        this.fetchOrderedItems()
                    }
                }).catch(() => {
                    alert("Something went wrong please try again");
                })
            },
            saveItemReview(item) {

                this.$validator.validateAll().then((valid) => {

                    if (valid) {
                        this.rLoading = true;
                        axios.post("/dashboard/item/save-multiple-review", {
                            review: this.review,
                            item: item
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
                        }).catch(err => {
                            this.rLoading = false;
                            alert("Something went wrong, Please provide every single information");
                        });
                    }
                })
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
            selectImage(event){
                this.image = event.target.files[0];
            }
        },
        created() {
            this.fetchOrderedItems()
        }
    }
</script>

<style scoped>
    .animated >>> .modal {
        margin-top: 60px;
    }

    .sp > textarea {
        margin-top: 5px;
    }
</style>