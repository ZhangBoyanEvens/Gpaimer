import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import { ScrollTrigger } from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/ScrollTrigger/+esm'
import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.1.20/+esm'

gsap.registerPlugin(ScrollTrigger)

const PANEL_LERP = 0.06
const SCROLL_SCRUB = 1.75
const SECTION_PIN_SCRUB = 2.6
const SECTION_PIN_DISTANCE_SCALE = 0.68
const SECTION_PIN_HOLD_VH = 0.08
const MARQUEE_SCRUB = 1.45
const SECTION_PIN_ID = 'brand-os-scroll-lock'

const easePinProgress = gsap.parseEase('sine.inOut')

function inverseEasePinProgress(value) {
  let low = 0
  let high = 1

  for (let i = 0; i < 14; i += 1) {
    const mid = (low + high) / 2
    if (easePinProgress(mid) < value) low = mid
    else high = mid
  }

  return (low + high) / 2
}

function preloadBackgrounds(root, selector) {
  const elements = [...root.querySelectorAll(selector)]

  return Promise.all(
    elements.map(
      (element) =>
        new Promise((resolve) => {
          const match = element.style.backgroundImage.match(/url\(["']?(.+?)["']?\)/)
          const url = match?.[1]

          if (!url) {
            resolve()
            return
          }

          const image = new Image()
          image.addEventListener('load', resolve, { once: true })
          image.addEventListener('error', resolve, { once: true })
          image.src = url
        }),
    ),
  )
}

function getRotateMetrics(rotate, scroller) {
  const style = getComputedStyle(rotate)
  const focusRatio = parseFloat(style.getPropertyValue('--rotate-focus-ratio')) || 0.5
  const focusY = scroller.clientHeight * focusRatio

  return { focusRatio, focusY }
}

function getImageScrollOffset(scroller, rotate, target) {
  const { focusY } = getRotateMetrics(rotate, scroller)
  const targetHeight = target.offsetHeight || target.getBoundingClientRect().height
  return -(focusY - targetHeight / 2)
}

function initPanelSmoothScroll(scroller, gallery) {
  const panelLenis = new Lenis({
    wrapper: scroller,
    content: gallery,
    lerp: PANEL_LERP,
    smoothWheel: false,
    wheelMultiplier: 0.82,
    touchMultiplier: 1.15,
    gestureOrientation: 'vertical',
  })

  scroller.classList.add('lumio-brand-os__rotate-scroller--smooth')

  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        panelLenis.scrollTo(value, { immediate: true })
      }

      return panelLenis.scroll
    },
    getBoundingClientRect() {
      return scroller.getBoundingClientRect()
    },
  })

  panelLenis.on('scroll', ScrollTrigger.update)

  const panelTick = (time) => {
    panelLenis.raf(time * 1000)
  }

  gsap.ticker.add(panelTick)

  return {
    lenis: panelLenis,
    destroy() {
      gsap.ticker.remove(panelTick)
      panelLenis.destroy()
      scroller.classList.remove('lumio-brand-os__rotate-scroller--smooth')
      ScrollTrigger.scrollerProxy(scroller, null)
    },
  }
}

function initSectionScrollLock({ section, scroller, gallery, panelLenis, onProgress }) {
  const getMaxScroll = () => {
    if (panelLenis && Number.isFinite(panelLenis.limit)) {
      return Math.max(0, panelLenis.limit)
    }

    const style = getComputedStyle(gallery)
    const marginTop = parseFloat(style.marginTop) || 0
    const marginBottom = parseFloat(style.marginBottom) || 0
    const contentHeight = gallery.scrollHeight + marginTop + marginBottom

    return Math.max(0, contentHeight - scroller.clientHeight)
  }

  const getPinHold = () => Math.round(window.innerHeight * SECTION_PIN_HOLD_VH)
  const getPinDistance = () => {
    const max = getMaxScroll()
    return Math.max(Math.round(max * SECTION_PIN_DISTANCE_SCALE) + getPinHold(), 1)
  }

  const setGalleryScroll = (value) => {
    const y = gsap.utils.clamp(0, getMaxScroll(), value)

    if (panelLenis) {
      panelLenis.scrollTo(y, { immediate: true })
    } else {
      scroller.scrollTop = y
    }

    return y
  }

  const trigger = ScrollTrigger.create({
    id: SECTION_PIN_ID,
    trigger: section,
    start: 'top top',
    end: () => `+=${getPinDistance()}`,
    pin: true,
    pinSpacing: true,
    scrub: SECTION_PIN_SCRUB,
    invalidateOnRefresh: true,
    anticipatePin: 0,
    onUpdate(self) {
      const max = getMaxScroll()
      if (max <= 0) return

      const distance = getPinDistance()
      const scrollPixels = Math.max(distance - getPinHold(), 1)
      const localProgress = Math.min(1, (self.progress * distance) / scrollPixels)
      const easedProgress = easePinProgress(localProgress)
      setGalleryScroll(easedProgress * max)
      onProgress?.()
    },
  })

  return {
    getMaxScroll,
    setGalleryScroll,
    syncMainScrollToGallery() {
      const max = getMaxScroll()
      if (max <= 0) return

      const current = panelLenis?.scroll ?? scroller.scrollTop
      const galleryProgress = current / max
      const linearProgress = inverseEasePinProgress(galleryProgress)
      const distance = getPinDistance()
      const scrollPixels = Math.max(distance - getPinHold(), 1)
      const pinProgress = (linearProgress * scrollPixels) / distance
      trigger.scroll(trigger.start + pinProgress * (trigger.end - trigger.start))
    },
    destroy() {
      trigger.kill()
    },
  }
}

