<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <i class="fa fa-lock"></i> Change password
                    </div>
                    <div class="card-body">
                        <form method="post" @submit.prevent="changePassword">
                            <div class="form-group">
                                <label>Current password</label>
                                <input type="password" class="form-control" v-model="password.current_password" />
                                <span v-if="errorss.current_password" class="text-danger">{{ errorss.current_password[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label>New password</label>
                                <input type="password" class="form-control" v-model="password.new_password" />
                                <span v-if="errorss.new_password" class="text-danger">{{ errorss.new_password[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label>Confirm new password</label>
                                <input type="password" class="form-control" v-model="password.new_password_confirmation" />
                                <span v-if="errorss.new_password_confirmation" class="text-danger">{{ errorss.new_password_confirmation[0] }}</span>
                            </div>
                            <div class="form-group">
                                <span :class="{ 'text-danger' : !status, 'text-success': status }">{{ message }}</span>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary"><span class="fa fa-spinner fa-spin" v-if="loading"></span>&nbsp;Change</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ChangePassword",
        data(){
            return{
                password: {},
                message: '',
                status: false,
                loading: false,
                errorss: {}
            }
        },
        methods: {
            changePassword(){
                this.loading = true
                axios.post('/dashboard/user/change-password', this.password).then((response) => {
                    this.loading = false
                    this.message = response.data.message;
                    this.status = response.data.status;
                    this.errorss = {};
                    setTimeout(() => {
                        this.message = '';
                        this.status = false;
                        this.password = {};
                    }, 5000)
                }).catch((err) => {
                    this.loading = false
                    this.errorss = err.response.data;
                    this.message = err.response.data.message;
                    this.status = err.response.data.status;
                    setTimeout(() => {
                        this.errorss = {}
                    }, 5000)
                })
            }
        }
    }
</script>

<style scoped>

</style>