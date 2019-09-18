<template>
    <header class="app-header navbar">
        <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
            &#9776;
        </button>
        <!--<b-link class="navbar-brand" to="#"></b-link>-->
        <div class="logos">
            <a href="/" target="_blank">
                <img src="../../img/logo.png" alt="" width="120" height="36">
            </a>
        </div>
        <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;
        </button>
        <!--<b-nav b-navbar-nav class="d-md-down-none">-->
            <!--<b-nav-item class="px-3">Dashboard</b-nav-item>-->
            <!--<b-nav-item class="px-3">Users</b-nav-item>-->
            <!--<b-nav-item class="px-3">Settings</b-nav-item>-->
        <!--</b-nav>-->
        <b-nav b-navbar-nav class="ml-auto modify-mobile">
            <b-nav-item class="d-md-down-none">
                <!--<i class="icon-bell"></i><span class="badge badge-pill badge-danger">5</span>-->
            </b-nav-item>
            <b-nav-item class="d-md-down-none">
                <i class="icon-list"></i>
            </b-nav-item>
            <b-nav-item class="d-md-down-none">
                <select class="form-control" v-model="country" @change="setCountry">
                    <option value="0" >All</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.title }}</option>
                </select>
            </b-nav-item>
            <b-nav-item-dropdown right id="user-dropdown">
                <template slot="button-content">

                    <span class="d-md-down-none">{{ user.name }}</span>
                </template>
                <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
                <!--<b-dropdown-item><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">42</span>-->
                <!--</b-dropdown-item>-->
                <!--<b-dropdown-item><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">42</span>-->
                <!--</b-dropdown-item>-->
                <!--<b-dropdown-item><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">42</span>-->
                <!--</b-dropdown-item>-->
                <!--<b-dropdown-item><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">42</span>-->
                <!--</b-dropdown-item>-->
                <!--<b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>-->
                <!--<b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>-->
                <!--<b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>-->
                <!--<b-dropdown-item><i class="fa fa-usd"></i> Payments<span class="badge badge-default">42</span>-->
                <!--</b-dropdown-item>-->
                <!--<b-dropdown-item><i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span>-->
                <!--</b-dropdown-item>-->
                <!--<b-dropdown-divider></b-dropdown-divider>-->
                <b-dropdown-item to="/dashboard/users/change-password"><i class="fa fa-shield"></i> Change password</b-dropdown-item>
                <b-dropdown-item href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" id="dusk-logout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
                <form id="logout-form" action="/logout" method="POST" style="display: none;"></form>
            </b-nav-item-dropdown>
        </b-nav>
        <!--<button class="navbar-toggler aside-menu-toggler d-md-down-none" type="button" @click="asideToggle">&#9776;-->
        <!--</button>-->
    </header>
</template>
<script>
    import axios from 'axios'
    import helper from '../helper/helpers'

    export default {

        name: 'headers',
        data() {
            return {
                user: {},
                countries: [],
                country: 0
            }
        },
        methods: {
            sidebarToggle(e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-hidden')
            },
            sidebarMinimize(e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-minimized')
            },
            mobileSidebarToggle(e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-mobile-show')
            },
            asideToggle(e) {
                e.preventDefault()
                document.body.classList.toggle('aside-menu-hidden')
            },
            fetchUserInfo() {
                axios.get("/admin-info").then(response => {
                    this.user = response.data
                });
            },
            getCountries(){
                axios.get("/dashboard/country").then(response => {
                    this.countries = response.data.data.reverse();
                    this.country = helper.getCookie('country') ? helper.getCookie('country') : 0;
                    window.localStorage.setItem("countries", JSON.stringify(this.countries))
                }).catch(error => console.log(error));
            },
            setCountry(){
                helper.setCookie('country', this.country);
            }
        },
        watch: {
            fetchUser: {
                handler: "fetchUserInfo",
                immediate: true
            }
        },
        created() {
            this.getCountries();
        }
    }
</script>
