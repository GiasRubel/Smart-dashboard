<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-12">
                <b-alert v-if="msg" variant="danger" show dismissible><strong>{{msg}}</strong></b-alert>
                <b-alert v-if="$route.params.message"
                         :show="dismissCountDown"
                         dismissible
                         fade
                         variant="success">
                    {{$route.params.message}}
                </b-alert>
            </div>
        </div>
        <div class="shipment-Rate">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <i class='fa fa-align-justify'></i> Admin Menu List
                            <div class="float-right">
                                <router-link to="/dashboard/settings/admin-menu/create" class="btn btn-primary"
                                             style="margin-top: 0px;" tag="button" type="button">
                                    <i class="fa fa-plus"></i> Add new
                                </router-link>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row serch-input">
                                <div class="col-lg-2">
                                    <h4>Search By</h4>
                                </div>
                                <div class="col-lg-2">
                                    <b-form-select name="" id="" v-model="field">
                                        <option value="title">Title</option>
                                        <option value="route">Route</option>
                                    </b-form-select>
                                </div>
                                <div class="col-lg-4">
                                    <b-form-input v-model="query"
                                                  type="text"
                                                  placeholder="search">

                                    </b-form-input>
                                </div>
                                <div class="col-lg-2">
                                    <button class="btn btn-primary" @click="refresh">
                                        <i class="fa fa-refresh" aria-hidden="true"></i> Reset Filter
                                    </button>
                                </div>


                                <div class="col-lg-2">
                                    <div class="row">
                                        <div class="col-md-6"><p>per page</p></div>
                                        <div class="col-md-6 per-page">
                                            <b-form-select v-model="perlist" @input="adminMenuList">
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
                                    <b-button v-if="Ids.length" variant="warning" size="sm"
                                              @click="deleteAdminMenu(Ids)"
                                              style="margin-bottom: 10px; margin-right: 100px;">
                                        <i class="fa fa-trash "></i> Batch Delete
                                    </b-button>
                                </div>
                            </div>.
                            <table class="table">
                                <thead>
                                <tr>
                                    <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>
                                    <th>Title</th>
                                    <th>Menu Types</th>
                                    <th class="mobile-hide">Menu Action</th>
                                    <th class="mobile-hide">Route</th>
                                    <th class="mobile-hide">Status</th>
                                    <th class="mobile-hide">Icon Img</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(admin,key) in admins">
                                    <td><input type="checkbox" v-model="Ids" @change="select" :value="admin.id"></td>

                                    <td>{{admin.title}}</td>
                                    <td>{{admin.menu_types}}</td>
                                    <td class="mobile-hide">{{admin.menu_action}}</td>
                                    <td class="mobile-hide">{{admin.route}}</td>
                                    <td class="mobile-hide">
                                        <template v-if="admin.status">yes</template>
                                        <template v-else>No</template>
                                    </td>
                                    <td class="mobile-hide">
                                        <img :src="'/img/admin-menu/' + admin.icon_img" width="200"/>
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'Edit Admin Menu', params: {id: admin.id}}"
                                                     class="btn btn-success btn-sm" tag="button" type="button">
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                        <b-button v-if="Ids.length==''" variant="warning" size="sm" @click="deleteAdminMenu(admin.id, key)">
                                            <i class="fa fa-trash"></i>
                                        </b-button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <pagination :pagination="pagination" @paginate="adminMenuList"
                                        v-if="pagination.last_page > 1"></pagination>
                        </div>
                    </div>
                </div><!--/.col-->
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';
    Vue.component('pagination', require('../../components/Pagination'));
    export default {
        data() {
            return {
                admins: {},
                msg: '',

                field: 'title',
                query: '',

                allSelected: false,
                Ids: [],
                perlist: 10,

                pagination: {
                    'current_page': 1
                },
                dismissSecs: 3,
                dismissCountDown: 0,

            }
        },

        watch: {
            query: function (newQ, old) {
                this.adminMenuList(true);
            }
        },

        methods: {

            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },

            adminMenuList(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;

                axios.get('/dashboard/admin-menu?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query +'&per_page='+this.perlist)
                    .then(response => {
                        this.admins = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            refresh() {
                this.query = ''
                this.field = 'title'
                this.adminMenuList();
            },


            deleteAdminMenu(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/admin-menu/' + id)
                    .then((response) => {
                        this.adminMenuList()
                        this.Ids = [];
                        this.allSelected = false;
                        this.msg = response.data.success;
                        setTimeout(() => {
                            this.msg = ''
                        }, 3000)
                        // console.log(response.data)
                    }).catch((error) => {
                    console.log(error);
                });
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.admin in this.admins) {
                        this.Ids.push(this.admins[this.admin].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },


            /*
        Submits the file to the server
      */
            submitFile() {
                /*
                        Initialize the form data
                    */
                let formData = new FormData();

                /*
                    Add the form data we need to submit
                */
                formData.append('file', this.file);

                /*
                  Make the request to the POST /single-file URL
                */
                axios.post('/dashboard/excel-import',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(response => {
                    console.log(response.data);
                }).catch(error => {
                    console.log(error);
                })
            },


            /*
            Handles a change on the file upload
          */
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            },
        },


        mounted() {
            this.adminMenuList();
            this.showAlert();
        }
    }
</script>
