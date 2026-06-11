<template>
    <main class="about">
        <div class="container vertical-lines">

            <Breadcrumbs>
                <NuxtLink to="/" viewTransition>Home</NuxtLink>
                <NuxtLink to="/about" viewTransition>About</NuxtLink>
            </Breadcrumbs>

            <section>
                <h1 class="horizontal-lines reveal-ignore">About Me</h1>

                <div class="image-container">
                    <img src="" alt="David">
                </div>

                <div class="content-container">
                    <h2><span>Who</span> is David?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, quidem dolor non
                        perferendis, velit perspiciatis, tempore at quam nesciunt a et ab nisi enim voluptatem officiis
                        dolorem odio quisquam ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                        inventore sequi praesentium corporis laborum. Necessitatibus, laboriosam tenetur? Cumque earum
                        molestias asperiores odit, est recusandae temporibus, quaerat, eum porro consectetur similique.
                    </p>
                </div>
            </section>

            <div class="empty horizontal-lines"></div>

            <section class="skills">
                <h2>My skills</h2>
                <span></span>
                <span></span>
                <div>
                    <div>
                        <h3>Design</h3>
                        <ul>
                            <li v-for="designSkill in designSkills" :key="designSkill.designSkillTitle">
                                <img :src="designSkill.designSkillImage" alt="">
                                <p class="skill-title">{{ designSkill.designSkillTitle }}</p>
                                <p class="percentage">{{ designSkill.designSkillPercentage }}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Development</h3>
                        <ul>
                            <li v-for="devSkill in devSkills" :key="devSkill.devSkillTitle">
                                <img :src="devSkill.devSkillImage" alt="">
                                <p class="skill-title">{{ devSkill.devSkillTitle }}</p>
                                <p class="percentage">{{ devSkill.devSkillPercentage }}</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

            <div class="empty horizontal-lines"></div>

            <section class="work-experience">
                <div class="text-container">
                    <h2>Work experience</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quidem eum magni nesciunt
                        repellat, exercitationem dicta ex atque obcaecati animi. Ipsa, quasi suscipit fugit labore
                        voluptatibus commodi dolorum consequuntur illo. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Consectetur accusamus ipsa quasi doloribus ad porro quae eaque exercitationem
                        voluptates tempora id repellat, laudantium quo laboriosam eligendi excepturi, fugiat consequatur
                        accusantium.</p>
                </div>
                <div class="timeline">
                    <div class="segments">
                        <span>2019</span>
                        <span>2020</span>
                        <span>2021</span>
                        <span>2022</span>
                        <span>2023</span>
                        <span>2024</span>
                        <span>2025</span>
                        <span>2026</span>
                        <span>2027</span>
                    </div>

                    <div class="timeline-grid">
                        <span v-for="workExperience in workExperiences" :key="workExperience.workExperienceId" :style="{
                            gridRow: workExperience.workExperienceGridRow,
                            gridColumn: workExperience.workExperienceGridColumn,
                        }" @mouseenter="showTooltip(workExperience, $event)" @mousemove="moveTooltip($event)"
                            @mouseleave="hideTooltip">
                            {{ workExperience.workExperienceLabel }}
                        </span>
                    </div>

                    <div id="tooltip" :class="{ visible: isTooltipVisible }" :style="tooltipStyle">
                        <span v-for="field in tooltipRows" :key="field.key" class="tooltip-row"
                            :class="field.className">
                            <span class="tooltip-label">{{ field.label }}:</span>
                            <span class="tooltip-value">{{ activeWorkExperience?.[field.key] }}</span>
                        </span>
                    </div>
                </div>

            </section>

            <div class="empty horizontal-lines">

            </div>

        </div>
    </main>
</template>

<script setup>

import { computed, ref } from 'vue';

