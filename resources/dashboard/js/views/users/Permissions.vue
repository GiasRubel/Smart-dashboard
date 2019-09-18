<template>
    <div class="animated fadeIn" v-if="permissions">
        <div class="row">
            <div class="col-lg-12">
                <b-card>
                    <div slot="header">
                        <strong>{{message}}</strong>
                    </div>

                    <div slot="header">
                        <strong>User Permission</strong>
                    </div>

                    <b-form-fieldset>
                        <select size="0" class="form-control" v-model="roleId" @change="rolePermission">
                            <option value="" selected>Please select Role</option>
                            <option v-for="(role, key) in roles"
                                    :value="key">{{ role }}
                            </option>
                        </select>
                        <strong v-if="fErrors.roleId" class="has-text-danger">{{ fErrors.roleId[0] }}</strong>

                    </b-form-fieldset>

                    <div role="tablist" v-if="Object.keys(permissions).length">

                        <b-list-group v-for="(permission, keys) in permissions" :key="keys">
                            <div class="input-checkbox">
                                <input type="checkbox" v-model="checkList[keys]" @click="checkChilds(keys )"/>
                                <b-list-group-item block href="#" v-b-toggle="'accordion-' + keys">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    {{keys|removePrefix}}
                                </b-list-group-item>
                            </div>
                            <b-collapse :id="'accordion-' + keys" :accordion="'my-accordion'+keys" :role="keys">

                                <b-list-group v-if="Object.keys(permission).length" v-for="(permit, key) in permission"
                                              :key="key">
                                    <div class="input-checkbox">
                                        <input type="checkbox" v-model="checkList[keys+'-'+key]"
                                               @click="checkChilds(keys+'_'+key)"/>
                                        <b-list-group-item block href="#" v-b-toggle="'accordion-' + keys+key">
                                            {{key|removeController}}
                                        </b-list-group-item>
                                    </div>
                                    <b-collapse :id="'accordion-' +keys+ key" :accordion="'my-accordion'+keys+key"
                                                :role="keys+key">

                                        <b-list-group v-if="Object.keys(permit).length" v-for="(per, ke) in permit"
                                                      :key="ke">
                                            <div class="input-checkbox">
                                                <input type="checkbox" v-model="checkList[keys+'-'+key+'-'+ke]"
                                                       @click="checkChilds(keys+'_'+key+'_'+ke)"/>
                                                <b-list-group-item block href="#"
                                                                   v-b-toggle="'accordion-' + keys+key+ke">
                                                    {{(ke==='PUT')?'Update':(ke==='POST')?'Create':(ke==='GET')?'List':'Delete'}}
                                                </b-list-group-item>

                                            </div>
                                            <b-collapse :id="'accordion-' + keys+key+ke"
                                                        :accordion="'my-accordion'+keys+key+ke" :role="keys+key+ke">

                                                <div v-if="Object.keys(per).length" v-for="(p, k) in per"
                                                     class="last-child">
                                                    <div v-if="p"
                                                         :hidden="Object.keys(per).length===1 || p==='create' || p==='edit'"
                                                         class="input-checkbox">
                                                        <!--<input @click="checkParent(keys+'-'+key+'-'+ke, keys+'-'+key+'-'+ke+'-'+p)" type="checkbox"
                                                               v-model="checkList[keys+'-'+key+'-'+ke+'-'+p]"/>-->
                                                        <input type="checkbox" v-model="checkList[keys+'-'+key+'-'+ke+'-'+p]"/>
                                                        <span>{{p}}</span>

                                                    </div>
                                                </div>

                                            </b-collapse>
                                        </b-list-group>

                                    </b-collapse>
                                </b-list-group>

                            </b-collapse>
                        </b-list-group>

                    </div>

                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="success" @click="updatePermission"><i
                                class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset
                        </b-button>
                    </div>
                </b-card>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                permissions: {},
                roles: {},
                roleId: '',
                checkList: {},
                isChecked: false,
                message: '',
                fErrors: {},
                rolePermissions: {},
            }
        },
        methods: {
            permissionList() {
                axios.get('/dashboard/permission').then(response => {
                    this.permissions = response.data.actions;
                    this.roles = response.data.roles;
                });
            },
            checkChilds(id) {
                this.isChecked = this.isChecked !== true;
                let checkIds = id.split("_");
                let keyName = '';
                let model = this.permissions;
                for (let i = 0; i < checkIds.length; i++) {
                    keyName += (i !== 0 ? '-' : '') + checkIds[i];
                    model = this.checkData(model, checkIds[i])
                }


                for (let permissions in model) {
                    if (Object.keys(model[permissions]).length && typeof model[permissions] !== 'string') {
                        this.checkList[keyName + '-' + permissions] = this.isChecked;
                        for (let permission in model[permissions]) {
                            if (Object.keys(model[permissions][permission]).length && typeof model[permissions][permission] !== 'string') {
                                this.checkList[keyName + '-' + permissions + '-' + permission] = this.isChecked;
                                for (let permit in model[permissions][permission]) {
                                    this.checkList[keyName + '-' + permissions + '-' + permission + '-' + model[permissions][permission][permit]] = this.isChecked;
                                }
                            } else {
                                this.checkList[keyName + '-' + permissions + '-' + model[permissions][permission]] = this.isChecked;
                            }
                        }
                    } else {
                        if (model[permissions] === 'update') {
                            this.checkList[keyName.slice(0, -3) + 'GET-edit'] = this.isChecked;
                        }
                        if (model[permissions] === 'store') {
                            this.checkList[keyName.slice(0, -4) + 'GET-create'] = this.isChecked;
                        }
                        this.checkList[keyName + '-' + model[permissions]] = this.isChecked;

                    }
                }

                console.log(this.checkList);

            },

            checkData(data, key) {
                if (data.hasOwnProperty(key)) {
                    return data[key];
                }
            },
            rolePermission() {
                axios.get('/dashboard/permission/role/' + this.roleId)
                    .then(response => {
                        response.data.selectedPermission.forEach((value, key) => {
                            this.$set(this.checkList, value, true);
                           /* response.data.selectedPermission[key].split("-").forEach((v, k)=>{
                                this.$set(this.checkList, v, true);
                            })
*/
                        });
                        this.rolePermissions = response.data.selectedPermission;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            updatePermission() {
                //console.log(this.checkList);
                let data = {
                    actions: this.checkList,
                    role_id: this.roleId
                };
                console.log(data);
                axios.post('/dashboard/permission/update', data).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error);
                });
            },
            /*checkParent(check, t){
                this.checkList[check] = true
               /!* for(let child in this.checkList){
                    console.log(child)
                }*!/
            }*/
        },
        mounted() {
            this.permissionList();
        },
        filters: {
            removePrefix: function (value) {
                if (!value) return '';
                return value.slice(21)
            },

            removeController: function (value) {
                if (!value) return '';
                return value.substring(0, value.indexOf("Controller"));
            }
        }
    }
</script>
<style scoped>

    .list-group-item {
        padding: 7px 30px;
        background: transparent;
        border: none;
        border-left: 1px solid #c8c8c8;
    }

    .input-checkbox {
        position: relative;
        clear: both;
    }

    .input-checkbox span {
        padding: 0 30px;
    }

    input[type="checkbox"] {
        position: absolute;
        z-index: 10;
        top: 12px;
        left: 10px;
    }

    .last-child {
        padding-left: 30px;
    }

    .last-child input[type="checkbox"] {
        top: 5px;
    }

    .list-group {
        padding-left: 30px;
    }
</style>

