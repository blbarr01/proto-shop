import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Checkout from '@/views/CheckoutView.vue'
import ProjectDetails from '@/views/ProjectDetailsView.vue'
import Product from '@/views/ProductView/index.vue'
import UserPortal from "@/views/UserPortalView/index.vue"



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
      path: '/project-details',
      name: 'ProjectDetails',
      component: ProjectDetails
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
    },
    {
      path:"/portal",
      name:"UserPortal",
      component: UserPortal, 
    }
  ]
})

export default router