const designSkills = ref([
    {
        designSkillTitle: 'Figma',
        designSkillPercentage: '60%',
        designSkillImage: '/images/figma.png',
    },
    {
        designSkillTitle: 'Photoshop',
        designSkillPercentage: '90%',
        designSkillImage: '/images/ps.png',
    },
    {
        designSkillTitle: 'Illustrator',
        designSkillPercentage: '60%',
        designSkillImage: '/images/ai.png',
    },
    {
        designSkillTitle: 'Indesign',
        designSkillPercentage: '60%',
        designSkillImage: '/images/id.png',
    },
    {
        designSkillTitle: 'Premiere Pro',
        designSkillPercentage: '90%',
        designSkillImage: '/images/pr.png',
    },
    {
        designSkillTitle: 'After effects',
        designSkillPercentage: '90%',
        designSkillImage: '/images/ae.png',
    },
    {
        designSkillTitle: 'Blender',
        designSkillPercentage: '30%',
        designSkillImage: '/images/blender.png',
    }
]);

const devSkills = ref([
    {
        devSkillTitle: 'HTML',
        devSkillPercentage: '90%',
        devSkillImage: '/images/html.png',
    },
    {
        devSkillTitle: 'CSS',
        devSkillPercentage: '90%',
        devSkillImage: '/images/css.png',
    },
    {
        devSkillTitle: 'JavaScript',
        devSkillPercentage: '60%',
        devSkillImage: '/images/js.png',
    },
    {
        devSkillTitle: 'Svelte',
        devSkillPercentage: '70%',
        devSkillImage: '/images/svelte.png',
    },
    {
        devSkillTitle: 'Nuxt',
        devSkillPercentage: '90%',
        devSkillImage: '/images/nuxt.png',
    }
]);

const workExperiences = ref([
    {
        workExperienceId: 'fiverr-2019',
        workExperienceLabel: 'Fiverr freelancer',
        workExperienceGridRow: '9 / span 15',
        workExperienceGridColumn: 2,
        workExperienceCompany: 'Fiverr freelance',
        workExperienceRole: 'Shopify developer',
        workExperienceDuration: 'Jan 2019 - Nov 2020',
        workExperienceLocation: 'Remote',
    },
    {
        workExperienceId: 'yesss-2023',
        workExperienceLabel: 'YESSS electrical',
        workExperienceGridRow: '43 / span 14',
        workExperienceGridColumn: 2,
        workExperienceCompany: 'YESSS Electrical NL',
        workExperienceRole: 'Marketing employee',
        workExperienceDuration: 'Maart 2023 - Jan 2025',
        workExperienceLocation: 'Beusichem, GD',
    },
    {
        workExperienceId: 'hva-2024',
        workExperienceLabel: 'HvA',
        workExperienceGridRow: '54 / span 2',
        workExperienceGridColumn: 1,
        workExperienceCompany: 'Hogeschool van Amsterdam',
        workExperienceRole: 'Student assistant',
        workExperienceDuration: '01 Sept 2024 - 06 Okt 2024',
        workExperienceLocation: 'Amsterdam, NH',
    },
    {
        workExperienceId: 'uwv-2024',
        workExperienceLabel: 'UWV',
        workExperienceGridRow: '56 / span 2',
        workExperienceGridColumn: 3,
        workExperienceCompany: 'UWV',
        workExperienceRole: 'Internship Design & Development',
        workExperienceDuration: 'Nov 2024 - Jan 2025',
        workExperienceLocation: 'Amsterdam, NH',
    },
    {
        workExperienceId: 'samcity-2025',
        workExperienceLabel: 'Samcity',
        workExperienceGridRow: '59 / span 4',
        workExperienceGridColumn: 2,
        workExperienceCompany: 'Samcity',
        workExperienceRole: 'Hospitality & Service Staff',
        workExperienceDuration: '10 April 2025 - 20 Aug 2025',
        workExperienceLocation: 'Hoorn, NH',
    },
    {
        workExperienceId: 'hva-2025',
        workExperienceLabel: 'HvA',
        workExperienceGridRow: '62 / span 2',
        workExperienceGridColumn: 3,
        workExperienceCompany: 'Hogeschool van Amsterdam',
        workExperienceRole: 'Student assistant',
        workExperienceDuration: '01 Sept 2025 - 06 Okt 2025',
        workExperienceLocation: 'Amsterdam, NH',
    },
    {
        workExperienceId: 'gss-2025',
        workExperienceLabel: 'GSS',
        workExperienceGridRow: '61 / span 8',
        workExperienceGridColumn: 1,
        workExperienceCompany: 'Grid Support Solutions',
        workExperienceRole: 'Front-end Developer',
        workExperienceDuration: '01 Sept 2025 - Now',
        workExperienceLocation: 'Schagen, NH',
    },
]);

