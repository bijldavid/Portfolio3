<template>
    <div class="project-final-result">
        <img :src="`/images/${project.slug}-16-7.png`" :alt="project.title">
    </div>
</template>

<script setup>
defineProps({
    project: Object
})
</script>

<style scoped>
.project-final-result {
    width: 100%;
    aspect-ratio: 16 / 7;
    z-index: 0;
    overflow: hidden;
    border-bottom: solid 1px var(--background-grid);
}

.project-final-result img {
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
}
</style>