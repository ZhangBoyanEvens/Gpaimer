import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.14.2/+esm'
import { featureIndexToImageIndex, initBrandOsRotate } from './brand-os-rotate.js?v=15'

export default async function initBrandOs(root) {
  const section = root.querySelector('.lumio-brand-os') || root
  const features = [...section.querySelectorAll('.lumio-brand-os__feature')]
  const rail = section.querySelector('.lumio-brand-os__rail')
  const indicator = section.querySelector('.lumio-brand-os__indicator')

  if (!features.length || !rail || !indicator) return

  let activeIndex = features.findIndex((feature) => feature.classList.contains('is-active'))
  if (activeIndex < 0) activeIndex = 0

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const measure = (index) => {
    const feature = features[index]
    if (!feature) return null

    const railRect = rail.getBoundingClientRect()
    const featureRect = feature.getBoundingClientRect()

    return {
      y: featureRect.top - railRect.top,
      height: featureRect.height,
    }
  }

  const syncIndicator = (index, animate = true) => {
    const metrics = measure(index)
    if (!metrics) return

    const { y, height } = metrics

    if (reducedMotion || !animate) {
      gsap.set(indicator, { y, height, clearProps: 'scale,scaleX,scaleY' })
      return
    }

    gsap.to(indicator, {
      y,
      height,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: true,
    })
  }

  const setActiveFeature = (index, { animate = true } = {}) => {
    activeIndex = index

    features.forEach((feature, i) => {
      const isActive = i === index
      feature.classList.toggle('is-active', isActive)
      feature.setAttribute('aria-pressed', String(isActive))
    })

    syncIndicator(index, animate)
  }

  const activateFromClick = (index, { animate = true } = {}) => {
    setActiveFeature(index, { animate })
    rotateApi?.scrollToImage?.(featureIndexToImageIndex(index), { animate })
  }

  features.forEach((feature, index) => {
    feature.addEventListener('click', () => {
      if (index === activeIndex) return

      feature.classList.add('is-pressing')
      window.setTimeout(() => feature.classList.remove('is-pressing'), 160)
      activateFromClick(index, { animate: true })
    })

    feature.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      feature.click()
    })
  })

  const handleLayout = () => syncIndicator(activeIndex, false)

  window.addEventListener('resize', handleLayout, { passive: true })
  window.addEventListener('load', handleLayout, { passive: true })

  requestAnimationFrame(() => {
    syncIndicator(activeIndex, false)
  })

  const rotateApi = await initBrandOsRotate(root, {
    onActiveImageChange: (featureIndex) => {
      if (featureIndex === activeIndex) return
      setActiveFeature(featureIndex, { animate: true })
    },
  })

  return () => {
    window.removeEventListener('resize', handleLayout)
    window.removeEventListener('load', handleLayout)
    rotateApi?.destroy?.()
  }
}
