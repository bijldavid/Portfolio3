<template>
    <div class="threeD laptop">
        <div class="laptop-model">
            <div class="bottom">
                <!-- front -->
                <div></div>
                <!-- back -->
                <div></div>
                <!-- top -->
                <div>
                    <div class="keyboard-container">
                        <div class="keyboard">
                            <!-- Row 1 -->
                            <div class="row">
                                <span>~</span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span>6</span>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>0</span>
                                <span>-</span>
                                <span>=</span>
                                <span class="backspace">⌫</span>
                            </div>
                            <!-- Row 2 -->
                            <div class="row">
                                <span class="tab">Tab</span>
                                <span>Q</span>
                                <span>W</span>
                                <span>E</span>
                                <span>R</span>
                                <span>T</span>
                                <span>Y</span>
                                <span>U</span>
                                <span>I</span>
                                <span>O</span>
                                <span>P</span>
                                <span>[</span>
                                <span>]</span>
                                <span>\</span>
                            </div>
                            <!-- Row 3 -->
                            <div class="row">
                                <span class="capslock">Caps</span>
                                <span>A</span>
                                <span>S</span>
                                <span>D</span>
                                <span>F</span>
                                <span>G</span>
                                <span>H</span>
                                <span>J</span>
                                <span>K</span>
                                <span>L</span>
                                <span>;</span>
                                <span>'</span>
                                <span class="enter">Enter</span>
                            </div>
                            <!-- Row 4 -->
                            <div class="row">
                                <span class="shift1">Shift</span>
                                <span>~</span>
                                <span>Z</span>
                                <span>X</span>
                                <span>C</span>
                                <span>V</span>
                                <span>B</span>
                                <span>N</span>
                                <span>M</span>
                                <span>,</span>
                                <span>.</span>
                                <span>/</span>
                                <span class="shift2">Shift</span>
                            </div>
                            <!-- Row 5 -->
                            <div class="row">
                                <span>fn</span>
                                <span>Ctrl</span>
                                <span>Alt</span>
                                <span class="command">Com</span>
                                <span class="spacebar">Space</span>
                                <span class="command">Com</span>
                                <span>Alt</span>
                                <span>←</span>
                                <span>↑</span>
                                <span>→</span>
                            </div>
                        </div>
                        <div class="trackpad"></div>
                    </div>
                    <div class="top">
                        <!-- front -->
                        <div></div>
                        <!-- back -->
                        <div></div>
                        <!-- top -->
                        <div>
                            <img class="apple-logo" src="/images/apple-logo.webp">
                        </div>
                        <!-- bottom -->
                        <div>
                            <div class="screen">
                                <div class="video-container">
                                    <!-- <video src="images/codevideo.mp4" loop muted autoplay></video> -->
                                </div>
                            </div>
                        </div>
                        <!-- left -->
                        <div></div>
                        <!-- right -->
                        <div></div>
                    </div>
                </div>
                <!-- bottom -->
                <div>
                    <div class="feet front-left">
                        <!-- front -->
                        <div class="foot"></div>
                        <!-- back -->
                        <div class="foot"></div>
                        <!-- top -->
                        <div class="foot"></div>
                        <!-- bottom -->
                        <div class="foot"></div>
                        <!-- left -->
                        <div class="foot"></div>
                        <!-- right -->
                        <div class="foot"></div>
                    </div>

                    <div class="feet back-left">
                        <!-- front -->
                        <div class="foot"></div>
                        <!-- back -->
                        <div class="foot"></div>
                        <!-- top -->
                        <div class="foot"></div>
                        <!-- bottom -->
                        <div class="foot"></div>
                        <!-- left -->
                        <div class="foot"></div>
                        <!-- right -->
                        <div class="foot"></div>
                    </div>

                    <div class="feet front-right">
                        <!-- front -->
                        <div class="foot"></div>
                        <!-- back -->
                        <div class="foot"></div>
                        <!-- top -->
                        <div class="foot"></div>
                        <!-- bottom -->
                        <div class="foot"></div>
                        <!-- left -->
                        <div class="foot"></div>
                        <!-- right -->
                        <div class="foot"></div>
                    </div>

                    <div class="feet back-right">
                        <!-- front -->
                        <div class="foot"></div>
                        <!-- back -->
                        <div class="foot"></div>
                        <!-- top -->
                        <div class="foot"></div>
                        <!-- bottom -->
                        <div class="foot"></div>
                        <!-- left -->
                        <div class="foot"></div>
                        <!-- right -->
                        <div class="foot"></div>
                    </div>
                </div>
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

