import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/stylus/index.styl'
import 'assets/icons/index.js'
import api from './api'
// test template
Vue.config.productionTip = false
Vue.prototype.$http = api

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
