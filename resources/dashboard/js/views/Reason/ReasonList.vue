<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        Reason list
                        <div class="float-right">
                            <router-link :to="{name: 'Create-reason'}" class="btn btn-primary btn-sm">
                                <i class="fa fa-plus"></i>
                            </router-link>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(reason, index) in reasons" :key="index">
                                    <td>{{ reason.title }}</td>
                                    <td>{{ reason.order }}</td>
                                    <td>
                                        <span v-if="reason.status == 1" class="btn btn-success btn-sm">Active</span>
                                        <span v-else class="btn btn-danger btn-sm">In-Active</span>
                                    </td>
                                    <td>
                                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'Update-reason', params: {id: reason.id} }"><i class="fa fa-edit"></i></router-link>
                                        <button class="btn btn-warning btn-sm" @click="deleteModalShow(reason.id)"><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <b-modal hide-header hide-footer v-model="deleteModal">
            <div class="card" style="margin: 0px">
                <div class="card-header">
                    Are you really want to delete?
                    <div class="float-right">
                        <i class="fa fa-times" @click="deleteModal = false" style="cursor: pointer"></i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="text-center"><span :class="{ 'text-success': status, 'text-danger' : !status }">{{ message }}</span></div>
                    <div class="text-center">
                        <button class="btn btn-primary btn-sm" @click="deleteReason">Delete</button>
                        <button class="btn btn-danger btn-sm" @click="deleteModal = false">Close</button>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ReasonList",
        data(){
            return{
                reasons: [],
                deleteModal: false,
                delete_id: '',
                message: '',
                status: true
            }
        },
        methods:{
            reasonList(){
                axios.get('/dashboard/reasons').then((response) => {
                    this.reasons = response.data;
                }).catch((error) => {
                    console.log(error.response)
                })
            },
            deleteModalShow(id){
                this.deleteModal = true;
                this.delete_id = id;
            },
            deleteReason(){
                axios.delete('/dashboard/reasons/'+this.delete_id).then((response) => {
                    this.message = response.data.message;
                    this.status = response.data.status
                    this.reasonList();
                    setTimeout(() => {
                        this.deleteModal = false;
                        this.message = '';
                    }, 2000);
                }).catch((error) => {

                })
            }
        },
        created() {
            this.reasonList();
        }
    }
</script>

<style scoped>
    .animated >>> .modal{
        margin-top: 60px;
    }
</style>