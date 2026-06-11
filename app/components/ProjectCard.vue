<template>
    <li :id="id" :style="`view-transition-name: project-card-${slug}`">
        <div class="card-upper vertical-lines">
            <div class="text-container">
                <h3>{{ title }}</h3>
                <p>{{ number }}</p>
            </div>
            <div class="image-container">
                <ul>
                    <li v-for="tag in tags.slice(0, 3)" :key="tag" :class="tag.toLowerCase()">
                        <img :src="`/images/${tag.toLowerCase()}.png`" :alt="tag">

                        <p>{{ tag }}</p>
                    </li>
                </ul>
                <img :src="image" :alt="imageAlt" :style="`view-transition-name: project-image-${slug}`">
            </div>
        </div>
        <div class="card-lower vertical-lines">
            <p>{{ description }}</p>
            <NuxtLink :to="`/projects/${slug}`" class="button" viewTransition>
                <p>View project →</p>
            </NuxtLink>
        </div>
    </li>
</template>

<script setup>
defineProps(['id', 'slug', 'title', 'number', 'image', 'imageAlt', 'description', 'tags'])
</script>

<style>
.projects li {
    display: grid;
    gap: 3px;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* CARD UPPER */
/* - - - - - - - - - - - - - - - - - - - - - - - - */


.projects li .card-upper {
    --inline-offset: 2rem !important;
    --line-color: var(--background-guideline) !important;

    background: var(--backdrop-200);
    position: relative;
    padding: var(--inline-offset);
    border-radius: 10px;
    corner-shape: bevel;
}

.projects li .card-upper .text-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.projects li .card-upper .text-container h3 {
    font-family: 'poppins', sans-serif;
    font-size: var(--h3-size);
    font-weight: 400;
    color: var(--text);
}

.projects li .card-upper .text-container p {
    font-family: 'rm-mono', monospace;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--backdrop-400);
    margin-left: auto;
}

.projects li .card-upper.vertical-lines::before,
.projects li .card-upper.vertical-lines::after {
    z-index: 10;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* IMAGE CONTAINER */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.projects li .card-upper .image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1;

    background-image: linear-gradient(var(--backdrop-200) 30%, transparent),
        url(/images/iso-grid.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    place-items: center;
    z-index: 1;
}

.projects li .card-upper .image-container::before {
    content: '';
    position: absolute;
    height: 100%;
    width: calc(100% + (2 * var(--inline-offset)));
    top: 0;
    left: calc(-1 * var(--inline-offset));
    background: linear-gradient(var(--background-guideline) 1px, transparent 1px, transparent calc(100% - 1px), var(--background-guideline) calc(100% - 1px));
}

.projects li .card-upper .image-container>img {
    width: 50%;
    height: auto;
}


.projects li .card-upper .image-container ul {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: .25rem;
}

.projects li .card-upper .image-container ul li {
    display: flex;
    align-items: center;
    gap: .5rem;
    background: var(--border-400);
    padding: .25rem;
    border-radius: 5px;
    corner-shape: bevel;
    width: 1.5rem;
    height: 1.5rem;
    overflow: hidden;
    transition: width .3s ease;
}

.projects li .card-upper .image-container ul li:hover {
    width: max-content;
}

.projects li .card-upper .image-container ul li img {
    height: 1rem;
}

.projects li .card-upper .image-container ul li p {
    font-family: 'poppins', sans-serif;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--backdrop-200);
    white-space: nowrap;
    padding-right: .5rem;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* CARD LOWER */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.projects li .card-lower {
    --inline-offset: 2rem;
    --line-color: var(--background-guideline) !important;

    background: var(--backdrop-200);
    padding: var(--inline-offset);
    border-radius: 10px;
    corner-shape: bevel;

    display: grid;
    gap: 1rem;
}

.projects li .card-lower>p {
    font-family: 'poppins', sans-serif;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--text);
    line-height: 1.5em;
}
</style>