<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <div slot="header"></div>
            <ul class="nav">
                <li class="nav-item" v-for="(item, index) in navItems">
                    <template v-if="item.title">
                        <SidebarNavTitle :name="item.name"></SidebarNavTitle>
                    </template>
                    <template v-else-if="item.divider">
                <li class="divider"></li>
                </template>
                    <template v-else>
                        <template v-if="item.children">
                            <SidebarNavDropdown v-if="checkExistenceMain(item.name)" :name="item.name" :url="item.url" :icon="item.icon">
                                <template v-for="(child, index) in item.children">
                                    <template v-if="child.children">
                                        <SidebarNavDropdown :name="child.name" :url="child.url" :icon="child.icon">
                                            <li class="nav-item" v-for="(child, index) in item.children">
                                                <SidebarNavLink v-if="checkExistenceSub(child.name)" :name="child.name" :url="child.url" :icon="child.icon"
                                                                :badge="child.badge"/>
                                            </li>
                                        </SidebarNavDropdown>
                                    </template>
                                    <template v-else>
                                        <li class="nav-item">
                                            <SidebarNavLink v-if="checkExistenceSub(child.name)" :name="child.name" :url="child.url" :icon="child.icon" :badge="child.badge"/>
                                        </li>
                                    </template>
                                </template>
                            </SidebarNavDropdown>
                        </template>
                        <template v-else>
                            <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge"/>
                        </template>
                    </template>
                </li>
            </ul>
            <slot></slot>
            <div slot="footer"></div>
        </nav>
    </div>
</template>
<script>
    import SidebarNavDropdown from './SidebarNavDropdown'
    import SidebarNavLink from './SidebarNavLink'
    import SidebarNavTitle from './SidebarNavTitle'

    export default {
        name: 'sidebar',
        props: {
            navItems: {
                type: Array,
                required: true,
                default: () => []
            }
        },
        data() {
            return {
                permittedMenus: [],
                menus: [],
                super_user: false
            }
        },
        components: {
            SidebarNavDropdown,
            SidebarNavLink,
            SidebarNavTitle
        },
        methods: {
            handleClick(e) {
                e.preventDefault();
                e.target.parentElement.classList.toggle('open')
            },

            getAdminRouteListByPermissions() {
                axios.get('/dashboard-permitted-menus')
                    .then(response => {
                        this.menus = response.data.menus;
                        this.super_user = response.data.super_user
                        response.data.menus.forEach((value) => {
                            let MenuIsExists = this.findNestedObject(this.navItems, 'name', value.component_name);
                            if (MenuIsExists) {
                                this.permittedMenus.push(MenuIsExists)
                            }
                        });
                    }).catch(error => {
                    console.log(error)
                })
            },
            findNested(obj, key, value) {
                if (obj[key] === value) {
                    return obj;
                } else {
                    for (var i = 0, len = Object.keys(obj).length; i < len; i++) {
                        console.log('not found', obj[i]);
                        if (typeof obj[i] === 'object') {

                            if (obj[i].children) {
                                console.log('has children', obj[i].children);
                                let le = Object.keys(obj[i].children).length;
                                for (let j = 0; j < le; j++) {
                                    if (typeof obj[i] === 'object') {
                                        let f = this.findNested(obj[i].children[j], key, value);
                                        if (f) {
                                            console.log('children', f)
                                            return f;
                                        }
                                    }
                                }
                            }
                            var found = this.findNested(obj[i], key, value);
                            if (found) {
                                return found;
                            }
                        }
                    }
                }
            },
            findNestedObject(obj, key, value, parent = null) {

                if (obj[key] === value) {
                    return parent ? parent : obj;
                } else {
                    if (Object.keys(obj).length) {
                        for (let j = 0; j < Object.keys(obj).length; j++) {
                            if (obj[j] && obj[j].children) {
                                this.findNestedObject(obj[j], key, value, obj)
                            }
                        }
                    }
                }
            },
            checkExistenceMain(menu){
                if (this.super_user){
                    return true;
                }
                let result = this.menus.find(function (el) {
                    return el.parent_component === menu;
                });
                return !!result;

            },
            checkExistenceSub(sub_menu){
                if (this.super_user){
                    return true;
                }
                let result = this.menus.find(function (el) {
                    return el.component_name === sub_menu;
                });
                return !!result;

            }

        },
        mounted() {
            this.getAdminRouteListByPermissions()
        },
    }
</script>

<style lang="css">
    .nav-link {
        cursor: pointer;
    }
</style>
