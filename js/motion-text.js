import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import { SplitText } from './vendor/gsap/SplitText.js'

const setClassSplitText = (type) => {
  if (type === 'lines') return { linesClass: 'lines' }
  if (type === 'words') return { wordsClass: 'words' }
  return { charsClass: 'chars' }
}

export default class MotionText {
  elements = []
  splitText = []
  splitTextTween = []

  init(container) {
    this.elements = container
      ? container.querySelectorAll('[data-motion-text]')
      : document.querySelectorAll('[data-motion-text]')

    this.elements.forEach((element) => {
      const duration =
        parseFloat(element.getAttribute('data-motion-text-duration')) || 0.6

      if (!element.hasAttribute('data-motion-text-split')) return

      const splitType = element.getAttribute('data-motion-text-split') || 'lines'
      const staggers =
        parseFloat(element.getAttribute('data-motion-text-stagger')) || 0.05

      const split = new SplitText(element, {
        type: splitType,
        mask: splitType,
        ...setClassSplitText(splitType),
      })

      gsap.set(split[splitType], { yPercent: 120 })
      gsap.set(element, { visibility: 'visible' })

      this.splitText.push({
        el: element,
        split,
        duration,
        staggers,
        splitType,
      })
    })
  }

  animationIn() {
    this.splitText.forEach(({ split, duration, staggers, splitType, el }) => {
      const isSubpageHero = el?.hasAttribute('data-subpage-hero-title')

      const tween = gsap.to(split[splitType], {
        yPercent: 0,
        duration,
        stagger: staggers,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(split[splitType], {
            yPercent: 0,
            clearProps: isSubpageHero ? 'transform' : undefined,
          })
        },
      })

      this.splitTextTween.push(tween)
    })
  }

  destroy() {
    if (
      this.splitText.length === 0 &&
      this.splitTextTween.length === 0 &&
      this.elements.length === 0
    ) {
      return
    }

    this.splitText.forEach(({ split }) => {
      split.revert()
    })

    this.splitTextTween.forEach((tween) => {
      tween.kill()
    })

    this.splitTextTween = []
    this.elements = []
    this.splitText = []
  }
}
