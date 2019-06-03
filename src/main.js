// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import {store} from './store'
import Vuex from 'vuex'
import "./assets/style/iconfont.css"
import { Dialog } from 'vant';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(Dialog);
// 新增时间处理插件
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)

});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
