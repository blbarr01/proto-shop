<template>
    <nav>
        <ul class="nav-list">
            <li class="nav-item">
                <RouterLink to="/"> Home </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/about"> About </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/contact"> Contact </RouterLink>
            </li>
            <li>
                <RouterLink class="nav-item" to="/portal">
                    <font-awesome-icon :icon="['fas', 'circle-user']" />
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>


<script lang='ts' setup>
    import { RouterLink } from 'vue-router';
</script>

<style>
    .nav-list{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  margin:2em auto;
}


.nav-item{
  font-size: 1.75rem;
}
</style>



