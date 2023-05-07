<template>
  <Header />

  <div class ="crew">
      <h2>Meet the crew!</h2>
    </div>

  <div class="container">
  

      <div class="team-wrapper">
        <img src="https://hdegohahwlnmtyaygpes.supabase.co/storage/v1/object/sign/avatars/0.6339180005694327.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzAuNjMzOTE4MDAwNTY5NDMyNy53ZWJwIiwiaWF0IjoxNjgzNDIxNTAwLCJleHAiOjE3MTQ5NTc1MDB9.wULdtcthtdExKqS_9ITqg4vzdBx0Myacri8T_jR6RHY&t=2023-05-07T01%3A05%3A00.384Z" class="img-responsive" alt="team img">
        <h3>Brian Barr</h3>
        <h4>Project Lead</h4>
        <p>Department of Computer Science</p>
        <p>California State University, Northridge</p>
        <a href="https://github.com/blbarr01">Github</a>
        <a href="https://www.linkedin.com/in/brian-barr-6a27a0161/"> linkedin</a>
      </div>
      <div class="team-wrapper">
        <img src="temp.jpg" class="img-responsive" alt="team img">
        <h3>Amarinder Singh</h3>
        <h4>Software Engineer</h4>
        <p>Computer Sience graduate</p>
        <p>California State University - Northridge</p>
        <a href="https://github.com/jareedos">Github</a>
        <a href="https://www.linkedin.com/in/jaredsobol/"> Linkedin</a>
      </div>
    
      <div class="team-wrapper">
        <img src="temp.jpg" class="img-responsive" alt="team img">
        <h3>Jian He</h3>
        <h4>Software Engineer</h4>
        <p>Computer Sience graduate</p>
        <p>California State University - Northridge</p>
        <a href="https://github.com/jareedos">Github</a>
        <a href="https://www.linkedin.com/in/jaredsobol/"> Linkedin</a>
      </div>
      <div class="team-wrapper">
        <img src="temp.jpg" class="img-responsive" alt="team img">
        <h3>Amarinder Singh</h3>
        <h4>Software Engineer</h4>
        <p>Computer Sience graduate</p>
        <p>California State University - Northridge</p>
        <a href="https://github.com/jareedos">Github</a>
        <a href="https://www.linkedin.com/in/jaredsobol/"> Linkedin</a>
      </div>
      <div class="team-wrapper">
        <img src="temp.jpg" class="img-responsive" alt="team img">
        <h3>Amarinder Singh</h3>
        <h4>Software Engineer</h4>
        <p>Computer Sience graduate</p> 
        <p>California State University - Northridge</p>
        <a href="https://github.com/jareedos">Github</a>
        <a href="https://www.linkedin.com/in/jaredsobol/"> Linkedin</a>
      </div>
     
  </div>
    <Footer />
</template>

<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { supabase } from '@/supabase'

try {
  let { data: team, error } = await supabase
  .from('team')
  .select('*')
  console.log(team);  
  if (error) throw error
} catch (error) {
  console.error(error);
  
}




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
