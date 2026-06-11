<template>
    <section>
        <div class="title-container horizontal-lines reveal-ignore">
            <h1>{{ project.title }}</h1>
            <div v-for="tag in project.tags" :key="tag">
                <img :src="`/images/${tag.toLowerCase()}-red.png`" :alt="tag">
                <p>{{ tag }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps(['project'])
</script>

<style scoped>
section .title-container {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 2rem;
}

section .title-container h1 {
    font-family: 'rm-mono', monospace;
    text-transform: uppercase;
    font-size: var(--h1-size);
    letter-spacing: .3em;
    font-weight: 400;
    color: var(--border-400);
    white-space: nowrap;
    margin-right: auto;

    padding: 1rem 1rem 1rem 3rem;
}

section .title-container h1::after {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    border: 2px solid var(--border-400);
    top: 50%;
    left: 1.5rem;
    translate: -50% -50%;
    rotate: 45deg;
}


section .title-container div {
    position: relative;
    display: flex;
    align-items: center;
    gap: .5rem;
}

section .title-container div:last-of-type {
    margin-right: 2rem;
}

section .title-container div p {
    position: relative;
    font-family: 'waffer', sans-serif;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--border-400);
    line-height: 1.5em;
}

section .title-container div img {
    height: 1rem;
    z-index: 1;
}

section .title-container div::before {
    content: '';
    position: absolute;
    inset: -.25rem -.75rem;
    background: var(--backdrop-200);
    border-radius: 5px;
    corner-shape: bevel;
    border: 1.5px solid var(--border-400);
}

@media (width < 700px) {
    section .title-container h1::after {
        content: '';
        position: absolute;
        height: 8px;
        width: 8px;
        border: 1.75px solid var(--border-400);
        top: 50%;
        left: 1.5rem;
        translate: -50% -50%;
        rotate: 45deg;
    }
}

@media (width < 400px) {
    section .title-container div {
        display: none;
    }
}
</style>