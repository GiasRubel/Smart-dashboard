<template>
    <div class="animated fadeIn">
        <div class="card" style="padding:10px;">
            <div class="row">
                <div class="col-md-6">
                    <h4>Date: {{$route.params.id}}</h4>
                </div>
                <div class="col-md-6">
                    <b-button @click="downloadLog($route.params.id)" size="sm"
                              variant="info"><i
                            class="fa fa-download"></i> Download
                    </b-button>

                    <b-button @click="daleteLog($route.params.id)" size="sm"
                              variant="warning"><i
                            class="fa fa-trash"></i> Delete
                    </b-button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Show Log
                    </div>
                    <div class="card-body">
                        <div class="log-list">
                            <table class="table">
                                <thead>
                                <tr>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <th width="15%">Level</th>
                                            <th width="15%">Date</th>
                                            <th width="60%">Header</th>
                                            <th>Action</th>
                                        </div>
                                    </div>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(row,key) in rowCount">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <td width="15%">{{row.level}}</td>
                                            <td width="15%">{{row.datetime}}</td>
                                            <td width="60%">{{row.header}}</td>
                                            <td width="10%">
                                                <p>
                                                    <a :href="'#collapseExample'+key" aria-controls="collapseExample"
                                                       aria-expanded="false" class="btn btn-primary"
                                                       data-toggle="collapse"
                                                       role="button">
                                                        See Details
                                                    </a>
                                                </p>
                                            </td>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div :id="'collapseExample'+key" class="collapse">
                                            <div class="card card-body" style="background-color: yellow">
                                                {{row.stack}}
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination :pagination="pagination" @paginate="getLogInfo"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div><!--/.col-->
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import moment from 'moment';

    import pagination from '../../components/Pagination'

    export default {
        components: {
            pagination
        },
        data() {
            return {
                rowCount: [],
                pagination: {
                    'current_page': 1
                },
            }
        },

        methods: {
            getLogInfo(st = false) {
                this.pagination.current_page = st ? 1 : this.pagination.current_page;
                axios.get('/dashboard/log-viewer/logs/' + this.$route.params.id + '?page=' + this.pagination.current_page)
                    .then(response => {
                        this.rowCount = response.data.logs.data;
                        _.forEach(this.rowCount, value => {
                            value.datetime = moment.utc(value.datetime).local().format('lll');
                        });
                        this.pagination = response.data.logs;
                        this.pagination.data = undefined;
                    });
            },

            daleteLog(id) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/log-viewer/' + id).then((response) => {
                    this.$router.push({name: 'Log Viewer List'})
                }).catch(function (error) {
                    console.log(error);
                });
            },

            downloadLog(id) {
                window.open('/dashboard/log-viewer/download/' + id, '_blank');
            },
        },

        mounted: function () {
            this.getLogInfo();
        }

    }
</script>
