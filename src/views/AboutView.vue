<template>
  <Header />

  <div class="crew">
    <h2>Meet the crew!</h2>
  </div>

  <div class="container">
    <div class="team-wrapper" v-for="member in team" :key="member.name">
      <img :src="member.image" class="img-responsive" alt="team img">
      <h3>{{ member.name }}</h3>
      <h4>{{ member.role }}</h4>
      <p>Computer Sience graduate</p>
      <p>California State University - Northridge</p>
      <a :href="member.github_link"> Github</a>
      <a :href="member.linkedin_link"> LinkedIn</a>
    </div>
  </div>

  <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'

interface TeamMember {
  name: string
  role: string
  image: string
  github_link: string
  linkedin_link: string
}

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
.crew
{
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

  .team-wrapper {
      flex: 1 1 300px;
      margin: 10px;
      text-align: left;
      border: 1px solid #524b4b;
      padding: 30px;
      font-family: Arial, sans-serif;
  }

  .team-wrapper h3 {
      color: white;
      font-size: 24px;
      font-weight: bold;
      padding-top: 10px;
  }

  .team-wrapper h4 {
      color: #d54ab6;
      font-size: 18px;
      font-weight: normal;
      padding-top: 10px;
  }

  .team-wrapper p {
      color: #888;
      font-size: 16px;
      padding-top: 10px;
     
  }

  .team-wrapper a {
     color: #337ab7;
      text-decoration: none;
      padding-top: 10px;
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
