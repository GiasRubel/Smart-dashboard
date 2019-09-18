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
                            <router-link class="btn btn-primary" style="margin-top: 0px;"
                                         tag="button" to="/dashboard/region/district/create" type="button">
                                <i class="fa fa-plus"></i> Add new
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row serch-input">
                            <div class="col-lg-2">
                                <h4>Search By {{perlist}}</h4>
                            </div>
                            <div class="col-md-2">
                                <b-form-select v-model="field">
                                    <option value="title">Title</option>
                                    <option value="state.title">state</option>
                                </b-form-select>
                            </div>
                            <div class="col-lg-4">
                                <b-form-input placeholder="search"
                                              type="text"
                                              v-model="query">

                                </b-form-input>
                            </div>
                            <div class="col-lg-2">
                                <button @click="refresh" class="btn btn-primary">
                                    <i aria-hidden="true" class="fa fa-refresh"></i> Reset Filter
                                </button>
                            </div>

                            <div class="col-lg-2">
                                <div class="row">
                                    <div class="col-md-6"><p>per page</p></div>
                                    <div class="col-md-6 per-page">
                                        <b-form-select v-model="perlist">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                        </b-form-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="row pull-right">
                            <div class="col-md-12">
                                <b-button @click="deleteDistrict(Ids)" size="sm"
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
                                <th>State</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(district,key) in districts">
                                <td><input :value="district.id" @change="select" type="checkbox" v-model="Ids"></td>

                                <td>{{district.title}}</td>
                                <td>
                                    <template v-if="district.country">{{district.country.title}}</template>
                                    <template v-else>{{district.country_id}}</template>
                                </td>
                                <td>
                                    <template v-if="district.state">{{district.state.title}}</template>
                                    <template v-else>{{district.state_id}}</template>
                                </td>
                                <td>
                                    <router-link :to="{name: 'Edit District', params: {id: district.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteDistrict(district.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i
                                            class="fa fa-trash"></i></b-button>

                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <pagination :pagination="pagination" @paginate="districtList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import pagination from '../../components/Pagination'

    export default {
        components: {
            pagination
        },

        data() {
            return {
                districts: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                allSelected: false,
                Ids: [],
                field: 'title',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'state.title', value: 'state'},
                ],
                perlist: 10,
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
                        this.districtList(true)
                    }, 2000)
                } else if (value.length === 0) {
                    this.districtList(true)
                }
            },
            perlist: function (value) {
                this.districtList();
            }
        },
        created() {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.districtList();
            this.showAlert();

        },

        methods: {

            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            districtList(st = false) {
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
                axios.get('/dashboard/district?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.districts = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    });
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.districtList();
            },
            deleteDistrict(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/district/' + id).then((response) => {
                    this.districtList();
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
                    for (this.district in this.districts) {
                        this.Ids.push(this.districts[this.district].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },

        },

    }
</script>
