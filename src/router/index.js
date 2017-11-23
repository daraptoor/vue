import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: Home
    },
    {
      path: '/about',
      name: 'About page',
      component: About
    },
    {path: '/*', component: NotFound }
  ],
  mode: 'history'
})
