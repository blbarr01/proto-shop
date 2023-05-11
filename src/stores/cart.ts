import { defineStore } from 'pinia'
import type Product from '../types/product'
import type CartItem from '@/types/cartItem'
import { ref } from 'vue'



export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])

  // retrieve cart from localStorage
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cart.value = JSON.parse(savedCart)
  }

  function addToCart(product: Product) {
    const existingItem = cart.value.find((item) => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ product, quantity: 1 })
    }

    // store cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart.value))
    console.log(cart.value)
    console.log('Cart contents:')
    cart.value.forEach((item) => {
      console.log(`${item.product.title}: ${item.quantity}`)
    })
  }

  function removeFromCart(product: Product) {
    const existingItem = cart.value.find((item) => item.product.id === product.id)
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--
      } else {
        deleteFromCart(product)
      }
    }
  }
  function deleteFromCart(product: Product) {
    const index = cart.value.findIndex((item) => item.product.id === product.id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }

    // store cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }

  function updateQuantity(product: Product, quantity: number) {
    const item = cart.value.find((item) => item.product.id === product.id)
    if (item) {
      item.quantity = quantity

      // store cart in localStorage
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }
  }

  return { cart, addToCart, deleteFromCart, removeFromCart, updateQuantity }
})
