import { defineStore } from "pinia";
import type Product from '../types/product'
import {ref} from 'vue'

export const cartStore = defineStore('cart',()=>{
    const cart = ref<Product[]>([]);
    function addToCart(){ }

    function deleteFromCart(){}
    
    return{cart, addToCart, deleteFromCart}
})