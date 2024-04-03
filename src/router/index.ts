import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue';
import Join from '../pages/Join.vue';
import Waiting from '../pages/WaitingRoom.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/join', component: Join },
  { path: '/waiting', component: Waiting },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})