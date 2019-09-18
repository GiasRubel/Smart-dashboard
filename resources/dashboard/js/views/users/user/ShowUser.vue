<template>
    <div class="card">
        <div class="card-header">
            <router-link :to="{name: 'List'}"><i class="fa fa-arrow-left"></i>&nbsp; User list</router-link>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12" >
                    <table class="table table-hover table-sm table-bordered mg-0">
                        <tr>
                            <td width="25%"><b>Full name</b></td>
                            <td width="25%">{{userDetail.name}}</td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td width="25%">{{userDetail.email}} &nbsp;<button class="btn btn-primary btn-sm" @click="notifyModal = !notifyModal"><i class="fa fa-bell"></i></button></td>
                        </tr>
                        <tr>
                            <td><b>Mobile</b></td>
                            <td width="25%">{{userDetail.mobile}}</td>
                        </tr>

                        <tr>
                            <td><b>Is Admin</b></td>
                            <td>
                                <template v-if="userDetail.is_admin"> Yes </template>
                                <template v-else> No </template>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Roles</b></td>
                            <td>
                                <template v-if="userDetail.roles">
                                    <ul v-for="role in userDetail.roles">
                                        <li>{{role.title}}</li>
                                    </ul>
                                </template>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <br>
            <div class="card" v-if="!userDetail.is_email_verify || Object.keys(browsers).length">
                <div class="card-header">Approve user and browser section</div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="!userDetail.is_email_verify">
                                <td>Email</td>
                                <td>
                                    <button class="btn btn-primary" @click="approveEmail"><i class="fa fa-check"></i>&nbsp;Approve</button>
                                </td>
                            </tr>
                            <tr v-for="browser in browsers">
                                <td>Browser</td>
                                <td>
                                    <button class="btn btn-primary" @click="apprveBrowser(browser.id)">
                                        <i class="fa fa-check"></i>&nbsp;Approve
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <router-link :to="{name: 'Edit User', params: {id: userDetail.id}}"
                                 class="btn btn-success btn-sm" tag="button" type="button">
                        <i class="fa fa-edit"></i> Edit
                    </router-link>

                    <b-button  variant="warning" size="sm" @click="deleteUser(userDetail.id)"><i
                            class="fa fa-trash"></i> Delete</b-button>
                </div>
            </div>
        </div>
        <b-modal hide-header hide-footer v-model="notifyModal">
            <div class="card" style="margin: 0px;">
                <div class="card-body">
                    <form method="post" @submit.prevent="sendNotification()">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Subject</label>
                                    <input type="text" class="form-control" v-model="notification.title" />
                                    <span class="text-danger" v-if="notificationError.title">{{ notificationError.title[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea class="form-control" v-model="notification.message" style="resize: none;" rows="4"></textarea>
                                    <span class="text-danger" v-if="notificationError.message">{{ notificationError.message[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <label>CC email</label>
                                    <input type="text" class="form-control" v-model="notification.cc" />
                                </div>
                                <div class="form-group">
                                    <span class="text-success">{{ message }}</span>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-success btn-sm">
                                        <i :class="{ 'fa fa-telegram': !loading, 'fa fa-spinner fa-spin': loading }"></i>&nbsp;Send
                                    </button>
                                    <button class="btn btn-danger btn-sm" @click="notifyModal = false"><i class="fa fa-close"></i>&nbsp;Close</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ShowUser",

        data() {
            return {
                userDetail : {},
                notifyModal: false,
                notification: {
                    title: '',
                    message: '',
                    cc: 'info@shopnshipbd.com'
                },
                loading: false,
                notificationError: {},
                message: '',
                browsers: []
            }
        },

        created () {
            this.getIndividualUser();
            this.getBrowserUser();
        },

        methods :  {
            getIndividualUser () {
                axios.get('/dashboard/user/' + this.$route.params.id)
                    .then(response => {
                        this.userDetail = response.data
                    })
            },

            deleteUser(id) {
                if (!confirm('Are you really want to delete'))
                    return;
                axios.delete('/dashboard/user/' + id)
                    .then((response) => {
                        this.$router.push({name: 'List', params: {message: response.data.success}})
                    }).catch((error) => {
                    console.log(error);
                });
            },
            sendNotification(){
                this.loading = true;
                this.notificationError = {};
                axios.post("/dashboard/user/notify/"+this.$route.params.id, this.notification).then(response => {
                    this.loading = false;
                    this.message = response.data.message;
                }).catch(error => {
                    this.loading = false;
                    this.notificationError = error.response.data
                });
            },
            async getBrowserUser(){
                let result = await  axios.get("/dashboard/get-user-unverified-browser/"+this.$route.params.id);
                this.browsers = result.data;
            },
            async apprveBrowser(id){
                let result = await axios.post("/dashboard/approve-user-unverified-browser/"+id);
                alert(result.data.message);
                this.getBrowserUser();
            },
            async approveEmail(){
                let result = await axios.post("/dashboard/approve-user-unverified-email/"+this.$route.params.id)
                alert(result.data.message);
                this.getIndividualUser();
            }
        }
    }
</script>

<style scoped>

</style>