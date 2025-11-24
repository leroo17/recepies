import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import Tasks from "../pages/Tasks.vue";
import Calendar from "../pages/Calendar.vue";
import Media from "../pages/Media.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: Tasks
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar
        },
        {
            path: '/media',
            name: 'media',
            component: Media
        }
    ]
})

export default router;