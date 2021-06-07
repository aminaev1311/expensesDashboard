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
            path: '/',
            name: 'home',
            component: PageDashboard
        },
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

// const userAuth = false

// router.beforeEach( (to, from, next) => {
//     if (to.name === 'dashboardPage' && !userAuth ) {
//         next({ name: 'NotFound'})
//     } else {
//         next()
//     }
// }
// )

router.afterEach( (to) => {
    const titles = {
        home: 'Home',
        dashboardPage: 'Dashboard',
        about: 'About Us',
        NotFound: 'Page not found'
    }
    document.title = titles[to.name]
}
    // from.$event.preventDefault() 
)

export default router