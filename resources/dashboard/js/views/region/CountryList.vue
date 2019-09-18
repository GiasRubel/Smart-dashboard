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
                        <i class='fa fa-align-justify'></i> Countries
                        <div class="float-right">
                            <router-link class="btn btn-primary" style="margin-top: 0px;" tag="button"
                                         to="/dashboard/region/country/create" type="button">
                                <i class="fa fa-plus"></i> Add new
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
                                <b-button @click="deleteCountry(Ids)" size="sm"
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

                                <th>Name</th>
                                <th>Code</th>
                                <th>Currency</th>
                                <th>Domain</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(country,key) in countries">
                                <td>
                                    <input :value="country.id"
                                           @change="select"
                                           type="checkbox"
                                           v-model="Ids">
                                </td>

                                <td>{{country.title}}</td>
                                <td>{{country.country_code}}</td>
                                <td>
                                    <template v-if="country.currencies">
                                        {{country.currencies.title}}
                                    </template>
                                    <template v-else>{{country.default_currency}}</template>
                                </td>
                                <td>{{ country.domain_url }}</td>
                                <td>
                                    <router-link :to="{name: 'Edit Country', params: {id: country.id}}"
                                                 class="btn btn-success btn-sm" tag="button" type="button">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <b-button @click="deleteCountry(country.id, key)" size="sm" v-if="Ids.length==''"
                                              variant="warning"><i
                                            class="fa fa-trash"></i></b-button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <pagination :pagination="pagination" @paginate="CountryList"
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
                countries: {},
                pagination: {
                    'current_page': 1
                },
                msg: '',
                field: 'title',
                query: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                ],
                allSelected: false,
                Ids: [],
                perlist: 10,
                dismissSecs: 3,
                dismissCountDown: 0,
            }
        },

        watch: {
            query: function (value) {
                if (value.length >= 3) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.CountryList(true)
                    }, duration.timeToWait)
                } else if (value.length === 0) {
                    this.CountryList(true)
                }
            },
            perlist: function (value) {
                this.CountryList();
            }
        },

        methods: {
            showAlert() {
                this.dismissCountDown = this.dismissSecs
            },
            CountryList(st = false) {
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
                axios.get('/dashboard/country?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.countries = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    });
            },
            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.CountryList();
            },
            deleteCountry(id, key) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/country/' + id).then((response) => {
                    this.CountryList();
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
                    for (this.country in this.countries) {
                        this.Ids.push(this.countries[this.country].id);
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
            this.CountryList();
            this.showAlert();
        }

    }
</script>
