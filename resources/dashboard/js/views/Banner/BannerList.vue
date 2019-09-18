<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-10">
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
        <br>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Banner List
                        <div class="float-right">
                            <router-link to="/dashboard/banners/create" style="margin-top: 0px;" class="btn btn-primary" tag="button" type="button">
                                <i class="fa fa-plus"></i> Create New Banner
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
                                        <b-form-select v-model="perlist" @input="bannerList">
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
                                          @click="deleteBanner(Ids)"
                                          style="margin-bottom: 10px; margin-right: 100px;">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Country</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Default</th>
                                    <th>Activation Date</th>
                                    <th>Expire Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(banner,key) in banners">
                                    <td><input type="checkbox" v-model="Ids" @change="select" :value="banner.id"></td>

                                    <td>{{banner.title}}</td>
                                    <td>{{banner.type}}</td>
                                    <td> {{ helper.optional(banner, 'country', 'title') }} </td>
                                    <td>
                                        <img :src="banner.image" width="200"/>
                                    </td>
                                    <td>{{banner.status}}</td>
                                    <td>{{banner.default_img}}</td>
                                    <td>{{banner.activated_at}}</td>
                                    <td>{{banner.expire_at}}</td>
                                    <td>
                                        <router-link :to="{name: 'Edit Banner Lists', params: {id: banner.id}}"
                                                     class="btn btn-success btn-sm" tag="button" type="button">
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                        <b-button v-if="Ids.length==''" variant="warning" size="sm" @click="deleteBanner(banner.id, key)"> <i class="fa fa-trash"></i></b-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="bannerList"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import pagination from '../../components/Pagination';
    import moment from 'moment';
    import helper  from '../../helper/helpers'

    export default {
        components: {
            pagination
        },

        data() {
            return {
                banners: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                allSelected: false,
                Ids: [],
                perlist: 10,
                field: 'type',
                query: '',
                dismissSecs: 3,
                dismissCountDown: 0,
                helper
            }
        },
        watch: {
            query: function (newQ, old) {
                this.bannerList(true);
            }
        },
        methods:{
            showAlert () {
                this.dismissCountDown = this.dismissSecs
            },
            bannerList(st = false){
                this.pagination.current_page = st ? 1 : this.pagination.current_page;

                axios.get('/dashboard/banner-list?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query +'&per_page='+this.perlist)
                    .then(response => {
                        this.banners = response.data.data;
                        _.forEach(this.banners, (value, key) => {
                            this.banners[key].activated_at = moment.utc(this.banners[key].activated_at).local().format('lll');
                            this.banners[key].expire_at = moment.utc(this.banners[key].expire_at).local().format('lll');
                        });

                        this.pagination=response.data;
                        this.pagination.data=undefined;

                    });
            },

            refresh() {
                this.query = '';
                this.field = 'title';
                this.bannerList();
            },

            deleteBanner(id, key){
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/banner-list/'+id ).then((response) => {
                    this.bannerList();
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

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.banner in this.banners) {
                        this.Ids.push(this.banners[this.banner].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },

        },

        mounted: function() {
            this.bannerList();
            this.showAlert();
        }

    }
</script>
