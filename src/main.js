import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './api/request'
import MintUI from 'mint-ui'
import web19UI from 'web19-ui'
import webTestUI from 'webtest-ui'
import builtIn from "builtin-web19"
import dsjUI from "dsj-ui"
// import gubui from "gubui"
import kaiguanUI from "kaiguan-ui"
// import hushenUI from "hushen-ui"
// import webguoUI from "webguo-ui"
import lkzcomponent from "lkz-component"
import zcqUI from "zcq-ui"
import webHX from "web-hx"

import "u-reset.css"; //引入重置样式css
import "@/style/font/iconfont.css"; //引入重置样式css
import "@/style/style.css"; //引入重置样式css
import "mint-ui/lib/style.css"
import "web19-ui/lib/web19-ui.css"
import "webtest-ui/lib/webtest-ui.css"
import 'builtin-web19/lib/builtin-web19.css'
import 'dsj-ui/lib/dsj-ui.css'
// import 'gubui/lib/gubui.css'
import 'kaiguan-ui/lib/kaiguan-ui.css'
import 'lkz-component/lib/lkz-component.css'
// import 'hushen-ui/lib/hushen-ui.css'
// import 'webguo-ui/lib/webguo-ui.css'
import 'zcq-ui/lib/zcq-ui.css'
import 'web-hx/lib/web-hx.css'


Vue.use(MintUI)
// Vue.use(web19UI)
// Vue.use(webTestUI)
// Vue.use(builtIn)
// Vue.use(dsjUI)
// // Vue.use(gubui)
// Vue.use(kaiguanUI)
// // Vue.use(hushenUI)
// // Vue.use(webguoUI)
// Vue.use(lkzcomponent)
// Vue.use(zcqUI)

Vue.prototype.$http = http;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
