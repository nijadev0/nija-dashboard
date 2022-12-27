import { createRouter, createWebHistory } from 'vue-router'

import Home from '$components/pages/Home.vue'
import Users from '$components/pages/Customers/Users.vue'
import DetailUser from '$components/pages/Customers/DetailUser.vue'
import Buyers from '$components/pages/Customers/Buyers.vue'
import DetailBuyer from '$components/pages/Customers/DetailBuyer.vue'
import ListProducts from '$components/pages/Products/ListProducts.vue'

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
    {
      path: '/customers/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/customers/users/detail',
      name: 'DetailUser',
      component: DetailUser,
    },
    {
      path: '/customers/buyers',
      name: 'Buyers',
      component: Buyers,
    },
    {
      path: '/customers/buyers/detail',
      name: 'DetailBuyer',
      component: DetailBuyer,
    },
    {
      path: '/products/list-products',
      name: 'ListProducts',
      component: ListProducts,
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
