<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps({
        menuArray: {
            type: Array,
            default: () => []
        }
    })

    const { menuArray } = props

    console.log(menuArray);
    
</script>

<template>
    <menu>
        <div class="logo"></div>
        <ul class="menu-list d-f a-c">
            <RouterLink v-for="menuItem in menuArray" :to="menuItem.path" :key="menuItem.name"><li class="menu-list-item">{{ menuItem.name }}</li></RouterLink>
        </ul>
    </menu>
</template>

<style lang="sass" scoped>
    @use '../assets/styles/variables.sass' as v
    .menu-list
        gap: 20px
        color: v.$white
        width: 100%

    .menu-list-item
        list-style: none
</style>