const tooltipFields = [
    { key: 'workExperienceCompany', label: 'Company', className: 'tooltip-company' },
    { key: 'workExperienceRole', label: 'Role', className: 'tooltip-role' },
    { key: 'workExperienceDuration', label: 'Duration', className: 'tooltip-duration' },
    { key: 'workExperienceLocation', label: 'Location', className: 'tooltip-location' },
];

const activeWorkExperience = ref(null);
const isTooltipVisible = ref(false);
const tooltipPosition = ref({ x: 0, y: 0 });
let hideTooltipContentTimer;

const tooltipStyle = computed(() => ({
    left: `${tooltipPosition.value.x}px`,
    top: `${tooltipPosition.value.y}px`,
}));

const tooltipRows = computed(() => {
    if (!activeWorkExperience.value) {
        return [];
    }

    return tooltipFields.filter((field) => activeWorkExperience.value[field.key]);
});

const moveTooltip = (event) => {
    tooltipPosition.value = {
        x: event.clientX,
        y: event.clientY,
    };
};

const showTooltip = (workExperience, event) => {
    window.clearTimeout(hideTooltipContentTimer);
    activeWorkExperience.value = workExperience;
    isTooltipVisible.value = true;
    moveTooltip(event);
};

const hideTooltip = () => {
    isTooltipVisible.value = false;

    hideTooltipContentTimer = window.setTimeout(() => {
        if (!isTooltipVisible.value) {
            activeWorkExperience.value = null;
        }
    }, 300);
};


</script>

<style scoped>
/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* TITLE */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container {
    container-type: inline-size;
}

.container section:nth-of-type(1) h1 {
    font-family: 'rm-mono', monospace;
    text-transform: uppercase;
    font-size: var(--h1-size);
    letter-spacing: .3em;
    font-weight: 400;
    color: var(--border-400);
    white-space: nowrap;

    padding: 1rem 1rem 1rem 3rem;
    width: 100%;
}

.container section:nth-of-type(1) h1::after {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    border: 2px solid var(--border-400);
    top: 50%;
    left: 1.5rem;
    translate: -50% -50%;
    rotate: 45deg;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* IMAGE */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(1) .image-container {
    height: 400px;
}


/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* INTRO CONTENT */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container section:nth-of-type(1) .content-container {
    background-color: var(--border-400);
    padding: 5rem;

    display: grid;
    gap: 1.5rem;

    border-radius: 15px;
    corner-shape: bevel;
}


.container section:nth-of-type(1) .content-container h2 {
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--background-solid);
    height: max-content
}

.container section:nth-of-type(1) .content-container h2 span {
    position: relative;
}

.container section:nth-of-type(1) .content-container h2 span::before {
    position: absolute;
    content: '';
    inset: 0 -5px;
    background: var(--border-300);
    z-index: -1;
    transform: skew(10deg);
}

.container section:nth-of-type(1) .content-container p {
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 1.5em;
    columns: 40ch;
    column-gap: 3rem;
    color: var(--background-solid);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* SKILLS */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container .skills {
    position: relative;
    display: grid;
}

.container .skills h2 {
    width: 100%;
    text-align: center;
    padding-block: 3rem;
    border-bottom: 1px solid var(--background-grid);
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--text);
}

.container .skills span {
    position: absolute;
    display: block;
    height: 2px;
    background: var(--border-400);
    translate: 0 -50%;
    top: 7rem;
}

.container .skills span:nth-of-type(1) {
    right: 50%;
    width: calc(50% - 10cqw - 2rem - (67px / 2));
}


.container .skills span:nth-of-type(2) {
    left: 50%;
    width: calc(2rem + (106px / 2));
}

.container .skills span:nth-of-type(1)::before {
    content: '';
    position: absolute;
    height: 4rem;
    width: 2px;
    background: var(--border-400);
    left: 0;
    top: 0;
}

.container .skills span:nth-of-type(1)::after {
    content: '';
    position: absolute;
    height: 1rem;
    width: 2px;
    translate: 50%;
    background: var(--border-400);
    right: 0;
    bottom: 0;
}