.laptop div:not(.keyboard-container div) {
    position: absolute;
    background-color: rgb(193, 193, 193);
}

.laptop {
    --animation-duration: 10s;

    --x: 50cqw;
    --y: 2cqw;
    --z: 35cqw;
}

@media (width < 900px) {
    .laptop {
        --x: 50cqh;
        --y: 2cqh;
        --z: 35cqh;
    }
}

.laptop-model {
    animation: spin-laptop var(--animation-duration) linear infinite;
    translate: 0 10cqw;
    /* transform: rotateY(0deg) rotateX(-20deg); */
}

.index .threeD .laptop-model {
    rotate: x -20deg;
}

@media (pointer: fine) {
    .index .threeD .laptop-model {
        rotate: x 0deg;
        transition: rotate var(--hp-duration) var(--hp-timing-function), translate 2.5s var(--hp-timing-function);
    }

    .index:has(li:hover) .threeD .laptop-model {
        rotate: x -20deg;
    }
}


@keyframes spin-laptop {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}

/* ========================== */
/* SHADING */
/* ========================== */

.laptop-model div:not(.keyboard-container):not(.keyboard-container div):not(.screen):not(.video-container):not(.reflection)::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
}

/* front */
.laptop-model div:nth-of-type(1)::before {
    opacity: .15;
    transition: opacity .6s linear;
}

/* back */
.laptop-model div:nth-of-type(2)::before {
    opacity: .4;
    transition: opacity .6s linear;
}

/* top */
.laptop-model div:nth-of-type(3)::before {
    opacity: 0;
    transition: opacity .6s linear;
}

/* bottom */
.laptop-model div:nth-of-type(4)::before {
    opacity: 0.6;
    transition: opacity .6s linear;
}

/* left right */
.laptop-model div:nth-of-type(5)::before,
.laptop-model div:nth-of-type(6)::before {
    opacity: .3;
    transition: opacity .6s linear;
}

/* open laptop lighting */
ul li:nth-of-type(1) .laptop-model .top>div:nth-of-type(1)::before {
    opacity: 0;
}

ul li:nth-of-type(1) .laptop-model .top>div:nth-of-type(3)::before {
    opacity: .4;
}

ul li:nth-of-type(1) .laptop-model .top>div:nth-of-type(4)::before {
    opacity: .15;
}

@media (pointer: fine) {
    ul li:nth-of-type(1) .laptop-model .top>div:nth-of-type(1)::before {
        opacity: .15;
    }

    ul li:nth-of-type(1) .laptop-model .top>div:nth-of-type(3)::before {
        opacity: 0;
    }

    ul li:nth-of-type(1) .laptop-model .top>div:nth-of-type(4)::before {
        opacity: 0.6;
    }

    /* open laptop lighting */
    ul li:nth-of-type(1):hover .laptop-model .top>div:nth-of-type(1)::before {
        opacity: 0;
    }

    ul li:nth-of-type(1):hover .laptop-model .top>div:nth-of-type(3)::before {
        opacity: .4;
    }

    ul li:nth-of-type(1):hover .laptop-model .top>div:nth-of-type(4)::before {
        opacity: .15;
    }
}


/* ============================================================================== */
/* BOTTOM */
/* ============================================================================== */

/* front */
.laptop-model .bottom>div:nth-of-type(1) {
    width: var(--x);
    height: var(--y);
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* back */
.laptop-model .bottom>div:nth-of-type(2) {
    width: var(--x);
    height: var(--y);
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / -2);
}

/* top */
.laptop-model .bottom>div:nth-of-type(3) {
    width: var(--x);
    height: var(--z);
    transform-origin: top;
    rotate: x 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / -2);
}

