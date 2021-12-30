import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home.vue")
const Category = () => import("views/category/Category.vue")
const LiveStreaming = () => import("views/liveStreaming/LiveStreaming.vue")
const Profile = () => import("views/profile/Profile.vue")

Vue.use(VueRouter);

const routes = [
   {
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component:Home,
    },
    {
        path: '/category',
        component:Category,
    },
    {
        path: '/liveStreaming',
        component:LiveStreaming,
    },
    {
        path: '/profile',
        component:Profile,
    }]

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router

// 避免多次push导致router重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}