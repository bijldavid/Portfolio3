<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-cssCat">
        </div>
        <div class="container vertical-lines">

            <Breadcrumbs>
                <NuxtLink to="/" viewTransition>Home</NuxtLink>
                <NuxtLink :to="`/projects#${project.slug}`" viewTransition>Projects</NuxtLink>
                <NuxtLink :to="route.path" viewTransition>
                    {{ project.title }}
                </NuxtLink>
            </Breadcrumbs>

            <ProjectLayoutTitle :project="project" />

            <ProjectLayoutColumns>
                <template #title>Briefing</template>

                <ProjectLayoutColumnItem>
                    <p>
                        CSS to the Rescue was all about experimenting with CSS and pushing it further than we normally
                        would. The goal
                        was not to create a perfectly polished, browser-safe product, but to discover what CSS can do
                        when you really
                        start playing with it.
                    </p>
                    <p>
                        For this project, we had to create an interactive one-page experiment based around a modular
                        control panel. The
                        panel had to control something on the page, give clear feedback, and use form elements in a more
                        creative way.
                    </p>
                    <p>
                        So instead of just styling buttons and sliders, the challenge was to turn CSS into the main tool
                        for both the
                        visuals and the interaction.
                    </p>
                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        For this project, I wanted to go all in on CSS, because it is one of my favourite parts of
                        front-end
                        development. I found out that CSS has a 3D workflow using properties like <code
                            class="snippet">perspective</code> and
                        <code class="snippet">transform-style: preserve-3d</code>, and I was immediately curious to
                        explore that.
                    </p>
                    <p>
                        Since 3D CSS works really well with cube-like shapes, I quickly thought of Minecraft. That is
                        how I ended up
                        with the idea of creating a 3D Minecraft cat that could be controlled through a custom control
                        panel.
                    </p>
                    <p>
                        The goal was to make something playful and technical at the same time: a small CSS-built
                        character that
                        users could interact with through sliders and buttons.
                    </p>
                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
            <!-- PROJECT BANNER  -->
            <!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
            <ProjectLayoutBanner :project="project" />

            <ProjectLayoutColumns>
                <template #title>Process</template>

                <ProjectLayoutColumnItem index="01">
                    <p>
                        I started by sketching the interface and figuring out what the control panel could actually
                        control. My
                        first idea was to build a 3D cat and connect it to a few different actions, like jumping,
                        walking, waving
                        and rotating the camera around the scene.
                    </p>
                    <p>
                        Before building the full cat, I first experimented with creating a simple 3D cube in CSS. This
                        helped me
                        understand how the different sides of a cube could be positioned with <code
                            class="snippet">rotate</code>,
                        <code class="snippet">translate</code> and
                        <code class="snippet">transform-origin</code>.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
div {
  position: absolute;
  width: 10em;
  aspect-ratio: 1;
  opacity: 0.5;
}

.bottom {
  background-color: #4a1010;
  rotate: x 90deg;
  transform-origin: bottom center;
}

.right {
  background: #942626;
  translate: 5em 0 -5em;
  rotate: y 90deg;
  transform-origin: center center;
}

.left {
  background-color: #790c0c;
  translate: -5em 0 -5em;
  rotate: y 90deg;
  transform-origin: center center;
}

