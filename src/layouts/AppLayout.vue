<script setup>
    import { RouterView } from 'vue-router';
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import Main from '../components/Main.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Module from '../components/Module.vue';

    const menuArray = [
        {
            path: '/',
            name: 'Home',
            component: 'Home',
            icon: 'home'
        },
        {
            path: '/projects',
            name: 'Projects',
            component: 'Projects',
            icon: 'projects'
        },
        {
            path: '/tasks',
            name: 'Tasks',
            component: 'Tasks',
            icon: 'tasks'
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: 'Calendar',
            icon: 'calendar'
        },
        {
            path: '/media',
            name: 'Media',
            component: 'Media',
            icon: 'media'
        }
    ]

</script>

<template>
    <div class="layout">
        <Header :menuArray="menuArray"></Header>
        <Main>
            <Sidebar />
            <Module>
                <RouterView></RouterView>
            </Module>
        </Main>
        <Footer></Footer>
    </div>
</template>

<style lang="sass" scoped>
    .layout
        display: grid
</style>
