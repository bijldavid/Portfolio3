<template>
    <main class="project">
        <div class="banner">
            <img :src="project.image" :alt="project.imageAlt" style="view-transition-name: project-image-delayFinder">
        </div>

        <div class="container vertical-lines">
            <Breadcrumbs>
                <NuxtLink to="/" viewTransition>Home</NuxtLink>
                <NuxtLink to="/projects" viewTransition>Projects</NuxtLink>
                <NuxtLink :to="route.path" viewTransition>
                    {{ project.title }}
                </NuxtLink>
            </Breadcrumbs>

            <ProjectLayoutTitle :project="project" />

            <ProjectLayoutColumns>
                <template #title>Briefing</template>

                <ProjectLayoutColumnItem>
                    <p>
                        This project was the final assignment of the Tech Track,
                        part of the Minor Information Design.
                    </p>

                    <p>
                        The goal was to design and develop a meaningful,
                        interactive data visualisation using external real-time
                        data. As part of the assignment, we were required to
                        build the project with Svelte and D3.
                    </p>

                    <p>
                        The project combined several technical skills. We had
                        to fetch, clean and transform data from an API, create
                        interactive D3 visualisations, structure the
                        application using Svelte components and apply animation
                        or storytelling to communicate the data clearly.
                    </p>

                    <p>
                        Alongside the visual result, the assignment focused on
                        writing maintainable code, debugging complex programs
                        and researching and documenting technical decisions.
                    </p>
                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutColumns>
                <template #title>Introduction</template>

                <ProjectLayoutColumnItem>
                    <p>
                        For this project, I wanted to work with data that was
                        connected to my own daily life. Because I regularly
                        travelled between Hoorn and Amsterdam by train, I became
                        interested in the reliability of the planned departure
                        and arrival times shown by NS.
                    </p>

                    <p>
                        This led to the idea for Delay Finder, an interactive
                        dashboard that visualises train delays on the route
                        between Hoorn and Amsterdam Centraal.
                    </p>

                    <p>
                        The goal was to collect my own dataset using the NS API
                        and use that data to show when delays occurred, how
                        large they were and how reliable the route had been
                        during the measured period.
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
                        I started by exploring different APIs and possible
                        subjects for the visualisation. My first ideas included
                        shared bicycle usage, public transport crowding and
                        train delays.
                    </p>

                    <p>
                        I eventually chose the NS API and formulated the
                        following question:
                    </p>

                    <p>
                        <strong>
                            How reliable are the planned departure and arrival
                            times between Hoorn and Amsterdam Centraal?
                        </strong>
                    </p>

                    <p>
                        Instead of only displaying current train information, I
                        wanted to collect data over a longer period. This meant
                        I had to create a system that regularly fetched data
                        from the API and stored the results in my own JSON
                        files.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="02">
                    <p>
                        To gather the data, I created four different API
                        requests:
                    </p>

                    <ul role="list">
                        <li>Departures from Hoorn</li>
                        <li>Arrivals in Amsterdam</li>
                        <li>Departures from Amsterdam</li>
                        <li>Arrivals in Hoorn</li>
                    </ul>

                    <p>
                        Each API response contained a large amount of
                        information that was not relevant to my visualisation.
                        I used JavaScript array methods such as
                        <code class="snippet">filter()</code> and
                        <code class="snippet">map()</code> to select the
                        correct trains and transform the responses into
                        smaller, more manageable objects.
                    </p>

                    <p>
                        For each train, I saved information such as:
                    </p>

                    <ProjectLayoutCodeBlock lang="javascript" :code="`
{
    trainNumber,
    plannedDepartureTime,
    actualDepartureTime,
    direction,
    isCancelled,
    loggedAt
}
`" />
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="03">
                    <p>
                        The transformed data was stored in JSON files. Before
                        adding new entries, I compared them with the existing
                        dataset to prevent duplicate trains from being saved.
                    </p>

                    <p>
                        When an entry did not exist yet, it was added to the
                        array. When the same train had already been logged, the
                        existing entry was updated with the newest information.
                    </p>

                    <ProjectLayoutCodeBlock lang="javascript" :code="`
const existingIndex = storedData.findIndex(item =>
    item.trainNumber === newItem.trainNumber &&
    item.plannedDepartureTime === newItem.plannedDepartureTime
);

