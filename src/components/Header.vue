<script setup>
    import AppMenu from './AppMenu.vue';
    const props = defineProps({
        menuArray: {
            type: Array,
            default: []
        }
    })

    const { menuArray } = props

    console.log(menuArray);

</script>

<template>
    <header class="header">
        <div class="container j-c d-f a-c">
            <AppMenu :menuArray="menuArray"/>
        </div>
    </header>
</template>

<style lang="sass" scoped>
    @use '../assets/styles/variables' as v
    .header
        padding: 20px
        background-color: v.$accentBlue
</style>