.top {
  background-color: #b56262;
  rotate: x -90deg;
  transform-origin: top center;
}
`" />

                    <video class="project-media" autoplay loop muted playsinline>
                        <source src="/images/cube-alpha.mov" type="video/quicktime; codecs=hvc1">
                        <source src="/images/cube.webm" type="video/webm; codecs=vp9">
                    </video>

                </ProjectLayoutColumnItem>


                <ProjectLayoutColumnItem index="02">
                    <p>
                        After that, I started building the Minecraft cat itself. I began with the head, using one large
                        cube for the
                        main shape, a smaller cube for the nose and two small cubes for the ears. It took a lot of
                        experimenting,
                        but once I understood the 3D logic better, the rest of the cat became easier to build.
                    </p>
                    <p>
                        At first, I wrote a lot of fixed values manually. Later, I rebuilt parts of the cat using custom
                        properties,
                        so the dimensions could be adjusted more easily. This also made the code feel more modular,
                        which fit the
                        assignment better.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
/* default dimensions */
--torso-x: calc(var(--cat-x) * 4);
--torso-y: calc(var(--cat-y) * 6);
--torso-z: calc(var(--cat-z) * 16);
`" />
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        A big part of the process was creating the Minecraft texture. The cat was made up of many
                        <code class="snippet">linear-gradient()</code>
                        backgrounds, which was time-consuming, but it helped create the pixel-art look.
                    </p>
                    <p>
                        While working on this, I also learned more about custom HTML tags, HEX alpha values, 3D
                        positioning and
                        pixel art with gradients.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        Once the cat was fully built and textured, I started connecting it to the control panel. I used
                        sliders to
                        update CSS custom properties, with a small piece of JavaScript copied from an example. The main
                        focus for me
                        was understanding how the sliders could influence the CSS and change the cat visually.
                    </p>
                    <p>
                        I also used CSS selectors like <code class="snippet">:has()</code> to create an expandable
                        interface for the
                        control panel.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
/* code for the collapsible menu */
section:has(> div > input:checked) form {
    display: block;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
`" />
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="05">
                    <p>
                        Near the end of the project, I connected one slider to both the walking animation and the
                        vertical position
                        of the cat. This was trickier than expected, because the leg animation depended on
                        <code class="snippet">animation-delay</code>, which
                        needed a negative value.
                    </p>
                    <p>
                        My slider did not naturally give me the value I needed, so I had to use a small calculation to
                        make it work.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
/* final solution */
--walk-progress: calc((var(--unitless-walk) + 5) / 10);
--walk-s: calc(var(--walk-progress) * -2s);
`" />

                    <video class="project-media" autoplay loop muted playsinline>
                        <source src="/images/css-cat-alpha.mov" type="video/quicktime; codecs=hvc1">
                        <source src="/images/css-cat.webm" type="video/webm; codecs=vp9">
                    </video>

                </ProjectLayoutColumnItem>


                <ProjectLayoutColumnItem index="06">
                    <p>
                        I also made the cat’s fur colour adjustable using Modes and style queries. As an extra
                        experiment, I tried
                        creating a curved slider based on a CodePen example, but that part did not make it into the
                        final version.
                        While implementing it, the slider thumb disappeared, so I left it as a failed but useful
                        experiment.
                    </p>
                    <p>
                        To finish the project, I added a Minecraft-inspired name tag as the title of the page, because
                        in Minecraft
                        you can name your pets. This gave the final page a bit more personality and made the concept
                        feel more
                        complete.
                    </p>
                </ProjectLayoutColumnItem>


            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>
                    Final Result</template>
                <template #content>
                    The final result was a playful and interactive CSS experiment that showcased the possibilities of
                    CSS in a fun way. It was rewarding to see how the different parts of the project came together,
                    from the 3D cat to the control panel, and how users could interact with it. This project was a great
                    opportunity to push my CSS skills and explore new techniques, and I enjoyed the process of creating
                    something unique and engaging with just code.
                </template>
            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>

        </div>
    </main>
</template>

<script setup>
import { cssCatProject as project } from '~/data/projects'

const route = useRoute()
</script>


<style scoped>
.banner {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--backdrop-200);
    background-image: linear-gradient(var(--backdrop-200) 30%, transparent),
        url('/images/repeating-grid.webp');
    background-repeat: repeat no-repeat;
    background-size: 500px;
    border-bottom: 1px solid var(--background-grid);
}

.banner img {
    height: 50%;
}

.container::before,
.container::after {
    z-index: 10;
}

.container .project-media {
    border-radius: 10px;
    corner-shape: bevel;
    overflow: hidden;
    margin-block: 1rem;
}

:deep(.image-container) {
    padding: 5rem !important;
}

:deep(.image-container a img:not(.external-link-indicator)) {
    padding: 3rem !important;
}

@media (width < 700px) {

    :deep(.image-container) {
        padding: 2rem !important;
    }

    :deep(.image-container a img:not(.external-link-indicator)) {
        padding: 2rem !important;
    }
}
</style>