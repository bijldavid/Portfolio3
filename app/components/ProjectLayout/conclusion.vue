<template>
    <section>
        <div class="vertical-lines">
            <h2>
                <slot name="title" />
            </h2>
            <p>
                <slot name="content" />
            </p>
        </div>
        <div>
            <div class="image-container">
                <img :src="`/images/16-6-${project.slug}.png`" :alt="project.title">
            </div>
            <div class="project-navigation">
                <a :href="projectLink" class="label" target="_blank" rel="noopener noreferrer">
                    View project
                </a>
                <a :href="projectLink" class="label" target="_blank" rel="noopener noreferrer">
                    View github
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    index: String,
    projectLink: String,
})

import { cssCatProject as project } from '~/data/projects'

</script>

<style scoped>
section {
    display: grid;
    gap: 3px;
}

section > div:nth-of-type(1) {
    background-color: var(--border-400);
    padding: 5rem;

    display: grid;
    gap: 1.5rem;

    border-radius: 15px;
    corner-shape: bevel;
}

section > div:nth-of-type(2) {
    position: relative;
    background-color: var(--border-400);
    padding: 2rem 5rem 5rem 5rem;

    display: grid;
    gap: 2rem;

    border-radius: 15px;
    corner-shape: bevel;
    overflow: hidden;
    z-index: 0;
}

section > div:nth-of-type(2)::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        linear-gradient(0deg, transparent, var(--border-400)),
        repeating-linear-gradient(90deg, transparent, transparent 20px, var(--border-300) 20px, var(--border-300) 21px),
        repeating-linear-gradient(0deg, transparent, transparent 20px, var(--border-300) 20px, var(--border-300) 21px);

    z-index: 10;
    height: 100%;
    width: 100%;
    z-index: -1;
}

section div.vertical-lines {
    z-index: 10;
    --inline-offset: 5rem;
    --line-color: var(--border-300);
}

section h2 {
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--background-solid);
    height: max-content
}

section p {
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 1.5em;
    columns: 40ch;
    column-gap: 3rem;
    color: var(--background-solid);
}

section div .image-container {
    width: 100%;
    aspect-ratio: 16 / 6;
    background: var(--border-300);
    border-radius: 10px;
    corner-shape: bevel;
    overflow: hidden;
}

section div .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

section div .project-navigation {
    display: flex;
    gap: 2rem;
    justify-content: center;
}

.label {
    --timing-function: linear(0, 0.036 0.9%, 0.142 1.9%, 0.97 7.3%, 1.117 9.1%, 1.155 10%, 1.175 11%, 1.175 12%, 1.157 13.2%, 1.001 19%, 0.979 20.6%, 0.969 22.4%, 1.005 33.8%, 0.999 45.2%, 1);

    position: relative;
    display: flex;
    gap: 1rem;
    width: max-content;
    padding: 1rem 2rem;
    border-radius: 10px;
    corner-shape: bevel;
    border: 2px solid var(--border-600);
    background:
        linear-gradient(0deg, transparent 9px, var(--background-guideline) 9px, var(--background-guideline) 10px, transparent 10px, transparent calc(100% - 10px), var(--background-guideline) calc(100% - 10px), var(--background-guideline) calc(100% - 9px), transparent calc(100% - 9px)),
        linear-gradient(90deg, transparent 9px, var(--background-guideline) 9px, var(--background-guideline) 10px, transparent 10px, transparent calc(100% - 10px), var(--background-guideline) calc(100% - 10px), var(--background-guideline) calc(100% - 9px), transparent calc(100% - 9px)),
        linear-gradient(var(--backdrop-200));
    text-align: center;
    overflow: hidden;
    justify-self: center;

    font-family: 'rm-mono', monospace;
    text-transform: uppercase;
    font-size: var(--p-size);
    letter-spacing: .2em;
    color: var(--border-400);
    white-space: nowrap;
    cursor: pointer;
}

.label:active {
    translate: 0 2px;
}

.label::after {
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%);
    background-size: 150% 100%;
    animation: shine 2s linear infinite;
    opacity: .8;
    mix-blend-mode: overlay;
}

.label:nth-of-type(2)::after {
    animation-delay: .33s;
}
</style>