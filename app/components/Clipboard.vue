<template>
    <div class="threeD clipboard">
        <div class="rotator">
            <div class="clipboard-model">
                <!-- front -->
                <div></div>
                <!-- back -->
                <div></div>
                <!-- top -->
                <div>
                    <div class="paper">
                        <img src="/images/David_CV.webp" alt="">
                    </div>
                    <div class="clip">
                        <!-- front -->
                        <div></div>
                        <!-- back -->
                        <div>
                            <div class="extention">
                                <!-- front -->
                                <div></div>
                                <!-- back -->
                                <div></div>
                                <!-- top -->
                                <div></div>
                                <!-- bottom -->
                                <div></div>
                                <!-- left -->
                                <div></div>
                                <!-- right -->
                                <div></div>
                                <!-- cutout-cover -->
                                <div class="cutout-cover-bottom"></div>
                                <div class="cutout-cover-top"></div>
                            </div>
                        </div>
                        <!-- top -->
                        <div></div>
                        <!-- bottom -->
                        <div></div>
                        <!-- left -->
                        <div></div>
                        <!-- right -->
                        <div></div>
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

.clipboard div {
    position: absolute;
    background-color: #93775b;
}

.clipboard {
    --animation-duration: 10s;

    --x: 35cqw;
    --y: 2cqw;
    --z: 55cqw;
}

@media (width < 900px) {
    .clipboard {
        --x: 35cqh;
        --y: 2cqh;
        --z: 55cqh;
    }
}

ul li:nth-of-type(2) .rotator {
    animation: spin-clipboard var(--animation-duration) linear infinite;
}

.clipboard-model {
    translate: 0 10cqw;
    transform: rotateX(-70deg);
    transition: transform 1s ease;
}

@media (pointer: fine) {
    .clipboard-model {
        translate: 0 10cqw;
        transition: transform 1s ease;
        transform: rotateX(0deg);
    }

    ul li:nth-of-type(2):hover .clipboard-model {
        transform: rotateX(-70deg);
    }
}

@keyframes spin-clipboard {
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

.clipboard-model div::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
}

/* front */
.clipboard-model div:nth-of-type(1)::before {
    opacity: .15;
    transition: opacity .6s linear;
}

/* back */
.clipboard-model div:nth-of-type(2)::before {
    opacity: .4;
    transition: opacity .6s linear;
}

/* top */
.clipboard-model div:nth-of-type(3)::before {
    opacity: 0;
    transition: opacity .6s linear;
}

/* bottom */
.clipboard-model div:nth-of-type(4)::before {
    opacity: 0.6;
    transition: opacity .6s linear;
}

/* left right */
.clipboard-model div:nth-of-type(5)::before,
.clipboard-model div:nth-of-type(6)::before {
    opacity: .3;
    transition: opacity .6s linear;
}


/* ============================================================================== */
/* BOARD */
/* ============================================================================== */

/* front */
.clipboard-model>div:nth-of-type(1) {
    width: var(--x);
    height: var(--y);
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* back */
.clipboard-model>div:nth-of-type(2) {
    width: var(--x);
    height: var(--y);
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / -2);
}

/* top */
.clipboard-model>div:nth-of-type(3) {
    width: var(--x);
    height: var(--z);
    transform-origin: top;
    rotate: x 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / -2);
}

/* bottom */
.clipboard-model>div:nth-of-type(4) {
    width: var(--x);
    height: var(--z);
    transform-origin: top;
    rotate: x 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / 2) calc(var(--z) / -2);
}

/* left */
.clipboard-model>div:nth-of-type(5) {
    width: var(--z);
    height: var(--y);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* right */
.clipboard-model>div:nth-of-type(6) {
    width: var(--z);
    height: var(--y);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / 2) calc(var(--y) / -2) calc(var(--z) / 2);
}



/* ============================================================================== */
/* CLIP */
/* ============================================================================== */


.clipboard-model .clip {
    width: calc(var(--x) / 3);
    height: calc(var(--z) / 12);
    top: 0;
    left: 50%;
    translate: -50%;
}

.clipboard-model .clip>div {
    background-color: #bc9a3c;
}

/* front */
.clipboard-model .clip>div:nth-of-type(1) {
    width: 100%;
    height: calc(var(--y) / 2);
    transform-origin: top;
    rotate: x 90deg;
    translate: 0 calc(var(--z) / 12) 0;
}

