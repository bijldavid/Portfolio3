<template>
    <main class="projects">
        <div class="container vertical-lines">

            <Breadcrumbs>
                <NuxtLink to="/" viewTransition>Home</NuxtLink>
                <NuxtLink to="/projects" viewTransition>Projects</NuxtLink>
            </Breadcrumbs>

            <section>
                <h1 class="horizontal-lines reveal-ignore">Projects</h1>
                <div class="introduction">
                    <ul>
                        <li v-for="project in projects" :key="project.id" class="reveal-ignore">
                            <a :href="`#${project.id}`">
                                <span>{{ project.number }}</span>{{ project.title }}
                            </a>
                        </li>
                    </ul>
                    <span class="gradient-overlay"></span>
                    <button class="scroll-indicator"></button>

                    <div>
                        <h2>More about my projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae repudiandae necessitatibus
                            aut voluptate odit magni provident praesentium quibusdam, eaque aliquid! Quisquam illo
                            doloribus ratione nobis reiciendis neque ut vel facere.</p>
                    </div>
                </div>
            </section>
            <div class="empty horizontal-lines"></div>

            <section class="projects vertical-lines">
                <h2 class="visually-hidden">Projects</h2>
                <fieldset class="vertical-lines">
                    <legend class="visually-hidden">Project categories</legend>
                    <label :class="getCategoryOrderClass('Design')" style="view-transition-name: category-design;">
                        <input :checked="selectedCategories.includes('Design')" type="checkbox" value="Design"
                            @change="toggleCategory('Design')">
                        <span data-type="design">Design</span>
                    </label>
                    <label :class="getCategoryOrderClass('Code')" style="view-transition-name: category-code;">
                        <input :checked="selectedCategories.includes('Code')" type="checkbox" value="Code"
                            @change="toggleCategory('Code')">
                        <span data-type="code">Code</span>
                    </label>
                    <label :class="getCategoryOrderClass('Video')" style="view-transition-name: category-video;">
                        <input :checked="selectedCategories.includes('Video')" type="checkbox" value="Video"
                            @change="toggleCategory('Video')">
                        <span data-type="video">Video</span>
                    </label>
                </fieldset>
                <ul>
                    <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project"
                        :class="{ remove: shouldRemoveProject(project.tags) }" />
                </ul>
            </section>
            <div class="empty horizontal-lines"></div>

        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { projects } from '~/data/projects';

const selectedCategories = ref([]);

const getCategoryOrderClass = (category) => {
    const order = selectedCategories.value.indexOf(category);

    if (order === 0) {
        return 'first';
    }

    if (order === 1) {
        return 'second';
    }

    return 'third';
};

const toggleCategory = (category) => {
    const nextCategories = selectedCategories.value.includes(category)
        ? selectedCategories.value.filter(item => item !== category)
        : [...selectedCategories.value, category];

    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
        document.startViewTransition(() => {
            selectedCategories.value = nextCategories;
        });

        return;
    }

    selectedCategories.value = nextCategories;
};

const shouldRemoveProject = (tags) => {
    if (!selectedCategories.value.length) {
        return false;
    }

    return !tags.some(tag => selectedCategories.value.includes(tag));
};

