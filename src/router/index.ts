import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue';
import Join from '../pages/Join.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/join/:id', component: Join },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})