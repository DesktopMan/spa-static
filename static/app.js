const routes = [
  {path: '/', component: () => import('./pages/home.js')},
  {path: '/about', component: () => import('./pages/about.js')},
  {path: '/settings', component: () => import('./pages/settings.js')},
  {path: '/groups', component: () => import('./pages/groups.js')},
  {path: '*', component: () => import('./pages/not_found.js')}
]

const router = new VueRouter({
  routes
})

import Navigation from './components/navigation.js'

const app = new Vue({
  router,
  components: {
    Navigation
  }
}).$mount('#app')
