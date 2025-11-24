<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <menu>
        <div class="logo"></div>
        <ul class="menu-list">
            <RouterLink href="/"><li>Home</li></RouterLink>
            <RouterLink href="/projects"><li>Projects</li></RouterLink>
            <RouterLink href="/tasks"><li>Tasks</li></RouterLink>
            <RouterLink href="/media"><li>Media</li></RouterLink>
        </ul>
    </menu>
</template>

<style lang="sass" scoped>

</style>
