import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '@/components/pages/Top.vue';
import AboutMe from '@/components/pages/AboutMe.vue';
import Work from '@/components/pages/Work.vue';
import Contact from '@/components/pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top, name: 'top' },
    { path: '/about', component: AboutMe, name: 'about' },
    { path: '/work', component: Work, name: 'work' },
    { path: '/contact', component: Contact, name: 'contact' },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
