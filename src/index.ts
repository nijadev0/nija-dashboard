import { createRouter, createWebHistory } from 'vue-router'
/**
 * Vue Router 4
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    /**
     * ========================================
     * Account Pages
     * ========================================
     */
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('$views/auth/login/+page.vue'),
    },
    {
      path: '/auth/forgot-password',
      name: 'Forgot',
      component: () => import('$views/auth/forgot-password/+page.vue'),
    },
    {
      path: '/auth/verify-password',
      name: 'Verify',
      component: () => import('$views/auth/verify-password/+page.vue'),
    },
    {
      path: '/auth/new-password',
      name: 'New Password',
      component: () => import('$views/auth/new-password/+page.vue'),
    },
    {
      path: '/auth/reset-success',
      name: 'Reset Success',
      component: () => import('$views/auth/reset-succes/+page.vue'),
    },
    /**
     * ========================================
     * Main Pages
     * ========================================
     */
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('$views/+page.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('$views/settings/+page.vue'),
    },
    {
      path: '/settings/notifications',
      name: 'Notifications',
      component: () => import('$views/settings/notifications/+page.vue'),
    },
    /**
     * ========================================
     * Customers
     * ========================================
     */
    {
      path: '/customers/users',
      name: 'Users',
      component: () => import('$views/customers/users/+page.vue'),
    },
    {
      path: '/customers/users/detail',
      name: 'User Detail',
      component: () => import('$views/customers/users/detail/+page.vue'),
    },
    {
      path: '/customers/buyers',
      name: 'Buyers',
      component: () => import('$views/customers/buyers/+page.vue'),
    },
    {
      path: '/customers/buyers/detail',
      name: 'Buyer Detail',
      component: () => import('$views/customers/buyers/detail/+page.vue'),
    },
    {
      path: '/customers/buyers/edit',
      name: 'Buyer Edit',
      component: () => import('$views/customers/buyers/edit/+page.vue'),
    },
    /**
     * ========================================
     * Products
     * ========================================
     */
    {
      path: '/products/list-products',
      name: 'ListProducts',
      component: () => import('$views/products/list-products/+page.vue'),
    },
    {
      path: '/products/list-products/add',
      name: 'ListProductsAdd',
      component: () => import('$views/products/list-products/add/+page.vue'),
    },
    {
      path: '/products/list-products/update',
      name: 'List Products Update',
      component: () => import('$views/products/list-products/update/+page.vue'),
    },
    // {
    //   path: '/products/list-products/empty-variants',
    //   name: 'ListProductsEmptyVariants',
    //   component: ListProductsEmptyVariants,
    // },
    {
      path: '/products/list-products/variants',
      name: 'ListProductsVariants',
      component: () => import('$views/products/list-products/variants/+page.vue'),
    },
    /**
     * ========================================
     * Products
     * ========================================
     */
    {
      path: '/products/categories',
      name: 'Categories',
      component: () => import('$views/products/categories/+page.vue'),
    },
    {
      path: '/products/categories/add',
      name: 'AddCategories',
      component: () => import('$views/products/categories/add/+page.vue'),
    },
    {
      path: '/products/categories/update',
      name: 'UpdateCategories',
      component: () => import('$views/products/categories/update/+page.vue'),
    },

    /**
     * ========================================
     * Transactions
     * ========================================
     */
    {
      path: '/transactions/manage-transactions',
      name: 'Manage Transactions',
      component: () => import('$views/transactions/manage-transactions/+page.vue'),
    },
    {
      path: '/transactions/manage-transactions/detail',
      name: 'Detail Manage Transactions',
      component: () => import('$views/transactions/manage-transactions/detail/+page.vue'),
    },
    {
      path: '/transactions/returns',
      name: 'ManageReturns',
      component: () => import('$views/transactions/returns/+page.vue'),
    },
    {
      path: '/transactions/returns/approve',
      name: 'ApproveManageReturns',
      component: () => import('$views/transactions/returns/approve/+page.vue'),
    },
    /**
     * ========================================
     * Flash Sale
     * ========================================
     */
    {
      path: '/flash-sale',
      name: 'Flash Sale',
      component: () => import('$views/flash-sale/+page.vue'),
    },

    /**
     * ========================================
     * Outlets
     * ========================================
     */
    {
      path: '/outlets',
      name: 'Outlets',
      component: () => import('$views/outlets/+page.vue'),
    },
    {
      path: '/outlets/add',
      name: 'Add Outlets',
      component: () => import('$views/outlets/add/+page.vue'),
    },
    {
      path: '/outlets/detail',
      name: 'Detail Outlets',
      component: () => import('$views/outlets/detail/+page.vue'),
    },
    {
      path: '/outlets/edit',
      name: 'Edit Outlets',
      component: () => import('$views/outlets/edit/+page.vue'),
    },
    /**
     * ========================================
     * Banners
     * ========================================
     */
    {
      path: '/banners',
      name: 'Banners',
      component: () => import('$views/banners/+page.vue'),
    },
    // {
    //   path: '/outlets/detail',
    //   name: 'DetailOutlets',
    //   component: DetailOutlets,
    // },
    // {
    //   path: '/outlets/edit',
    //   name: 'EditOutlets',
    //   component: EditOutlets,
    // },
    /**
     * ========================================
     * User Role
     * ========================================
     */
    {
      path: '/user-role',
      name: 'User Role',
      component: () => import('$views/user-role/+page.vue'),
    },
    {
      path: '/user-role/add',
      name: 'AddUserRole',
      component: () => import('$views/user-role/add/+page.vue'),
    },
    {
      path: '/user-role/edit',
      name: 'Edit User Role',
      component: () => import('$views/user-role/edit/+page.vue'),
    },

    /**
     * ========================================
     * Sandbox Pages
     * ========================================
     */
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: () => import('$components/pages/Sandbox.vue'),
    },
    /**
     * ========================================
     * 404 Pages
     * ========================================
     */
    {
      path: '/:pathMatch(.*)*',
      name: '404 Not Found',
      component: () => import('$components/pages/404.vue'),
    },
  ],
})

export default router
