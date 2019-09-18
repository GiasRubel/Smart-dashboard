<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-12">
                <b-alert v-if="message" variant="success" show fades dismissible><strong>{{message}}</strong></b-alert>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <b-card>
                    <div slot="header">
                        <router-link :to="{name: 'Prohibited List'}"><i class="fa fa-arrow-left"></i>&nbsp; Prohibited Product List</router-link>
                    </div>
                    <div class="card-body">
                        <b-form-fieldset>
                            <label>Title<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title" v-validate="'required'"
                                              v-model="prohibited.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="prohibitedError.title" class="text-danger">{{ prohibitedError.title[0] }}</span>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Type</label>
                            <b-input-group left="<i class='fa fa-arrow-right'></i>">
                                <select class="form-control" v-model="prohibited.type">
                                    <option value="0">Select type</option>
                                    <option v-for="type in types" :value="type.id">{{ type.value }}</option>
                                </select>
                            </b-input-group>
                            <span v-if="prohibitedError.title" class="text-danger">{{ prohibitedError.type[0] }}</span>
                        </b-form-fieldset>
                    </div>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>

                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitEmailTemplate()">
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
                prohibited: {
                    type: 0
                },
                message: '',
                prohibitedError: {},
                types: [
                    { id: 'category', value: 'Category' },
                    { id: 'title', value: 'Title' }
                ]
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getTemplateInfo();
            }
        },
        methods: {
            submitEmailTemplate() {
                let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                this.$validator.validateAll().then((valid) => {
                    if (valid){
                        storeUrl('/dashboard/prohibited' + (this.$route.params.id ? '/'+this.$route.params.id : ''), this.prohibited)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000)
                                this.$validator.reset()
                                this.message && this.$route.params.id ? this.$router.push({name: 'Prohibited List', params: {message: response.data.success}}) :
                                    this.prohibited = {},this.prohibitedError = {};

                            }).catch(error => {
                            this.prohibitedError = error.response.data;
                        });
                    }
                })

            },



            getTemplateInfo() {
                axios.get('/dashboard/prohibited/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.prohibited = response.data;
                    }).catch(error => {
                    console.log(error)
                })
            },

            reset(){
                this.$validator.reset()
                this.prohibited = {},this.prohibitedError = {};
            }

        }
    }
</script>
