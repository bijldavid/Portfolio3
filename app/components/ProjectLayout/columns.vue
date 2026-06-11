<template>
    <section class="columns">
        <span ref="sentinel" class="sentinel" aria-hidden="true"></span>
        <h2 class="col-1" :class="{ 'is-stuck': isStuck }">
            <slot name="title" />
        </h2>
        <div class="col-2">
            <slot />
        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
    items: {
        type: Array,
        default: () => []
        // expected shape: [{ index: '01', paragraph: 'Lorem...' }]
    }
})

const sentinel = ref(null)
const isStuck = ref(false)
let observer

onMounted(() => {
    if (!sentinel.value || typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver(
        ([entry]) => {
            isStuck.value = !entry.isIntersecting
        },
        {
            root: null,
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1],
        }
    )

    observer.observe(sentinel.value)
})

onBeforeUnmount(() => {
    observer?.disconnect()
})
</script>

<style>
.columns {
    position: relative;
    display: grid;
    grid-template-columns: 225px 2fr;
    gap: 4rem;
    padding: 5rem;
}

.columns .sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
    opacity: 0;
}

.columns h2 {
    position: sticky;
    top: 5rem;
    left: 5rem;
    font-family: 'poppins', sans-serif;
    font-size: var(--h2-size);
    font-weight: 400;
    color: var(--text);
    height: max-content;
    width: max-content;
    align-items: center;
    opacity: 0.5;
    padding-left: 0;
    transition: opacity .3s ease, padding-left .3s ease;
}

.columns h2::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    translate: 0 -50%;
    height: 1rem;
    width: .75rem;
    background: var(--border-400);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    scale: 0;
    transition: scale .3s ease;
}

.columns h2.is-stuck {
    opacity: 1;
    padding-left: 1.5rem;
}

.columns h2.is-stuck::before {
    scale: 1;
}

.columns .col-2 {
    display: grid;
    gap: 2rem;
}

.columns .col-2>div {
    display: grid;
    grid-template-columns: 30px 1fr;
    gap: 3rem;
}

.columns .col-2>div p {
    font-family: 'poppins', sans-serif;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 1.5em;
}

.columns .col-2>div .paragraph {
    grid-column: 2;
    color: var(--text);

    display: grid;
    gap: .75rem;
}

.columns .col-2>div .index-count {
    grid-column: 1;
    color: var(--backdrop-500);
}

@media (width < 900px) {
    .columns {
        grid-template-columns: 1fr;
        padding: 2rem;
        gap: 2rem;
    }

    .columns .sentinel {
        display: none;
    }

    .columns h2 {
        position: static;
        margin-left: calc(3rem + 30px);
    }
}

@media (width < 700px) {
    .columns .col-2>div {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0rem;
    }

    .columns h2 {
        position: static;
        margin-left: 0;
    }

    .columns .col-2>div .index-count {
        display: none;
    }
}
</style>