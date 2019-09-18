<template>
    <div class="animated fadeIn">

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <i class='fa fa-align-justify'></i> Log List
                    </div>
                    <div class="card-body">
                        <div class="log-list">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th v-for="(item,key) in tableHeader">{{ key.toUpperCase() }}</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(row,key) in errorCount">
                                    <td class="text-primary">{{key}}</td>
                                    <td><b>{{row.all}}</b></td>
                                    <td class="text-secondary">{{row.emergency}}</td>
                                    <td class="text-warning">{{row.alert}}</td>
                                    <td>{{row.critical}}</td>
                                    <td class="text-danger">{{row.error}}</td>
                                    <td class="text-warning">{{row.warning}}</td>
                                    <td>{{row.notice}}</td>
                                    <td class="text-info">{{row.info}}</td>
                                    <td>{{row.debug}}</td>
                                    <td>
                                        <router-link :to="{name: 'Log Viewer Show', params: {id: key}}"
                                                     class="btn btn-primary btn-sm" tag="button" type="button">
                                            <i class="fa fa-eye"></i>
                                        </router-link>

                                        <b-button @click="daleteLog(key)" size="sm"
                                                  variant="warning"><i
                                                class="fa fa-trash"></i></b-button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <pagination :pagination="pagination" @paginate="getLogInfo"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div>
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
                tableHeader: {},
                errorCount: {},
                pagination: {
                    'current_page': 1
                },
            }
        },

        methods: {


            getLogInfo(st = false) {

                this.pagination.current_page = st ? 1 : this.pagination.current_page;

                axios.get('/dashboard/log-viewer/?page=' + this.pagination.current_page)
                    .then(response => {
                        this.tableHeader = response.data.header;
                        this.errorCount = response.data.rows.data;
                        this.pagination = response.data.rows;
                        this.pagination.data = undefined;

                    });
            },

            daleteLog(id) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/log-viewer/' + id).then((response) => {
                    this.getLogInfo()
                }).catch(function (error) {
                    console.log(error);
                });


            },

        },

        mounted: function () {
            this.getLogInfo();

        }

    }
</script>
