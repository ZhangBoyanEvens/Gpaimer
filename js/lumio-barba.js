import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import barba from './vendor/barba/barba.js'
import { SplitText } from './vendor/gsap/SplitText.js'
import CustomEase from './vendor/gsap/CustomEase.js'
import MotionText from './motion-text.js?v=18'
import {
  GALLERY_BUNDLE,
  injectSubpageAssets,
  isSubpageLink,
  setSubpageHeroLabel,
} from './transition-shared.js'
import { scrollPastHero } from './subpage-scroll.js?v=21'

const select = (selector) => document.querySelector(selector)

class LumioBarba {
  constructor({ onBeforeLeave } = {}) {
    this.onBeforeLeave = onBeforeLeave
    this.motionTexts = new MotionText()
    this.transitionOverlay = select('.transition__overlay')
    this.titleDestination = select('.transition__overlay .title__destination')
    this.barbaWrapper = select("[data-barba='wrapper']")
    this.splitTitleDestination = null
    this.percentageVerticalClip = 0

    if (!this.transitionOverlay || !this.titleDestination || !this.barbaWrapper) return

    gsap.registerPlugin(SplitText, CustomEase)
    CustomEase.create('hop', '0.56, 0, 0.35, 0.98')

    this.refreshClipPercentage()
    window.addEventListener('resize', () => this.refreshClipPercentage())

    this.prepareTitleSplit()
    this.init()
  }

  prepareTitleSplit() {
    if (!this.titleDestination) return

    if (this.splitTitleDestination) {
      this.splitTitleDestination.revert()
      this.splitTitleDestination = null
    }

    this.splitTitleDestination = new SplitText(this.titleDestination, {
      type: 'words',
      mask: 'words',
      wordsClass: 'words',
    })

    gsap.set(this.splitTitleDestination.words, { yPercent: 0 })
    this.refreshClipPercentage()
  }

  refreshClipPercentage() {
    if (!this.titleDestination) return
    const height =
      this.titleDestination.offsetHeight || this.titleDestination.getBoundingClientRect().height
    const halfHeightTitleDestination = height / 2 || 16
    const halfHeightViewport = window.innerHeight / 2
    this.percentageVerticalClip = Math.max(
      3,
      (halfHeightTitleDestination / halfHeightViewport) * 50,
    )
  }

  clipPolygon(left, top, right, bottom) {
    return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`
  }

  init() {
    barba.init({
      transitions: [
        {
          name: 'example-4-transition',
          from: { namespace: ['lumio'] },
          to: {
            custom: (data) => isSubpageLink(data.trigger?.href || data.next?.url?.href || ''),
          },
          before: (data) => {
            window.__lumioHeroScrolled = false
            sessionStorage.setItem('lumio-scroll-past-hero', '1')
            this.barbaWrapper.classList.add('is__transitioning')
            this.onBeforeLeave?.()

            this.transitionOverlay.classList.add('team__transition')
            this.refreshClipPercentage()

            const p = this.percentageVerticalClip
            gsap.set(this.transitionOverlay, {
              clipPath: this.clipPolygon(0, 50 - p, 0, 50 + p),
              clearProps: 'opacity',
            })
          },
          beforeEnter: (data) => {
            setSubpageHeroLabel(data.next.container, data.next.url.href)
            document.title = new DOMParser()
              .parseFromString(data.next.html, 'text/html')
              .title
            window.scrollTo(0, 0)
          },
          leave: () => {
            const tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: 'expo.inOut',
              },
              onComplete: () => tl.kill(),
            })

            const p = this.percentageVerticalClip

            gsap.set(this.transitionOverlay, {
              pointerEvents: 'auto',
              autoAlpha: 1,
              visibility: 'visible',
            })

            tl.to(this.transitionOverlay, {
              clipPath: this.clipPolygon(0, 50 - p, 100, 50 + p),
            })

            tl.to(this.transitionOverlay, {
              clipPath: this.clipPolygon(0, 0, 100, 100),
            })

            return new Promise((resolve) => {
              tl.call(() => {
                this.motionTexts.destroy()
                resolve()
              })
            })
          },
          after: (data) => {
            return new Promise((resolve) => {
              const tl = gsap.timeline({
                defaults: {
                  duration: 1,
                  ease: 'hop',
                },
                onComplete: () => {
                  gsap.set(this.splitTitleDestination?.words, { yPercent: 0 })

                  gsap.set(this.transitionOverlay, {
                    pointerEvents: 'none',
                    autoAlpha: 0,
                    visibility: 'hidden',
                    clearProps: 'clipPath',
                  })

                  this.transitionOverlay.classList.remove('team__transition')
                  this.barbaWrapper.classList.remove('is__transitioning')
                  tl.kill()

                  this.prepareTitleSplit()

                  injectSubpageAssets(data.next.html)

                  barba.destroy()
                  import(GALLERY_BUNDLE)
                    .then(() => {
                      const app = window.bootstrapGalleryApp?.()
                      app?.scroll?.s?.refresh?.()
                      requestAnimationFrame(() => {
                        requestAnimationFrame(() => scrollPastHero())
                      })
                    })
                    .catch(() => {})
                    .finally(() => resolve())
                },
              })

              tl.to(this.splitTitleDestination.words, {
                yPercent: -120,
                duration: 0.5,
                stagger: { amount: 0.25 },
                ease: 'elastic.in(1, 1)',
              })

              tl.to(
                this.transitionOverlay,
                {
                  clipPath: this.clipPolygon(0, 0, 100, 0),
                  onStart: () => {
                    this.motionTexts.init(data.next.container)
                    this.motionTexts.animationIn()
                  },
                },
                '<+0.25',
              )
            })
          },
        },
      ],
    })

    ;['/bg/', '/arch/', '/model/'].forEach((url) => barba.prefetch(url))
  }
}

export function initLumioBarba(options) {
  return new LumioBarba(options)
}
