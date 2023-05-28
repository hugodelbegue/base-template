import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@/assets/scss/main.scss'

import App from './App.vue'

const router = createRouter({
    // scrollBehavior(to, from, savedPosition) {
    //     if (to.hash) {
    //         return {
    //             el: to.hash,
    //             top: 0,
    //             behavior: 'smooth'
    //         }
    //     } else if (savedPosition) {
    //         return { top: 0 }
    //     } else {
    //         return { top: 0 }
    //     }
    // },
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'App', component: App },
        { path: '/:pathMatch(.*)', redirect: '/' }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
