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
        <br>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Simple Table
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;"
                                         tag="button" to="/dashboard/products/store/create" type="button">
                                <i class="fa fa-plus"></i> Create New Store
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row serch-input">
                            <div class="col-lg-2">
                                <h4>Search By</h4>
                            </div>
                            <div class="col-md-2">
                                <b-form-select id="" name="" v-model="field">
                                    <option value="store_name">Name</option>
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
                                        <b-form-select @input="storeList" v-model="perlist">
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
                                <b-button @click="deleteStore(Ids)" size="sm"
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
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(store,key) in stores">
                                <td><input :value="store.id" @change="select" type="checkbox" v-model="Ids"></td>
                                <td>{{store.store_name}}</td>
                                <td>
                                    <router-link :to="{name: 'Edit Store', params: {id: store.id}}"
                                                 class="btn btn-sm btn-success" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <b-button @click="deleteStore(store.id, key)" size="sm" v-if="Ids.length===''"
                                              variant="warning"><i class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="storeList"
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
                stores: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                field: 'store_name',
                query: '',
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },
        watch: {
            query: function (newQ, old) {
                this.storeList(true);
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            storeList(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;

                axios.get('/dashboard/stores?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.stores = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    });
            },

            refresh() {
                this.query = '';
                this.field = 'store_name';
                this.storeList();
            },

            deleteStore(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/stores/' + id).then((response) => {
                    this.storeList();
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
                    for (this.store in this.stores) {
                        this.Ids.push(this.stores[this.store].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
        },

        mounted: function () {
            this.storeList();
            this.showAlert();
        }

    }
</script>
