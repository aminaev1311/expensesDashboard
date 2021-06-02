import Vue from 'vue'
import Router from 'vue-router'
import PageDashboard from '../views/PageDashboard.vue'
import PageAbout from '../views/PageAbout.vue'
import Page404 from '../views/Page404.vue'
import ExpenseForm from '../components/ExpenseForm.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboardPage',
            component: PageDashboard
        },
        {
            path: '/dashboard/:page',
            name: 'dashboardPage',
            component: PageDashboard
        },
        {
            path: '/about*',
            name: 'about',
            component: PageAbout
        },
        {
            path: '/add/payment/:category?',
            name: 'addPayment',
            component: ExpenseForm
        },
        {
            path: '*',
            name: 'NotFound',
            component: Page404
        }
    ]
})

router.beforeEach()

router.afterEach()

export default router