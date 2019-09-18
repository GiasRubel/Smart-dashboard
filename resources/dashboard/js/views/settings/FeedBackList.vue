<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        Feedback List
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th width="60%">Message</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="feedback in feedbacks">
                                    <td>{{ feedback.user ? feedback.user.name : '' }}</td>
                                    <td width="60%">
                                        <span v-if="show === 'More'">{{ helper.subString(feedback.message, 30)+"..." }}
                                            <button class="btn btn-sm btn-primary" @click="show = 'Less'">{{ show }}</button>
                                        </span>
                                        <span v-if="show === 'Less'">{{ feedback.message}}
                                            <button class="btn btn-sm btn-primary" @click="show = 'More'">{{ show }}</button>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text-success" v-if="feedback.status">Active</span>
                                        <span class="text-danger" v-else>In-active</span>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger btn-sm" v-if="feedback.status" @click="changeStatus(feedback.id, 0)">Disable</button>
                                        <button class="btn btn-primary btn-sm" v-else @click="changeStatus(feedback.id, 1)">Enable</button>
                                        <button class="btn btn-danger btn-sm" @click="deleteFeedBackModal(feedback.id)">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="4">
                                    <pagination :pagination="pagination" @paginate="fetchFeedBackList()"
                                                v-if="pagination.last_page > 1"></pagination>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <b-modal hide-header hide-footer v-model="deleteModal">
            <h5 class="modal-title">Are you really want to delete this Order?</h5>
            <div class="text-center">
                <button class="btn btn-primary" @click="deleteFeedback">Delete</button>
                <button @click="deleteModal = false" class="btn btn-danger">Cancel</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    import helper from '../../helper/helpers'
    import pagination from '../../components/Pagination'
    export default {
        name: "FeedBackList",
        components: {
            pagination
        },
        data() {
            return {
                feedbacks: [],
                show: 'More',
                pagination: {},
                deleteModal: false,
                delete_id: 0,
                helper
            }
        },
        methods: {
            fetchFeedBackList(){
                let page = this.pagination.current_page || 1;
                axios.get('/dashboard/user-feedback/list?page='+page).then(response => {
                    this.feedbacks = response.data.data;
                    this.pagination = response.data;
                    this.pagination.data = undefined;
                }).catch(error => {
                    console.log(error);
                })
            },
            changeStatus(id, status){
                axios.patch('/dashboard/user-feedback/change-status/'+id, {'stutus' : status}).then(response => {
                    this.fetchFeedBackList();
                }).catch(error => {
                    console.log(error.response);
                })
            },
            deleteFeedBackModal(id){
                this.deleteModal = true;
                this.delete_id = id;
            },
            deleteFeedback(){
                axios.delete("/dashboard/user-feedback/delete/"+this.delete_id).then(response => {
                    this.deleteModal = false;
                    this.fetchFeedBackList();
                })
            }
        },
        watch: {

        },
        created() {
            this.fetchFeedBackList();
        }
    }
</script>

<style scoped>
    .animated >>> .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        display: none;
        overflow: hidden;
        outline: 0;
        margin-top: 60px;
    }
</style>