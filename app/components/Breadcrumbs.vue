<template>
    <header>
        <nav>
            <slot />
        </nav>
    </header>
</template>

<script>

</script>

<style>
/* -  -  -  -  -  -  -  -  -  -  -  -  - */
/* HEADER */
/* -  -  -  -  -  -  -  -  -  -  -  -  - */

header nav {
    --gap: 3rem;
    display: flex;
    align-items: center;
    gap: var(--gap);
    padding: .75rem;
    border-radius: 0 10px 0 0;
    corner-shape: bevel;
    border-top: 1px solid var(--background-grid);
    border-right: 1px solid var(--background-grid);
    width: max-content;
}

header nav a {
    position: relative;
    font-family: 'waffer', sans-serif;
    font-size: var(--small-size);
    font-weight: 400;
    color: black;
    line-height: 1.5em;
}

header nav a:not(:last-of-type)::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0%;
    background: var(--border-400);
    bottom: -2px;
    left: 0;
    transition: width .3s ease;
}

header nav a:not(:last-of-type):hover::after {
    width: 100%;
}

header nav a:not(:last-of-type)::before {
    content: '';
    position: absolute;
    height: 1rem;
    aspect-ratio: 1;
    top: 50%;
    right: calc(var(--gap) / 2 * -1);
    translate: 50% -50%;
    pointer-events: none;

    background-image: url(/images/breadcrum-arrow.png);
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
}

header nav a:last-of-type {
    padding: .25rem .75rem;
    background: var(--border-400);
    color: var(--background-solid);
    border-radius: 5px;
    corner-shape: bevel;
}
</style>