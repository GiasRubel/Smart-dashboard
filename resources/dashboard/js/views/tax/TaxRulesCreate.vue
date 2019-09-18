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
                        <router-link :to="{name: 'Tax Rules List'}"><i class="fa fa-arrow-left"></i>&nbsp; Tax rules list</router-link>
                    </div>
                    <b-form-fieldset>
                        <label>Tax Rules Title <span class="star-req">*</span></label>
                        <div :class="{ 'has-error': errors.has('title') }">
                            <b-form-input type="text"
                                          v-model="taxclass.title"
                                          name="title"
                                          v-validate="'required'">
                                          :class="{ 'input': true, 'has-error': errors.has('title') }">
                            </b-form-input>
                        </div>


                        <div class="help-block error text-danger">
                            <span v-show="errors.has('title')">{{ errors.first('title')}}</span>
                            <span v-if="newErrors.title" class="text-danger">{{ newErrors.title[0] }}</span>
                        </div>
                    </b-form-fieldset>


                    <b-form-fieldset>
                        <label>Priority<span class="star-req"> *</span></label>
                        <div :class="{ 'has-error': errors.has('priority') }">
                            <b-form-input type="text"
                                          v-model="taxclass.priority"
                                          name="priority"
                                          v-validate="'required|numeric'"
                                          :class="{ 'input': true, 'has-error': errors.has('priority') }">

                            </b-form-input>
                        </div>
                       <div class="help-block error text-danger">
                           <span v-show="errors.has('priority')">{{ errors.first('priority')}}</span>
                           <span v-if="newErrors.priority" class="text-danger">{{ newErrors.priority[0] }}</span>
                       </div>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Tax Price<span class="star-req"> *</span></label>

                        <b-form-input type="text"
                                      v-model="taxclass.tax_price"
                                      name="tax_price"
                                      v-validate="'required|decimal'"
                                      :class="{ 'input': true, 'has-error': errors.has('tax_price') }">

                        </b-form-input>

                        <div class="help-block error text-danger">
                            <span v-show="errors.has('tax_price')">{{ errors.first('tax_price')}}</span>
                            <span v-if="newErrors.tax_price" class="text-danger">{{ newErrors.tax_price[0] }}</span>
                        </div>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Content Type</label><br>
                        <div class="form-inline tax-rules">

                            <input type="text" placeholder="Split"
                                   v-model="type.one" class="form-control tax-input"
                                   @input="calculateContentType()">


                                <select size="0" class="form-control tax-input"
                                        v-model="type.operator"
                                        @change="calculateContentType()">
                                    <option value="" selected>Select Operator</option>
                                    <option v-for="(operator,key) in operators"
                                            :value="operator">{{ operator }}
                                    </option>
                                </select>

                            <input type="text" placeholder="Window"
                                   v-model="type.two" class="form-control tax-input"
                                   @input="calculateContentType()">

                        </div>
                        <br>
                        <input type="hidden" name="Content_type" v-model="taxclass.contain_type"/>
                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Contain Title<span class="star-req"> *</span></label>

                            <b-form-input type="text"
                                          v-model="taxclass.contain_title"
                                          name="contain"
                                          v-validate="'required'"
                                          :class="{ 'input': true, 'has-error': errors.has('contain') }">

                            </b-form-input>

                        <div class="help-block error text-danger">
                            <span v-show="errors.has('contain')">{{ errors.first('contain')}}</span>
                            <span v-if="newErrors.contain_title" class="text-danger">{{ newErrors.contain_title[0] }}</span>
                        </div>
                    </b-form-fieldset>



                    <b-form-fieldset>
                        <label>Contain Unit</label>

                        <b-form-input type="text"
                                      v-model="taxclass.contain_unit">
                        </b-form-input>

                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Minimum Unit</label>

                        <b-form-input type="number" min="0"
                                      v-model="taxclass.unit_min">
                        </b-form-input>

                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Maximum Unit</label>

                        <b-form-input type="number" min="0"
                                      v-model="taxclass.unit_max">
                        </b-form-input>

                    </b-form-fieldset>

                    <b-form-fieldset>
                        <label>Add A Group<span class="star-req"> *</span></label>
                        <multiselect v-model="taxclass.taxgrouprule"
                                     tag-placeholder="Add this as new tag"
                                     name="Rule"
                                     v-validate="'required'"
                                     label="title"
                                     track-by="id"
                                     :options="groupTag"
                                     :multiple="true"
                                     :taggable="true"></multiselect>
                        <span v-show="errors.has('Rule')" class="text-danger">{{ errors.first('Rule')}}</span>
                    </b-form-fieldset>



                    <b-form-fieldset>
                        <div class="row">
                            <div class="col-md-5">Is Applicable For Sub Total ?</div>
                            <div class="col-md-7">
                                <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                          v-model="taxclass.applicable_for_subtotal"/>
                            </div>
                        </div>
                    </b-form-fieldset>

                    <div slot="footer">
                        <b-button type="reset" size="sm" variant="danger" @click="reset"><i class="fa fa-ban"></i> Reset</b-button>

                        <b-button type="submit" size="sm" variant="success" @click="storeTaxClassRules"><i
                                class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Multiselect from 'vue-multiselect'
    import cSwitch from '../../components/Switch'
    import _ from 'lodash';

    export default {
        components: {
            Multiselect,
            cSwitch
        },
        data() {
            return {
                groupTag: [],
                options: '',
                taxclass: {},
                type: {
                    one: '',
                    operator: '',
                    two: ''
                },
                operators : ['and','or','equal','not equal', 'gretter then', 'less then'],
                contentType: '',
                spliter: '',
                message: '',
                newErrors: {},
                msg : [],
            }
        },
        created() {
            this.getGroupInfo();
            if (this.$route.params.id) {
                this.getTaxClass();
            }
        },
        methods: {


            storeTaxClassRules() {
                let clonedTaxClass = _.clone(this.taxclass);

                if (_.isArray(this.taxclass['taxgrouprule']) && this.taxclass['taxgrouprule'].length) {
                    clonedTaxClass['taxgrouprule'] = _.map(this.taxclass['taxgrouprule'], 'id');
                }

                this.$validator.validateAll().then((valid) => {
                    if (valid) {

                        let storeUrl = this.$route.params.id ? axios.patch : axios.post;

                        storeUrl('/dashboard/tax-rules' + (this.$route.params.id ? '/'+this.$route.params.id : ''), clonedTaxClass)
                            .then(response => {
                                console.log(response.data);
                                this.message = response.data.success;
                                setTimeout(() => {
                                    this.message = ''
                                },3000)
                                this.message && this.$route.params.id ? this.$router.push({name: 'Tax Rules List', params: {message: response.data.success}}) :
                                    this.taxclass = { }, this.newErrors = {}
                                this.$validator.reset()

                            }).catch(error => {
                            this.newErrors = error.response.data;
                        });


                    }
                })
            },

            getTaxClass() {
                axios.get('/dashboard/tax-rules/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.taxclass = response.data;
                        this.taxclass.applicable_for_subtotal = response.data.applicable_for_subtotal === 1 ? true : false;
                        this.contentType = response.data.contain_type;
                        this.spliter = this.contentType.split(',', 3);
                        this.type.one = this.spliter[0].trim();
                        this.type.operator = this.spliter[1].trim();
                        this.type.two = this.spliter[2].trim();
                    }).catch(error => {
                    console.log(error)
                })
            },

            getGroupInfo(){
                axios.get('/dashboard/tax-rules/create/')
                    .then(response => {
                        this.groupTag = response.data;
                        console.log(this.groupTag);
                    }).catch(error => {
                        console.log(error);
                });
            },

            calculateContentType(){
                let type1 = this.type.one;
                let operator = this.type.operator;
                let type2 = this.type.two;

                let content_type = type1 + ',' + operator + ',' + type2;

                this.taxclass.contain_type = content_type;
            },

            reset() {
                this.taxclass = { }, this.newErrors = {}
            }
        }
    }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
    .multiselect--active {
        z-index: 3;
    }
</style>