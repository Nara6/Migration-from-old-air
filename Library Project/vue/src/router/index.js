import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/authentication/Login'
import Register from '../views/authentication/Register'
import Forgetpassword from '../views/authentication/Forgetpassword'
import Otp from '../views/authentication/otp'
import ResetPassword from '../views/authentication/ResetPassword'
import Homepage from '../views/Homepage/Homepage'
import About from '../views/About/About'
import Contact from '../views/Contact/Contact'
import Footer from '../components/Footer'
import Book from '../views/Book/ListingBook.vue'
import Events from '../views/Event/Events.vue'
import dashboard from '../views/admin/dashboard'
import Event_detail from '../views/Event/Event_detail.vue'
import navigation from '../components/Navigation'
import BookDetail from '../views/Book/BookDetail'
import BorrowBook from '../views/Book/BorrowBook'

Vue.use(VueRouter)

const routes = [
  {
    path: '/borrow-book',
    name: 'borrowBook',
    component:BorrowBook

  }
  ,
  {
    path: '/book-detail',
    name: 'book_detail',
    component: BookDetail
  },
  
  { 
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/dashboard',
      name:' dashboard',
      component: dashboard

    },
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forgetpassword
    },
    {
      path:'/contact',
      name: 'contact',
      component: Contact
    },
    { 
      path: '/verifycode',
      name: 'verifycode',
      component: Otp
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/event',
      name: 'event',
      component: Events
    },
    {
      path: '/event-detail',
      name: 'event-detail',
      component: Event_detail
    }
    
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
