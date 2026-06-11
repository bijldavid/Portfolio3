<!-- ProjectLayoutColumnsItem.vue -->
<template>
    <div>
        <p class="index-count">{{ index }}</p>
        <div class="paragraph">
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({ index: String })
</script>

<style>

</style>