/* bottom */
.laptop-model .bottom>div:nth-of-type(4) {
    width: var(--x);
    height: var(--z);
    transform-origin: top;
    rotate: x 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / 2) calc(var(--z) / -2);
}

/* left */
.laptop-model .bottom>div:nth-of-type(5) {
    width: var(--z);
    height: var(--y);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / -2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* right */
.laptop-model .bottom>div:nth-of-type(6) {
    width: var(--z);
    height: var(--y);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / 2) calc(var(--y) / -2) calc(var(--z) / 2);
}

/* ============================================================================== */
/* TOP */
/* ============================================================================== */

.laptop-model .top {
    height: 100%;
    width: 100%;
    transform-origin: top;
    transition: all 1s ease;
    translate: 0;
    rotate: x 0deg;
}

ul li:nth-of-type(1) .laptop-model .top {
    rotate: x 110deg;
    translate: 0 calc(var(--y) / -2) -3px;
}

/* laptop open */
@media (pointer: fine) {
    ul li:nth-of-type(1) .laptop-model .top {
        rotate: x 0deg;
        translate: 0 0 0;
    }

    ul li:nth-of-type(1):hover .laptop-model .top {
        rotate: x 110deg;
        translate: 0 calc(var(--y) / -2) -3px;
    }
}

/* front */
.laptop-model .top>div:nth-of-type(1) {
    width: var(--x);
    height: var(--y);
    translate: 0 var(--z) calc(var(--y) * -.5);
    transform-origin: top;
    rotate: x 90deg;
}

/* back */
.laptop-model .top>div:nth-of-type(2) {
    width: var(--x);
    height: var(--y);
    translate: 0 0 calc(var(--y) * -.5);
    transform-origin: top;
    rotate: x 90deg;
}

/* top */
.laptop-model .top>div:nth-of-type(3) {
    width: var(--x);
    height: var(--z);
    translate: 0 0 calc(var(--y) / 2);
}

/* bottom */
.laptop-model .top>div:nth-of-type(4) {
    width: var(--x);
    height: var(--z);
    translate: 0 0 calc(var(--y) / -2);
}

/* left */
.laptop-model .top>div:nth-of-type(5) {
    width: var(--y);
    height: var(--z);
    transform-origin: left;
    rotate: y 90deg;
    translate: 0 0 calc(var(--y) / 2);
}

/* right */
.laptop-model .top>div:nth-of-type(6) {
    width: var(--y);
    height: var(--z);
    transform-origin: left;
    rotate: y 90deg;
    translate: var(--x) 0 calc(var(--y) / 2);
}

/* ============================================================================== */
/* LAPTOP BOTTOM */
/* ============================================================================== */

/* KEYBOARD */
.laptop-model .keyboard-container {
    font-family: system-ui, sans-serif;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.laptop-model .keyboard-container .keyboard {
    height: 65%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    user-select: none;
}

.keyboard .row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20%;
}

.keyboard .row span {
    background-color: rgb(20, 20, 20);
    color: white;
    transition: translate 1s;
}

.tab {
    padding: 1.9% 4% !important;
}

.capslock {
    padding: 1.9% 5% !important;
}

.shift1 {
    padding: 1.9% 3% !important;
}

.shift2 {
    padding: 1.9% 6% !important;
}

.command {
    padding: 1.9% 2% !important;
}

.spacebar {
    padding: 1.9% 14% !important;
}

.enter {
    padding: 1.9% 5% !important;
}

.backspace {
    padding: 1.9% 4% !important;
}

.keyboard span:hover {
    background-color: red;
}

/* TRACKPAD */
.laptop-model .keyboard-container .trackpad {
    height: 33%;
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e2a;
    border-radius: 4px;
    user-select: none;
}


/* KEYBOARD */
.laptop-model .keyboard-container {
    gap: 3%;
    padding: .75cqw;
}

.laptop-model .keyboard-container .keyboard {
    gap: .3cqw;
    padding: .4cqw;
    border-radius: .3cqw;
}

.keyboard .row span {
    display: flex;
    align-items: center;
    font-size: 1cqw;
    padding: 1.9% 2.3%;
}

