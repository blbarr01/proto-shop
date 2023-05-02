<script setup >
import { supabase } from '@/supabase'
import { onMounted, ref, toRefs } from 'vue'
import Avatar from '@/components/Avatar.vue'
const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session?.value
    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session?.value

    const updates = {
      id: user.id,
      username: username.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="wrapper">
  <form class="profile-form" @submit.prevent="updateProfile">
    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />
    <div>
      <input id="email" type="text" :value="session.user.email" disabled />
    </div>
    <div>
      <input id="username" type="text" v-model="username"  placeholder="name"/>
    </div>


    <div>
      <input 
        type="submit"
        class="update-btn"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</div>
</template>


<style scoped> 
.profile-form{
  border: 2px solid var(--accent-clr);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  padding: 2em;
}

.wrapper{
  border: 2px solid cyan ;
  display: flex;
  flex-direction: column;
  padding: 2em;
}

.update-btn{

}
</style>