<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-delayFinder">
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
                        For this group project, we redesigned and developed the portfolio website of <strong>De Man met
                            de
                            Hamer</strong>, a company that
                        creates custom decor, props and interiors for theatre, television and events.
                    </p>

                    <p>
                        The existing website was outdated and no longer reflected the playful and creative character of
                        the company. Our
                        goal was to create a more modern and memorable digital experience that displayed the company’s
                        work while
                        capturing the personality behind it.
                    </p>

                    <p>
                        The website was divided between the members of our team. My responsibility was the design and
                        development of the
                        homepage and About page.
                    </p>
                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        De Man met de Hamer is not a traditional company, so a conventional portfolio website would not
                        have suited
                        the client.
                    </p>

                    <p>
                        During our visit to the workshop, we saw a space filled with unusual props, handmade decor and
                        visual
                        references. The client encouraged us to experiment and make the website playful, even when that
                        meant making
                        the experience less predictable than a standard company website.
                    </p>

                    <p>
                        For the homepage, I wanted users to feel as though they were entering a theatre and discovering
                        the
                        different parts of the website on a stage. For the About page, I took inspiration from the
                        physical planning
                        board in the workshop and translated it into a more organised but still personal digital layout.
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
                        We started by exploring different concepts for the homepage.
                    </p>

                    <p>
                        Because the company creates props and decor for performances, we quickly became interested in
                        using a
                        theatre stage as the central visual environment. We experimented with different styles,
                        including paper
                        cut-outs, textures and photographic compositions.
                    </p>

                    <p>
                        The final direction combined an actual theatre interior with a collection of playful props
                        placed across the
                        stage. Instead of simply scrolling through standard content blocks, users could explore the
                        scene and
                        interact with different objects.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        The theatre frame created an interesting responsive design challenge.
                    </p>

                    <p>
                        The homepage mainly consisted of visual assets with fixed proportions. Simply stretching the
                        theatre image
                        would distort it, while leaving it at a fixed size would create empty areas on wider screens.
                    </p>

                    <p>
                        To solve this, the theatre frame was divided into corner pieces and repeating background
                        elements. The
                        corners remained fixed while the repeating sections filled the available horizontal and vertical
                        space.
                        Gradients helped hide the transitions between the separate images.
                    </p>

                    <p>
                        The scene was also divided into multiple layers with different positions on the z-axis. Together
                        with the
                        position of the cursor, these layers created a subtle 3D perspective effect.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
.layer-1 { 
    translate: 0 0 16px; 
} 

.layer-2 { 
    translate: 0 0 12px; 
} 

.layer-3 { 
    translate: 0 0 5px; 
}
`" />
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        For the About page, I wanted to introduce the client and his team in a way that felt personal
                        but remained
                        clear and informative.
                    </p>

                    <p>
                        During our visit, one of the most recognisable elements in the workshop was a large planning
                        board covered
                        with labels, coloured strips, notes and magnets. I used this board as the visual inspiration for
                        the page.
                    </p>

                    <p>
                        The team members are displayed as if their photographs and labels have been attached to the
                        board using
                        pieces of tape, drawn markings and magnetic strips. This allowed the page to reference the real
                        workspace
                        while remaining consistent with the handmade character of the website.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        Alongside the team introduction, the About page includes a short description of the company and
                        an
                        integrated map showing the location of the workshop.
                    </p>

                    <p>
                        Compared with the homepage, this page was intentionally more restrained. The information needed
                        to remain
                        readable and easy to navigate, while the planning-board styling provided enough personality to
                        connect it to
                        the rest of the website.
                    </p>

                    <p>
                        I built the layout mobile-first and adjusted the grid, image sizes and content placement for
                        larger screens.
                        This ensured that the irregular visual style did not cause uneven or broken layouts on smaller
                        devices.
                    </p>

                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    The final result was a playful and experimental portfolio website that translated the personality of
                    De Man met de Hamer into a digital experience. My contribution focused on the interactive
                    theatre-style homepage and the planning-board-inspired About page, combining responsive design,
                    animation and visual storytelling to create something that felt personal to the client.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { manMDHamerProject as project } from '~/data/projects'

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
        url('/images/repeating-grid.png');
    background-repeat: repeat no-repeat;
    background-size: 500px;
    border-bottom: 1px solid var(--background-grid);
}

.banner img {
    height: 50%;
}

.container .project-media {
    padding-left: calc(30px + 3rem);
}

@media (width < 700px) {
    .container .project-media {
        padding-left: 0;
    }
}
</style>