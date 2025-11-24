<script setup>
    import { RouterView } from 'vue-router';
    import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';
</script>

<template>
    <div class="layout">
        <Header></Header>
        <Sidebar />
        <RouterView></RouterView>
    </div>
</template>

<style lang="sass" scoped>
    .layout
        display: grid
        grid-template-columns: 
        grid-template-rows: 
</style>
