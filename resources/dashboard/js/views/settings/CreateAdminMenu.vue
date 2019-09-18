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
                        <router-link :to="{name: 'Admin Menu List'}">
                            <i class="fa fa-arrow-left"></i>&nbsp; Admin Menu List
                        </router-link>
                    </div>

                    <div class="payment-method">

                        <b-form-fieldset>
                            <label> Title <span class="star-req">*</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              name="Title" v-validate="'required'"
                                              v-model="admin.title"></b-form-input>
                            </b-input-group>
                            <span v-if="errors.has('Title')" class="text-danger">{{ errors.first('Title')}}</span>
                            <span v-if="adminError.title" class="text-danger">{{ adminError.title[0] }}</span>
                        </b-form-fieldset>


                        <b-form-fieldset>
                            <label>Menu Type<span class="star-req"> *</span></label>
                            <select size="0" class="form-control"
                                    name="Type" v-validate="'required'"
                                    v-model="admin.menu_types">
                                <option value="" selected>Please Menu Type From List</option>
                                <option v-for="(menutype,key) in menuTypes"
                                        :value="menutype">{{ menutype }}
                                </option>

                            </select>
                            <span v-if="errors.has('Type')" class="text-danger">{{ errors.first('Type')}}</span>
                            <span v-if="adminError.menu_types" class="text-danger">{{ adminError.menu_types[0] }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Menu Action<span class="star-req"> *</span></label>
                            <select size="0" class="form-control"
                                    name="MenuAction" v-validate="'required'"
                                    v-model="admin.menu_action">
                                <option value="" selected>Please Menu Action From List</option>
                                <option v-for="(menuaction,key) in menuActions"
                                        :value="menuaction">{{ menuaction }}
                                </option>

                            </select>
                            <span v-if="errors.has('MenuAction')"
                                  class="text-danger">{{ errors.first('MenuAction')}}</span>
                            <span v-if="adminError.menu_action" class="text-danger">{{ adminError.menu_action[0]
                                }}</span>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Route<span class="star-req"> *</span></label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <select v-model="admin.route" class="form-control">
                                    <optgroup v-for="(routes, key) in routeLists" :key="key" :label="key">
                                        <option v-for="(route, k) in routes" :value="k">{{route}}</option>
                                    </optgroup>
                                </select>
                            </b-input-group>
                            <span v-if="errors.has('Route')" class="text-danger">{{ errors.first('Route')}}</span>
                            <span v-if="adminError.route" class="text-danger">{{ adminError.route[0] }}</span>
                        </b-form-fieldset>
                        <b-form-fieldset>
                            <label>Module Name</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="admin.module_name"></b-form-input>
                            </b-input-group>

                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Component Name</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <select size="0" class="form-control"
                                        name="Type" v-validate="'required'"
                                        v-model="admin.component_name">
                                    <option value="" selected>Please select component name</option>
                                    <optgroup v-for="(nav, index) in naveItems" :label="nav.name" :key="index">
                                        <option v-for="(routeName, key) in childrenRoute(nav.children, nav.name)"
                                                :value="nav.name+'^'+routeName.name ">{{ routeName.name }}
                                        </option>
                                    </optgroup>
                                </select>
                            </b-input-group>

                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Icon Class</label>
                            <b-input-group left="<i class='fa fa-user'></i>">
                                <b-form-input type="text"
                                              v-model="admin.icon_class"></b-form-input>
                            </b-input-group>

                        </b-form-fieldset>
                        <b-form-fieldset>
                            <div class="row">
                                <div class="col-md-2">Status</div>
                                <div class="col-md-10">
                                    <c-switch type="text" variant="primary" on="On" off="Off" :pill="true"
                                              v-model="admin.status"/>
                                </div>
                            </div>
                        </b-form-fieldset>

                        <b-form-fieldset>
                            <label>Icon Image</label>
                            <input type="file" id="file"
                                   ref="file" accept="image/*"
                                   @change="imageChange"/>
                            <template v-if="$route.params.id">
                                <img :src="'/img/admin-menu/' + admin.icon_img" width="200"/>
                            </template>
                            <span v-if="adminError.image" class="text-danger">{{ adminError.image[0] }}</span>
                            <span v-if="warning" class="text-danger">{{ warning}}</span>
                        </b-form-fieldset>
                    </div>

                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="danger" @click="reset">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                        <b-button type="submit"
                                  size="sm"
                                  variant="success"
                                  @click="submitAdminMenu()">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </b-button>

                    </div>

                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
    import cSwitch from '../../components/Switch'
    import Forms from "../components/Forms";
    import nav from "../../_nav"

    export default {
        components: {
            Forms,
            cSwitch
        },
        data() {
            return {
                admin: {
                    menu_types: '',
                    menu_action: '',
                    image: '',
                    component_name: ''
                },
                menuTypes: ['top_menu', 'sidebar_menu'],
                menuActions: ['index', 'show', 'create', 'update', 'destroy'],
                message: '',
                warning: '',
                adminError: {},
                routeLists: [],
                routeNameLists: [],
                naveItems: []
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getAdminInfo();
            }
            this.getRouteList();
            this.routeNameLists = this.$router.options.routes[0].children;
            this.naveItems = nav.items;
        },
        methods: {
            imageChange(e) {
                var fileReader = new FileReader()
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = (e) => {
                    this.admin.image = e.target.result
                }
            },

            submitAdminMenu() {
                this.$validator.validateAll().then((valid) => {
                    if (valid) {
                        if (this.$route.params.id) {
                            axios.patch('/dashboard/admin-menu/' + this.$route.params.id, this.admin)
                                .then(response => {
                                    this.message = response.data.success;
                                    this.warning = response.data.warning;
                                    if (this.warning == undefined) {
                                        this.$router.push({
                                            name: 'Admin Menu List',
                                            params: {message: response.data.success}
                                        })
                                    }

                                }).catch(error => {
                                console.log(error)
                                this.adminError = error.response.data;
                            });
                        }
                        else {
                            axios.post('/dashboard/admin-menu', this.admin)
                                .then(response => {
                                    this.message = response.data.success;
                                    this.warning = response.data.warning;
                                    setTimeout(() => {
                                        this.message = ''
                                    }, 3000)
                                    this.$validator.reset();

                                    this.admin = {
                                        menu_types: '',
                                        menu_action: '',
                                    };
                                    this.adminError = {};

                                }).catch(error => {
                                this.adminError = error.response.data;
                            });
                        }
                    }
                })


            },


            getAdminInfo() {
                axios.get('/dashboard/admin-menu/' + this.$route.params.id + '/edit')
                    .then(response => {
                        this.admin = response.data;
                        this.admin.status = response.data.status === 1 ? true : false;

                    }).catch(error => {
                    console.log(error)
                })
            },
            getRouteList() {
                axios.get('/dashboard/admin-menu/create')
                    .then(response => {
                        this.routeLists = response.data;

                    }).catch(error => {
                    console.log(error)
                })
            },

            reset() {
                this.$validator.reset();

                this.admin = {
                    menu_types: '',
                    menu_action: '',
                };
                this.adminError = {};
            },
            childrenRoute(navs, parent){
                if (navs){
                    return navs;
                }
                return [{
                    name: parent
                }]
            }

        }
    }
</script>

