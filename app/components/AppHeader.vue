<template>
    <header :class="{ 'is-scrolled': isScrolled }" style="view-transition-name: site-header;">
        <a href="/">
            <img src="/images/db-logo.webp" alt="David Bijl Logo">
        </a>
    </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isScrolled = ref(false)

const updateScrollState = () => {
    isScrolled.value = window.scrollY > 0
}

onMounted(() => {
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateScrollState)
})
</script>

<style scoped>
header {
    position: fixed;
    z-index: 9999;
    top: 1.35rem;
    left: 50%;
    translate: -50%;
    width: 100%;
    display: grid;
    place-items: center;
    width: max-content;
}

header img {
    height: 2.5rem;
    transition: height 200ms ease, scale 200ms ease, opacity 200ms ease;
}

header.is-scrolled img {
    height: 1.25rem;
}

body:has(fieldset.is-sticky) header img {
    scale: 0.1;
    opacity: 0;
}
</style>