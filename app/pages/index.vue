<template>
    <main class="index background">
        <ul>
            <li>
                <NuxtLink to="/projects" class="cover" viewTransition>
                    <Laptop class="pixelate" />
                </NuxtLink>
                <p class="label">Projects</p>

            </li>
            <li>
                <a class="cover" href="/files/David_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <Clipboard class="pixelate" />
                </a>

                <div class="label">
                    <p>Open CV</p>
                    <img src="/images/download.png" alt="">
                </div>
            </li>
            <li>
                <NuxtLink to="/about" class="cover" viewTransition>
                    <Photo class="pixelate" />
                </NuxtLink>

                <p class="label">About</p>
            </li>
        </ul>
    </main>



    <svg style="position: fixed;">
        <defs>
            <filter id="pixelate-mosaic" x="0%" y="0%" width="100%" height="100%">
                <feGaussianBlur stdDeviation="1" in="SourceGraphic" result="smoothed" />
                <feImage width="8" height="8"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC"
                    result="displacement-map" />
                <feTile in="displacement-map" result="pixelate-map" />
                <feDisplacementMap in="smoothed" in2="pixelate-map" xChannelSelector="R" yChannelSelector="G" scale="25"
                    result="pre-final" />
                <feComposite operator="in" in2="SourceGraphic" />
            </filter>

            <filter id="pixelate" x="0" y="0">
                <feFlood x="2" y="2" height="1" width="1" />
                <feComposite width="4" height="4" />
                <feTile result="a" />
                <feComposite in="SourceGraphic" in2="a" operator="in" />
                <feMorphology operator="dilate" radius="2" />
            </filter>
        </defs>
    </svg>

</template>

<script setup>
// definePageMeta({ layout: 'home' })
</script>



<style>
.index {
    min-height: 100vh;
    min-width: 100vw;
    perspective: 60em;
    perspective-origin: center center;
    overflow: hidden;
}

.pixelate {
    filter: url(#pixelate);
}

.firefox .pixelate {
    filter: none;
}

.index ul {
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2vw;
    max-width: 1300px;
    width: 100%;
    padding-inline: 4rem;
}

.index ul li {
    position: relative;
    container-type: size;
    aspect-ratio: 1;
}

.index ul li .label {
    --timing-function: linear(0, 0.036 0.9%, 0.142 1.9%, 0.97 7.3%, 1.117 9.1%, 1.155 10%, 1.175 11%, 1.175 12%, 1.157 13.2%, 1.001 19%, 0.979 20.6%, 0.969 22.4%, 1.005 33.8%, 0.999 45.2%, 1);
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 9999;
    isolation: isolate;

    display: flex;
    gap: 1rem;

    padding: 4cqw 16cqw;
    border-radius: 2.5cqw;
    corner-shape: bevel;
    background:
        linear-gradient(0deg, transparent 2.2cqw, var(--background-guideline) 2.2cqw, var(--background-guideline) 2.5cqw, transparent 2.5cqw, transparent calc(100% - 2.5cqw), var(--background-guideline) calc(100% - 2.5cqw), var(--background-guideline) calc(100% - 2.2cqw), transparent calc(100% - 2.2cqw)),
        linear-gradient(90deg, transparent 2.2cqw, var(--background-guideline) 2.2cqw, var(--background-guideline) 2.5cqw, transparent 2.5cqw, transparent calc(100% - 2.5cqw), var(--background-guideline) calc(100% - 2.5cqw), var(--background-guideline) calc(100% - 2.2cqw), transparent calc(100% - 2.2cqw)),
        linear-gradient(var(--backdrop-200));
    border: .66cqw solid var(--border-400);
    text-align: center;

    scale: .1;
    opacity: 0;
    translate: -50% 20cqw;
    transition: scale 1.7s var(--timing-function), opacity 1.7s var(--timing-function), translate 1.7s var(--timing-function);
    overflow: hidden;

    font-family: 'rm-mono', monospace;
    text-transform: uppercase;
    font-size: 4.66cqw;
    letter-spacing: 1cqw;
    color: var(--border-400);
    white-space: nowrap;
    pointer-events: none;
}

.index ul li .label img {
    height: 4.66cqw;
}

.index ul li .label::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 45%, #fff 45%, #fff 55%, transparent 55%);
    background-size: 150% 100%;
    animation: shine 2s linear infinite;
    opacity: .8;
    mix-blend-mode: overlay;
}

@keyframes shine {
    0% {
        background-position: 150% 0;
    }

    100% {
        background-position: -150% 0;
    }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* HOVER FX */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.index ul li .cover {
    display: block;
    height: 100%;
    width: 100%;
    translate: 0;
}

.index ul li .cover>* {
    transition: translate var(--hp-duration) var(--hp-timing-function);
}

.index ul li:nth-of-type(1) .cover:hover>* {
    translate: 0 -10cqw;
}

.index ul li:nth-of-type(2) .cover:hover>* {
    translate: 0 -20cqw;
}

.index ul li:nth-of-type(3) .cover:hover>* {
    translate: 0 -20cqw;
}

.index li:nth-of-type(1):hover .label {
    scale: 1;
    opacity: 1;
    translate: -50% -10cqw;
}

.index li:nth-of-type(2):hover .label {
    scale: 1;
    opacity: 1;
    translate: -50% -10cqw;
}

.index li:nth-of-type(3):hover .label {
    scale: 1;
    opacity: 1;
    translate: -50% -10cqw;
}


@media (width < 700px) {
    .index ul {
        display: flex;
        flex-direction: column;
        height: 80vh;
        gap: 4vh;
    }

    .index ul li {
        padding-inline: 2rem;
        height: 100%;
        aspect-ratio: unset;
    }

    .index ul li .label {
        display: none;
    }
}
</style>