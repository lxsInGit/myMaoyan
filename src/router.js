import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/film.vue'
import Cinema from './views/cinema.vue'
import Mine from './views/mine.vue'
import nowplaying from "@/components/film/nowplaying.vue"
import comingsoon from "@/components/film/comingsoon.vue"

// NavigationDuplicated 当出现该错误时, 添加以下代码
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

var router = new Router({
  mode: 'history',  //可去掉url上的#号(history模式必须在服务器环境打开)
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/film'
    },
    {
      path: '/film',
      name: 'film',
      redirect: '/film/nowplaying',
      component: Film,
      children: [
        {path: 'nowplaying', name: 'nowplaying', component: nowplaying},
        {path: 'comingsoon', name: 'comingsoon', component: comingsoon},
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/city',
      name: 'city',
      component: ()=>import ("@/views/city.vue")
    },
    {
      path: '/search',
      name: 'search',
      component: ()=>import ("@/views/search.vue")
    }
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next)=>{
  switch (to.name) {
    case 'nowplaying':
    case 'comingsoon':
        window.sessionStorage.setItem("tabbarItem", "电影");
        break;
    case 'cinema':
        window.sessionStorage.setItem("tabbarItem", "影院");
        break;
    case 'mine':
        window.sessionStorage.setItem("tabbarItem", "我的");
        break;
    default:
        break;
  }
  next()
})

export default router;