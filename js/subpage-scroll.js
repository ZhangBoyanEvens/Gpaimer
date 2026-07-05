const HERO_SCROLL_DISTANCE = () => window.innerHeight
const HERO_SCROLL_DURATION = 1.4
const READY_MAX_ATTEMPTS = 80
const LAYOUT_READY_ATTEMPTS = 15

function getSmoother() {
  return window.__lumioGalleryApp?.scroll?.s ?? null
}

function isLayoutReady(target) {
  const content = document.getElementById('smooth-content')
  const height = content?.scrollHeight ?? 0
  return height > target * 1.25
}

function canScrollTo(smoother, target, attempts) {
  const max = smoother.maxScroll?.()
  if (typeof max === 'number' && max > 0) {
    return max >= target * 0.25
  }

  if (isLayoutReady(target)) return true
  return attempts >= LAYOUT_READY_ATTEMPTS
}

function scrollWithSmoother(smoother, target) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    smoother.scrollTo(target, false)
    return
  }

  smoother.scrollTo(target, HERO_SCROLL_DURATION)
}

export function scrollPastHero({ attempts = 0 } = {}) {
  if (window.__lumioHeroScrolled) return

  const target = HERO_SCROLL_DISTANCE()
  const smoother = getSmoother()

  if (!smoother || !canScrollTo(smoother, target, attempts)) {
    if (attempts < READY_MAX_ATTEMPTS) {
      requestAnimationFrame(() => scrollPastHero({ attempts: attempts + 1 }))
    }
    return
  }

  window.__lumioHeroScrolled = true
  sessionStorage.removeItem('lumio-scroll-past-hero')
  scrollWithSmoother(smoother, target)
}