onMounted(() => {

    const scrollParent = document.querySelector('.introduction ul');
    const gradient = document.querySelector('.gradient-overlay');
    const scrollButton = document.querySelector('.scroll-indicator');

    if (scrollParent) {
        const updateIndicatorVisibility = () => {
            const isAtBottom = scrollParent.scrollTop + scrollParent.clientHeight >= scrollParent.scrollHeight - 1;

            gradient.classList.toggle('hide', isAtBottom);
            scrollButton.classList.toggle('hide', isAtBottom);
        };

        scrollParent.addEventListener('scroll', updateIndicatorVisibility);
        window.addEventListener('resize', updateIndicatorVisibility);
        updateIndicatorVisibility();
    }

    if (scrollButton && scrollParent) {
        scrollButton.addEventListener('click', () => {
            scrollParent.scrollTo({ top: scrollParent.scrollHeight, behavior: 'smooth' });
        });
    }

    document.querySelectorAll('.introduction ul li a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.introduction ul li a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const fieldset = document.querySelector('.container section:nth-of-type(2) fieldset');

    if (fieldset) {
        const sentinel = document.createElement('div');
        sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:100%;pointer-events:none;';
        fieldset.parentElement.insertBefore(sentinel, fieldset);

        const observer = new IntersectionObserver(
            ([entry]) => {
                fieldset.classList.toggle('is-sticky', !entry.isIntersecting);
            },
            { rootMargin: '-100px 0px 0px 0px', threshold: 0 }
        );

        observer.observe(sentinel);
    }
});
</script>

<style scoped>
/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* TITLE */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(1) h1 {
    font-family: 'rm-mono', monospace;
    text-transform: uppercase;
    font-size: var(--h1-size);
    letter-spacing: .3em;
    font-weight: 400;
    color: var(--border-400);
    white-space: nowrap;

    padding: 1rem 1rem 1rem 3rem;
    width: 100%;
}

.container section:nth-of-type(1) h1::after {
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


/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* PROJECT SCROLL */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(1) .introduction {
    position: relative;
    display: grid;
    grid-template-columns: 20rem 1fr;
    gap: 3rem;
}

.container section:nth-of-type(1) .introduction ul {
    display: grid;
    width: 100%;
    border-right: 1px solid var(--background-grid);
    height: 20rem;
    overflow: scroll;
    overscroll-behavior-y: contain;
}

.container section:nth-of-type(1) .introduction .gradient-overlay {
    pointer-events: none;
    position: absolute;
    height: 20rem;
    width: calc(20rem - 2px);
    background: linear-gradient(transparent 60%, var(--background-solid) 95%);
    top: 0;
    left: 1px;
    transition: opacity .3s ease;
}

.container section:nth-of-type(1) .introduction .scroll-indicator {
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    left: 10rem;
    translate: -50% 0;
    height: 2rem;
    width: 2rem;
    border-radius: 10px;
    corner-shape: bevel;
    background: var(--backdrop-200);
    border: 2px solid var(--border-400);

    background-image: url(/images/scroll-arrow.png);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;

    animation: bobbing 2s ease infinite;
}

@keyframes bobbing {
    0% {
        translate: -50% 0;
    }

    50% {
        translate: -50% -10px;
    }

    100% {
        translate: -50% 0;
    }
}

.hide {
    opacity: 0;
    pointer-events: none;
}

.container section:nth-of-type(1) .introduction ul li a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    padding: 1rem;
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    color: var(--text);
    white-space: nowrap;
}

.container section:nth-of-type(1) .introduction ul li a:hover {
    padding-left: 2.5rem;
    z-index: -1;
}

.container section:nth-of-type(1) .introduction ul li a:hover::after {
    content: '';
    position: absolute;
    inset: 0;
    left: 1px;
    background: var(--backdrop-200);
    z-index: -1;
}

.container section:nth-of-type(1) .introduction ul li a:hover::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1rem;
    translate: 0 -50%;
    height: 10px;
    width: 7px;
    background: var(--border-400);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
}


.container section:nth-of-type(1) .introduction ul li:not(:last-of-type) {
    border-bottom: 1px solid var(--background-grid);
}

.container section:nth-of-type(1) .introduction ul li span {
    color: var(--backdrop-500);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* INTRO TEXT */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(1) .introduction div {
    display: flex;
    flex-direction: column;
    gap: 1.66rem;
    padding: 2rem;
    border-left: 1px solid var(--background-grid);
}

.container section:nth-of-type(1) .introduction div h2 {
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--text);
}

