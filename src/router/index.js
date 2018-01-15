// 导入组件
import Login from '../component/login/Login.vue';
import Admin from '../component/admin/Admin.vue';
//导入商品模块页面组件
import GoodsCgList from '../component/admin/goods/category/List.vue';
import GoodsCgEdit from '../component/admin/goods/category/Edit.vue';
import GoodsCtList from '../component/admin/goods/content/list.vue';
import GoodsCtEdit from '../component/admin/goods/content/Edit.vue';

// admin页面的子路由
let adminChildren=[
    //商品模块-内容管理
    { name: 'goodsCtList', path: 'goods/content/list', component: GoodsCtList },
    { name: 'goodsCtEdit', path: 'goods/content/Edit/:id', component: GoodsCtEdit },
    { name: 'goodsCtAdd', path: 'goods/content/add', component: GoodsCtEdit },
     //商品模块-商品分类
    { name: 'goodsCgList', path: 'goods/category/list', component: GoodsCgList },
    { name: 'goodsCgEdit', path: 'goods/category/Edit/:id', component: GoodsCgEdit },
    { name: 'goodsCgAdd', path: 'goods/category/add', component: GoodsCgEdit },

]


export default {
    routes: [
        // 登陆
        { name: 'login', path: '/login', component: Login },
        // 后台管理
        // { name: 'admin', path: '/admin', component: Admin },
        { path: '/', redirect: '/admin' },
        { name: 'admin', path: '/admin', component: Admin, children: adminChildren },
    ]

};
