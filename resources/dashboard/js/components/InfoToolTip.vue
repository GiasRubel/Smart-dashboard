<template>
    <a v-b-tooltip.hover :title="title">
        <i class="fas fa-info-circle"></i>
    </a>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>

</style>