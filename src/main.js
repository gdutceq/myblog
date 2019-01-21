// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// npm install vue-resource --save
import VueResource from 'vue-resource'
import Routes from './routes'
import axios from 'axios'

//全局配置axios
axios.defaults.baseURL = 'https://wd7355665222mkmqjm.wilddogio.com'
// //请求头
// axios.defaults.headers.common['Authorization'] = 'Token'
// //授权
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-rainbow`(钩子函数)
/*
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})
*/

Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value == 'wide'){
      el.style.maxWidth = '1260px';
    }else if (binding.value == 'narrow'){
      el.style.maxWidth = '560px';
    }

    if (binding.arg == 'column') {
      el.style.background = "#6677cc";
      el.style.padding = "20px";
    }
  }
})

// 自定义全局过滤器
Vue.filter("to-uppercase",function (value) {
  //这里的value参数值为ShowBlog.vue里面的 blog.title
  return value.toUpperCase();
})

Vue.filter("snippet",function (value) {
  //这里的value参数值为ShowBlog.vue里面的 blog.body
  return value.slice(0,100) + "......";
})

//路由配置
const router = new VueRouter({
  routes:Routes,
  mode:"history"

})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