@media (width < 900px) {
    .laptop-model .keyboard-container {
        gap: 3%;
        padding: .75cqh;
    }

    .laptop-model .keyboard-container .keyboard {
        gap: .3cqh;
        padding: .4cqh;
        border-radius: .3cqh;
    }

    .keyboard .row span {
        font-size: 1cqh;
        padding: 1.9% 2.3%;
    }
}

/* ============================================================================== */
/* SCREEN */
/* ============================================================================== */

.laptop-model .screen {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: #121212 !important;
    display: grid;
    place-items: center;
}

@property --gradient-position {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 100%;
}

@keyframes gradient-animation {
    0% {
        --gradient-position: 0%;
    }
}

.laptop-model .screen::before {
    content: '';
    z-index: 2;
    position: absolute;
    height: 100%;
    width: 100%;

    background: linear-gradient(145deg,
            rgba(0, 0, 0, 0) 45%,
            rgba(255, 255, 255, 1) 45%,
            rgba(255, 255, 255, 1) 55%,
            rgba(0, 0, 0, 0) 55%);
    background-size: 400%;
    background-position: var(--gradient-position);
    animation: gradient-animation var(--animation-duration) ease -3s infinite;

    opacity: .3 !important;
    mix-blend-mode: overlay;
}


.laptop-model .screen .video-container {
    height: 95%;
    width: 97.5%;
    border-radius: 3px;
    overflow: hidden;
    background-color: #212121 !important;

}

.laptop-model .screen .video-container video {
    height: 100%;
    width: auto;
    display: block;
    rotate: x 180deg;
}

/* ============================================================================== */
/* APPLE LOGO + REFLECTION */
/* ============================================================================== */

.laptop-model .apple-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: calc(100% / 6);
    aspect-ratio: 1;
    rotate: 180deg;
}

.laptop-model .top>div:nth-of-type(3)::after {
    content: '';
    z-index: 2;
    position: absolute;
    height: 100%;
    width: 100%;

    rotate: y 180deg;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 65%);
    background-size: 450%;
    background-position: var(--gradient-position);
    animation: gradient-animation var(--animation-duration) ease 2s infinite;

    opacity: .5 !important;
    mix-blend-mode: overlay;
}


/* ============================================================================== */
/* FEET */
/* ============================================================================== */

.laptop-model .feet {
    position: absolute;
    width: calc(var(--x) / 11);
    height: calc(var(--z) / 11);
}

/* FRONT LEFT */
.laptop-model .front-left {
    top: 5%;
    left: 2.5%;
}

/* BACK LEFT */
.laptop-model .back-left {
    bottom: 5%;
    left: 2.5%;
}

/* FRONT RIGHT */
.laptop-model .front-right {
    top: 5%;
    right: 2.5%;
}

/* BACK RIGHT */
.laptop-model .back-right {
    bottom: 5%;
    right: 2.5%;
}



.laptop-model .feet>div {
    background-color: #1e1e1e !important;
}

/* front */
.laptop-model .feet div:nth-of-type(1) {
    width: calc(var(--x) / 11);
    height: calc(var(--y) / 2);
    transform-origin: top;
    rotate: x 90deg;
    translate: 0 calc(var(--z) / 11) calc(var(--y) * -.5);
}

/* back */
.laptop-model .feet div:nth-of-type(2) {
    width: calc(var(--x) / 11);
    height: calc(var(--y) / 2);
    transform-origin: top;
    rotate: x 90deg;
    translate: 0 0 calc(var(--y) * -.5);
}

/* bottom */
.laptop-model .feet div:nth-of-type(4) {
    width: calc(var(--x) / 11);
    height: calc(var(--z) / 11);
    translate: 0 0 calc(var(--y) * -.5);
}

/* left */
.laptop-model .feet div:nth-of-type(5) {
    width: calc(var(--y) / 2);
    height: calc(var(--z) / 11);
    transform-origin: left;
    rotate: y 90deg;
    translate: 0 0 0;
}

/* right */
.laptop-model .feet div:nth-of-type(6) {
    width: calc(var(--y) / 2);
    height: calc(var(--z) / 11);
    transform-origin: left;
    rotate: y 90deg;
    translate: calc(var(--x) / 11) 0 0;
}
</style>