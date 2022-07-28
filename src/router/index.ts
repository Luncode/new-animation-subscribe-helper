import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import("../components/AppContext/AppContext.vue")
    },
    {
        path: '/Settings',
        component: () => import("../pages/Settings/Settings.vue")
    },
    {
        path: '/Search',
        component: () => import("../pages/Search/Search.vue")
    },
]

const routerCreate = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'linkActive',
});

export default routerCreate;