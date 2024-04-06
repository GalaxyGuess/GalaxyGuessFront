import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import Join from '../pages/Join.vue';
import Game from '../pages/Game.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/join', component: Join },
  { path: '/play', component: Game },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})