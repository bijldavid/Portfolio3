export default defineNuxtPlugin(() => {
    const isFirefox = navigator.userAgent.includes('Firefox')
    if (isFirefox) document.documentElement.classList.add('firefox')
})