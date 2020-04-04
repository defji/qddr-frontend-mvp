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
    path: '/start_test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "login" */ '../components/StartTest.vue'),
    meta: {
      auth: true
    },
  },
  {
    path: '/add_symptom',
    name: 'AddSymptom',
    component: () => import(/* webpackChunkName: "login" */ '../components/AddSymptom.vue'),
    meta: {
      auth: true
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../components/Login.vue')
  },
  {
    path: '/registration',
    name: 'Register',
    component: () => import(/* webpackChunkName: "login" */ '../components/Register.vue')
  },
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