.container .skills span:nth-of-type(2)::after {
    content: '';
    position: absolute;
    height: 4rem;
    width: 2px;
    background: var(--border-400);
    right: 0;
    top: 0;
}

.container .skills>div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-inline: 10cqw;
}

.container .skills>div div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
}

.container .skills>div div:nth-of-type(1) {
    border-inline: 1px solid var(--background-grid);
}

.container .skills>div div:nth-of-type(2) {
    border-right: 1px solid var(--background-grid);
}

.container .skills>div div h3 {
    font-family: 'poppins', sans-serif;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--text);
    line-height: 1.5em;
    max-width: max-content;
    padding: .25rem .75rem;
    background: var(--border-400);
    color: var(--background-solid);
    border-radius: 5px;
    corner-shape: bevel;
}

.container .skills>div div ul {
    display: grid;
    gap: 1rem;
}

.container .skills>div div ul li {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.container .skills>div div ul li:not(:last-of-type) {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--background-grid);
}

.container .skills>div div ul li img {
    width: 1.5rem;
}

.container .skills>div div ul li .skill-title {
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    color: var(--text);
}

.container .skills>div div ul li .percentage {
    font-family: 'rm-mono', monospace;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--border-400);
    margin-left: auto;
    padding: .25rem;
    background: var(--backdrop-200);
}


/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* WORK EXPERIENCE */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

.container .work-experience {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.container .work-experience .text-container {
    position: sticky;
    top: 0rem;
    left: 0;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: max-content;
}

.container .work-experience .text-container h2 {
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--text);
    height: max-content
}

.container .work-experience .text-container p {
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 1.5em;
    color: var(--text);
}

.container .work-experience .timeline {
    border-left: 1px solid var(--background-grid);
    position: relative;
}

.container .work-experience .timeline .segments {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.container .work-experience .timeline .segments span {
    position: relative;
    display: flex;
    align-items: end;
    width: 100%;
    min-height: 125px;
    padding: 1rem;
    font-family: 'rm-mono', monospace;
    font-size: var(--small-size);
    font-weight: 400;
    color: var(--border-400);
}

.container .work-experience .timeline .segments span:not(:last-of-type)::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: repeating-linear-gradient(90deg, var(--background-grid) 0px, var(--background-grid) 8px, transparent 8px, transparent 16px);
    left: 0;
    bottom: 0;
}


.container .work-experience .timeline .timeline-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(3, 30px);
    grid-template-rows: repeat(72, 1fr);
    gap: 0 1rem;
    justify-content: center;
}

.container .work-experience .timeline .timeline-grid span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--backdrop-200);
    border: 2px solid var(--border-400);
    border-radius: 5px;
    corner-shape: bevel;

    writing-mode: vertical-rl;
    font-family: 'rm-mono', monospace;
    font-size: .75em;
    font-weight: 400;
    color: var(--border-400);
    cursor: none;
}

#tooltip {
    position: fixed;
    padding: 1rem;
    background: var(--border-400);
    color: var(--background-solid);
    font-family: 'rm-mono', monospace;
    font-size: var(--small-size);
    font-weight: 400;
    border-radius: 5px;
    corner-shape: bevel;
    pointer-events: none;
    opacity: 0;
    z-index: 20;
    translate: -50% -100%;
    scale: .75;
    transition: opacity .65s var(--hp-timing-function), scale .65s var(--hp-timing-function);
    opacity: 0;

    display: grid;
    gap: .5rem;
}

#tooltip::before {
    content: '';
    position: absolute;
    width: 12.5px;
    aspect-ratio: 1;
    background: var(--border-400);
    rotate: 45deg;
    left: 50%;
    top: 100%;
    translate: -50% -50%;
}

#tooltip .tooltip-row {
    display: flex;
    align-items: center;
    gap: .25rem;
}

#tooltip .tooltip-label {
    font-size: calc(var(--small-size) - 2px);
    opacity: .75;
    text-transform: uppercase;
    letter-spacing: .08em;
}

#tooltip .tooltip-value {
    font-size: var(--small-size);
}

#tooltip.visible {
    scale: 1;
    opacity: 1;
}


