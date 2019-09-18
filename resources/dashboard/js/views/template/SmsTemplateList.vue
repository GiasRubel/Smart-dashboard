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
                        <i class='fa fa-align-justify'></i> SMS template
                        <div class="float-right">
                            <router-link to="/dashboard/notification/sms-template/create" class="btn btn-primary" style="margin-top: 0px" tag="button" type="button">
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
                                        <b-form-select v-model="perlist" @input="smsTemplateList">
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
                                          @click="deleteSmsTemplate(Ids)"
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
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="sms,key in smsTemplate">
                                <td><input type="checkbox" v-model="Ids" @change="select" :value="sms.id"></td>
                                <td>{{sms.title}}</td>
                                <td>{{sms.message | snippet}}</td>
                                <td>

                                    <router-link :to="{name: 'Edit Sms Template', params: {id: sms.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button v-if="Ids.length==''" variant="warning" size="sm" @click="deleteSmsTemplate(sms.id, key)"> <i class="fa fa-trash"></i></b-button>

                                </td>
                            </tr>

                            </tbody>
                        </table>

                        <pagination :pagination="pagination" @paginate="smsTemplateList"
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
                smsTemplate: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',

                allSelected: false,
                Ids: [],
                perlist: 10,

                field: 'title',
                query: '',
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },

        watch: {
            query: function (newQ, old) {
                this.smsTemplateList(true);
            }
        },

        methods:{
            showAlert () {
                this.dismissCountDown = this.dismissSecs
            },

            smsTemplateList(st = false){
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                axios.get('/dashboard/sms-template?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query +'&per_page='+this.perlist)
                    .then(response => {
                        this.smsTemplate = response.data.data;
                        this.pagination=response.data;
                        this.pagination.data=undefined;

                    });
            },

            deleteSmsTemplate(id, key){
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/sms-template/'+id ).then((response) => {
                    this.smsTemplateList()
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
                    for (this.sms in this.smsTemplate) {
                        this.Ids.push(this.smsTemplate[this.sms].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },

            refresh() {
                this.query = ''
                this.field = 'title'
                this.smsTemplateList();
            }
        },

        mounted: function() {
            this.smsTemplateList();
            this.showAlert();
        }

    }
</script>
