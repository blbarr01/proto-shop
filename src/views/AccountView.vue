<template>
  <SiteHeader></SiteHeader>
  <h2>you made it to the user account page</h2>
  <main>
  <div v-if="logoutEvent">
    <p> logout successful </p>
  </div>
  <div v-else>
    <form class="form-widget" @submit.prevent="updateProfile">
      <div>
        <label for="email" class="hide">Email</label>
        <input id="email" type="text" value="" placeholder="Email"/>
      </div>
      <div>
        <label for="username" class="hide">User Name</label>
        <input id="username" type="text" v-model="username" placeholder="User Name"/>
      </div>


      <div>
        <input
          type="submit"
          class=""
          :value="loading ? 'Loading ...' : 'Update'"
          :disabled="loading"
        />
      </div>
    </form>

  </div>
</main>
<button @click="handleSignout">
      sign out
    </button> 
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
  const loading = ref(false)
  const username = ref('')
  console.log("user status getter", authStore.getUID.value);
  console.log(authStore.userId);
  
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
    finally{
      loading.value=false
    }
  }

  const updateProfile = async() => {
    
  }
  
  
</script>


<style>
  main{
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-widget{
    display: flex;
    flex-direction: column;
    gap:1.5em
  }


  .hide{
    display: none;
  }
</style>