<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-gssWebsite">
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
                        congestion through smart, tailored energy solutions.
                    </p>

                    <p>
                        Before my internship, GSS had mostly operated behind the scenes. The company had no established
                        online presence
                        and only a limited visual identity. With my background in design and front-end development, my
                        first assignment
                        was to create a recognisable brand identity and translate it into a complete company website.
                    </p>

                    <p>
                        The website needed to explain a complex technical service in an accessible way, introduce the
                        company to
                        potential clients and create a professional foundation for its future communication.
                    </p>

                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        Creating the website involved more than simply designing a collection of pages. Normally, a
                        project like
                        this would begin with an established brand guide, a clear content structure, defined target
                        audiences and
                        existing visual materials.
                    </p>

                    <p>
                        GSS only had a basic colour direction, which gave me a lot of freedom to shape the brand from
                        the ground up.
                    </p>

                    <p>
                        I had to determine how the company should present itself, organise the available information,
                        establish a
                        visual hierarchy and create a design system that could be reused throughout the website. This
                        made the
                        project a combination of branding, content strategy, web design and front-end development.
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
                        The first step was gathering all the available information and discussing what the website
                        needed to
                        communicate.
                    </p>

                    <p>
                        Together, we determined which services should be featured, what story the company wanted to tell
                        and which
                        audiences the website needed to reach. An important challenge was presenting technical subjects
                        such as grid
                        congestion and energy management in a way that business owners could understand without
                        requiring specialist
                        knowledge.
                    </p>

                    <p>
                        Based on these conversations, I created the initial content structure and decided which
                        information needed
                        the most emphasis.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        I then translated the content into a page layout.
                    </p>

                    <p>
                        The structure needed to guide users from the general energy problem towards the solution offered
                        by GSS. The
                        website therefore introduces the challenge of grid congestion, explains the Energy Management
                        System and
                        shows how GSS approaches a project from analysis to implementation.
                    </p>

                    <p>
                        After several design versions and feedback rounds, the main sections and content blocks were in
                        place. The
                        next step was creating a visual identity that could bring the structure to life.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        Green became the main colour within the new identity because of its strong connection to energy,
                        sustainability and growth.
                    </p>

                    <p>
                        The colour helped communicate that GSS works towards smarter and more future-proof energy
                        systems. At the
                        same time, I wanted to avoid making the design feel overly environmental or generic, so I
                        combined the green
                        tones with dark neutrals and lighter supporting colours.
                    </p>

                    <p>
                        This created a balanced palette that felt both technical and approachable.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        Once the colour palette was established, I developed a recurring visual language for the
                        website. </p>

                    <p>
                        I chose to work with isometric shapes and illustrations. Their geometric appearance suited the
                        technical
                        nature of the company and made it possible to visually represent connected systems,
                        infrastructure and
                        energy flows.
                    </p>

                    <p>
                        The isometric style appears throughout the website, including the hero section and the icons
                        accompanying
                        the main benefits. Reusing the same perspective and line style helped create consistency across
                        the
                        different sections.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="05">
                    <p>
                        With the design completed, I started developing the website in Vue.
                    </p>

                    <p>
                        I divided repeated interface elements into reusable components, which made the project easier to
                        organise
                        and maintain. This was especially useful for elements such as buttons, content sections, icons
                        and repeated
                        layout patterns.
                    </p>

                    <p>
                        Working with components also made it easier to update the visual system consistently while the
                        design
                        continued to develop.
                    </p>

                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="06">
                    <p>
                        One of the main development challenges was making the website responsive across a wide range of
                        screen
                        sizes.
                    </p>

                    <p>
                        I worked mobile-first, starting with the smallest layout and gradually adding more complex
                        arrangements for
                        larger screens. This helped keep the content readable and prevented the design from relying too
                        heavily on
                        desktop dimensions.
                    </p>

                    <p>
                        I also tested the website on widescreen monitors at the office. This was important because
                        layouts that work
                        well on a standard laptop can feel too stretched or empty on larger displays. By setting
                        sensible maximum
                        widths and adjusting spacing, I made sure the design remained balanced across both small and
                        very large
                        screens.
                    </p>

                </ProjectLayoutColumnItem>


            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    The final result was a complete brand identity and responsive company website for Grid Support
                    Solutions. The project gave GSS its first professional online presence and created a visual system
                    that could be reused across future communication. It brought together branding, interface design and
                    front-end development while making a complex technical service easier to understand.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { gssWebsiteProject as project } from '~/data/projects'

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