<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link class="btn btn-link" :to="{path: '/dashboard/products/measurement-category'}"
                                     style="margin-top: 0px;"><i class="fa fa-arrow-left"></i>&nbsp;Product measurement
                            category
                        </router-link>
                    </div>
                    <div class="card-body">
                        <!--<form method="post" @submit.prevent="submitCategory">-->
                            <div class="form-group">
                                <label>Title{{$route.params.id}}</label>
                                <input type="text"
                                       class="form-control"
                                       name="title"
                                       v-validate="'required'"
                                       data-vv-as="Title"
                                       v-model="category.title">
                                <span v-show="errors.has('title')" class="text-danger">{{ errors.first('title')}}</span>
                                <span v-if="error.title" class="text-danger">{{ error.title[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label>Volumetric weight</label>
                                <input type="text" class="form-control"
                                       name="v_weight" v-validate="'required'"
                                       data-vv-as="Volumetric Weight"
                                       v-model="category.volumetric_weight">
                                <span v-show="errors.has('v_weight')"
                                      class="text-danger">{{ errors.first('v_weight')}}</span>
                                <span v-if="error.volumetric_weight" class="text-danger">{{ error.volumetric_weight[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label>Parent</label>
                                <model-list-select
                                        :list="options"
                                        v-model="category.parent_id"
                                        option-value="value"
                                        option-text="text"
                                        placeholder="Enter parent name"
                                        @searchchange="fetchM">
                                </model-list-select>
                                {{ category.parent ? category.parent.title : '' }}
                                <span v-if="errors.parent_id" class="text-danger">{{ error.parent_id[0] }}</span>
                            </div>
                            <div class="form-group">
                                <span class="text-success">{{ message }}</span>
                            </div>
                            <!--<div class="form-group">-->
                                <!--<button class="btn btn-primary btn-sm"><i class="fa fa-spinner fa-spin"-->
                                                                          <!--v-if="loader"></i> Save-->
                                <!--</button>-->
                            <!--</div>-->
                        <div class="form-group">
                            <!--<b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset</b-button>-->

                            <b-button type="submit" size="sm" variant="success" @click="submitCategory"><i
                                    class="fa fa-dot-circle-o"></i> Submit
                            </b-button>
                        </div>
                        <!--</form>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {ModelListSelect} from 'vue-search-select'

    export default {
        name: "CreateProductMeasureMentCategory",
        data() {
            return {
                category: {},
                options: [],
                error: {},
                message: '',
                loader: false
            }
        },
        methods: {

            submitCategory() {
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        if(this.$route.params.id)
                        {
                            axios.patch('/dashboard/product-measurement-category/' +  this.$route.params.id , this.category)
                                .then(response => {
                                    this.loader = false
                                    console.log(response.data);
                                    this.message = response.data.success;
                                    this.$router.push({name: 'Products Measurement Lists', params: {message: response.data.success}})

                                }).catch(error => {
                                this.storeError = error.response.data;
                            });
                        }else{
                            axios.post('/dashboard/product-measurement-category', this.category)
                                .then(response => {
                                    this.loader = false
                                    console.log(response.data);
                                    this.message = response.data.message;
                                    setTimeout(() => {
                                        this.message = ''
                                    },3000)
                                    this.$validator.reset()
                                    this.category = {},this.error = {};

                                }).catch(error => {

                                this.loader = false
                                this.error = error.response.data;
                            });
                        }
                        // this.loader = true
                        // let storeUrl = this.$route.params.id ? axios.patch : axios.post;
                        // storeUrl("/dashboard/product-measurement-category/" + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.category).then(response => {
                        //     this.loader = false
                        //     this.message = response.data.message
                        //     if (!this.$route.params.id) {
                        //         this.category = {}
                        //     }
                        //     this.error = {}
                        // }).catch(error => {
                        //     this.loader = false
                        //     this.error = error.response.data;
                        // })
                        // setTimeout(() => {
                        //     this.message = ''
                        // }, 4000)
                    }
                });

            },
            fetchMeasurement() {
                if (this.$route.params.id) {
                    axios.get('/dashboard/product-measurement-category/' + this.$route.params.id).then(response => {
                        this.category = response.data
                    })
                }
            },
            fetchM(text) {
                if (typeof text != 'undefined' && text && text.length > 2) {
                    axios.get("/dashboard/product-measurement-category/get/" + text).then(response => {
                        this.options = [];
                        response.data.forEach((err) => {
                            this.options.push({
                                value: err.id,
                                text: err.title
                            })
                        });
                    });
                }

            }
        },
        created() {
            this.fetchM();
            this.fetchMeasurement();

        },
        components: {
            ModelListSelect,
        }
    }
</script>

<style scoped>

</style>