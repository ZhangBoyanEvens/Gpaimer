import { getScrollY } from './smooth-scroll.js'

const LERP_SPEED = 0.18
const PARALLAX_FACTOR = 0.52

export default function initHero(root) {
  const section = root.querySelector('.lumio-hero')
  const media = root.querySelector('.lumio-hero__media')

  if (!section || !media) return undefined

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return undefined
  }

  let current = 0
  let target = 0
  let rafId = null
  let sectionTop = 0

  const measure = () => {
    sectionTop = section.getBoundingClientRect().top + getScrollY()
  }

  const getTarget = () => {
    const relativeScroll = Math.max(0, getScrollY() - sectionTop)
    const travel = Math.min(relativeScroll, section.offsetHeight)
    return travel * PARALLAX_FACTOR
  }

  const tick = () => {
    target = getTarget()
    current += (target - current) * LERP_SPEED
    media.style.transform = `translate3d(0, ${current}px, 0)`
    rafId = requestAnimationFrame(tick)
  }

  measure()
  tick()

  window.addEventListener('resize', measure, { passive: true })

  return () => {
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('resize', measure)
    media.style.transform = ''
  }
}
