<template>
    <div class="animated fadein">
        <form method="post" @submit.prevent="submitStoreSettings">
            <div class="card">
                <div class="card-header">
                    <router-link class="btn btn-link" :to="{path: '/dashboard/settings/store'}"
                                 style="margin-top: 0px;"><i class="fa fa-arrow-left"></i>&nbsp;Store settings
                    </router-link>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Store</label>
                        <select class="form-control" v-model="settings.store_id">
                            <option value="0">Select one</option>
                            <option v-for="(store,key) in stores"
                                    :value="key">{{ store }}
                            </option>
                        </select>
                        <span class="text-danger" v-if="storeError.store_id">{{ storeError.store_id[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label>Key</label>
                        <input type="text" v-model="settings.key" class="form-control"/>
                        <span class="text-danger" v-if="storeError.key">{{ storeError.key[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label>Value</label>
                        <input type="text" class="form-control" v-model="settings.value">
                        <span class="text-danger" v-if="storeError.value">{{ storeError.value[0] }}</span>
                    </div>
                    <div class="form-group">
                        <label>Type</label>
                        <input type="text" class="form-control" v-model="settings.type">
                    </div>
                    <div class="form-group">
                        <span v-if="message" class="text-success">{{ message }}</span>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success btn-sm"><i v-if="loader" class="fa fa-spinner fa-spin"></i>&nbsp;Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreateSettings",
        data() {
            return {
                settings: {
                    store_id: 0
                },
                stores: {},
                storeError: '',
                loader: false,
                message: false
            }
        },
        methods: {
            getStores() {
                axios.get('/dashboard/product-measurment/create').then(response => {
                    this.stores = response.data
                    console.log(this.stores)
                })
            },
            getSettings() {
                if (this.$route.params.id) {
                    axios.get("/dashboard/store-settings/" + this.$route.params.id).then(response => {
                        this.settings = response.data;
                    }).catch(error => {
                        alert("Something went wrong please try again")
                    });
                }
            },
            submitStoreSettings() {
                this.loader = true;
                let id = this.$route.params.id ? this.$route.params.id : '';
                // let storeUrl = this.$route.params.id ? axios.patch : axios.post;
                if (this.$route.params.id) {
                    axios.patch('/dashboard/store-settings/' + id, this.settings).then(response => {
                        this.loader = false;
                        !this.$route.params.id ? this.settings = {} : '';
                        this.message = response.data.message
                        this.storeError = {}
                    }).catch(error => {
                        this.loader = false;
                        this.storeError = error.response.data;
                    });
                }else{
                    axios.post('/dashboard/store-settings', this.settings).then(response => {
                        this.loader = false;
                        !this.$route.params.id ? this.settings = {} : '';
                        this.message = response.data.message
                        this.storeError = {}
                    }).catch(error => {
                        this.loader = false;
                        this.storeError = error.response.data;
                    });
                }
                // storeUrl('/dashboard/store-settings/' + id, this.settings).then(response => {
                //     this.loader = false;
                //     !this.$route.params.id ? this.settings = {} : '';
                //     this.message = response.data.message
                //     this.storeError = {}
                // }).catch(error => {
                //     this.loader = false;
                //     this.storeError = error.response.data;
                // });
            }
        },
        created() {
            this.getStores();
            this.getSettings();
        }
    }
</script>

<style scoped>

</style>