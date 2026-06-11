import { nextTick } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const selector = 'h1, h2, h3, small, li, p'
  const ignoreSelector = '.reveal-ignore, [data-reveal-ignore], li > *'

  if (!('IntersectionObserver' in window)) {
    return
  }

  const observed = new WeakSet()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending-reveal')

        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.05 })

  const registerTargets = async () => {
    await nextTick()

    document.querySelectorAll(selector).forEach((element) => {
      if (element.matches(ignoreSelector) || element.closest(ignoreSelector)) {
        element.classList.remove('is-pending-reveal')
        return
      }

      if (observed.has(element)) {
        return
      }

      observed.add(element)

      if (!reduceMotion) {
        element.classList.add('is-pending-reveal')
      }

      observer.observe(element)
    })
  }

  nuxtApp.hook('app:mounted', registerTargets)
  nuxtApp.hook('page:finish', registerTargets)
})