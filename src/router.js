import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/orders',
            component: () => import('./components/pages/Orders.vue')
        }
    ]
})