<template>
    <div>
        <RouterLink to="/portal">
            <font-awesome-icon :icon="['fas', 'circle-user']" />
            <p>sign up / log in</p>
        </RouterLink >
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
div {
    color: var(--persian-rose);
    display: flex;
    flex-direction: row;
    gap: .5em;
}
</style>
