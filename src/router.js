import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Snippets from './views/Snippets.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/snippets',
      name: 'snippets',
      component: Snippets
    },
    {
      path: '/snippets/create',
      name: 'about',
      component: About
    },
    {
      path: '/snippets/:id/edit',
      name: 'about',
      component: About
    },
    {
      path: '/snippets/:id/delete',
      name: 'about',
      component: About
    },
  ]
})
