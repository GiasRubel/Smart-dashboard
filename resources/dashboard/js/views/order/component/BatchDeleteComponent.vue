<template>
    <div class="card">
        <div class="card-header">Enter your password to confirm</div>
        <div class="card-body">
            <form method="post" @submit.prevent="deleteOrder">
                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" class="form-control" type="password" v-model="password"  />
                    <span class="text-danger" v-if="deleteErrors.password">{{ deleteErrors.password[0] }}</span>
                </div>
                <div class="form-group">
                    <span :class="{'text-success': status, 'text-danger': !status}">{{ message }}</span>
                </div>
                <div class="form-group">
                    <button class="btn btn-warning" type="submit">
                        <i :class="{'fa fa-trash': !loading, 'fa fa-spinner fa-spin': loading}"></i>
                        &nbsp;Delete
                    </button>
                    <button class="btn btn-primary" type="button" @click="closeModal"><i class="fa fa-times"></i>&nbsp;Close</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props: {
          orderId:{
              required: true
          }
        },
        name: "BatchDeleteComponent",
        data(){
            return {
                password: '',
                deleteErrors: [],
                message: '',
                status: true,
                loading: false
            }
        },
        methods: {
            deleteOrder(){
                this.loading = true;
                this.deleteErrors = [];
                let orderIds = [];
                let delayForSecond = false;
                let orders = this.$parent.$parent.orders;
                this.orderId.forEach((id) => {
                    let order = orders.find((order) => {
                        return id === order.id
                    });
                    if (['cash-pending', 'pending', 'cancel', 'review-complete', 'pending-for-review'].includes(order.last_status.alias)){
                        orderIds.push(order.id);
                    }else{
                        delayForSecond = true;
                    }
                });
                if (delayForSecond){
                    this.status = false;
                    this.message = "Order only with status of (Cash-pending, Pending, Review-complete, Pending for review) will be deleted"
                }
                setTimeout(() => {
                    axios.post('/dashboard/delete-order-in-batch', {
                        orders: orderIds,
                        password: this.password
                    }).then(response => {
                        this.message = response.data.message;
                        this.status = response.data.status;
                        this.loading = false;
                        this.$parent.$parent.orderList();
                        setTimeout(() => {
                            this.closeModal();
                            this.password = '';
                        }, 2000);
                    }).catch((error) => {
                        this.loading = false;
                        this.deleteErrors = error.response.data;
                        this.message = "";
                        this.status = false
                    });
                }, 1000);
            },
            closeModal(){
                this.$parent.$parent.batchDeleteModal = false;
            }
        },
        created() {
            console.log(this.orderId)
        }
    }
</script>

<style scoped>

</style>