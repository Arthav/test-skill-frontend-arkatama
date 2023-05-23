import { createRouter, createWebHistory } from 'vue-router';

const Homepage = () => import('./pages/HomePage.vue');
const TestimonyForm = () => import('./components/testimony/TestimonyForm.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',  redirect: '/testimony' },
    { path: '/testimony', component: Homepage },
    { path: '/add-testimony', component: TestimonyForm },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});


export default router;