.container section:nth-of-type(1) .introduction div p {
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    color: var(--text);
    line-height: 1.75em;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* FIELDSET */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(2) {
    position: relative;
    background: var(--border-400);
    border-radius: 15px;
    corner-shape: bevel;
    padding-top: 2rem;
}

.container section:nth-of-type(2).vertical-lines {
    --inline-offset: 3rem;
    --line-color: var(--border-300);
}

.container section:nth-of-type(2) fieldset {
    --inline-offset: 3rem;
    --line-color: var(--border-300);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    view-transition-name: project-filters;

    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    padding: 1rem var(--inline-offset);
    border: none;
    background: #790c0c64;
    backdrop-filter: blur(10px);
}

@media (width < 700px) {

    .container section:nth-of-type(2) fieldset {
        --inline-offset: 1.5rem;
    }

    .container section:nth-of-type(2).vertical-lines {
        --inline-offset: 1.5rem;
    }
}

.container section:nth-of-type(2) fieldset label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'poppins', sans-serif;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--backdrop-200);
    min-width: max-content;
    padding-left: calc(1rem + 1.5px);
    cursor: pointer;
    opacity: .5;
}

@media (hover: hover) and (pointer: fine) {
    .container section:nth-of-type(2) fieldset label:hover {
        opacity: 1;
    }
}

.container section:nth-of-type(2) fieldset label::before {
    content: '';
    position: absolute;
    box-sizing: content-box;
    top: 50%;
    left: 1.5rem;
    translate: -50% -50%;
    height: calc(.5rem + .5rem + .85rem);
    width: calc(1rem + 1rem + .85rem);
    background: var(--border-400);
    border-radius: 5px;
    corner-shape: bevel;
    border: 1.5px solid var(--backdrop-200);
}

.container section:nth-of-type(2) fieldset label span {
    position: relative;
    background: var(--border-400);
    padding: .5rem 1rem .5rem 2.5rem;
    border-radius: 5px;
    corner-shape: bevel;
    border: 1.5px solid var(--backdrop-200);
}

.container section:nth-of-type(2) fieldset label span::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1rem;
    translate: 0 -50%;
    height: 1rem;
    aspect-ratio: 1;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
}

.container section:nth-of-type(2) fieldset label span[data-type="design"]::before {
    background-image: url(/images/design.png);
}

.container section:nth-of-type(2) fieldset label span[data-type="code"]::before {
    background-image: url(/images/code.png);
}

.container section:nth-of-type(2) fieldset label span[data-type="video"]::before {
    background-image: url(/images/video.png);
}

.container section:nth-of-type(2) fieldset label input {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;

    --line-thickness: 1.5px;
    position: relative;
    height: .85rem;
    aspect-ratio: 1;

    cursor: pointer;
    transition: rotate .3s ease;
}

.container section:nth-of-type(2) fieldset label input::before,
.container section:nth-of-type(2) fieldset label input::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    width: 100%;
    height: var(--line-thickness);
    background: var(--backdrop-200);
}

.container section:nth-of-type(2) fieldset label input::before {
    rotate: z 90deg;
    transition: rotate .3s ease;
}

.container section:nth-of-type(2) fieldset label input:checked::before {
    rotate: z 0deg;
}

@media (hover: hover) and (pointer: fine) {

    .container section:nth-of-type(2) fieldset label input:hover {
        rotate: z 90deg;
    }

    .container section:nth-of-type(2) fieldset label input:checked:hover {
        rotate: z 0deg;
    }
}

/* - - - - - - - */
/* CHECKED STATE */
/* - - - - - - - */

.container section:nth-of-type(2) fieldset label:has(input:checked) {
    opacity: 1;
}

.container section:nth-of-type(2) fieldset label:has(input:checked) span,
.container section:nth-of-type(2) fieldset label:has(input:checked)::before {
    background: var(--backdrop-200);
    color: var(--border-400);
}

