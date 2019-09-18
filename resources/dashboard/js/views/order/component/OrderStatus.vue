<template>
    <div class="card">
        <div class="card-header">
            Status
        </div>
        <div class="card-body">
            <ul class="nav flex-column">
                <li class="nav-item" v-for="(statuses, index) in status">
                    <b> {{ parseInt(index)+1 }}. </b>
                    {{ statuses.title ? statuses.title : '' }} -> {{ statuses.user ? statuses.user.name : '' }}
                    ({{
                        statuses.alias === 'delivered' ? helper.timeConverter(deliveryDate) :
                        helper.timeConverter(statuses.pivot.created_at)
                    }})&nbsp;<button class="btn btn-primary btn-sm" v-if="statuses.alias === 'us-on-hand'" @click="showUsOnHand"><i class="fa fa-inbox"></i></button>
                </li>
            </ul>
        </div>
        <b-modal hide-header hide-footer v-model="showModalUsOnHand" v-if="usOnHand.pivot">
            <div class="card" style="margin-bottom: 0">
                <div class="card-header">
                    {{ usOnHand.title }}
                    <div class="float-right">
                        <i class="fa fa-times pointer" style="cursor: pointer" @click="showModalUsOnHand = false"></i>
                    </div>
                </div>
                <div class="card-body">
                    <img style="width: 100%" :src="'/storage/'+usOnHand.pivot.description.image"  />
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import helper from '../../../helper/helpers'
    export default {
        props: ['status', 'deliveryDate'],
        name: "OrderStatus",
        data(){
            return {
                helper,
                showModalUsOnHand: false,
                usOnHand: {}
            }
        },
        methods: {
            showUsOnHand(){
                this.showModalUsOnHand = true;
                this.usOnHand = this.status.find((st) => {
                    return st.alias === 'us-on-hand';
                });
                this.usOnHand.pivot.description = JSON.parse(this.usOnHand.pivot.description);
            }
        }
    }
</script>

<style scoped>
    .nav > li {
        padding: 6px;
    }
</style>