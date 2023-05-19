<template>
    <div class="team-wrapper">
      <img :src="profile?.image" class="img-responsive" alt="team img" style="width: 250px; border-radius: 50%;" />
      <h3>{{ profile?.name }}</h3>
      <h4>{{ profile?.role }}</h4>
      <p>Computer Science graduate</p>
      <p>California State University - Northridge</p>
      <a :href="profile?.github_link">Github</a>
      <a :href="profile?.linkedin_link">LinkedIn</a>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from 'vue';
  import type TeamMember from '@/types/teamMember';
  
  const props = defineProps({
    profile: Object as PropType<TeamMember>
  });
  
  const { profile } = props;
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
    transition: transform 0.3s ease;
  }
  
  .team-wrapper:hover {
    transform: translateY(-15px);
  }
  
  .team-wrapper:hover img {
    animation: spin 5s infinite linear;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
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
  