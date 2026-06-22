<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-cerulean">
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
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        Cerulean is a YouTube channel I started around six years ago, focused on Team Fortress 2
                        gameplay. I began by
                        uploading a few videos of me playing the game, it's a pretty old first person shooter that I've
                        played for most
                        of my life.
                    </p>

                    <p>
                        My first video performed surprisingly well, which motivated me to keep going. What started as a
                        small experiment
                        slowly became a project where I could combine gaming, and video editing.
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
                        As I made more videos, I became more interested in improving the overall quality of the channel.
                        Before I had access to Adobe software, I used free editing programs. It's what got me started
                        but ultimately
                        limited the quality of my videos. Once I had acces to Premiere I really began stepping up the
                        editing, and
                        the channel started to grow more rapidly.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        Over time, I started using After Effects more often. These days, Premiere is mainly where I
                        build the
                        timeline and handle the sound design, while After Effects is where I create most of the visual
                        effects,
                        edits and more stylised moments.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        Working on gaming videos has been a outlet to express my creativity. It also helped me become
                        more
                        comfortable with video software in a practical way,
                        because
                        every
                        upload gave me a new reason to experiment and improve.
                    </p>
                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    At the time of writing, Cerulean has reached 12K subscribers, 1.1M views and 19 uploaded videos.
                    What started as a small TF2 channel became a long-term creative project where I could develop my
                    skills in editing, motion design and online content creation.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { ceruleanProject as project } from '~/data/projects'

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

:deep(.project-navigation a:last-of-type) {
    display: none;
}
</style>