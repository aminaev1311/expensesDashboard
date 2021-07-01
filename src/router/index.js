import Vue from 'vue'
import Router from 'vue-router'
import ExpenseForm from '../components/ExpenseForm.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            // component: PageDashboard
            component: () => import('../views/PageDashboard.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboardPage',
            component: () => import('../views/PageDashboard.vue')
        },
        {
            path: '/dashboard/:page',
            name: 'dashboardPage',
            component: () => import('../views/PageDashboard.vue')
        },
        {
            path: '/about*',
            name: 'about',
            component: () => import('../views/PageAbout.vue')
        },
        {
            path: '/add/payment/:category?',
            name: 'addPayment',
            component: ExpenseForm
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('../views/Page404.vue')
        }
    ]
})

router.afterEach( (to) => {
    const titles = {
        home: 'Home',
        dashboardPage: 'Dashboard',
        about: 'About Us',
        NotFound: 'Page not found'
    }
    document.title = titles[to.name]
    }
)

export default router