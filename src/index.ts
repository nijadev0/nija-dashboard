import { createRouter, createWebHistory } from 'vue-router'

/**
 * Login
 */
import Login from '$components/pages/Account/Login.vue'
import Forgot from '$components/pages/Account/Forgot.vue'
import Verify from '$components/pages/Account/Verify.vue'
import NewPassword from '$components/pages/Account/NewPassword.vue'
import ResetSuccess from '$components/pages/Account/ResetSuccess.vue'

/**
 * Home
 */
import Home from '$components/pages/Home.vue'
import Notifications from '$components/pages/Notifications.vue'

/**
 * Customers
 */

// Users
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
import AddCategories from '$components/pages/Products/Categories/AddCategories.vue'
import UpdateCategories from '$components/pages/Products/Categories/UpdateCategories.vue'

/**
 * Transactions
 */

// Manage Transactions
import ManageReturns from '$components/pages/Transactions/ManageReturns/ManageReturns.vue'
import ApproveManageReturns from '$components/pages/Transactions/ManageReturns/ApproveManageReturns.vue'
import ManageTransactions from '$components/pages/Transactions/ManageTransactions/ManageTransactions.vue'
import DetailTransactions from '$components/pages/Transactions/ManageTransactions/DetailTransactions.vue'

/**
 * Outlets
 */

import Outlets from '$components/pages/Outlets/Outlets.vue'
import DetailOutlets from '$components/pages/Outlets/DetailOutlets.vue'
import EditOutlets from '$components/pages/Outlets/EditOutlets.vue'

/**
 * Outlets
 */

import Banners from '$components/pages/Banners/Banners.vue'

/**
 * User Role
 */
import UserRole from '$components/pages/UserRole/UserRole.vue'
import AddUserRole from '$components/pages/UserRole/AddUserRole.vue'
import EditUserRole from '$components/pages/UserRole/EditUserRole.vue'

/**
 * Flash Sale
 */
import FlashSale from '$components/pages/FlashSale/FlashSale.vue'

/**
 * Sandbox
 */
import Sandbox from '$components/pages/Sandbox.vue'
import NotFound from '$components/pages/404.vue'

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
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot,
    },
    {
      path: '/verify',
      name: 'Verify',
      component: Verify,
    },
    {
      path: '/new-password',
      name: 'NewPassword',
      component: NewPassword,
    },
    {
      path: '/reset-success',
      name: 'ResetSuccess',
      component: ResetSuccess,
    },
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
      path: '/notifications',
      name: 'Notifications',
      component: Notifications,
    },
    /**
     * ========================================
     * Customers
     * ========================================
     */
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
    /**
     * ========================================
     * Products
     * ========================================
     */
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
    /**
     * ========================================
     * Products
     * ========================================
     */
    {
      path: '/products/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/products/categories/add',
      name: 'AddCategories',
      component: AddCategories,
    },
    {
      path: '/products/categories/update',
      name: 'UpdateCategories',
      component: UpdateCategories,
    },

    /**
     * ========================================
     * Transactions
     * ========================================
     */
    {
      path: '/transactions/manage-transactions',
      name: 'ManageTransactions',
      component: ManageTransactions,
    },
    {
      path: '/transactions/detail-transactions',
      name: 'DetailTransactions',
      component: DetailTransactions,
    },
    {
      path: '/transactions/manage-returns',
      name: 'ManageReturns',
      component: ManageReturns,
    },
    {
      path: '/transactions/manage-returns/approve',
      name: 'ApproveManageReturns',
      component: ApproveManageReturns,
    },
    /**
     * ========================================
     * Flash Sale
     * ========================================
     */
    {
      path: '/flash-sale',
      name: 'FlashSale',
      component: FlashSale,
    },

    /**
     * ========================================
     * Outlets
     * ========================================
     */
    {
      path: '/outlets',
      name: 'Outlets',
      component: Outlets,
    },
    {
      path: '/outlets/detail',
      name: 'DetailOutlets',
      component: DetailOutlets,
    },
    {
      path: '/outlets/edit',
      name: 'EditOutlets',
      component: EditOutlets,
    },
    /**
     * ========================================
     * Banners
     * ========================================
     */
    {
      path: '/banners',
      name: 'Banners',
      component: Banners,
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
      name: 'UserRole',
      component: UserRole,
    },
    {
      path: '/user-role/add',
      name: 'AddUserRole',
      component: AddUserRole,
    },
    {
      path: '/user-role/edit',
      name: 'EditUserRole',
      component: EditUserRole,
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
