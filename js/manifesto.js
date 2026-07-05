import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/+esm'
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/ScrollTrigger/+esm'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_SCRUB = 1.2

export default function initManifesto(mount) {
  const root = mount.querySelector('.lumio-manifesto') || mount
  const mark = root.querySelector('[data-manifesto-mark]')
  const overlay = mark?.querySelector('.lumio-manifesto__mark-overlay')

  if (!mark || !overlay) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    mark.classList.add('is-selected')
    return
  }

  gsap.fromTo(
    overlay,
    { clipPath: 'inset(0 100% 100% 0)' },
    {
      clipPath: 'inset(0 0% 0% 0)',
      ease: 'none',
      scrollTrigger: {
        trigger: mark,
        start: 'top 82%',
        end: 'top 56%',
        scrub: SCROLL_SCRUB,
      },
    },
  )
}
