import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'
import Checkout from '@/views/CheckoutView.vue'
import Product from '@/views/ProductView/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: "/product/:id",
      name: "ProductPage",
      component: Product,
    }
  ]
})

export default router
