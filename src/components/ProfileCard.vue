<template>
    <div class="team-wrapper">
    <img :src="profile?.image" class="img-responsive" alt="team img">
      <h3>{{ profile?.name }}</h3>
      <h4>{{ profile?.role }}</h4>
      <p>Computer Sience graduate</p>
      <p>California State University - Northridge</p>
      <a :href="profile?.github_link"> Github</a>
      <a :href="profile?.linkedin_link"> LinkedIn</a>
    </div>
</template>


<script setup lang="ts">
    import type { PropType } from 'vue'
    import type TeamMember from '@/types/teamMember';

    const props = defineProps({
    profile: Object as PropType<TeamMember>
  })

  const {profile} = props;  
  console.log(JSON.parse(JSON.stringify(profile))); 
  
  
</script>


<style>
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
</style>