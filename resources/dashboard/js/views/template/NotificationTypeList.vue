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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Notifications type
                        <div class="float-right">
                            <router-link to="/dashboard/notification/notification-type/create" class="btn btn-primary" tag="button" type="button" style="margin-top: 0px">
                                <i class="fa fa-plus"></i> Create new
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">


                        <div class="row serch-input">
                            <div class="col-lg-2">
                                <h4>Search By</h4>
                            </div>
                            <div class="col-md-2">
                                <b-form-select name="" id="" v-model="field">
                                    <option value="title">Title</option>
                                    <option value="type">Type</option>
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
                                        <b-form-select v-model="perlist" @input="notificationList">
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
                                          @click="daleteNotification(Ids)"
                                          style="margin-bottom: 10px; margin-right: 100px;">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>

                        <table class="table">
                            <thead>
                            <tr>
                                <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>
                                <th width="25%">Title</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="ntype,key in notiTyps">
                                <td><input type="checkbox" v-model="Ids" @change="select" :value="ntype.id"></td>
                                <td>{{ntype.title}}</td>
                                <td>{{ntype.type}}</td>
                                <td>

                                    <router-link :to="{name: 'Edit Notification Type', params: {id: ntype.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button v-if="Ids.length==''" variant="warning" size="sm" @click="daleteNotification(ntype.id, key)"> <i class="fa fa-trash"></i></b-button>

                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="notificationList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
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
                notiTyps: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                field: 'title',
                query: '',

                allSelected: false,
                Ids: [],
                perlist: 10,

                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },

        watch: {
            query: function (newQ, old) {
                this.notificationList(true);
            }
        },

        methods:{

            showAlert () {
                this.dismissCountDown = this.dismissSecs
            },

            notificationList(st = false){
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                axios.get('/dashboard/notification-type?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query +'&per_page='+this.perlist)
                    .then(response => {
                        this.notiTyps = response.data.data;
                        this.pagination=response.data;
                        this.pagination.data=undefined;

                    });
            },

            daleteNotification(id, key){
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/notification-type/'+id ).then((response) => {
                    this.notificationList()
                    this.Ids = [];
                    this.allSelected = false;
                    this.msg = response.data.success;
                    setTimeout(() => {
                        this.msg = ''
                    },3000)
                }).catch(function (error) {
                    console.log(error);
                });
            },

            refresh() {
                this.query = ''
                this.field = 'title'
                this.notificationList();
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.notify in this.notiTyps) {
                        this.Ids.push(this.notiTyps[this.notify].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },
        },

        mounted: function() {
            this.notificationList();
            this.showAlert();
        }

    }
</script>
