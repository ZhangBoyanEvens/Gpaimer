import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/ScrollTrigger/+esm'
import { initSmoothScroll } from './smooth-scroll.js'

const ASSET_VERSION = '35'

const SECTIONS = [
  { id: 'site-header', file: 'header.html', init: () => import('./header.js') },
  { id: 'section-hero', file: 'hero.html', init: () => import(`./hero.js?v=${ASSET_VERSION}`) },
  { id: 'section-trust', file: 'trust.html', init: () => import('./trust.js') },
  { id: 'section-collage', file: 'collage.html', init: () => import('./collage.js') },
  { id: 'section-manifesto', file: 'manifesto.html', init: () => import('./manifesto.js') },
  { id: 'section-brand-os', file: 'brand-os.html', init: () => import(`./brand-os.js?v=${ASSET_VERSION}`) },
  { id: 'section-studio', file: 'studio.html', init: () => import(`./studio.js?v=${ASSET_VERSION}`) },
  { id: 'section-testimonial', file: 'testimonial.html', init: () => import('./testimonial.js') },
  { id: 'section-updates', file: 'updates.html', init: () => import('./updates.js') },
  { id: 'site-footer', file: 'footer.html', init: () => import('./footer.js') },
]

let destroySmoothScroll = null

async function loadSection({ id, file, init }) {
  const mount = document.getElementById(id)
  if (!mount) return

  const response = await fetch(`sections/${file}?v=${ASSET_VERSION}`)
  if (!response.ok) throw new Error(`Failed to load ${file}`)

  mount.innerHTML = await response.text()

  const module = await init()
  const result = module.default?.(mount)
  if (result?.then) await result
}

async function boot() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reducedMotion) {
    gsap.registerPlugin(ScrollTrigger)
    destroySmoothScroll = initSmoothScroll(gsap, ScrollTrigger)
  }

  await Promise.all(SECTIONS.map(loadSection))

  if (!reducedMotion) {
    ScrollTrigger.refresh()
    try {
      const { initLumioBarba } = await import(`./lumio-barba.js?v=${ASSET_VERSION}`)
      initLumioBarba({
        onBeforeLeave: () => {
          destroySmoothScroll?.()
          destroySmoothScroll = null
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        },
      })
    } catch (error) {
      console.error('Page transition failed to initialize:', error)
    }
  }
}

boot().catch((error) => {
  console.error('Failed to load Lumio sections:', error)
})
