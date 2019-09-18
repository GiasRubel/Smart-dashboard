<template>
    <div class="animated fadein">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        Discount items
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Item from</th>
                                    <th>Title</th>
                                    <th>Time remaining</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in items">
                                    <td>{{ ++index }}</td>
                                    <td>{{ item.store ? item.store.store_name : '' }}</td>
                                    <td><a :href="item.url" target="_blank">{{ item.title }}</a></td>
                                    <td>{{ item.discount }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <pagination :offset="10" :pagination="pagination" @paginate="getItems()"
                                    v-if="pagination.last_page > 1"></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import helper from '../../helper/helpers'
    export default {
        name: "DiscounntItems",
        data(){
            return{
                items: [],
                status: false,
                datess: [],
                pagination:{},
                helper
            }
        },
        methods:{
            getItems(){
                let page = this.pagination.current_page || 1;
                axios.get('/dashboard/item/discount-items?page=' + page).then((response) => {
                    this.items = response.data.data;
                    this.pagination = response.data;
                    setInterval(() => {
                        this.items.forEach((el, index) => {
                            let discount_end_at = el.item_price.discount_end_at;
                            /*console.log(helper.timeInterval(discount_end_at));*/
                            this.items[index].discount = helper.timeInterval(discount_end_at);
                        });
                    }, 2000);
                }).catch((error) => {
                    console.log(error.response);
                });
            }
        },
        watch: {
            status: {
                handler: 'getItems',
                immediate: true
            }
        }
    }
</script>

<style scoped>

</style>