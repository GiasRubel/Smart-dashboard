/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import VeeValidate from 'vee-validate';
import "./filter"

Vue.component('App', require('./App.vue'));
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#dashboard',
  router,
  template: '<App/>',
  components: {
    App
  }
});
