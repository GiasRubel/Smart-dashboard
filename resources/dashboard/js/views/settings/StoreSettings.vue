<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-lg-10">
                <b-alert v-if="msg" variant="danger" show dismissible><strong>{{ msg }}</strong></b-alert>
            </div>

        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        Store settings
                        <div class="float-right">
                            <router-link :to="{name: 'Create settings'}" class="btn btn-primary btn-sm text-white" style="margin-top: 0px;">Add new</router-link>
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

                        <div class="row">

                            <div class="col-md-2 pull-right">
                                <b-button v-if="Ids.length" variant="warning" size="sm"
                                          @click="deleteStoreSettings(Ids)"
                                          style="margin-bottom: 10px; margin-right: 100px;">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>
                                    <td width="20%">Store</td>
                                    <td width="20%">Key</td>
                                    <td width="20%">Value</td>
                                    <td width="20%">Type</td>
                                    <td width="20%">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="settings in storeSettings">
                                    <td><input type="checkbox" v-model="Ids" @change="select" :value="settings.id"></td>
                                    <td>{{ settings ? settings.store.store_name : '' }}</td>
                                    <td>{{ settings.key }}</td>
                                    <td>{{ settings.value }}</td>
                                    <td>{{ settings.type }}</td>
                                    <td>
                                        <router-link class="btn btn-success btn-sm" :to="{ name: 'Update settings', params: { id: settings.id} }"><i class="fa fa-edit"></i></router-link>
                                        <button v-if="Ids.length==''" class="btn btn-warning btn-sm" @click="deleteStoreSettings(settings.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <pagination :pagination="pagination" @paginate="fetchStoreSettings"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        components: {
            pagination, search
        },
        data(){
            return {
                storeSettings: {},
                status: false,
                searchBy: [
                    {id: 'key', value: 'Key'},
                ],

                field: 'key',
                query: '',

                msg: '',

                allSelected: false,
                Ids: [],
                perlist: 10,

                pagination: {
                    'current_page': 1
                },
            }
        },

        watch: {
            status: {
                handler: 'fetchStoreSettings',
                immediate: true
            },

            query: function (newQ, old) {
                this.fetchStoreSettings(true);
            },

            perlist: function (value) {
                this.fetchStoreSettings();
            }
        },

        methods: {
            fetchStoreSettings(){
                axios.get('/dashboard/store-settings?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query +'&per_page='+this.perlist)
                    .then(response => {
                        console.log(response.data.data);
                        this.storeSettings = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    }).catch(err => {
                    alert("Something went wrong please try again")
                })
            },
            deleteStoreSettings(id){
                if(!confirm("Are you really want to delete")){
                    return;
                }
                axios.delete('/dashboard/store-settings/'+id).then(response => {
                   this.fetchStoreSettings();
                    this.Ids = [];
                    this.allSelected = false;
                    this.msg = response.data.success;
                    setTimeout(() => {
                        this.msg = ''
                    }, 3000)
                }).catch(err => {
                    alert("Something went wrong please try again")
                });
            },

            refresh() {
                this.query = '';
                this.field = 'key';
                this.fetchStoreSettings();
            },

            selectAll() {
                this.Ids = [];
                if (this.allSelected) {
                    for (this.storesetting in this.storeSettings) {
                        this.Ids.push(this.storeSettings[this.storesetting].id);
                    }
                }
            },
            select() {
                this.allSelected = false;
            },

        },

    }
</script>

<style scoped>

</style>