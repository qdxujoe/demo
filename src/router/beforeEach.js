import axios from 'axios';
import api from '../js/api-config.js';
export default function (to, from, next) {
  var toPageName = to.name;
  //请求接口判断用户有没有登陆
  axios.get(api.isLogin).then(res => {
    let isLogin = false;
    if (res.data.code == 'logined') {
      isLogin = true;
    }

    //用户访问登陆页面，如果已登录，那么自动转到首页
    if (toPageName == 'login' && isLogin) {
      next('/admin');
    } else if (toPageName != 'login' && !isLogin) {
      next({
        name: 'login',
        query: {
          nextPage: to.fullPath
        }
      })
    } else {
      next();
    }

  });
}