import { createRouter, createWebHistory } from 'vue-router'

import Home from '$components/pages/Home.vue'

import Sandbox from '$components/pages/Sandbox.vue'
import ButtonSandbox from '$components/pages/Sandbox/ButtonSandbox.vue'
import TextSandbox from '$components/pages/Sandbox/TextSandbox.vue'
import SmallSandbox from '$components/pages/Sandbox/SmallSandbox.vue'
import TableSandbox from '$components/pages/Sandbox/TableSandbox.vue'

import NotFound from '$components/pages/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /**
     * ========================================
     * Main Pages
     * ========================================
     */
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    /**
     * ========================================
     * Sandbox Pages
     * ========================================
     */
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox,
    },
    {
      path: '/sandbox/button',
      name: 'Button Sandbox',
      component: ButtonSandbox,
    },
    {
      path: '/sandbox/text',
      name: 'Text Sandbox',
      component: TextSandbox,
    },
    {
      path: '/sandbox/small',
      name: 'Small Sandbox',
      component: SmallSandbox,
    },
    {
      path: '/sandbox/table',
      name: 'Table Sandbox',
      component: TableSandbox,
    },
    /**
     * ========================================
     * 404 Pages
     * ========================================
     */
    {
      path: '/:pathMatch(.*)*',
      name: '404 Not Found',
      component: NotFound,
    },
  ],
})

export default router
