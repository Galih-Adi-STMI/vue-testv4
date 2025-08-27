import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/Admin.vue'
import EmptyLayout from '@/layouts/Empty.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Product from '@/views/Product.vue' // 👉 import Product.vue

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
      meta: { layout: EmptyLayout }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { layout: AdminLayout }
    },
    {
      path: "/product",              // 👉 route produk
      name: "product",
      component: Product,
      meta: { layout: AdminLayout }
    },
    {
      path: "/logout",               // 👉 route logout redirect ke login
      name: "logout",
      redirect: { name: "login" }
    }
  ],
})

export default router
