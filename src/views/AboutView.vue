<template>
  <Header />
  <main>
    <div class="crew">
      <h2>Meet the crew!</h2>
    </div>
    <div class="container">
      <ProfileCard v-for="profile in team" :profile="profile" />
    </div>
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { ref, onMounted } from 'vue'
import ProfileCard from '@/components/ProfileCard.vue'
import { supabase } from '@/supabase'
import type TeamMember from '@/types/teamMember'


const team = ref<TeamMember[]>([])

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('team').select('*')
    if (error) throw error
    team.value = data as TeamMember[]
  } catch (error) {
    console.error(error)
  }
})


</script>

<style lang="css" scoped>
.crew {
  text-align: center;
  margin: 10px;
  font-size: 30px;
  font-weight: bolder;
  font-family: Arial, sans-serif;
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

}


@media (max-width: 1100px) {
  .container {
    padding: 20px;
  }
}

@media (max-width: 900) {
  .container {
    padding: 20px;
  }
}
</style>