// Button 1→img1, button 2→img2, button 3→img8 (1-based)
const FEATURE_IMAGE_INDEX = [0, 1, 7]
const PROGRAMMATIC_SCROLL_LOCK_MS = 1200

export function featureIndexToImageIndex(featureIndex) {
  return FEATURE_IMAGE_INDEX[featureIndex] ?? FEATURE_IMAGE_INDEX[0]
}

export function imageIndexToFeatureIndex(imageIndex) {
  let bestIndex = 0
  let bestDistance = Infinity

  FEATURE_IMAGE_INDEX.forEach((target, index) => {
    const distance = Math.abs(imageIndex - target)
    if (distance < bestDistance) {
      bestDistance = distance
      bestIndex = index
    }
  })

  return bestIndex
}

export async function initBrandOsRotate(root, { onActiveImageChange } = {}) {
  const section = root.querySelector('.lumio-brand-os')
  const rotate = root.querySelector('[data-brand-os-rotate]')
  if (!rotate || !section) return undefined

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scroller = rotate.querySelector('[data-brand-os-rotate-scroller]')
  const gallery = rotate.querySelector('[data-brand-os-rotate-gallery]')
  const marqueeInner = rotate.querySelector('.lumio-brand-os__rotate-mark-inner')

  if (!scroller || !gallery) return undefined

  await preloadBackgrounds(gallery, '.lumio-brand-os__rotate-item')

  let items = []
  let wraps = []
  let panelLenis = null
  let cleanupPanelScroll = null
  let sectionScrollLock = null

  if (!reducedMotion) {
    const panelScroll = initPanelSmoothScroll(scroller, gallery)
    panelLenis = panelScroll.lenis
    cleanupPanelScroll = panelScroll.destroy
  }

  const createGalleryWrappers = () => {
    items = gsap.utils.toArray('.lumio-brand-os__rotate-item', gallery)

    items.forEach((item) => {
      const wrapper = document.createElement('div')
      wrapper.classList.add('lumio-brand-os__rotate-item-wrap')
      item.parentNode.insertBefore(wrapper, item)
      wrapper.appendChild(item)
    })

    wraps = gsap.utils.toArray('.lumio-brand-os__rotate-item-wrap', gallery)
  }

  const positionGalleryItems = () => {
    const style = getComputedStyle(rotate)
    const amplitudeRatio = parseFloat(style.getPropertyValue('--rotate-x-amplitude')) || 0.14
    const amplitude = scroller.clientWidth * amplitudeRatio

    wraps.forEach((wrap, index) => {
      const angle = index * 0.45

      gsap.set(wrap, {
        x: Math.sin(angle) * amplitude,
      })
    })
  }

  const initGalleryAnimation = () => {
    items.forEach((item) => {
      const rotationX = gsap.utils.random(70, 120)
      const rotationY = gsap.utils.random(-20, 20)
      const rotationZ = gsap.utils.random(-20, 20)
      const setZ = gsap.quickSetter(item, 'z', 'px')

      gsap.fromTo(
        item,
        {
          rotationX,
          rotationY,
          rotationZ,
        },
        {
          rotationX: -rotationX,
          rotationY: -rotationY,
          rotationZ: -rotationZ,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            scroller,
            start: 'top bottom+=24%',
            end: 'bottom top-=24%',
            scrub: SCROLL_SCRUB,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const progress = self.progress
              const z = Math.sin(progress * Math.PI) * -50
              setZ(z)
            },
          },
        },
      )
    })
  }

  const animateMarquee = () => {
    if (!marqueeInner) return

    gsap
      .timeline({
        scrollTrigger: {
          trigger: gallery,
          scroller,
          start: 'top bottom',
          end: 'bottom top',
          scrub: MARQUEE_SCRUB,
        },
      })
      .fromTo(
        marqueeInner,
        {
          x: () => scroller.clientWidth,
        },
        {
          x: () => -marqueeInner.offsetWidth,
          ease: 'none',
        },
      )
  }

  const handleResize = () => {
    positionGalleryItems()
    ScrollTrigger.refresh()
  }

  items = gsap.utils.toArray('.lumio-brand-os__rotate-item', gallery)

  const targets = () => (wraps.length ? wraps : items)

  const getVisibleImageIndex = () => {
    const scrollerRect = scroller.getBoundingClientRect()
    const { focusY } = getRotateMetrics(rotate, scroller)
    const focusLine = scrollerRect.top + focusY
    let closestIndex = 0
    let closestDistance = Infinity

    targets().forEach((target, index) => {
      const rect = target.getBoundingClientRect()
      const targetCenterY = rect.top + rect.height / 2
      const distance = Math.abs(targetCenterY - focusLine)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    return closestIndex
  }

  let scrollLockUntil = 0
  let scrollRaf = null

  const emitActiveImage = () => {
    if (Date.now() < scrollLockUntil) return

    const imageIndex = getVisibleImageIndex()
    const featureIndex = imageIndexToFeatureIndex(imageIndex)
    onActiveImageChange?.(featureIndex, imageIndex)
  }

  const onScroll = () => {
    if (scrollRaf) return

    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = null
      emitActiveImage()
    })
  }

  const scrollToImage = (index, { animate = true } = {}) => {
    const target = wraps[index] ?? items[index]
    if (!target) return

    const offset = getImageScrollOffset(scroller, rotate, target)
    const useAnimation = animate && !reducedMotion

    scrollLockUntil = Date.now() + (useAnimation ? PROGRAMMATIC_SCROLL_LOCK_MS : 80)

    if (panelLenis) {
      panelLenis.scrollTo(target, {
        offset,
        duration: useAnimation ? 1.1 : 0,
        immediate: !useAnimation,
        onComplete: () => {
          sectionScrollLock?.syncMainScrollToGallery()
          emitActiveImage()
        },
      })
      return
    }

    const top = target.offsetTop + offset
    scroller.scrollTo({
      top: Math.max(0, top),
      behavior: useAnimation ? 'smooth' : 'instant',
    })

    if (useAnimation) {
      window.setTimeout(() => {
        sectionScrollLock?.syncMainScrollToGallery()
        emitActiveImage()
      }, PROGRAMMATIC_SCROLL_LOCK_MS)
    } else {
      sectionScrollLock?.syncMainScrollToGallery()
      emitActiveImage()
    }
  }

  let ctx = null

  if (!reducedMotion) {
    ctx = gsap.context(() => {
      createGalleryWrappers()
      positionGalleryItems()
      initGalleryAnimation()
      animateMarquee()
      sectionScrollLock = initSectionScrollLock({
        section,
        scroller,
        gallery,
        panelLenis,
        onProgress: emitActiveImage,
      })
      window.addEventListener('resize', handleResize, { passive: true })
    }, rotate)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      emitActiveImage()
    })
  } else {
    requestAnimationFrame(() => {
      emitActiveImage()
    })
  }

  if (panelLenis) {
    panelLenis.on('scroll', onScroll)
  } else {
    scroller.addEventListener('scroll', onScroll, { passive: true })
  }

  return {
    scrollToImage,
    destroy() {
      if (scrollRaf) {
        cancelAnimationFrame(scrollRaf)
        scrollRaf = null
      }

      if (panelLenis) {
        panelLenis.off('scroll', onScroll)
      } else {
        scroller.removeEventListener('scroll', onScroll)
      }

      window.removeEventListener('resize', handleResize)
      sectionScrollLock?.destroy()
      cleanupPanelScroll?.()
      ctx?.revert()
    },
  }
}