/* back */
.clipboard-model .clip>div:nth-of-type(2) {
    width: 100%;
    height: calc(var(--y) / 2);
    transform-origin: top;
    rotate: x 90deg;
    translate: 0 0 0;
}

/* top */
.clipboard-model .clip>div:nth-of-type(3) {
    width: 100%;
    height: 100%;
    translate: 0 0 calc(var(--y) / 2);
}

/* bottom */
.clipboard-model .clip>div:nth-of-type(4) {
    width: 100%;
    height: 100%;
    translate: 0 0 0;
}

/* left */
.clipboard-model .clip>div:nth-of-type(5) {
    width: calc(var(--y) / 2);
    height: 100%;
    transform-origin: left;
    rotate: y 90deg;
    translate: 0 0 calc(var(--y) / 2);
}

/* right */
.clipboard-model .clip>div:nth-of-type(6) {
    width: calc(var(--y) / 2);
    height: 100%;
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / 3) 0 calc(var(--y) / 2);
}


/* ============================================================================== */
/* EXTENTION */
/* ============================================================================== */


.clipboard-model .clip .extention {
    width: calc(var(--x) / 5);
    height: calc(var(--z) / 20);
    background-color: transparent;
    transform-origin: top;
    rotate: x 90deg;
    top: 0;
    left: 50%;
    translate: -50%;
}

.clipboard-model .clip .extention::before {
    display: none;
}

.clipboard-model .clip .extention>div {
    background-color: #bc9a3c;
}

/* front */
.clipboard-model .clip .extention>div:nth-of-type(1) {
    width: 100%;
    height: calc(var(--y) / 2);
    transform-origin: top;
    rotate: x 90deg;
    translate: 0 0 calc(var(--y) / -2);
}

/* back */
.clipboard-model .clip .extention>div:nth-of-type(2) {
    width: 100%;
    height: calc(var(--y) / 2);
    transform-origin: top;
    rotate: x 90deg;
    translate: 0 calc(var(--z) / 20) calc(var(--y) / -2);
}

/* top */
.clipboard-model .clip .extention>div:nth-of-type(3) {
    width: 100%;
    height: 100%;
    translate: 0 0 calc(var(--y) / -2);

    mask-image: url(../images/diamond.webp);
    mask-mode: luminance;
    mask-position: center center;
    mask-size: 40% 100%;
    mask-repeat: repeat;
}

.clipboard-model .clip .extention .cutout-cover-top {
    height: 100%;
    width: 100%;
    translate: 0 0 calc(var(--y) / -2);
    background: linear-gradient(90deg,
            #bc9a3c 30%, transparent 30%,
            transparent 70%, #bc9a3c 70%);
}

.clipboard-model .clip .extention .cutout-cover-top::before {
    opacity: 0;
    mask-image: url(../images/diamond.webp);
    mask-mode: luminance;
    mask-position: center center;
    mask-size: 40% 100%;
    mask-repeat: repeat;
}

/* bottom */
.clipboard-model .clip .extention>div:nth-of-type(4) {
    width: 100%;
    height: 100%;
    translate: 0 0 0;

    mask-image: url(../images/diamond.webp);
    mask-mode: luminance;
    mask-position: center center;
    mask-size: 40% 100%;
    mask-repeat: repeat;
}

.clipboard-model .clip .extention .cutout-cover-bottom {
    height: 100%;
    width: 100%;
    translate: 0 0 0;
    background:
        linear-gradient(90deg,
            rgba(0, 0, 0, 0.6) 30%, transparent 30%,
            transparent 70%, rgba(0, 0, 0, 0.6) 70%),
        linear-gradient(90deg,
            #bc9a3c 30%, transparent 30%,
            transparent 70%, #bc9a3c 70%);

}

.clipboard-model .clip .extention .cutout-cover-bottom::before {
    display: none;
}

/* left */
.clipboard-model .clip .extention>div:nth-of-type(5) {
    width: calc(var(--y) / 2);
    height: 100%;
    transform-origin: left;
    rotate: y 90deg;
    translate: 0 0 0;
}

/* right */
.clipboard-model .clip .extention>div:nth-of-type(6) {
    width: calc(var(--y) / 2);
    height: 100%;
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / 5) 0 0;
}



/* ============================================================================== */
/* PAPER */
/* ============================================================================== */

.clipboard-model .paper {
    position: absolute;
    top: 5%;
    left: 50%;
    translate: -50% 0 1px;
    height: 80%;
    width: 80%;
    overflow: hidden;
}

.clipboard-model .paper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>