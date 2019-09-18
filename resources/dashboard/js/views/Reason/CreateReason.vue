<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <router-link :to="{name: 'Reason list'}"><i class="fa fa-arrow-left"></i>&nbsp;Reason list</router-link>
                    </div>
                    <div class="card-body">
                        <form method="post" @submit.prevent="storeReason">
                            <div class="form-group">
                                <label>Title</label>
                                <input type="text" class="form-control" v-model="reason.title"  />
                                <span class="text-danger" v-if="reason_errors.title">{{ reason_errors.title[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label>Order</label>
                                <input type="text" class="form-control" v-model="reason.order"  />
                                <span class="text-danger" v-if="reason_errors.order">{{ reason_errors.order[0] }}</span>
                            </div>
                            <div class="form-group">
                                <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                          v-model="reason.status"/>
                            </div>
                            <div class="form-group">
                                <span :class="{'text-success': status, 'text-danger': !status}" v-if="message">{{ message }}</span>
                            </div>
                            <div class="form-group">
                                <button typeof="submit" class="btn btn-primary"><i v-if="loading" class="fa fa-spinner fa-spin"></i>&nbsp;Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cSwitch from '../../components/Switch'
    import axios from 'axios'
    export default {
        name: "CreateReason",
        data(){
            return {
                reason: {
                    status: true
                },
                loading: false,
                message: '',
                reason_errors: [],
                status: true
            }
        },
        methods: {
            storeReason(){
                this.reason_errors = [];
                this.loading = true;
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;
                storeUrl('/dashboard/reasons' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.reason).then((response) => {
                    this.loading = false;
                    this.message = response.data.message;
                    this.status = response.data.status;
                    if (!this.$route.params.id){
                        this.reason = { status: true };
                    }
                    setTimeout(() => {
                        this.message = '';
                        this.status = true
                    }, 4000);
                }).catch((error) => {
                    this.loading = false;
                    this.reason_errors = error.response.data;
                });
            },
            getReason(){
                console.log(this.$route.params.id);
                if (!this.$route.params.id)
                    return;
                axios.get(`/dashboard/reasons/${this.$route.params.id}`).then((response) => {
                    this.reason = response.data;
                }).catch((error) => {
                    alert(error.response.message);
                })
            }
        },
        components: {
            'c-switch': cSwitch
        },
        created() {
            this.getReason();
        }
    }
</script>
