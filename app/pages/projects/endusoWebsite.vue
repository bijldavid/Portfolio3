<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-endusoWebsite">
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
                        Enduso helps organisations manage complex energy challenges by connecting installations, data
                        and energy
                        processes into one integrated system. Its solutions are designed to reduce grid congestion,
                        improve operational
                        reliability and make better use of the available energy capacity.
                    </p>

                    <p>
                        Enduso needed a professional website that clearly communicated its services, experience and
                        approach. My task
                        was to design and develop the website using the existing logo and brand colours as the
                        foundation.
                    </p>

                    <p>
                        The website needed to make a technical subject accessible, establish a recognisable visual
                        identity and provide
                        enough flexibility to present suppliers, completed projects and future company content.
                    </p>

                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        At the start of the project, the only established brand elements were the Enduso logo and its
                        four brand
                        colours. I therefore used these elements as the foundation for the entire visual language.
                    </p>

                    <p>
                        The logo contains a sequence of vertical bars, which became a recurring graphic element
                        throughout the
                        website. I reused their shapes and colours in the hero section, backgrounds and smaller
                        interface details to
                        make the design feel recognisable and consistent.
                    </p>

                    <p>
                        My goal was to create a website that felt technical and professional without becoming too
                        corporate or
                        static. I combined the colourful brand elements with strong typography, dark imagery and subtle
                        textures to
                        give the website more personality and movement.
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
                        I started by exploring how the existing logo and colour palette could be translated into a
                        complete digital
                        identity.
                    </p>

                    <p>
                        The coloured bars from the logo quickly became the central element of the design. I placed them
                        prominently
                        in the hero section and imagined them entering the page one after another when the website
                        loaded.
                    </p>

                    <p>
                        Although I was still working in the design phase, I kept this animation in mind while creating
                        the layout so
                        it could later be implemented without changing the entire composition.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        The hero section needed to make a strong first impression while remaining practical across
                        different screen
                        sizes.
                    </p>

                    <p>
                        I had to carefully control its height so the most important content would remain visible on
                        shorter laptop
                        screens. At the same time, the background imagery needed enough space to create impact without
                        pushing the
                        next section too far down the page.
                    </p>

                    <p>
                        To keep the text readable, I layered dark gradients over the imagery. I also added a subtle
                        dotted texture
                        to the background, which made the large empty areas feel more detailed and connected to the
                        technical
                        character of the company.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        Once the overall direction was established, I worked with Enduso to determine which information
                        needed to
                        appear on the website.
                    </p>

                    <p>
                        One of the main sections explains Enduso’s approach to system integration: connecting
                        installations, energy
                        flows, data and business processes into one reliable system.
                    </p>

                    <p>
                        The company also wanted to highlight its partner suppliers and previous projects. I added
                        dedicated sections
                        for both, making it easier for potential clients to understand the type of work Enduso does and
                        the parties
                        it collaborates with.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        To support the main company information, I added several sections that improve the credibility
                        and usability
                        of the website.
                    </p>

                    <p>
                        The benefits section communicates the most important advantages in a scannable format, while the
                        testimonials provide social proof through experiences from previous partners.
                    </p>

                    <p>
                        I also included an FAQ section to explain technical terms and answer common questions about
                        system
                        integration and grid congestion. This helped make the website more accessible to visitors who
                        may not
                        already be familiar with the energy sector.
                    </p>

                    <p>
                        Throughout every section, I repeatedly used the four brand colours in borders, bars, labels and
                        smaller
                        graphic elements. This created consistency without making the page feel overly colourful.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="05">
                    <p>
                        One interaction I particularly enjoyed creating was the testimonial card shuffle.
                    </p>

                    <p>
                        On smaller screens, the testimonial cards are stacked on top of one another instead of being
                        displayed side
                        by side. Users can move through the stack with a button, causing the visible card to change
                        while
                        maintaining the layered appearance.
                    </p>

                    <p>
                        This made the mobile version feel more playful and interactive while using the limited screen
                        space
                        efficiently.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="06">
                    <p>
                        I also paid close attention to the interaction design of the project carousel.
                    </p>

                    <p>
                        The navigation buttons include separate default, hover, active and disabled states. When users
                        reach the
                        beginning or end of the carousel, the corresponding button becomes disabled.
                    </p>

                    <p>
                        In the disabled state, the button receives a <code
                            class="snippet">filter: grayscale(100%);</code>, the
                        cursor changes to <code class="snippet">not-allowed</code>
                        and its
                        hover and active effects are removed. These details make it immediately clear when no further
                        navigation is
                        possible.
                    </p>

                    <ProjectLayoutCodeBlock lang="css" :code="`
#projects .container .carousel .navigation button:disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
}

#projects .container .carousel .navigation:has(button.left:disabled) {
    background: linear-gradient(90deg, #d1dae9 50%, var(--pastel-blue) 50%);
}

#projects .container .carousel .navigation:has(button.right:disabled) {
    background: linear-gradient(90deg, var(--pastel-blue) 50%, #d1dae9 50%);
}

#projects .container .carousel .navigation:not(:has(button.left:disabled)) button.left:hover::before,
#projects .container .carousel .navigation:not(:has(button.right:disabled)) button.right:hover::before {
    content: '';
    position: absolute;
    inset: 7.5px;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 5px;
}

#projects .container .carousel .navigation:not(:has(button.right:disabled)) button.right:active,
#projects .container .carousel .navigation:not(:has(button.left:disabled)) button.left:active {
    translate: 0 2px;
}
`" />

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="06">
                    <p>
                        Once the design was complete, I developed the website and made the entire layout responsive.
                    </p>

                    <p>
                        The coloured bars in the hero section animate into the page in sequence, bringing the original
                        design
                        concept to life and introducing the visual identity as soon as the website loads.
                    </p>

                    <p>
                        I tested the layout across mobile, tablet, laptop and widescreen dimensions. Sections, card
                        layouts and
                        typography adapt to the available space while retaining the same visual hierarchy and brand
                        identity.
                    </p>

                </ProjectLayoutColumnItem>


            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    The final result was a fully responsive company website that gives Enduso a clear and recognisable
                    digital identity. The project combines brand-driven visual design with detailed interactions,
                    responsive components and subtle animation, while presenting a complex technical service in an
                    accessible and professional way.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { endusoWebsiteProject as project } from '~/data/projects'

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

:deep(.image-container) {
    background-color: #002D27;
    background-image: url('/images/enduso-pattern.png');
}

@media (width < 700px) {
    .container .project-media {
        padding-left: 0;
    }
}
</style>