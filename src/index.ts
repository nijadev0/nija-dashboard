import { createRouter, createWebHistory } from 'vue-router'

/**
 * Home
 */
import Home from '$components/pages/Home.vue'

/**
 * Customers
 */
//Users
import Users from '$components/pages/Customers/Users/Users.vue'
import UserDetail from '$components/pages/Customers/Users/DetailUsers.vue'

// Buyers
import Buyers from '$components/pages/Customers/Buyers/Buyers.vue'
import BuyerDetail from '$components/pages/Customers/Buyers/DetailBuyers.vue'

/**
 * Products
 */
// List Products
import ListProducts from '$components/pages/Products/ListProducts/ListProducts.vue'
import ListProductsAdd from '$components/pages/Products/ListProducts/AddListProducts.vue'
import ListProductsEmptyVariants from '$components/pages/Products/ListProducts/EmptyVariantsListProducts.vue'
import ListProductsVariants from '$components/pages/Products/ListProducts/VariantsListProducts.vue'
import ListProductsUpdate from '$components/pages/Products/ListProducts/UpdateProductsVariants.vue'

// Categories
import Categories from '$components/pages/Products/Categories/Categories.vue'

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
      name: 'UserDetail',
      component: UserDetail,
    },
    {
      path: '/customers/buyers',
      name: 'Buyers',
      component: Buyers,
    },
    {
      path: '/customers/buyers/detail',
      name: 'BuyerDetail',
      component: BuyerDetail,
    },
    {
      path: '/products/list-products',
      name: 'ListProducts',
      component: ListProducts,
    },
    {
      path: '/products/list-products/add',
      name: 'ListProductsAdd',
      component: ListProductsAdd,
    },
    {
      path: '/products/list-products/update',
      name: 'ListProductsUpdate',
      component: ListProductsUpdate,
    },
    {
      path: '/products/list-products/empty-variants',
      name: 'ListProductsEmptyVariants',
      component: ListProductsEmptyVariants,
    },
    {
      path: '/products/list-products/variants',
      name: 'ListProductsVariants',
      component: ListProductsVariants,
    },
    {
      path: '/products/categories',
      name: 'Categories',
      component: Categories,
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
