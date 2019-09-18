<template>
    <div class="animated fadeIn">
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
                        <i class='fa fa-align-justify'></i> State list
                        <div class="float-right">
                            <a @click="exportExcel" class="btn btn-success" style="margin-top: 0px; color:white;"
                               type="button" v-if="showExcel">
                                <i class="fa fa-file-excel-o"></i> <i class="fas fa-download"></i>
                            </a>
                            <a @click="showExcelForm" class="btn btn-warning" style="margin-top: 0px; color:white;"
                               type="button" v-if="showExcel">
                                <i class="fa fa-dot-circle-o"></i> Import excel
                            </a>
                            <a @click="showExcelForm" class="btn btn-success" style="margin-top: 0px; color:white;"
                               type="button" v-else>
                                <i class="fa fa-dot-circle-o"></i> Back to list
                            </a>
                            <router-link class="btn btn-primary" style="margin-top: 0px;"
                                         tag="button" to="/dashboard/region/state/create" type="button">
                                <i class="fa fa-plus"></i> Add new
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
                                <b-button @click="deleteState(Ids)" size="sm"
                                          style="margin-bottom: 10px; margin-right: 100px;"
                                          v-if="Ids.length"
                                          variant="warning">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                            <tr>
                                <th><input @change="selectAll" type="checkbox" v-model="allSelected"></th>
                                <th>Title</th>
                                <th>Country</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(state,key) in states">
                                <td><input :value="state.id" @change="select" type="checkbox" v-model="Ids"></td>

                                <td>{{state.title}}</td>
                                <td>
                                    <template v-if="state.country">{{state.country.title}}</template>
                                    <template v-else>{{state.country_id}}</template>
                                </td>
                                <td>
                                    <router-link :to="{name: 'Edit State', params: {id: state.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteState(state.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i
                                            class="fa fa-trash"></i></b-button>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="stateList()"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                    <excel-form :url="'/dashboard/excel-import-states'" v-else></excel-form>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    import ExcelForm from "../products-setting/excel/ExcelForm";
    export default {
        components: {
            ExcelForm,
            pagination, search
        },
        data() {
            return {
                states: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                allSelected: false,
                showExcel: true,
                Ids: [],
                perlist: 10,
                field: 'title',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'country.title', value: 'Country'},
                ],
                query: '',
                dismissSecs: 3,
                dismissCountDown: 0,
                interval: '',
            }
        },
            watch: {
                query: function (value) {
                    if (value.length >= 3) {
                        clearTimeout(this.interval);
                        this.interval = setTimeout(() => {
                            this.pagination.current_page = 1;
                            this.stateList()
                        }, duration.timeToWait)
                    }else if(value.length === 0){
                        this.pagination.current_page = 1;
                        this.stateList()
                    }
                },
                perlist: function (value) {
                    this.stateList();
                }
            },
        methods: {
            showExcelForm() {
                this.showExcel = !this.showExcel;
                this.refresh();
            },
            exportExcel() {
                window.open('/dashboard/export-states');
            },
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            stateList() {
                this.$router.push({
                    query:
                        {
                            page: this.pagination.current_page,
                            field: this.field,
                            per_page: this.perlist,
                            q: this.query
                        }
                });
                axios.get('/dashboard/state?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.states = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.stateList();
            },
            deleteState(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/state/' + id).then((response) => {
                    this.stateList();
                    this.Ids = [];
                    this.allSelected = false;
                    this.msg = response.data.success;
                    setTimeout(() => {
                        this.msg = ''
                    }, 3000)
                }).catch(function (error) {
                    console.log(error);
                });
            },
            selectAll() {
                this.Ids = [];
                if (this.allSelected) {
                    for (this.state in this.states) {
                        this.Ids.push(this.states[this.state].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
        },
        created: function () {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.stateList();
            this.showAlert();
        }
    }
</script>
