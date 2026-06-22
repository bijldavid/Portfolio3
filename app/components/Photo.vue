<template>
        <div class="threeD photo">
            <div class="rotator">
                <div class="photo-model">
                    <!-- front -->
                    <div></div>
                    <!-- back -->
                    <div></div>
                    <!-- top -->
                    <div>
                        <div class="picture">
                            <img src="/images/davidbijl.webp" alt="">
                        </div>
                    </div>
                    <!-- bottom -->
                    <div></div>
                    <!-- left -->
                    <div></div>
                    <!-- right -->
                    <div></div>
                </div>
            </div>
        </div>
</template>

<script>

</script>

<style>
/* ============================================================================== */
/* 3D ENVIRONMENT */
/* ============================================================================== */

.photo div {
    position: absolute;
    background-color: #faf6f1;
}

.photo {
    --animation-duration: 10s;

    --x: 40cqw;
    --y: .4cqw;
    --z: 55cqw;
}

@media (width < 900px) {
    .photo {
        --x: 40cqh;
        --y: .4cqh;
        --z: 55cqh;
    }
}

ul li:nth-of-type(3) .rotator {
    animation: spin-photo var(--animation-duration) linear infinite;
}

.photo-model {
    translate: 0 10cqw;
    transition: transform 1s ease;
    transform: rotateX(-70deg);
}

@media (pointer: fine) {
    .photo-model {
        translate: 0 10cqw;
        transition: transform 1s ease;
        transform: rotateX(0deg);
    }

    ul li:nth-of-type(3):hover .photo-model {
        transform: rotateX(-70deg);
    }
}

@keyframes spin-photo {
    0% {
        transform: rotateY(0deg) rotateX(-10deg);
    }

    100% {
        transform: rotateY(360deg) rotateX(-10deg);
    }
}

/* ========================== */
/* SHADING */
/* ========================== */

.photo-model div::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
}

/* front */
.photo-model div:nth-of-type(1)::before {
    opacity: .15;
    transition: opacity .6s linear;
}

/* back */
.photo-model div:nth-of-type(2)::before {
    opacity: .4;
    transition: opacity .6s linear;
}

/* top */
.photo-model div:nth-of-type(3)::before {
    opacity: 0;
    transition: opacity .6s linear;
}

/* bottom */
.photo-model div:nth-of-type(4)::before {
    opacity: 0.6;
    transition: opacity .6s linear;
}

/* left right */
.photo-model div:nth-of-type(5)::before,
.photo-model div:nth-of-type(6)::before {
    opacity: .3;
    transition: opacity .6s linear;
}


/* ============================================================================== */
/* BOARD */
/* ============================================================================== */

/* front */
.photo-model>div:nth-of-type(1) {
    width: var(--x);
    height: var(--y);
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* back */
.photo-model>div:nth-of-type(2) {
    width: var(--x);
    height: var(--y);
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / -2);
}

/* top */
.photo-model>div:nth-of-type(3) {
    width: var(--x);
    height: var(--z);
    transform-origin: top;
    rotate: x 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / -2);
}

/* bottom */
.photo-model>div:nth-of-type(4) {
    width: var(--x);
    height: var(--z);
    transform-origin: top;
    rotate: x 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / 2) calc(var(--z) / -2);
}

/* left */
.photo-model>div:nth-of-type(5) {
    width: var(--z);
    height: var(--y);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* right */
.photo-model>div:nth-of-type(6) {
    width: var(--z);
    height: var(--y);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / 2) calc(var(--y) / -2) calc(var(--z) / 2);
}


/* ============================================================================== */
/* PICTURE */
/* ============================================================================== */

.photo-model .picture {
    position: absolute;
    top: 5%;
    left: 50%;
    translate: -50% 0 1px;
    height: 70%;
    width: 80%;
    overflow: hidden;
}

.photo-model .picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>