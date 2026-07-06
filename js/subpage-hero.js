import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import { SplitText } from './vendor/gsap/SplitText.js'
import MotionText from './motion-text.js?v=18'
import { PAGE_CONFIG, normalizePath } from './transition-shared.js'
import { initSubpageNav } from './subpage-nav.js?v=22'

const HERO_SCROLL_DURATION = 1.4
const SMOOTHER_READY_ATTEMPTS = 80

function getSmoother() {
  return window.__lumioGalleryApp?.scroll?.s ?? null
}

function scrollPastHero({ attempts = 0 } = {}) {
  const target = window.innerHeight
  const smoother = getSmoother()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!smoother && attempts < SMOOTHER_READY_ATTEMPTS) {
    requestAnimationFrame(() => scrollPastHero({ attempts: attempts + 1 }))
    return
  }

  if (smoother) {
    smoother.scrollTo(target, reducedMotion ? false : HERO_SCROLL_DURATION)
    return
  }

  window.scrollTo({
    top: target,
    behavior: reducedMotion ? 'instant' : 'smooth',
  })
}

export function initSubpageScrollCue(root = document) {
  const cue = root.querySelector('.page-hero__scroll-cue')
  if (!cue || cue.dataset.bound === 'true') return

  cue.dataset.bound = 'true'
  cue.addEventListener('click', () => scrollPastHero())
}

function initDirectSubpageHero() {
  const heroTitle = document.querySelector('[data-subpage-hero-title]')
  if (!heroTitle) return

  const config = PAGE_CONFIG[normalizePath(window.location.pathname)]
  if (!config) return

  heroTitle.textContent = config.label
  initSubpageNav()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(heroTitle, { visibility: 'visible' })
    initSubpageScrollCue()
    return
  }

  gsap.registerPlugin(SplitText)

  const motionTexts = new MotionText()
  motionTexts.init(document)
  motionTexts.animationIn()
  initSubpageScrollCue()
}

if (!document.querySelector('[data-barba-namespace="lumio"]')) {
  initDirectSubpageHero()
}
