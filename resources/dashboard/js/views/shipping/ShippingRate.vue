<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-lg-12">
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
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <i class='fa fa-align-justify'></i> Shipping List
                                <div class="float-right">
                                    <a @click="exportExcel" class="btn btn-success"
                                       style="margin-top: 0px; color:white;"
                                       type="button" v-if="showExcel">
                                        <i class="fa fa-file-excel-o"></i> <i class="fas fa-download"></i>
                                    </a>
                                    <a @click="showExcelForm" class="btn btn-warning"
                                       style="margin-top: 0px; color:white;"
                                       type="button" v-if="showExcel">
                                        <i class="fa fa-dot-circle-o"></i> Import Excel
                                    </a>
                                    <a @click="showExcelForm" class="btn btn-success"
                                       style="margin-top: 0px; color:white;"
                                       type="button" v-else>
                                        <i class="fa fa-dot-circle-o"></i> Back to list
                                    </a>
                                    <router-link :to="{name: 'Create Shipment' }"
                                                 class="btn btn-primary" style="margin-top: 0px;"
                                                 tag="button" type="button">
                                        <i class="fa fa-plus"></i> Add new Shipping
                                    </router-link>
                                </div>
                            </div>
                            <div class="card-body" v-if="showExcel">
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
                                        <b-button @click="deleteShipment(Ids)" size="sm"
                                                  style="margin-bottom: 10px; margin-right: 100px;"
                                                  v-if="Ids.length"
                                                  variant="warning">
                                            <i class="fa fa-trash "></i> Batch Delete
                                        </b-button>
                                    </div>
                                </div>
                                <table class="table table-hover table-expandable">
                                    <tr>
                                        <th><input @change="selectAll" type="checkbox"
                                                   v-model="allSelected"></th>
                                        <th>Title</th>
                                        <th class="mobile-hide">Country</th>
                                        <th>State</th>
                                        <th class="mobile-hide">District</th>
                                        <th class="mobile-hide">Weight Range</th>
                                        <th>Price (per lb)</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr v-for="(shipment,key) in shipments">
                                        <td><input :value="shipment.id" @change="select" type="checkbox"
                                                   v-model="Ids">
                                        </td>

                                        <td>{{shipment.title | snippet}}</td>
                                        <td class="mobile-hide" v-if="shipment.country">
                                            {{shipment.country.title}}
                                        </td>
                                        <td v-else>{{shipment.country_id}}</td>
                                        <td v-if="shipment.state">{{shipment.state.title}}</td>
                                        <td v-else>{{shipment.state_id}}</td>
                                        <td class="mobile-hide">
                                            {{
                                            shipment.district ? shipment.district.title : '*'
                                            }}
                                        </td>
                                        <td class="mobile-hide">{{shipment.weight_range}}</td>
                                        <td>{{shipment.price| toFix}}</td>
                                        <td>
                                            <router-link
                                                    :to="{name: 'Edit shipment', params: {id: shipment.id}}"
                                                    class="btn btn-success btn-sm" tag="button"
                                                    type="button">
                                                <i class="fa fa-edit"></i>
                                            </router-link>

                                            <b-button @click="deleteShipment(shipment.id, key)" size="sm"
                                                      v-if="Ids.length==''"
                                                      variant="warning"><i
                                                    class="fa fa-trash"></i></b-button>
                                        </td>
                                    </tr>
                                </table>
                                <pagination :pagination="pagination" @paginate="shipmentList"
                                            v-if="pagination.last_page > 1"></pagination>
                            </div>
                            <excel-form :url="'/dashboard/excel-import'" v-else></excel-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';
    import ExcelForm from "../products-setting/excel/ExcelForm";
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        components: {ExcelForm, pagination, search},
        data() {
            return {
                file: '',
                shipments: {},
                msg: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'country.title', value: 'Country'},
                    {id: 'weight_range', value: 'Weight'},
                    {id: 'price', value: 'price'},
                    {id: 'items', value: 'Item'}
                ],
                pagination: {
                    'current_page': 1
                },
                showExcel: true,
                message: '',
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },

        watch: {
            query: function (value) {
                if (value.length >= 3) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.shipmentList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.shipmentList(true)
                }
            },
            perlist: function (value) {
                this.shipmentList();
            }
        },
        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            shipmentList(st = false) {
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
                axios.get('/dashboard/shipment?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.shipments = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },
            deleteShipment(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/shipment/' + id)
                    .then((response) => {
                        this.shipmentList();
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
                    for (this.shipment in this.shipments) {
                        this.Ids.push(this.shipments[this.shipment].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.shipmentList(true);
            },
            showExcelForm() {
                this.showExcel = !this.showExcel;
                this.refresh();
            },
            exportExcel() {
                window.open('/dashboard/export-shippingrate');
            }
        },
        created() {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.shipmentList();
            this.showAlert();
        }
    }
</script>
