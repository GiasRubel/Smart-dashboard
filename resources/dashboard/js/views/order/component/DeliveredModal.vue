<template>
    <div class="card">
        <div class="card-header">Delivered info</div>
        <div class="card-body">
            <form method="post" enctype="multipart/form-data" @submit.prevent="saveDeliveredInfo()">
                <div class="form-group">
                    <label>Delivered date</label>
                    <date-picker v-model="delivered.date" :config="{format: 'MM/DD/YYYY hh:mm:ss'}"></date-picker>
                </div>
                <div class="form-group">
                    <label for="delivered_to">Delivered to</label>
                    <input id="delivered_to" v-model="delivered.delivered_to" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="delivered_document"></label>
                    <input type="file" id="delivered_document" name="file" @change="selectImage">
                </div>
                <div class="form-group">
                    <span :class="{'text-success': status, 'text-danger': !status}" v-if="message">{{ message }}</span>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" :disabled="loading"><span class="fa fa-spinner fa-spin" v-if="loading"></span>&nbsp;Save</button>
                    <button class="btn btn-danger" type="button" @click="closeModal">Close</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    import moment from 'moment'
    import axios from 'axios'
    export default {
        components: {
          datePicker
        },
        props: {
            orderId: {
              required: true
            },
            orderStatus: {
                required: false
            }
        },
        name: "DeliveredModal",
        data(){
            return {
                delivered: {
                    date: moment(new Date()).format('MM/DD/YYYY hh:mm:ss'),
                    delivered_to: '',
                    image: ''
                },
                deliveredErrors: [],
                message: '',
                status: false,
                loading: false
            }
        },
        methods: {
            saveDeliveredInfo(){
                this.loading = true;
                let formData = new FormData();
                formData.append('files', this.delivered.image);
                formData.append('date', this.delivered.date);
                formData.append('delivered_to', this.delivered.delivered_to);
                formData.append('orderId', this.orderId);
                formData.append('status', this.orderStatus);
                axios.post('/dashboard/order/delivery-info/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    this.loading = false;
                    this.message = response.data.message;
                    this.status = response.data.status;
                    setTimeout(() => {
                        this.closeModal();
                        this.delivered = {
                            date: moment(new Date()).format('MM/DD/YYYY hh:mm:ss'),
                            delivered_to: '',
                            image: ''
                        };
                        this.$parent.$parent.$parent.orderList();
                    }, 2000);
                }).catch(error => {
                    this.loading = false;
                    this.deliveredErrors = error.response.data;
                })
            },
            closeModal(){
                this.$parent.$parent.deliveredModal = false;
            },
            selectImage(event){
                this.delivered.image = event.target.files[0];
            }
        }
    }
</script>

<style scoped>

</style>