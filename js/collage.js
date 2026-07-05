import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/+esm'
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/ScrollTrigger/+esm'
import { Flip } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/Flip/+esm'
import { mountCollageCardExpand } from './collage-expand-effect.js'

gsap.registerPlugin(ScrollTrigger, Flip)

const SCROLL_SCRUB = 1.2

const SCROLL_OFFSETS = [
  { start: 'top bottom', end: 'center top' },
  { start: 'top 98%', end: 'top 38%' },
  { start: 'top 96%', end: 'top 36%' },
  { start: 'top 94%', end: 'top 34%' },
  { start: 'top 92%', end: 'top 32%' },
  { start: 'top 90%', end: 'top 30%' },
  { start: 'top 88%', end: 'top 28%' },
]

function preloadImages(root) {
  const images = [...root.querySelectorAll('img')]

  return Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve()
            return
          }

          img.addEventListener('load', resolve, { once: true })
          img.addEventListener('error', resolve, { once: true })
        }),
    ),
  )
}

function initTitleScroll(root) {
  const title = root.querySelector('.lumio-collage__title')
  const copy = root.querySelector('.lumio-collage__copy')

  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0.28, y: 28 },
      {
        opacity: 1,
        y: 0,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          end: 'top 38%',
          scrub: SCROLL_SCRUB,
        },
      },
    )
  }

  if (copy) {
    gsap.fromTo(
      copy,
      { opacity: 0.2, y: 16 },
      {
        opacity: 1,
        y: 0,
        ease: 'sine.inOut',
        scrollTrigger: {
          trigger: root,
          start: 'top 72%',
          end: 'top 34%',
          scrub: SCROLL_SCRUB,
        },
      },
    )
  }
}

export default async function initCollage(root) {
  const cards = root.querySelectorAll('[data-collage-expand]')

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    cards.forEach((card) => card.classList.add('lumio-collage__card--open'))
    return
  }

  globalThis.gsap = gsap
  globalThis.ScrollTrigger = ScrollTrigger
  globalThis.Flip = Flip

  await preloadImages(root)

  cards.forEach((card, index) => {
    const offsets = SCROLL_OFFSETS[index % SCROLL_OFFSETS.length]
    mountCollageCardExpand(card, Flip, { ...offsets, scrub: SCROLL_SCRUB })

    const badge = card.querySelector('.lumio-collage__badge')
    if (badge) {
      gsap.fromTo(
        badge,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'sine.out',
          scrollTrigger: {
            trigger: card,
            start: offsets.end,
            end: 'top 24%',
            scrub: SCROLL_SCRUB * 0.85,
          },
        },
      )
    }
  })

  initTitleScroll(root)
}
