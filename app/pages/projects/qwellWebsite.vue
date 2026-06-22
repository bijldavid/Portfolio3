<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-qwellWebsite">
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
                        Qwell is a premium energy storage brand focused on high-capacity battery systems for commercial
                        and industrial
                        use. Its products are designed for organisations that need reliable, large-scale energy storage
                        and are
                        positioned as a high-end alternative within the battery market.
                    </p>

                    <p>
                        The company was still in an early concept phase and did not yet have a fully established
                        identity. My task was
                        to rebuild the existing brand direction and translate it into a more refined, premium and
                        recognisable visual
                        style.
                    </p>

                    <p>
                        The project included both the design and development of an initial website that could serve as a
                        foundation for
                        the brand as it continues to grow.
                    </p>

                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        Because Qwell was still at an early stage, the project gave me a lot of freedom to shape how the
                        brand
                        should look and feel.
                    </p>

                    <p>
                        The existing identity already contained several recognisable elements, including the logo and
                        green colour
                        palette, but the overall appearance did not yet communicate the premium positioning of the
                        products.
                    </p>

                    <p>
                        My goal was therefore to retain the core identity while creating a more sophisticated digital
                        experience. I
                        focused on a restrained visual language, dark neutral tones, strong product imagery and subtle
                        graphic
                        details that made the website feel more technical and high-end.
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
                        I started by analysing the existing Qwell brand elements and deciding which parts should remain
                        recognisable.
                    </p>

                    <p>
                        The green brand colours and elements from the logo formed the basis of the new direction.
                        Instead of using
                        these colours across large areas, I used them more selectively as accents in buttons, borders
                        and smaller
                        interface elements.
                    </p>

                    <p>
                        For the backgrounds, I introduced darker neutral tones. This created more contrast and gave the
                        bright
                        greens and product imagery more visual impact.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        The first part of the website I designed was the hero section.
                    </p>

                    <p>
                        The hero needed to introduce the brand quickly and communicate that Qwell offers premium,
                        high-capacity
                        energy storage products. I combined a large headline with supporting text, clear calls to action
                        and a short
                        list of unique selling points.
                    </p>

                    <p>
                        This created a strong opening section while keeping the layout focused and easy to scan.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        The next section introduced the main Qwell product.
                    </p>

                    <p>
                        Because there was limited existing product material available, I used Blender to create a 3D
                        render of the
                        battery container. I also modelled several smaller products that could represent the wider Qwell
                        range.
                    </p>

                    <p>
                        This gave me the opportunity to practise 3D modelling again and work with UV unwrapping. I used
                        the UV map
                        to apply the Qwell logo and branding directly to the surface of the models, which made the
                        renders feel like
                        believable branded products.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        One of the visual techniques I explored was creating gradient borders with CSS.
                    </p>

                    <p>
                        Instead of using a standard solid border, I created a transparent border layer with a gradient
                        background.
                        By combining <code class="snippet">background</code>, <code class="snippet">mask</code> and
                        different box
                        areas, only the border remained visible.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
&::after {
    content:'';
    position:absolute;
    inset:0;
    
    border-radius: inherit;
    border: .2em solid transparent;
    background: linear-gradient(45deg,red,blue) border-box;
    mask:
        linear-gradient(#000 0 0) padding-box, 
        linear-gradient(#000 0 0) border-box;
    mask-composite: exclude;
}
`" />

                    <p>
                        This created the glass-like gradient outline used throughout the website and helped give the
                        interface a
                        more polished and contemporary appearance.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="05">
                    <p>
                        The rest of the website was intentionally kept relatively simple.
                    </p>

                    <p>
                        Because Qwell was still in a conceptual phase, there was not yet enough final content to build a
                        complete
                        company website. I therefore focused on establishing the core visual system, product
                        presentation and
                        overall direction.
                    </p>

                    <p>
                        The result serves as a strong first foundation that can later be expanded with more product
                        information,
                        case studies and technical specifications.
                    </p>

                </ProjectLayoutColumnItem>

            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion class="warning" :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    The final result was a premium website concept that gave Qwell a clearer and more established visual
                    identity. The project combined branding, web design, CSS experimentation and 3D product
                    visualisation, while creating a flexible foundation that can grow alongside the company.
                </template>

                <template #usage-warning>
                    <strong> Ongoing project:</strong> the website and content are still being developed.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { qwellWebsiteProject as project } from '~/data/projects'

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

.container .project-media {
    border-radius: 10px;
    corner-shape: bevel;
    overflow: hidden;
}
</style>