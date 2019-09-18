<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-10">
                        <b-alert v-if="consoleMessage" variant="info" show dismissible><strong>{{consoleMessage}}</strong></b-alert>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Configurations
                        <div class="float-right">
                            <button class="btn btn-primary" style="margin-top: 0px">
                                <router-link :to="{name: 'Create Configuration' }" class="text-white">Add new
                                    configuration
                                </router-link>
                            </button>
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

                        <div class="row">
                            <div class="col-md-4">
                                <b-button  variant="danger" size="sm"
                                          @click="executeCacheClear">
                                    Cache Clear
                                </b-button>
                                <b-button  variant="danger" size="sm"
                                           @click="executeConfigClear">
                                    Config Clear</b-button>
                            </div>
                        </div>
                        <br>
                        <table class="table table-hover table-expandable">
                            <tr>
                                <td width="5%"><b></b></td>
                                <td width="20%"><b>Title</b></td>
                                <td width="20%" class="mobile-hide"><b>Purpose</b></td>
                                <td width="15%" class="mobile-hide"><b>Alias</b></td>
                                <td width="15%"><b>Status</b></td>
                                <td width="15%"><b>Updated by</b></td>
                                <td width="15%"><b></b></td>
                            </tr>
                            <tr v-for="(configuration, index) in configurations">
                                <td>{{ ++index }}</td>
                                <td>{{ configuration.title }}</td>
                                <td class="mobile-hide">{{ configuration.purpose }}</td>
                                <td class="mobile-hide">{{ configuration.alias }}</td>
                                <td>{{ configuration.status }}</td>
                                <td>{{ configuration.user ? configuration.user.name : '' }}</td>
                                <td>
                                    <router-link :to="{ name: 'Update Configuration', params: { id: configuration.id} }"
                                                 class="btn btn-success btn-sm"><i class="fa fa-edit"></i></router-link>
                                </td>
                            </tr>
                        </table>
                        <pagination v-if="pagination.last_page > 1" :pagination="pagination"
                                    @paginate="fetchConfiguration()"></pagination>
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
        data() {
            return {
                configurations: {},
                status: false,
                message: '',
                consoleMessage: '',
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'alias', value: 'Alias'}
                ],
                field: 'title',
                query: '',
                perlist: 10,
                pagination: {
                    'current_page': 1
                },
                interval: '',
            }
        },
        watch: {
            status: {
                handler: function () {
                    if (_.size(this.$route.query)) {
                        this.field = this.$route.query.field;
                        this.pagination.current_page = this.$route.query.page;
                        this.perlist = this.$route.query.per_page;
                        this.query = this.$route.query.q;
                    }
                    this.fetchConfiguration();
                },
                immediate: true
            },
            query: function (value) {
                clearTimeout(this.interval);
                this.interval = setTimeout(() => {
                    this.fetchConfiguration(true)
                }, duration.timeToWait)

            },
            perlist: function (value) {
                this.fetchConfiguration();
            }
        },
        methods: {
            fetchConfiguration(st = false) {
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
                axios.get('/dashboard/configurations?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query +'&per_page='+this.perlist )
                    .then(response => {
                        this.configurations = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    }).catch(error => {
                    alert("Something went wrong please try again");
                })
            },

            executeCacheClear()
            {
                if (!confirm('Are you really want to Clear Cache'))
                return;
                axios.get('/dashboard/cache-clear').then(response => {
                    this.consoleMessage = response.data;
                    setTimeout(() => {
                        this.consoleMessage = ''
                    }, 5000)
                }).catch(function (error) {
                    console.log(error);
                })
            },

            executeConfigClear()
            {
                if (!confirm('Are you really want to Clear Config'))
                    return;
                axios.get('/dashboard/config-clear').then(response => {
                    this.consoleMessage = response.data;
                    setTimeout(() => {
                        this.consoleMessage = ''
                    }, 5000)
                }).catch(function (error) {
                    console.log(error);
                })
            },

            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.fetchConfiguration();
            },
        },

    }
</script>

<style scoped>

</style>