import Vue from 'vue'
import VueRouter from 'vue-router'
import UpdateEvent from '../views/Event/update'
import CreateEvent from '../views/Event/create'
import EventDetail from '../views/Event/event_detail'
import Email from '../views/User_email/email'
import Calendar from '../views/Calendar/calendar'
import User from '../views/User/user'
import Login from '../views/Auth/Login'
import Dashboard from '../views/Dashboard/dashboard'
import Book from '../views/Book/book'
import Author from '../views/Author/author'
import Category from '../views/Category/category'
import Language from '../views/Language/language'
import Request from '../views/Request/request'
Vue.use(VueRouter)

const routes = [
  {
    path: '/language',
    name: 'language',
    component: Language

  },
  {
    path: '/category',
    name: 'category',
    component: Category

  },
  {
    path: '/author',
    name: 'author',
    component: Author
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/request',
    name: 'request',
    component: Request
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/email',
    name: 'email',
    component: Email
  },
  {
    path: '/create-event',
    name: 'create-event',
    component: CreateEvent
  },
  {
    path: '/update-event',
    name: 'update-event',
    component: UpdateEvent
  },
  {
    path: '/event-detail/:id',
    name: 'event-detail',
    component: EventDetail
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
