<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-8">
                <b-alert v-if="message" variant="success" show fades dismissible><strong>{{message}}</strong></b-alert>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <b-card>
                    <div slot="header">
                        <router-link :to="{name: 'Store List'}"><i class="fa fa-arrow-left"></i>&nbsp; Store List</router-link>
                    </div>
                    <div class="card-body">
                        <b-form-fieldset>
                            <label>Name<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="store" v-validate="'required'"
                                              v-model="store.store_name"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('store')" class="text-danger">{{ errors.first('store')}}</span>
                            <span v-if="storeError.store_name" class="text-danger">{{ storeError.store_name[0] }}</span>
                        </b-form-fieldset>
                    </div>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitStore()">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </b-button>

                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                store: {},
                message: '',
                storeError: {},
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getStoreInfo();
            }
        },
        methods: {
            submitStore() {

                this.$validator.validateAll().then((valid) => {
                    if (valid){
                        if(this.$route.params.id)
                        {
                            axios.patch('/dashboard/stores/' +  this.$route.params.id , this.store)
                                .then(response => {
                                    console.log(response.data);
                                    this.message = response.data.success;
                                    this.$router.push({name: 'Store List', params: {message: response.data.success}})

                                }).catch(error => {
                                this.storeError = error.response.data;
                            });
                        }else{
                            axios.post('/dashboard/stores', this.store)
                                .then(response => {
                                    console.log(response.data);
                                    this.message = response.data.success;
                                    setTimeout(() => {
                                        this.message = ''
                                    },3000)
                                    this.$validator.reset()
                                    this.store = {},this.storeError = {};

                                }).catch(error => {
                                this.storeError = error.response.data;
                            });
                        }
                    }
                })

            },



            getStoreInfo() {
                axios.get('/dashboard/stores/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.store = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.$validator.reset()
                this.store = {},this.storeError = {};
            }

        }
    }
</script>
