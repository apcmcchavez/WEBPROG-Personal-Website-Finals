import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '@/views/AboutMe.vue';
import Education from '@/views/Education.vue';
import Skills from '@/views/Skills.vue';
import Likes from '@/views/Likes.vue';
import Peeps from '@/views/Peeps.vue';

const routes = [
  { path: '/about-me', component: AboutMe },
  { path: '/education', component: Education },
  { path: '/skills', component: Skills },
  { path: '/likes', component: Likes },
  { path: '/peeps', component: Peeps },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
