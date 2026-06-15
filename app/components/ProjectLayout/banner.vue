<template>
    <div class="project-final-result">
        <img :src="project.bannerImage" :alt="project.imageAlt">
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
}
</style>