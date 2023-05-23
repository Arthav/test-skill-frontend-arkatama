import { createRouter, createWebHistory } from 'vue-router';

const Homepage = () => import('./pages/HomePage.vue');
const AddTestimony = () => import('./components/testimony/AddTestimony.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',  redirect: '/testimony' },
    { path: '/testimony', component: Homepage },
    { path: '/add-testimony', component: AddTestimony },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});


export default router;