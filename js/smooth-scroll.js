import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.1.20/+esm'

let lenisInstance = null

export function getScrollY() {
  return lenisInstance?.scroll ?? window.scrollY
}

/**
 * Smooth scroll + GSAP sync — same pattern as Ws_FinDoc VetraOverview.
 * https://github.com/ZhangBoyanEvens/Ws_FinDoc
 */
export function initSmoothScroll(gsap, ScrollTrigger) {
  const lenis = new Lenis({
    lerp: 0.17,
    smoothWheel: true,
    wheelMultiplier: 0.92,
    touchMultiplier: 1.35,
  })

  lenisInstance = lenis

  const lenisTick = (time) => {
    lenis.raf(time * 1000)
  }

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add(lenisTick)
  gsap.ticker.lagSmoothing(0)

  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scrollTo(value, { immediate: true })
      }
      return lenis.scroll
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
  })

  document.documentElement.classList.add('lenis', 'lenis-smooth')

  return () => {
    gsap.ticker.remove(lenisTick)
    ScrollTrigger.scrollerProxy(document.documentElement, null)
    lenis.destroy()
    lenisInstance = null
    document.documentElement.classList.remove('lenis', 'lenis-smooth')
  }
}
