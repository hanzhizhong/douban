import Vue from 'vue'
import App from './App'
import "./common/reset.css"
import "./common/iconfont.css"

import store from "./store/store.js"

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store

const app = new Vue({
	store,
    ...App
})
app.$mount()
