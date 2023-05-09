<template>
  <Header />
  <h1 class="title">Tech Stack</h1>
 

  <div class="about">
		<div class="container">
			<div class="row">
				<div class="image">
					<img src="@/assets/Images/Vue.js_Logo_2.svg.png" class="img-responsive" alt="about img">
				</div>

				<div class="description">
					<h3>Front End</h3>
					<p>the project front end was implemented using the <a href="https://angular.io/">Vue</a>  framework and <a href="https://dummyjson.com/">Dummtyjson</a> API </p>
				</div>
        
			</div>
			<div class="row">

				<div class="image">
          <img src="@/assets/Images/supabase.jpg" class="img-responsive" alt="about img">
				</div>
        
				<div class="description">
					<h3>Back End</h3>
					<p>the team decided to use the Google suite of products offered though <a href="https://supabase.com/docs"> Supabase</a>
						This includes: 
					</p>
					<ul>
						<li>
							Authentication
						</li>
						<li>
							cloud storage
						</li>
					
					</ul>
					
				
				</div>
			</div>
		</div>
	</div> 



  <Footer />
</template>
  
<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { ref } from 'vue';


</script>

<style lang="css" scoped>
.title {
  text-align: center;
}

.img-responsive {
  height: 200px;
}

.row {
  display: flex;
  justify-content: center;
 
  padding: 50px;
 
}

.row > .image,
.row > .description {
  flex: 1; /* Equal width for both image and description */
  
}

.description {
  text-align: start;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column; /* Stack rows vertically */
}
.image
{
 text-align: center;
}
.description
{
padding-right: 100px;
}

</style>
