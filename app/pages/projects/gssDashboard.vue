<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-gssDashboard">
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
                        Grid Support Solutions is a software development company in the energy sector, focused on
                        reducing grid
                        congestion. Their software collects data from connected energy assets, such as solar panels,
                        heat pumps and
                        charging stations.
                    </p>
                    <p>
                        My task was to design and build a dynamic visualisation that represents these assets and shows
                        how electricity
                        moves between them. The interface needed to be visually appealing, easy to understand and
                        flexible enough to
                        respond to different levels of energy usage.
                    </p>
                    <p>
                        When the energy flow is high, more dots move quickly through the cables. When the flow is low,
                        fewer dots move
                        at a slower pace. This allows users to understand the current energy activity without needing to
                        interpret
                        complex numerical data.
                    </p>
                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        Before designing the interface, I researched dashboards and energy management platforms from
                        other
                        companies. I wanted to understand how they visualised complex energy systems and how they made
                        technical
                        information easier to interpret.
                    </p>
                    <p>
                        From this research, I learned that energy dashboards benefit from a clear hierarchy,
                        recognisable assets and
                        a visual structure that immediately shows how different elements are connected.
                    </p>
                    <p>
                        I combined these findings with the existing Grid Support Solutions brand colours and developed a
                        visual
                        identity for the interface. The result was a dark, technical environment with isometric
                        illustrations and
                        bright energy lines that stand out clearly against the background.
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
                        I started by researching competitor dashboards and other energy management interfaces.
                    </p>
                    <p>
                        While the products differed visually, most of them used similar principles. Important energy
                        information was
                        placed prominently, connected assets were clearly separated and colour was used to communicate
                        activity or
                        status.
                    </p>
                    <p>
                        I applied these findings by keeping the layout focused, limiting unnecessary interface elements
                        and making
                        the movement of electricity the main visual feature.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        The next phase was designing the layout.
                    </p>
                    <p>
                        I wanted the user’s house to be the central focal point, with the other connected energy assets
                        positioned
                        around it. This made the system feel more personal and helped users understand how each asset
                        relates to
                        their home.
                    </p>
                    <p>
                        The visual identity became an isometric scene using the primary Grid Support Solutions colours
                        in a
                        dark-mode environment. This gave the interface a technical appearance while keeping the
                        different assets
                        easy to recognise.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        Once the visual direction was established, I created the assets needed for the scene:
                    </p>
                    <ul role="list">
                        <li>The house</li>
                        <li>A heat pump</li>
                        <li>Solar panels</li>
                        <li>A substation</li>
                        <li>A charging station</li>
                        <li>An electric car</li>
                    </ul>
                    <p>
                        I began with several existing assets and adjusted their shapes, line work and colours to fit the
                        Grid
                        Support Solutions identity. Other elements had to be created from scratch.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        Creating these assets taught me how to build isometric illustrations in Adobe Illustrator.
                    </p>
                    <p>
                        I first designed each vector from a flat perspective. I then used a combination of scaling,
                        shearing and
                        rotation to transform it into the correct isometric angle:
                    </p>
                    <ul>
                        <li> <code class="snippet">Object > Transform > Scale Vertical: 86.602%</code></li>
                        <li> <code class="snippet">Object > Transform > Shear Angle: -30°</code></li>
                        <li> <code class="snippet">Object > Transform > Rotate Angle: 30°</code></li>
                    </ul>

                    <p>Using the same transformation for every asset ensured that all elements shared a consistent
                        perspective and
                        could be combined into one scene.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="05">
                    <p>
                        After preparing the visual assets, I started building the interface with code.
                    </p>
                    <p>
                        The most important technical challenge was creating cables between the different energy assets
                        and
                        visualising electricity moving through them.
                    </p>

                    <p>
                        My first idea was to use SVG paths. SVG worked well for this because the paths could follow the
                        exact layout
                        of the illustration, scale without losing quality and be styled and animated directly with CSS.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="06">
                    <p>
                        To create the electricity flow, I placed a second SVG path on top of each cable.
                    </p>

                    <p>
                        By using <code class="snippet">stroke-dasharray</code>, I turned the line into a series of
                        rounded dots. I
                        then animated
                        <code class="snippet">stroke-dashoffset</code>, which moves the dash pattern along the path and
                        creates the
                        appearance of
                        electricity
                        flowing through the cable.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
.flow {
    stroke: var(--current);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 0 var(--flow-spacing);
    animation: flow var(--flow-speed) linear infinite;
}

@keyframes flow {
    to {
        stroke-dashoffset: calc(var(--flow-spacing) * -1px);
    }
}
`" />

                    <p>
                        The speed and density of the dots can be connected to the live energy data. A higher energy flow
                        results in
                        faster movement and more visible dots, while a lower flow creates a slower and less active
                        animation.
                    </p>
                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>
                    Final Result</template>
                <template #content>
                    The final result was a dynamic isometric energy visualisation that shows how electricity moves
                    between a house and its connected energy assets. The project combined visual design, illustration
                    and front-end development, while translating complex energy data into an interface that is easier
                    and more engaging to understand.
                </template>
            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>

        </div>
    </main>
</template>

<script setup>
import { gssDashboardProject as project } from '~/data/projects'

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

.container::before,
.container::after {
    z-index: 10;
}

.container .project-media {
    padding-left: calc(30px + 3rem);
}

:deep(.image-container) {
    background-color: #002D27;
    background-image: url('/images/gss-pattern.png');
}

@media (width < 700px) {
    .container .project-media {
        padding-left: 0;
    }
}
</style>