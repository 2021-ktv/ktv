import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/index.css'

Vue.config.productionTip = false

// 添加axios
const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// 拦截器
// 请求
Axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log(error)
})
// 响应
Axios.interceptors.response.use(function (res) {
  return res.data
}, function (error) {
  console.log(error)
})

// 在vue原型中添加axios
Vue.prototype.$http = Axios
// 在vue原型中添加layer
Vue.prototype.$layer = layer(Vue)
// 使用element-ui插件
Vue.use(ElementUI)
// 配置全局事件中心
Vue.prototype.hub = new Vue()
// 配置图片默认地址
Vue.prototype.imgUrl = 'http://localhost:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
