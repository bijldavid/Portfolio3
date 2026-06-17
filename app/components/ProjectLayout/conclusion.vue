<template>
    <section>
        <div class="content-container">
            <h2>
                <slot name="title" />
            </h2>
            <p>
                <slot name="content" />
            </p>

            <div class="project-navigation">
                <p class="usage-warning">
                    <slot name="usage-warning" />
                </p>
                <a :href="projectLink" target="_blank" rel="noopener noreferrer">
                    View project
                </a>
                <a :href="projectGithub" target="_blank" rel="noopener noreferrer">
                    View github repository
                </a>
            </div>
        </div>

        <div class="image-container">
            <a :href="projectLink" target="_blank" rel="noopener noreferrer">
                <img class="external-link-indicator" src="/images/external-link.png" alt="External link">
                <img :src="`/images/${project.slug}-final.png`" :alt="project.title">
            </a>
        </div>

    </section>
</template>

<script setup>

defineProps({
    index: String,
    projectLink: String,
    projectGithub: String,
    project: Object,
})

</script>

<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

section .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-inline: 5rem;
    padding-block: 3rem;
    border-right: 1px solid var(--background-grid);
}

section .content-container h2 {
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--text);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--background-grid);
}

section .content-container p {
    position: relative;
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 1.75em;
}

section .content-container p:not(.usage-warning) {
    padding-bottom: 3rem;
}


section .content-container p:not(.usage-warning)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -5rem;
    width: calc(100% + 5rem + 5rem);
    height: 1px;
    background: var(--background-grid);
}

section .image-container {
    display: grid;
    place-items: center;
    margin: 2rem;
    border: 1px solid var(--background-grid);

    padding: 3rem;
    margin: 2rem;
    background-color: var(--backdrop-200);
    background-image:
        radial-gradient(circle, var(--backdrop-200), transparent),
        linear-gradient(0deg, transparent, var(--backdrop-200)), repeating-linear-gradient(90deg, transparent, transparent 20px, var(--background-solid) 20px, var(--background-solid) 21px), repeating-linear-gradient(0deg, transparent, transparent 20px, var(--background-solid) 20px, var(--background-solid) 21px);
}

section .image-container a {
    position: relative;
    --timing-function: linear(0, 0.002 0.3%, 0.01 0.7%, 0.02 1%, 0.038 1.4%, 0.09 2.2%, 0.158 3%, 0.316 4.5%, 0.651 7.3%, 0.787 8.5%, 0.909 9.7%, 1.013 10.9%, 1.096 12.1%, 1.129 12.7%, 1.158 13.3%, 1.181 13.9%, 1.199 14.5%, 1.213 15.1%, 1.223 15.8%, 1.227 16.5%, 1.227 17.2%, 1.221 18%, 1.21 18.8%, 1.194 19.7%, 1.173 20.6%, 1.055 25%, 1.027 26.2%, 1.004 27.3%, 0.982 28.6%, 0.966 29.9%, 0.955 31.2%, 0.949 32.5%, 0.948 34%, 0.952 35.6%, 0.961 37.4%, 0.987 41.8%, 0.999 44%, 1.007 46.5%, 1.011 49%, 1.011 52.4%, 1 60.6%, 0.997 65.4%, 1.001 81.7%, 1);
    scale: 1;
    transition: scale 1s var(--timing-function);
}

section .image-container a .external-link-indicator {
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 2rem;
    width: 2rem;
    padding: .5rem;
    background: var(--backdrop-200);
    border: 2px solid var(--border-400);
    border-radius: 5px;
    corner-shape: bevel;
    z-index: 10;
}

section .image-container a img:not(.external-link-indicator) {
    border-radius: 15px;
    corner-shape: bevel;
    filter: drop-shadow(0 0 10px #0000002c);
}

section .image-container a:hover {
    scale: 1.05;
}

section .project-navigation {
    padding-top: 2rem;
    display: grid;
    gap: .5rem;
}

section .project-navigation a {
    position: relative;
    width: max-content;
    font-family: 'poppins', sans-serif;
    color: var(--border-400);
    font-size: var(--small-size);
    font-weight: 400;
    line-height: 1.75em;
    padding-right: 1.5rem;
}

section .project-navigation a::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    height: var(--small-size);
    width: var(--small-size);
    background: url('/images/external-link.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
}


section .project-navigation a::before {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 2px;
    width: 0%;
    background: var(--border-400);
    transition: width .3s ease;
}

section .project-navigation a:hover::before {
    width: 100%;
}

@media (width < 900px) {
    section {
        grid-template-columns: 1fr;
    }

    section .content-container {
        border-bottom: 1px solid var(--background-grid);
    }
}

@media (width < 700px) {

    section .content-container {
        padding-inline: 2rem;
        padding-block: 3rem;
        border-right: none;
    }

    section .content-container p::after {
        left: -2rem !important;
        width: calc(100% + 2rem + 2rem) !important;
    }
}

.usage-warning {
    position: relative;
    display: none;
    padding: 1.5rem;
    background-color: #bc5c594f;
    color: #9d0e09;
    border: 3px solid #9d0e09;
    border-radius: 10px;
    corner-shape: bevel;
    padding-left: 4rem;
    margin-bottom: 1rem;
}

.usage-warning::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1rem;
    translate: 0 -50%;
    height: 2rem;
    width: 2rem;
    background: url('/images/warning.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
}

.warning .usage-warning {
    display: block;
}







/* .label {
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
    color: var(--background-grid);
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
} */
</style>