@media (width < 700px) {
    .container section:nth-of-type(1) h1::after {
        content: '';
        position: absolute;
        height: 8px;
        width: 8px;
        border: 1.75px solid var(--border-400);
        top: 50%;
        left: 1.5rem;
        translate: -50% -50%;
        rotate: 45deg;
    }


    /* - - - - - - - - - - - - - - - - - - - - - - - - */
    /* SKILLS */
    /* - - - - - - - - - - - - - - - - - - - - - - - - */

    .container .skills h2 {
        text-align: left;
        padding: 2rem;
    }

    .container .skills span {
        display: none;
    }

    .container .skills>div {
        display: grid;
        grid-template-columns: 1fr;
        margin-inline: 0;
    }

    .container .skills>div div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
    }

    .container .skills>div div:nth-of-type(1) {
        border-inline: none;
        border-bottom: 1px solid var(--background-grid);
    }

    .container .skills>div div:nth-of-type(2) {
        border-right: none;
    }


    /* - - - - - - - - - - - - - - - - - - - - - - - - */
    /* WORK EXPERIENCE */
    /* - - - - - - - - - - - - - - - - - - - - - - - - */

    .container .work-experience {
        grid-template-columns: 1fr;
    }

    .container .work-experience .text-container {
        position: static;
        padding: 2rem;
        border-bottom: 1px solid var(--background-grid);
    }

    .container .work-experience .text-container h2 {
        font-family: 'poppins', sans-serif;
        font-size: var(--h2-size);
        font-weight: 400;
        color: var(--text);
        height: max-content
    }

    .container .work-experience .text-container p {
        font-family: 'poppins', sans-serif;
        font-size: var(--p-size);
        font-weight: 400;
        line-height: 1.5em;
        color: var(--text);
    }

    .container .work-experience .timeline {
        border-left: 1px solid var(--background-grid);
        position: relative;
    }

    .container .work-experience .timeline .segments {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .container .work-experience .timeline .segments span {
        position: relative;
        display: flex;
        align-items: end;
        width: 100%;
        min-height: 125px;
        padding: 1rem;
        font-family: 'rm-mono', monospace;
        font-size: var(--small-size);
        font-weight: 400;
        color: var(--border-400);
    }

    .container .work-experience .timeline .segments span:not(:last-of-type)::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: repeating-linear-gradient(90deg, var(--background-grid) 0px, var(--background-grid) 8px, transparent 8px, transparent 16px);
        left: 0;
        bottom: 0;
    }


    .container .work-experience .timeline .timeline-grid {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(3, 30px);
        grid-template-rows: repeat(72, 1fr);
        gap: 0 1rem;
        justify-content: center;
    }

    .container .work-experience .timeline .timeline-grid span {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--backdrop-200);
        border: 2px solid var(--border-400);
        border-radius: 5px;
        corner-shape: bevel;

        writing-mode: vertical-rl;
        font-family: 'rm-mono', monospace;
        font-size: .75em;
        font-weight: 400;
        color: var(--border-400);
        cursor: none;
    }

    #tooltip {
        position: fixed;
        padding: 1rem;
        background: var(--border-400);
        color: var(--background-solid);
        font-family: 'rm-mono', monospace;
        font-size: var(--small-size);
        font-weight: 400;
        border-radius: 5px;
        corner-shape: bevel;
        pointer-events: none;
        opacity: 0;
        z-index: 20;
        translate: -50% -100%;
        scale: .75;
        transition: opacity .65s var(--hp-timing-function), scale .65s var(--hp-timing-function);
        opacity: 0;

        display: grid;
        gap: .5rem;
    }

    #tooltip::before {
        content: '';
        position: absolute;
        width: 12.5px;
        aspect-ratio: 1;
        background: var(--border-400);
        rotate: 45deg;
        left: 50%;
        top: 100%;
        translate: -50% -50%;
    }

    #tooltip .tooltip-row {
        display: flex;
        align-items: center;
        gap: .25rem;
    }

    #tooltip .tooltip-label {
        font-size: calc(var(--small-size) - 2px);
        opacity: .75;
        text-transform: uppercase;
        letter-spacing: .08em;
    }

    #tooltip .tooltip-value {
        font-size: var(--small-size);
    }

    #tooltip.visible {
        scale: 1;
        opacity: 1;
    }
}
</style>