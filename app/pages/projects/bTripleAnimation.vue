<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-bTripleAnimation">
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
                        The B-triple is an electrical device designed to reduce grid congestion by dynamically
                        connecting nearby
                        electricity cables and allowing them to share available capacity.
                    </p>

                    <p>
                        Grid congestion is becoming an increasingly serious problem as the demand for electricity
                        continues to grow.
                        When parts of the grid reach their maximum capacity, new homes and businesses may not be able to
                        receive the
                        connection or additional power they require.
                    </p>

                    <p>
                        Because the B-triple is a complex system with several different functions, Grid Support
                        Solutions needed an
                        informative animation that could explain both the problem and the solution in a simple and
                        accessible way.
                    </p>

                    <p>
                        Together with the GSS team, I developed the script and storyboard. My task was to translate them
                        into a complete
                        motion-design video using Adobe After Effects.
                    </p>

                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        The main challenge was explaining a complicated electrical system to viewers who may have little
                        knowledge
                        of energy infrastructure.
                    </p>

                    <p>
                        Instead of starting with technical diagrams, we chose to introduce the subject through a
                        practical example.
                        The animation shows a simplified electricity grid with homes and industrial consumers connected
                        to a
                        transformer.
                    </p>

                    <p>
                        Animated dots represent the electricity moving through the cables, making it possible to show
                        how the load
                        increases, when a cable reaches its maximum capacity and how grid congestion develops.
                    </p>

                    <p>
                        From there, the animation gradually moves into a more schematic visual style to explain the
                        B-triple in
                        greater detail.
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
                        The first part of the video introduces the growing demand for electricity and explains the basic
                        problem of
                        grid congestion.
                    </p>

                    <p>
                        A transformer supplies several consumers through one cable. As more users are connected, the
                        cable has to
                        transport an increasing amount of current. Eventually, the cable reaches its safe capacity and
                        begins to
                        overheat.
                    </p>

                    <p>
                        Using a simple grid and animated energy dots made the problem easier to understand before
                        introducing the
                        more technical parts of the solution.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        The second part introduces the main function of the B-triple.
                    </p>

                    <p>
                        Because electricity grids are interconnected, another nearby cable may still have capacity
                        available. The
                        B-triple creates a controlled bridge between two cables and dynamically transfers power based on
                        the demand
                        on each line.
                    </p>

                    <p>
                        The animation shows the direction of this energy transfer changing when the demand shifts. It
                        also
                        introduces the battery system, which can provide temporary support when both cables are
                        operating at their
                        maximum capacity.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        The third part explains several additional functions of the B-triple through animated diagrams
                        and
                        waveforms.
                    </p>

                    <p>
                        These include filtering harmonic distortion, correcting phase shifts, connecting cables with
                        different
                        electrical conditions, balancing current across three phases and supporting a cable during an
                        outage.
                    </p>

                    <p>
                        Instead of explaining each subject only through narration, I used movement to show the
                        difference between an
                        unstable or distorted system and the cleaner, balanced output created by the B-triple.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        The final part returns to the wider message behind the product.
                    </p>

                    <p>
                        The demand for electricity continues to grow, while replacing and expanding the physical grid is
                        expensive
                        and time-consuming. The B-triple is presented as a way to make better use of the infrastructure
                        that already
                        exists.
                    </p>

                    <p>
                        The closing sequence focuses on innovation, cooperation and the role new energy solutions can
                        play in
                        creating a more sustainable future.
                    </p>

                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    The final result was an informative motion-design video that explains grid congestion and the
                    B-triple through a clear visual story. The project taught me how timing, animation and visual
                    hierarchy can make complex technical information easier to understand, while also introducing motion
                    design as a new creative interest.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { bTripleAnimationProject as project } from '~/data/projects'

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

:deep(.project-navigation a:last-of-type) {
    display: none;
}

@media (width < 700px) {
    .container .project-media {
        padding-left: 0;
    }
}
</style>