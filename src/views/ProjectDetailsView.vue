<template>
	<Header />
	<main class="about">
		<section class="tech-stack">
			<h2 class="title">Tech Stack</h2>
			<div class="row">
				<div class="image">
					<img src="@/assets/Images/Vue.js_Logo_2.svg.png" class="img-responsive" alt="about img">
				</div>
				<div class="description">
					<h3>Front End</h3>
					<p>the project front end was implemented using the <a href="https://angular.io/">Vue</a> framework</p>
				</div>
			</div>
			<div class="row">
				<div class="image">
					<img src="@/assets/Images/supabase.jpg" class="img-responsive" alt="about img">
				</div>

				<div class="description">
					<h3>Back End</h3>
					<p>the team decided to use backend database <a href="https://supabase.com/docs"> Supabase</a>
						Which includes:
					</p>
					<ul>
						<li>
							Authentication
						</li>
						<li>
							cloud storage
						</li>
						<li>
							postgreSQL database
						</li>
						<li>
							edge functions
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="data">
			<h2 class="title ">Data Modeling</h2>
			<p> Data modeling is the process of creating a conceptual representation of data and its relationships to
				support efficient storage, retrieval, and manipulation.</p>
			<div class="image-data">
				<img src="@/assets/Images/db.png" class="data-pic" alt="about img">
			</div>
		</section>
		<section class="Design">
			<h2 class="title">Site design </h2>
			<div class="image-data">
				<img src="@/assets/Images/siteDiagram.png" class="site-pic" alt="about img">
			</div>
		</section>
	</main>
	<Footer />
</template>
  
<script lang="ts" setup>
import Header from '@/components/SiteHeader.vue'
import Footer from '@/components/SiteFooter.vue'
import { ref } from 'vue';


</script>

<style lang="css" scoped>
/* follows desktop first principles */
.title {
	text-align: center;
}

.img-responsive {
	height: 300px;
}

.row {
	display: flex;
	justify-content: center;



}

.row>.image,
.row>.description {
	flex: 1;
	/* Equal width for both image and description */

}

.description {
	text-align: start;
	background-color: rgb(48, 46, 46);
	padding: 20px;
}

.tech-stack {
	display: flex;
	justify-content: center;
	flex-direction: column;
	/* Stack rows vertically */
	padding: 50px;
}

.image-data {
	text-align: center;
}

.description {
	padding-right: 100px;
}

.data-pic {
	padding: 50px 0px;
	height: 900px;
	width: 1150px;
}

.site-pic {
	padding: 50px 0px;
	height: 1300px;
	width: 1150px;
}

p {
	padding-left: 20px;
	;
	font-size: 20px;
}

@media (max-width: 1150px) {
	.row {
		flex-direction: column;

	}

	.description {
		padding-right: 0;
	}

	.data-pic {
		height: auto;
		width: 100%;
	}

	.site-pic {
		height: auto;
		width: 100%;
	}

	p {
		padding-left: 0;
		font-size: 18px;
	}

	.image {
		text-align: center;
	}
}

@media (max-width: 470px) {
	.row {
		flex-direction: column;
		padding: 0px 0px;
	}

	.img-responsive {
		height: 200px;
	}
}
</style>
