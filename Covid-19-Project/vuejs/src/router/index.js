import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Map from '../views/Map.vue'

import Generalinformation from '../views/Generalinfor.vue'

import Faq from '../views/Faq.vue'

import Vaccine from '../views/Vaccine.vue'

import News from '../views/news/News.vue'
import News_detail from '../views/news/News_detail.vue'

import Favorite from '../views/Favorite.vue'

import Example from '../views/Example.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/generalinformation',
    name: 'generalinformation',
    component: Generalinformation
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/vaccine',
    name: 'vaccine',
    component: Vaccine
  },
  {
    path: '/news',
    name: 'new',
    component: News
  },
  {
    path: '/news/detail/:id',
    name: 'newdetail',
    component: News_detail
  },
  {
    path: '/example',
    name: 'example',
    component: Example
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
