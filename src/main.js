// 导入Vue库(vue相关的第三方包)
import Vue from 'Vue';
//1导入路由库
import VueRouter from 'vue-router';
//导入element-ui与样式文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入自己写的样式
import './less/index.css';
// 导入自己写的根组件
import App from './component/App.vue';

//开启vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);

//3导入路由配置
import routerConfig from './router/index.js'

//导入axios,因为它不是vue插件，使用起来不方便，所以我们手动把它加到原型中，方便使用
import axios from 'axios';
Vue.prototype.$http = axios;
//一配置，以后所有的请求就会自动使用这个域名
axios.defaults.baseURL = 'http://157.122.54.189:9095';
    // axios.defaults.baseURL = 'http://localhost:8899';
    axios.defaults.withCredentials=true; // 浏览器有个安全机制, 如果是跨域请求, 浏览器是不会把本地cookie信息携带过去的

//导入api配置对象,为了使用更加方便，把它拽加到原型中
import api from './js/api-config.js';
Vue.prototype.$api = api;

//导入normalize.css样式(样式初始化包)
import 'normalize.css';

//路由实例
import beforeEach from './router/beforeEach.js';
let vueRouter=new VueRouter(routerConfig);
vueRouter.beforeEach(beforeEach);
// 渲染根组件到占位标签上
new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    },
    router: new VueRouter(routerConfig)
});