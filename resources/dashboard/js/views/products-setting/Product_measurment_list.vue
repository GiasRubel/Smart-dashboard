<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-10">
                        <b-alert dismissible show v-if="msg" variant="danger"><strong>{{msg}}</strong></b-alert>
                        <b-alert :show="dismissCountDown"
                                 dismissible
                                 fade
                                 v-if="$route.params.message"
                                 variant="success">
                            {{$route.params.message}}
                        </b-alert>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Product Measurment
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;"
                                         tag="button" to="/dashboard/products/products-measurment/create" type="button">
                                <i class="fa fa-plus"></i> Add new Product Measurment
                            </router-link>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row serch-input">
                            <div class="col-md-12">
                                <search :field.sync="field"
                                        :perlist.sync="perlist"
                                        :query.sync="query"
                                        :searchBy="searchBy"
                                        @refresh="refresh()">
                                </search>
                            </div>
                        </div>
                        <br>
                        <div class="row pull-right">
                            <div class="col-md-12">
                                <b-button @click="deleteProductMeasurment(Ids)" size="sm" style="margin-bottom: 10px; margin-right: 100px;"
                                          v-if="Ids.length"
                                          variant="warning">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>
                        <table class="table table-hover table-expandable">
                            <tr>
                                <th><input @change="selectAll" type="checkbox" v-model="allSelected"></th>
                                <th>Title</th>
                                <th>Store</th>
                                <th class="mobile-hide">Weight</th>
                                <th class="mobile-hide">V_Weight</th>
                                <th class="mobile-hide">Dimension</th>
                                <th>User</th>
                                <th>Action</th>
                            </tr>
                            <tr v-for="(measurment,key) in product_measurments">
                                <td><input :value="measurment.id" @change="select" type="checkbox" v-model="Ids"></td>
                                <td>
                                    <template v-if="measurment.title && measurment.item">
                                        <a :href="measurment.item.url" target="_blank">{{measurment.title |
                                            snippet}}</a>
                                    </template>
                                    <template v-else-if="!measurment.title && measurment.item">
                                        <a :href="measurment.item.url" target="_blank">{{measurment.item.url |
                                            snippet}}</a>
                                    </template>
                                    <template v-else-if="measurment.title && !measurment.item">{{ measurment.title}}
                                    </template>
                                    <template v-else>No Title Given</template>
                                </td>
                                <td>
                                    <template v-if="measurment.stores">{{measurment.stores.store_name}}</template>
                                    <template v-else>{{measurment.store_id}}</template>
                                </td>
                                <td class="mobile-hide">
                                    <template v-if="measurment.weight">{{measurment.weight | toFix}}</template>
                                    <template v-else>None</template>
                                </td>
                                <td class="mobile-hide">
                                    <template v-if="measurment.volumetric_weight">{{measurment.volumetric_weight |
                                        toFix}}
                                    </template>
                                    <template v-else>None</template>
                                </td>
                                <td class="mobile-hide">{{measurment.dimension}}</td>
                                <td>
                                    <template v-if="measurment.users">{{measurment.users.name}}</template>
                                    <template v-else>No</template>
                                </td>
                                <td>
                                    <router-link
                                            :to="{name: 'Edit Product Measurment', params: {id: measurment.id}}"
                                            class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteProductMeasurment(measurment.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning">
                                        <i class="fa fa-trash"></i>
                                    </b-button>
                                </td>
                            </tr>
                        </table>
                        <pagination :pagination="pagination" @paginate="productMeasurmentList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        components: {
            pagination, search
        },
        data() {
            return {
                product_measurments: {},
                msg: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'sku', value: 'Sku'},
                    {id: 'weight', value: 'Weight'},
                    {id: 'volumetric_weight', value: 'volumetric Weight'},
                    {id: 'dimension', value: 'Dimension'},
                    {id: 'item.url', value: 'Url'},
                ],
                field: 'title',
                query: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                interval: '',
                pagination: {
                    'current_page': 1
                },
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },
        watch: {
            query: function (value) {
                clearTimeout(this.interval);
                this.interval = setTimeout(() => {
                    this.productMeasurmentList(true)
                }, duration.timeToWait)
            },
            perlist: function (value) {
                this.productMeasurmentList();
            }
        },
        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            productMeasurmentList(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                this.$router.push({
                    query:
                        {
                            page: this.pagination.current_page,
                            field: this.field,
                            per_page: this.perlist,
                            q: this.query
                        }
                });
                axios.get('/dashboard/product-measurment?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.product_measurments = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.productMeasurmentList();
            },
            deleteProductMeasurment(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/product-measurment/' + id)
                    .then((response) => {
                        this.productMeasurmentList();
                        this.Ids = [];
                        this.allSelected = false;
                        this.msg = response.data.success;
                        setTimeout(() => {
                            this.msg = ''
                        }, 3000)
                    }).catch((error) => {
                    console.log(error);
                });
            },
            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.measurment in this.product_measurments) {
                        this.Ids.push(this.product_measurments[this.measurment].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
        },
        created() {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.productMeasurmentList();
            this.showAlert();
        }
    }
</script>


