import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/+esm'
import { initStudioBlinds } from './studio-blinds.js'

export default function initStudio(root) {
  const tabs = root.querySelectorAll('.lumio-studio__tab')
  const copies = [...root.querySelectorAll('[data-studio-copy]')]
  const blindsApi = initStudioBlinds(root)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let activeCopyKey = copies.find((copy) => copy.classList.contains('is-active'))?.dataset.studioCopy || 'exterior'
  let copyTimeline = null

  const setCopyState = (key, { animate = true } = {}) => {
    const next = copies.find((copy) => copy.dataset.studioCopy === key)
    const current = copies.find((copy) => copy.dataset.studioCopy === activeCopyKey)

    if (!next || key === activeCopyKey) return

    copyTimeline?.kill()

    if (!animate || reducedMotion || !current) {
      copies.forEach((copy) => {
        const isActive = copy === next
        copy.classList.toggle('is-active', isActive)
        gsap.set(copy, { opacity: isActive ? 1 : 0, y: 0, visibility: isActive ? 'visible' : 'hidden' })
      })
      activeCopyKey = key
      return
    }

    next.classList.add('is-active')
    gsap.set(next, { opacity: 0, y: 12, visibility: 'visible' })

    copyTimeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        current.classList.remove('is-active')
        gsap.set(current, { visibility: 'hidden', y: 0 })
        gsap.set(next, { clearProps: 'transform' })
        activeCopyKey = key
        copyTimeline = null
      },
    })

    copyTimeline
      .to(current, { opacity: 0, y: -10, duration: 0.28, ease: 'power2.in' }, 0)
      .to(next, { opacity: 1, y: 0, duration: 0.42 }, 0.14)
  }

  const setActiveTab = (tab) => {
    const key = tab.dataset.tab

    tabs.forEach((item) => {
      const isActive = item === tab
      item.classList.toggle('is-active', isActive)
      item.classList.toggle('font-bold', isActive)
      item.classList.toggle('border-b-2', isActive)
      item.classList.toggle('border-accent', isActive)
      item.classList.toggle('text-text', isActive)
      item.classList.toggle('font-semibold', !isActive)
      item.classList.toggle('text-muted', !isActive)
      item.setAttribute('aria-selected', String(isActive))
    })

    setCopyState(key, { animate: true })
    blindsApi?.transitionTo(key)
  }

  copies.forEach((copy) => {
    const isActive = copy.classList.contains('is-active')
    gsap.set(copy, { opacity: isActive ? 1 : 0, y: 0, visibility: isActive ? 'visible' : 'hidden' })
  })

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setActiveTab(tab)
    })
  })

  return () => {
    copyTimeline?.kill()
    blindsApi?.destroy?.()
  }
}
