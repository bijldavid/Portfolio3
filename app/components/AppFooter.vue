<template>
    <footer class="reveal-ignore">
        <div class="container vertical-lines">
            <div class="left">
                <img src="/images/db-logo-bright.webp" alt="David Bijl Logo">
            </div>
            <nav class="right">
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li>
                        <a href="/files/David_CV.pdf" target="_blank" rel="noopener noreferrer">Open CV</a>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://github.com/bijldavid" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-bijl-b236a42b8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
            </nav>
            <p>&copy; 2026 David Bijl. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped>
footer {
    position: relative;
    background-color: var(--border-400);
    background-image:
        radial-gradient(var(--border-400), transparent),
        linear-gradient(0deg, transparent, var(--border-400)),
        url('/images/dot.webp');
    background-size: 200%, 100%, 1rem;
    background-position: center;
    background-repeat: repeat;
    border-radius: 15px 15px 0 0;
    corner-shape: bevel;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background: var(--background-solid);
    z-index: -1;
}

footer .container {
    --line-color: var(--border-300);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem 0;
}

footer .container .left {
    display: grid;
    place-items: center;
    isolation: isolate;
    position: relative;
    padding: 3rem;
    background-color: var(--border-400);
    border: 1px solid var(--border-300);
}

footer .container .left::before {
    content: '';
    position: absolute;
    inset: 2rem;
    background-image: url('/images/dot.webp');
    background-size: .5rem;
    background-repeat: repeat;
    z-index: -1;
}

footer .container .right {
    display: grid;
}

footer .container .right ul:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    border-block: 1px solid var(--border-300);
    height: max-content;
}

footer .container .right ul:nth-of-type(1) li:not(:last-of-type) {
    border-bottom: 1px solid var(--border-300);
}

footer .container .right ul:nth-of-type(1) li a {
    display: block;
    font-family: 'rm-mono', monospace;
    text-transform: uppercase;
    font-size: var(--small-size);
    letter-spacing: .3em;
    font-weight: 400;
    color: var(--border-100);
    white-space: nowrap;
    padding: 1rem;
    padding-left: 3rem;
}

footer .container .right ul:nth-of-type(1) li a:hover {
    color: var(--backdrop-200);
}

footer .container .right ul:nth-of-type(1) li a::after {
    content: '';
    position: absolute;
    height: 9px;
    width: 9px;
    border: 1.75px solid var(--border-100);
    top: 50%;
    left: 1.5rem;
    translate: -50% -50%;
    rotate: 45deg;
}

footer .container .right ul:nth-of-type(1) li a:hover::after {
    border: 1.75px solid var(--backdrop-200);
}


footer .container .right ul:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
    align-items: end;
    padding: 1rem;
    border-bottom: 1px solid var(--border-300);
}


footer .container .right ul:nth-of-type(2) li a {
    font-family: 'poppins', sans-serif;
    font-size: var(--small-size);
    color: var(--border-100);
    padding-right: 1.5rem;
}

footer .container .right ul:nth-of-type(2) li a::before {
    content: '';
    position: absolute;
    height: 1rem;
    aspect-ratio: 1;
    top: 50%;
    right: 0;
    z-index: 1;
    translate: 0 -50%;
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
}

footer .container .right ul:nth-of-type(2) li a:hover {
    color: var(--backdrop-200);
}

footer .container .right ul:nth-of-type(2) li:nth-of-type(1) a::before {
    background-image: url('/images/github-footer.webp');
}

footer .container .right ul:nth-of-type(2) li:nth-of-type(2) a::before {
    background-image: url('/images/linkedin-footer.webp');
}

footer .container .right ul:nth-of-type(2) li:nth-of-type(1) a:hover::before {
    background-image: url('/images/github-footer-hover.webp');
}

footer .container .right ul:nth-of-type(2) li:nth-of-type(2) a:hover::before {
    background-image: url('/images/linkedin-footer-hover.webp');
}

footer .container>p {
    font-family: 'poppins', sans-serif;
    font-size: var(--small-size);
    color: var(--border-100);
    padding: 1rem;
    text-align: center;
    grid-column: 1 / -1;
}

@media (width < 700px) {
    footer .container {
        grid-template-columns: 175px 1fr;
    }

    footer .container .left {
        padding: 1rem;
    }

    footer .container .left::before {
        inset: .5rem;
    }
}
</style>