import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import NotFound from '@/components/Page404'
import Meta from 'vue-meta'
Vue.use(Router)

Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: '/about',
      name: 'About page',
      component: About,
      meta: {title: 'About Page'}
    },
    { path: '/*', component: NotFound }
  ],
  mode: 'history'
})
