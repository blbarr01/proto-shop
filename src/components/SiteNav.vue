<template>
    <nav>
        <ul class="nav-list">
            <li >
                <RouterLink class="nav-item" to="/"> Home </RouterLink>
            </li>
            <li >
                <RouterLink class="nav-item" to="/about"> About </RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/project-details"> Project Details </RouterLink>
            </li>
            <li>
                <RouterLink class="nav-item profile" to="/portal">
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
.nav-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2em;
    margin: 2em auto;
}


.nav-item {
    font-size: 1.75rem;
}

.nav-item:hover{
    color: var(--web-gold);
    border-bottom: 2px solid var(--web-gold);
}

@media screen and (max-width: 1075px) {
    .nav-list {
        flex-direction: column;
        gap: 1em;
        margin: 1em auto;
        align-items: center; /* Added align-items property */
        padding-right: 40px;
       
    }

    .nav-item {
        font-size: 1.25rem; /* Changed from 1.5rem to 1.25rem */

    }
    .profile {
        font-size: 1.75rem; /* Changed from 1.5rem to 1.25rem */

    }
}

@media screen and (max-width: 645px) {
    .nav-list {
        gap: 0.5em;
        margin: 0.5em auto;
        align-items: center; /* Added align-items property */
    }

    .nav-item {
        font-size: 1rem; /* Changed from 1.25rem to 1rem */
    }
    .profile {
        font-size: 1.75rem; /* Changed from 1.5rem to 1.25rem */

    }
}


</style>



