<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left" style="margin: 0px;"><i class="fa fa-align-justify"></i> Product
                            measurement category
                        </div>
                        <div class="float-right">
                            <router-link class="btn btn-primary btn-sm" style="margin: 0px;"
                                         :to="{name: 'Create category'}">Add new
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
                            </div>+
                        </div>

                        <div class="row pull-right">
                            <div class="col-md-12">
                                <b-button v-if="Ids.length" variant="warning" size="sm"
                                          @click="deleteMeasurement(Ids)"
                                          style="margin-bottom: 10px; margin-right: 100px;">
                                    <i class="fa fa-trash "></i> Batch Delete
                                </b-button>
                            </div>
                        </div>

                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th><input type="checkbox" @change="selectAll" v-model="allSelected"></th>
                                <th>Title</th>
                                <th>Volumetric weight</th>
                                <th>Parent</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(category, index) in categories">
                                <td><input type="checkbox" v-model="Ids" @change="select" :value="category.id"></td>
                                <td>{{ category.title }}</td>
                                <td>{{ category.volumetric_weight }}</td>
                                <td>{{ category.parent ? category.parent.title : '' }}</td>
                                <td>
                                    <button v-if="Ids.length==''" class="btn btn-warning btn-sm" @click="deleteMeasurement(category.id)"><i
                                            class="fa fa-trash"></i></button>
                                    <router-link class="btn btn-primary btn-sm"
                                                 :to="{ name: 'Edit Category', params: {id: category.id} }"><i
                                            class="fa fa-edit"></i></router-link>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                        <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5"
                                    @paginate="fetchCategories()"></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import pagination from '../../components/Pagination'
    import search from '../../components/Search'
    import duration from '../../config/duration'
    export default {
        name: "ProductMeasurementCategory",
        components: {
            pagination, search
        },
        data() {
            return {
                categories: {},
                status: false,
                searchBy: [
                    {id: 'title', value: 'Title'},
                    {id: 'volumetric_weight', value: 'Weight'}
                ],
                field: 'title',
                query: '',
                allSelected: false,
                Ids: [],
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
                    this.fetchCategories();
                },
                immediate: true
            },
            query: function (value) {
                    clearTimeout(this.interval);
                    this.interval = setTimeout(() => {
                        this.fetchCategories(true)
                    }, duration.timeToWait)

            },
            perlist: function (value) {
                this.fetchCategories();
            }
        },

        methods: {
            fetchCategories(st = false) {
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
                axios.get('/dashboard/product-measurement-category?page=' + this.pagination.current_page + '&field=' + this.field + '&q=' + this.query + '&per_page=' + this.perlist)
                    .then(response => {
                        this.categories = response.data.data;
                        this.pagination = response.data;
                        this.pagination.data = undefined;
                    }).catch(err => {
                    alert("Something went wrong please try again")
                })
            },
            deleteMeasurement(id) {
                if (!confirm('Are you really want to delete this product'))
                    return;
                axios.delete("/dashboard/product-measurement-category/" + id).then(response => {
                    this.status = !this.status;
                    this.Ids = [];
                    this.allSelected = false;
                });
            },

            refresh() {
                this.query = '';
                this.field = 'title';
                this.perlist = 10;
                this.fetchCategories();
            },

            selectAll() {

                this.Ids = [];
                if (this.allSelected) {
                    for (this.catagory in this.categories) {
                        this.Ids.push(this.categories[this.catagory].id);
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