if (existingIndex === -1) {
    storedData.push(newItem);
} else {
    storedData[existingIndex] = newItem;
}
`" />
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="04">
                    <p>
                        Once the data collection worked, I created the logic
                        for calculating the delays.
                    </p>

                    <p>
                        To calculate the delay of a complete journey from Hoorn
                        to Amsterdam, I had to connect the departure data from
                        Hoorn to the corresponding arrival data in Amsterdam.
                    </p>

                    <p>
                        A train number alone was not reliable enough, because
                        the same number could occur more than once. I therefore
                        matched entries using a combination of the train number
                        and the date and time of the journey.
                    </p>

                    <p>
                        The difference between the planned and actual time
                        could then be converted into the number of minutes of
                        delay.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="05">
                    <p>
                        I built the interface using Svelte and divided the
                        project into separate components. Inputs inside child
                        components sent events to the parent component, which
                        updated the selected data and passed the new values
                        back to the visualisations as props.
                    </p>

                    <p>
                        This helped me better understand component-based
                        development and the flow of data between different
                        parts of an application.
                    </p>

                    <ProjectLayoutCodeBlock lang="javascript" :code="`
<select
    bind:value={selectedDate}
    on:change={updateDate}
>
    ...
</select>
`" />

                    <p>
                        The first D3 visualisation I created was a bar chart
                        that shows the delay of individual trains throughout a
                        selected day.
                    </p>

                    <p>
                        Because the chart uses times instead of separate
                        categories, I used
                        <code class="snippet">scaleTime()</code> for the
                        horizontal axis.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="06">
                    <p>
                        Making the bar chart responsive was one of the more
                        difficult parts of the project. I used
                        <code class="snippet">getBoundingClientRect()</code>
                        and a
                        <code class="snippet">ResizeObserver</code> to
                        calculate the available dimensions and redraw the chart
                        whenever its container changed size.
                    </p>

                    <p>
                        However, this also caused the animations to restart
                        every time the browser window was resized. I solved
                        this by adding a variable that determined whether the
                        transition should be played.
                    </p>

                    <ProjectLayoutCodeBlock lang="javascript" :code="`
let shouldAnimate = false;

const resizeObserver = new ResizeObserver(() => {
    shouldAnimate = false;
    filterAndDraw();
});

resizeObserver.observe(svg);
`" />

                    <p>
                        This allowed the chart to stay responsive without
                        unnecessarily replaying its entrance animation.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="07">
                    <p>
                        In addition to the daily bar chart, I created a second
                        visualisation that summarises the complete dataset.
                    </p>

                    <p>
                        The pie chart shows the proportion of trains that
                        arrived on time, experienced a delay or were cancelled.
                        This made it possible to see the overall reliability of
                        the route instead of only viewing individual journeys.
                    </p>

                    <p>
                        I also added tooltips, labels and small interface
                        animations to make the information easier to
                        understand.
                    </p>
                </ProjectLayoutColumnItem>

                <ProjectLayoutColumnItem index="08">
                    <p>
                        Near the end of the project, I conducted user tests to
                        find out whether the interface and visualisations were
                        clear without an explanation.
                    </p>

                    <p>
                        The tests showed that the general subject was
                        understandable, but the visualisation needed more
                        context. Users pointed out that labels and a legend
                        were missing and that the D3 chart was too small
                        compared to the other elements on the page.
                    </p>

                    <p>
                        Because the data visualisation was the most important
                        part of the project, I gave it more space and made the
                        supporting information clearer.
                    </p>

                    <p>
                        A code review also helped me improve the maintainability
                        of the project. The structure and naming of the
                        functions were clear, but parts of the more complicated
                        D3 logic needed additional comments. I added these so
                        the project would be easier to understand and continue
                        working on later.
                    </p>
                </ProjectLayoutColumnItem>
            </ProjectLayoutColumns>

            <div class="empty horizontal-lines"></div>

            <ProjectLayoutConclusion class="warning" :project="project" :project-link="project.projectLink"
                :project-github="project.projectGithub">
                <template #title>Final Result</template>

                <template #content>
                    The final result was Delay Finder, an interactive dashboard that visualises train delays between
                    Hoorn and Amsterdam Centraal using D3 and Svelte. Users can explore delays from individual
                    journeys and view a broader overview of how often trains were delayed, cancelled or on time. The
                    project taught me how to collect, transform and visualise API data while building a
                    component-based application.
                </template>

                <template #usage-warning>
                    <strong>Important:</strong> This project only contains data collected in November 2025.
                </template>

            </ProjectLayoutConclusion>

            <div class="empty horizontal-lines"></div>
        </div>
    </main>
</template>

<script setup>
import { delayFinderProject as project } from '~/data/projects'

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
    padding: 3rem;
    background: #FFC919;
    background-image: url('/images/ns-pattern.png');
    background-size: 100%;
    background-repeat: repeat;

}

:deep(.image-container) img {
    border: 1px solid var(--backdrop-200);
    border-radius: 15px;
    corner-shape: bevel;
    filter: drop-shadow(0 0 10px #0000001a);
}

@media (width < 700px) {
    .container .project-media {
        padding-left: 0;
    }

    :deep(.image-container) {}
}
</style>