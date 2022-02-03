import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '@/components/pages/Top.vue';
import AboutMe from '@/components/pages/AboutMe.vue';
import Work from '@/components/pages/Work.vue';
import Message from '@/components/pages/Message.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top, name: 'top' },
    { path: '/about', component: AboutMe, name: 'about' },
    { path: '/work', component: Work, name: 'work' },
    { path: '/message', component: Message, name: 'message' },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
