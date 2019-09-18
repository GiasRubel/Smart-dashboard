<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-12">
                <b-alert v-if="message" variant="success" show fades dismissible><strong>{{message}}</strong></b-alert>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <b-card>
                    <div slot="header">
                        <router-link :to="{name: 'Product Measurment List'}"><i class="fa fa-arrow-left"></i>&nbsp;
                            Product Measurement List
                        </router-link>
                    </div>
                    <b-form-fieldset>
                        <label>Title<span class="star-req"> *</span></label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input type="text"
                                          name="Title" v-validate="'required'"
                                          v-model="product_measurment.title"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                        <span v-if="measurmentError.title" class="text-danger">{{ measurmentError.title[0] }}</span>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Store</label>
                        <select size="0" class="form-control"
                                v-model="product_measurment.store_id">
                            <option value="" selected>Please select Store</option>
                            <option v-for="(store,key) in stores"
                                    :value="key">{{ store }}
                            </option>

                        </select>
                    </b-form-fieldset>
                    <b-form-fieldset>
                        <label>Sku<span class="star-req"> *</span></label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input type="text"
                                          name="Product Measurment" v-validate="'required'"
                                          v-model="product_measurment.sku"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('Product Measurment')" class="text-danger">{{ errors.first('Product Measurment')}}</span>
                        <span v-if="measurmentError.sku" class="text-danger">{{ measurmentError.sku[0] }}</span>
                    </b-form-fieldset>
                    <b-form-fieldset>
                        <label>Weight(Pound)</label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <input type="number" placeholder="weight"
                                   v-model="product_measurment.weight" class="form-control"
                                   @input="calculateVolumetricWeight()">
                            <!--<b-form-input type="number"-->
                            <!--v-model="product_measurment.weight"-->
                            <!--@input="calculateVolumetricWeight()"-->
                            <!--&gt;</b-form-input>-->
                        </b-input-group>
                    </b-form-fieldset>
                    <b-form-fieldset>
                        <label>Dimension (Inches )</label><br>
                        <div class="form-inline ">

                            <input type="number" placeholder="length"
                                   v-model="dimension.l" class="form-control"
                                   @input="calculateVolumetricWeight()">
                            <input type="number" placeholder="width"
                                   v-model="dimension.w" class="form-control"
                                   @input="calculateVolumetricWeight()">
                            <input type="number" placeholder="height"
                                   v-model="dimension.h" class="form-control"
                                   @input="calculateVolumetricWeight()">

                        </div>
                        <br>
                        <input type="hidden" name="Dimension" v-model="product_measurment.dimension"/>
                    </b-form-fieldset>
                    <b-form-fieldset>
                        <label>Volumetric Weight<span class="star-req"> *</span></label>
                        <b-input-group left="<i class='fa fa-user'></i>">
                            <b-form-input type="text"
                                          name="v_weight" v-validate="'required|decimal'"
                                          data-vv-as="Volumetric weight"
                                          v-model="product_measurment.volumetric_weight"></b-form-input>
                        </b-input-group>
                        <span v-if="errors.has('v_weight')" class="text-danger">{{ errors.first('v_weight')}}</span>
                    </b-form-fieldset>


                    <div slot="footer">
                        <b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit" size="sm" variant="success" @click="storeProductMeasurment"><i
                                class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import helper from '../../helper/helpers'

    export default {
        data() {
            return {
                product_measurment: {
                    store_id: '',
                },

                dimension: {
                    h: [],
                    w: [],
                    l: [],
                },
                spliter: '',

                showDimension: '',

                message: '',
                measurmentError: {},
                stores: '',
            }
        },
        created() {
            this.getStoreList();

            if (this.$route.params.id) {
                this.getProductMeasurment();
            }
        },
        methods: {

            storeProductMeasurment() {
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        if (this.$route.params.id) {
                            axios.patch('/dashboard/product-measurment/' + this.$route.params.id, this.product_measurment)
                                .then(response => {
                                    console.log(response.data);
                                    this.message = response.data.success;

                                    this.$router.push({
                                        name: 'Product Measurment List',
                                        params: {message: response.data.success}
                                    })

                                }).catch(error => {
                                this.measurmentError = error.response.data;
                            });

                        } else {

                            axios.post('/dashboard/product-measurment', this.product_measurment)
                                .then(response => {
                                    this.message = response.data.success;
                                    setTimeout(() => {
                                        this.message = ''
                                    }, 3000);
                                    this.$validator.reset();
                                    this.product_measurment = {
                                        store_id: '',
                                    };
                                    this.dimension = {
                                        h: [],
                                        w: [],
                                        l: [],
                                    };
                                    this.measurmentError = {};
                                }).catch(error => {
                                this.measurmentError = error.response.data;
                            });
                        }
                    }
                })


            },


            getProductMeasurment() {
                axios.get('/dashboard/product-measurment/' + this.$route.params.id + '/edit')
                    .then(response => {

                        this.product_measurment = response.data;

                        this.product_measurment.volumetric_weight = response.data.volumetric_weight;
                        this.showDimension = response.data.dimension;
                        this.spliter = this.showDimension.split("x", 3);
                        this.dimension.h = this.spliter[2].replace(/[a-zA-Z]+/, '').trim();
                        this.dimension.w = this.spliter[1].replace(/[a-zA-Z]+/, '').trim();
                        this.dimension.l = this.spliter[0].replace(/[a-zA-Z]+/, '').trim();

                        this.product_measurment.approved = response.data.approved === 1;
                    }).catch(error => {
                    console.log(error)
                })
            },

            getStoreList() {
                axios.get('/dashboard/product-measurment/create').then(response => {
                    this.stores = response.data;
                }).catch(error => {
                    console.log(error)
                })
            },

            calculateVolumetricWeight() {
                let height = this.dimension.h;
                let width = this.dimension.w;
                let length = this.dimension.l;
                let dimension = length + "x" + width + "x" + height;

                let weight = this.product_measurment.weight;
                let weightInLb = parseFloat(weight);
                let dWeightInLb = parseFloat(helper.convertToVolumetricWeight(dimension));
                let volumeMetricWight = (weightInLb > dWeightInLb) ? weightInLb : dWeightInLb;
                this.product_measurment.volumetric_weight = volumeMetricWight.toFixed(2);

                this.product_measurment.dimension = dimension;

            },

            reset() {
                this.$validator.reset();
                this.product_measurment = {
                    store_id: '',
                };
                this.measurmentError = {};
            }
        }
    }
</script>
