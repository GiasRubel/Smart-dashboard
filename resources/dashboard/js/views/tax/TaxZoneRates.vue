<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-10">
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
                        <i class='fa fa-align-justify'></i> Tax Zone List
                        <div class="float-right">
                            <router-link class="btn btn-primary" tag="button" to="/dashboard/icons/tax-zone/create"
                                         type="button">
                                <i class="fa fa-plus"></i> Add New Rate
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
                                <b-button @click="deleteTaxZone(Ids)" size="sm" style="margin-bottom: 10px; margin-right: 100px;"
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
                                <th class="mobile-hide">Country</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="taxzone,key in taxzones">
                                <td><input :value="taxzone.id" @change="select" type="checkbox" v-model="Ids"></td>
                                <td>{{taxzone.title | snippet}}</td>
                                <td class="mobile-hide" v-if="taxzone.country">{{taxzone.country.title}}</td>
                                <td class="mobile-hide" v-else>{{taxzone.country_id}}</td>
                                <td v-if="taxzone.state">{{taxzone.state.title}}</td>
                                <td v-else>{{taxzone.state_id}}</td>
                                <td>{{taxzone.zip}}</td>

                                <td>
                                    <router-link :to="{name: 'Tax Zone Edit', params: {id: taxzone.id}}"
                                                 class="btn btn-sm btn-success" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>

                                    <b-button @click="deleteTaxZone(taxzone.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i class="fa fa-trash"></i>
                                    </b-button>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <pagination :pagination="pagination" @paginate="taxZoneList"
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
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        components: {
            pagination, search
        },
        data() {
            return {
                taxzones: {},
                msg: '',
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'country.title', value: 'Country'},
                    {id: 'zip', value: 'Zip'},
                ],
                allSelected: false,
                Ids: [],
                perlist: 10,
                pagination: {
                    'current_page': 1
                },
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
                        this.taxZoneList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.taxZoneList(true)
                }
            },
            perlist: function (value) {
                this.taxZoneList();
            }
        },
        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            taxZoneList(st = false) {
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
                axios.get('/dashboard/tax-zone-rate?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.taxzones = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;

                    });
            },

            deleteTaxZone(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/tax-zone-rate/' + id)
                    .then((response) => {
                        this.taxZoneList();
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
                    for (this.taxzone in this.taxzones) {
                        this.Ids.push(this.taxzones[this.taxzone].id);
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
                this.taxZoneList();
            },

        },
        created() {
            if (_.size(this.$route.query)) {
                this.field = this.$route.query.field;
                this.pagination.current_page = this.$route.query.page;
                this.perlist = this.$route.query.per_page;
                this.query = this.$route.query.q;
            }
            this.taxZoneList();
            this.showAlert();
        }
    }
</script>
