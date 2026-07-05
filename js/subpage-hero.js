import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import { SplitText } from './vendor/gsap/SplitText.js'
import MotionText from './motion-text.js?v=18'
import { PAGE_CONFIG, normalizePath } from './transition-shared.js'
import { scrollPastHero } from './subpage-scroll.js?v=21'

function scheduleHeroScrollFromTransition() {
  if (!sessionStorage.getItem('lumio-scroll-past-hero')) return
  sessionStorage.removeItem('lumio-scroll-past-hero')

  const wait = (attempt = 0) => {
    if (window.__lumioGalleryApp?.scroll?.s || attempt > 120) {
      scrollPastHero()
      return
    }
    requestAnimationFrame(() => wait(attempt + 1))
  }

  wait()
}

function initDirectSubpageHero() {
  const heroTitle = document.querySelector('[data-subpage-hero-title]')
  if (!heroTitle) return

  const config = PAGE_CONFIG[normalizePath(window.location.pathname)]
  if (!config) return

  heroTitle.textContent = config.label

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(heroTitle, { visibility: 'visible' })
    return
  }

  gsap.registerPlugin(SplitText)

  const motionTexts = new MotionText()
  motionTexts.init(document)
  motionTexts.animationIn()
}

if (!document.querySelector('[data-barba-namespace="lumio"]')) {
  initDirectSubpageHero()
  scheduleHeroScrollFromTransition()
}