.container section:nth-of-type(2) fieldset label:has(input:checked) input::before,
.container section:nth-of-type(2) fieldset label:has(input:checked) input::after {
    background: var(--border-400);
}

.container section:nth-of-type(2) fieldset label:has(input:checked) span[data-type="design"]::before {
    background-image: url(/images/design-red.png);
}

.container section:nth-of-type(2) fieldset label:has(input:checked) span[data-type="code"]::before {
    background-image: url(/images/code-red.png);
}

.container section:nth-of-type(2) fieldset label:has(input:checked) span[data-type="video"]::before {
    background-image: url(/images/video-red.png);
}

.first {
    order: -1;
}

.second {
    order: 1;
}

.third {
    order: 2;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* PROJECTS */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(2)>ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(270px, 100%), 1fr));
    gap: 2rem 3px;
    padding: 1rem var(--inline-offset) 3rem var(--inline-offset);
}

@media (width < 950px) {

    /* - - - - - - - - - - - - - - - - - - - - - - - - */
    /* PROJECT SCROLL */
    /* - - - - - - - - - - - - - - - - - - - - - - - - */

    .container section:nth-of-type(1) .introduction {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .container section:nth-of-type(1) .introduction ul {
        border-right: none;
        border-bottom: 1px solid var(--background-grid);
    }

    .container section:nth-of-type(1) .introduction .gradient-overlay {
        height: 50%;
        width: 100%;
        background: linear-gradient(transparent 60%, var(--background-solid) 95%);
        top: calc(20rem - 1px);
        translate: 0 -100%;
        left: 1px;
    }

    .container section:nth-of-type(1) .introduction .scroll-indicator {
        bottom: auto;
        top: calc(18.5rem - 1px);
        left: 50%;
        translate: -50% -100%;
    }

    @keyframes bobbing {
        0% {
            translate: -50% -100%;
        }

        50% {
            translate: -50% calc(-100% - 10px);
        }

        100% {
            translate: -50% -100%;
        }
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - */
    /* INTRO TEXT */
    /* - - - - - - - - - - - - - - - - - - - - - - - - */

    .container section:nth-of-type(1) .introduction div {
        border-left: none;
    }

    .container section:nth-of-type(2) fieldset {
        padding: calc(1rem + .5rem + 1.5px) var(--inline-offset);
    }

}

@media (width < 700px) {

    .container section:nth-of-type(1) h1::after {
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

    /* - - - - - - - - - - - - - - - - - - - - - - - - */
    /* FIELDSET */
    /* - - - - - - - - - - - - - - - - - - - - - - - - */

    .container section:nth-of-type(2) fieldset label {
        position: relative;
        display: block;
        padding-left: 0;
    }

    .container section:nth-of-type(2) fieldset label::before {
        display: none;
    }

    .container section:nth-of-type(2) fieldset label input {
        display: none;
    }
}
</style>









<style>
/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* GLOBAL STYLING */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.projects .container section:nth-of-type(1) .introduction ul li a.active::after {
    content: '';
    position: absolute;
    inset: 0;
    left: 1px;
    background: var(--backdrop-200);
    z-index: -1;
}

.projects .container section:nth-of-type(2):has(li:target)>ul>li:not(li:target)>* {
    background: var(--background-solid);
    --line-color: var(--backdrop-400) !important;
}

.projects .container section:nth-of-type(2):has(li:target)>ul>li:not(li:target) .image-container {
    background-image: linear-gradient(var(--background-solid) 30%, transparent),
        url(/images/iso-grid.png);
}

.projects li .card-upper .image-container::before {
    background: linear-gradient(var(--line-color) 1px, transparent 1px, transparent calc(100% - 1px), var(--line-color) calc(100% - 1px));
    z-index: -1;
}

.projects .container section:nth-of-type(2):has(li:target)>ul>li:not(li:target) .image-container img {
    filter: brightness(90%);
}

.remove {
    display: none !important;
}
</style>