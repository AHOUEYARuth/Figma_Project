import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
const router = createRouter({

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path:'/about/:id',
            component: About
        }, 
        {
            path:'/blog',
            component: () => import('../views/Blog.vue'),
           
        },
        {
            path: '/blog/:id',
            component: () => import('../views/BlogDetail.vue')
        }
    ],
    history: createWebHistory()
})


export default router
