import Vue from "vue"

Vue.filter('snippet', function (value) {
    return value.length > 50 ? value.slice(0,50)+ '...' : value
})

Vue.filter('toFix',function (value) {
    return parseFloat(value).toFixed(2)
})