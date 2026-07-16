import { getScrollY } from './smooth-scroll.js'

const LERP_SPEED = 0.18
// 0.8× faster than previous 0.52 → 0.52 * 1.8
const PARALLAX_FACTOR = 0.936

export default function initHero(root) {
  const section = root.querySelector('.lumio-hero')
  const visual = root.querySelector('.lumio-hero__visual')
  const media = root.querySelector('.lumio-hero__media')

  if (!section || !visual || !media) return undefined

  const applyLayout = () => {
    const visualTop = visual.getBoundingClientRect().top
    visual.style.setProperty('--hero-visual-y', `${visualTop}px`)
  }

  const applyTransform = (offsetY = 0) => {
    media.style.transform = offsetY ? `translate3d(0, ${offsetY}px, 0)` : ''
  }

  applyLayout()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('resize', applyLayout, { passive: true })
    media.querySelector('.lumio-hero__img--p2')?.addEventListener('load', applyLayout, { once: true })
    media.querySelector('.lumio-hero__img--p1')?.addEventListener('load', applyLayout, { once: true })

    return () => {
      window.removeEventListener('resize', applyLayout)
    }
  }

  let current = 0
  let target = 0
  let rafId = null
  let sectionTop = 0

  const measure = () => {
    sectionTop = section.getBoundingClientRect().top + getScrollY()
    applyLayout()
  }

  const getTarget = () => {
    const relativeScroll = Math.max(0, getScrollY() - sectionTop)
    const travel = Math.min(relativeScroll, section.offsetHeight)
    return travel * PARALLAX_FACTOR
  }

  const tick = () => {
    target = getTarget()
    current += (target - current) * LERP_SPEED
    applyTransform(current)
    rafId = requestAnimationFrame(tick)
  }

  measure()
  tick()

  window.addEventListener('resize', measure, { passive: true })
  media.querySelector('.lumio-hero__img--p2')?.addEventListener('load', measure, { once: true })
  media.querySelector('.lumio-hero__img--p1')?.addEventListener('load', measure, { once: true })

  return () => {
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('resize', measure)
    media.style.transform = ''
    visual.style.removeProperty('--hero-visual-y')
  }
}
