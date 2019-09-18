<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-12">
                <b-card>

                    <div class="card-body">

                        <b-form-fieldset>
                            <label><b>Title</b></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="cartItems.title"></b-form-input>
                            </b-input-group>
                            <p v-if="cartItems.url"><a :href="cartItems.url" target="_blank">{{ cartItems.url}}</a></p>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label><b>Weight </b>(Pound)</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <input type="number"
                                       class="form-control"
                                       @input="calculateVolumetricWeight()"
                                       v-model="cartItems.weight"/>
                            </b-input-group>
                        </b-form-fieldset>
                        <label><b>Dimension </b>(Inches )</label><br>
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
                        <input type="hidden" name="Dimension" v-model="cartItems.dimension"/>

                        <b-form-fieldset>
                            <label><b>Volumetric Weight<span class="star-req"> *</span></b></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Volumetric Weight"
                                              v-validate="'required|decimal'"
                                              v-model="cartItems.volumetric_weight"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Volumetric Weight')" class="text-danger">{{ errors.first('Volumetric Weight')}}</span>
                            <span v-if="cartItemError.volumetric_weight" class="has-text-danger">{{ cartItemError.volumetric_weight[0] }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label><b>Price<span class="star-req"> *</span></b></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="price"
                                              v-validate="'required|decimal'"
                                              v-model="cartItems.price"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('price')" class="text-danger">{{ errors.first('price')}}</span>
                            <span v-if="cartItemError.price" class="has-text-danger">{{ cartItemError.price[0] }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label><b>Quantity</b></label>
                            <b-form-input type="text"
                                          v-model="cartItems.quantity"></b-form-input>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label><b>Maximum Available Quantity</b></label>
                            <b-form-input type="number"
                                          v-model="cartItems.available_quantity"></b-form-input>
                        </b-form-fieldset>

                        <div class="loader" v-if="loader"></div>

                    </div>

                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitCartItem()">
                            <i class="fa fa-dot-circle-o"></i> Submit
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
                cartItems: {
                    price: '',
                    quantity: '',
                },
                dimension: {
                    h: [],
                    w: [],
                    l: [],
                },
                spliter: '',

                showDimension: '',

                quantity: '',
                message: '',
                loader: false,
                cartItemError: {},

            }
        },
        created() {
            this.getCartItemInfo();
        },
        methods: {

            calculateVolumetricWeight() {
                let height = this.dimension.h;
                let width = this.dimension.w;
                let length = this.dimension.l;
                let dimension = length + "x" + width + "x" + height;

                let weight = this.cartItems.weight;
                let weightInLb = parseFloat(weight);
                let dWeightInLb = parseFloat(helper.convertToVolumetricWeight(dimension));
                let volumeMetricWight = (weightInLb > dWeightInLb) ? weightInLb : dWeightInLb;
                this.cartItems.volumetric_weight = 0;
                this.cartItems.volumetric_weight = volumeMetricWight.toFixed(2);
                this.cartItems.dimension = dimension;

            },


            submitCartItem() {

                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        if (this.$route.params.id) {
                            this.loader = true
                            axios.patch('/dashboard/carts' + '/' + this.$route.params.id, this.cartItems)
                                .then(response => {
                                    // console.log(response.data);
                                    this.message = response.data.success;
                                    this.loader = false
                                    this.$router.push({
                                        name: 'Cart Item List',
                                        params: {message: response.data.success}
                                    })
                                }).catch(error => {
                                console.log(error)
                                this.cartItemError = error.response.data;
                            });
                        } else {
                            this.loader = true
                            axios.patch('/dashboard/carts' + '/' + this.$route.params.cid, this.cartItems)
                                .then(response => {
                                    // console.log(response.data);
                                    this.message = response.data.success;
                                    this.loader = false
                                    this.$router.push({
                                        name: 'Cart Review List',
                                        params: {message: response.data.success}
                                    })
                                }).catch(error => {
                                console.log(error)
                                this.cartItemError = error.response.data;
                            });
                        }
                    }
                })


            },


            getCartItemInfo() {
                if (this.$route.params.id) {

                    axios.get('/dashboard/carts/' + this.$route.params.id + '/edit')
                        .then(response => {
                            this.cartItems = response.data;
                            if (this.cartItems.weight) {
                                this.cartItems.weight = response.data.weight.replace(/[a-zA-Z]+/, '').trim();
                            }

                            this.cartItems.price = response.data.item_price.item_price;
                            // console.log(this.cartItems.price)
                            this.cartItems.quantity = response.data.item_price.quantity;
                            // console.log( this.cartItems.quantity)

                            this.showDimension = response.data.dimension;
                            this.spliter = this.showDimension.split("x");
                            this.dimension.h = this.spliter[2].replace(/[a-zA-Z]+/, '').trim();
                            this.dimension.w = this.spliter[1].replace(/[a-zA-Z]+/, '').trim();
                            this.dimension.l = this.spliter[0].replace(/[a-zA-Z]+/, '').trim();
                            console.log(this.dimension.l)


                        }).catch(error => {
                        console.log(error)
                    })
                } else if (this.$route.params.cid) {
                    axios.get('/dashboard/carts/' + this.$route.params.cid + '/edit')
                        .then(response => {
                            this.cartItems = response.data;
                            if (this.cartItems.weight) {
                                this.cartItems.weight = response.data.weight.replace(/[a-zA-Z]+/, '').trim();
                            }

                            this.cartItems.price = response.data.item_price.item_price
                            this.cartItems.quantity = response.data.item_price.quantity

                            this.showDimension = response.data.dimension;
                            this.spliter = this.showDimension.split("x");
                            this.dimension.h = this.spliter[2].replace(/[a-zA-Z]+/, '').trim();
                            this.dimension.w = this.spliter[1].replace(/[a-zA-Z]+/, '').trim();
                            this.dimension.l = this.spliter[0].replace(/[a-zA-Z]+/, '').trim();


                        }).catch(error => {
                        console.log(error)
                    })
                }
            },


            reset() {
                this.cartItems = {}
                this.cartItemError = {}
            }


        }
    }
</script>

<style scoped>
    .loader {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 75px;
        height: 75px;
        animation: spin 2s linear infinite;
        z-index: 5;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
