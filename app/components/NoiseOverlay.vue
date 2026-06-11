<template>
    <span class="noise"></span>
</template>

<script>

</script>

<style>
.noise {
    pointer-events: none;
    position: fixed;
    background-image: url(../images/small_noise.gif);
    background-repeat: repeat;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    opacity: .025;
    z-index: 10000;
}
</style>