// 导入Vue库
import Vue from 'Vue';

//1导入路由库
import VueRouter from 'vue-router';

//2开启vue插件
Vue.use(VueRouter);
// 导入自己写的根组件
import App from './component/App.vue';

//3导入路由配置
import routerConfig from './router/index.js'

//导入axios,因为它不是vue插件，使用起来不方便，所以我们手动把它加到原型中，方便使用
import axios from 'axios';

//一配置，以后所有的请求就会自动使用这个域名
axios.defaults.baseURL='http://157.122.54.189:9095';
Vue.prototype.$http=axios;

//导入api配置对象,为了使用更加方便，把它拽加到原型中
import api from './js/api-config.js';
Vue.prototype.$api=api;

//导入element-ui与样式文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//2开启vue插件
Vue.use(ElementUI);

// 渲染根组件到占位标签上
new Vue({
    el: '#app',
    render(createElement) {
        return createElement(App);
    },
    router:new VueRouter(routerConfig)
});