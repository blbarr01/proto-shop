<template>
  <SiteHeader></SiteHeader>
  <div v-if="logoutEvent">
    <p> logout successful </p>
  </div>
  <div v-else>
    <h2>you made it to the user account page</h2>
    <button @click="handleSignout">
      sign out
    </button>
  </div>
  <SiteFooter></SiteFooter>
</template>


<script setup lang="ts">
  import SiteFooter from '@/components/SiteFooter.vue';
  import SiteHeader from '@/components/SiteHeader.vue';
  import { supabase } from '@/supabase';
  import { useAuth } from '@/stores/auth';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';

  const router = useRouter()
  const logoutEvent = ref(false)
  const authStore = useAuth()
  const temp = ref({})
  console.log("user status getter", authStore.userStatus);
  
  const handleSignout = async()=>{
    try {
      let { error } = await supabase.auth.signOut()
      if(error) throw error
      authStore.logOutUser()
      logoutEvent.value = true
      setTimeout(()=>{
        logoutEvent.value = false;
        router.push({name: "Home"})
      }, 3000)
    } catch (error) {
      console.error(error)
    }
  }

</script>


