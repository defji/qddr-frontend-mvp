import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    },
  },
  {
    path: '/partners',
    name: 'Partnerek',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "partners" */ '../components/partners/index')
  },
  {
    path: '/add_order',
    name: 'Rendelés feladása',
    meta: {
      auth: true
    },
    component: () => import(/* webpackChunkName: "add_order" */ '../components/orders/index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router
