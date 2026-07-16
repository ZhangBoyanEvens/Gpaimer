import { gsap } from 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/+esm'

const BLIND_COUNT = 24
const SVG_NS = 'http://www.w3.org/2000/svg'
const TAB_ORDER = ['southwest', 'west', 'northwest', 'east']
const IMAGES = [
  'assets/images/studio/1.webp?v=29',
  'assets/images/studio/2.webp?v=29',
  'assets/images/studio/3.webp?v=29',
  'assets/images/studio/4.webp?v=29',
]

function tabToIndex(tab) {
  return TAB_ORDER.indexOf(tab)
}

function createBlinds(group, vbHeight) {
  if (!group) return null

  group.innerHTML = ''

  const stripHeight = vbHeight / BLIND_COUNT
  const blinds = []
  let currentY = 0

  for (let i = 0; i < BLIND_COUNT; i++) {
    const centerY = vbHeight - (currentY + stripHeight / 2)

    const rectTop = document.createElementNS(SVG_NS, 'rect')
    const rectBottom = document.createElementNS(SVG_NS, 'rect')

    ;[rectTop, rectBottom].forEach((rect) => {
      rect.setAttribute('x', '0')
      rect.setAttribute('width', '100')
      rect.setAttribute('height', '0')
      rect.setAttribute('fill', 'white')
      rect.setAttribute('shape-rendering', 'crispEdges')
    })

    rectTop.setAttribute('y', String(centerY))
    rectBottom.setAttribute('y', String(centerY))

    group.appendChild(rectTop)
    group.appendChild(rectBottom)

    blinds.push({
      top: rectTop,
      bottom: rectBottom,
      y: centerY,
      h: stripHeight / 2,
    })

    currentY += stripHeight
  }

  return blinds
}

function blindElements(blinds) {
  return blinds.flatMap((blind) => [blind.top, blind.bottom])
}

function openBlinds(blinds, { duration = 0.75, stagger = 0.016 } = {}) {
  return gsap.to(blindElements(blinds), {
    attr: {
      y: (index) => {
        const blind = blinds[Math.floor(index / 2)]
        return index % 2 === 0 ? blind.y - blind.h : blind.y
      },
      height: (index) => {
        const blind = blinds[Math.floor(index / 2)]
        return blind.h + 0.01
      },
    },
    ease: 'power3.out',
    duration,
    stagger: {
      each: stagger,
      from: 'start',
    },
  })
}

function setBlindsClosed(blinds) {
  blinds.forEach((blind) => {
    blind.top.setAttribute('y', String(blind.y))
    blind.top.setAttribute('height', '0')
    blind.bottom.setAttribute('y', String(blind.y))
    blind.bottom.setAttribute('height', '0')
  })
}

export function initStudioBlinds(root) {
  const viewer = root.querySelector('[data-studio-blinds]')
  if (!viewer) return undefined

  const baseLayer = viewer.querySelector('.lumio-studio__layer--base')
  const topLayer = viewer.querySelector('.lumio-studio__layer--top')
  const baseImage = viewer.querySelector('[data-studio-base]')
  const topImage = viewer.querySelector('[data-studio-top]')
  const blindGroup = viewer.querySelector('#studio-blinds-transition')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!baseLayer || !topLayer || !baseImage || !topImage || !blindGroup) return undefined

  let blinds = []
  let visualIndex = 0
  let transitionTimeline = null

  const getViewBoxHeight = () => {
    const width = viewer.clientWidth || 1
    const height = viewer.clientHeight || 1
    return (height / width) * 100
  }

  const setImage = (index) => {
    const src = IMAGES[index]
    baseImage.setAttribute('href', src)
    topImage.setAttribute('href', src)
  }

  const resetView = (index) => {
    setImage(index)
    setBlindsClosed(blinds)
  }

  const killTransition = () => {
    transitionTimeline?.kill()
    transitionTimeline = null

    if (blinds.length) {
      gsap.killTweensOf(blindElements(blinds))
    }
  }

  const updateLayout = () => {
    const vbHeight = getViewBoxHeight()

    ;[baseLayer, topLayer].forEach((layer) => {
      layer.setAttribute('viewBox', `0 0 100 ${vbHeight}`)

      const maskRect = layer.querySelector('mask rect')
      if (maskRect) {
        maskRect.setAttribute('width', '100')
        maskRect.setAttribute('height', String(vbHeight))
      }

      const image = layer.querySelector('image')
      if (image) {
        image.setAttribute('width', '100')
        image.setAttribute('height', String(vbHeight))
      }
    })

    killTransition()
    blinds = createBlinds(blindGroup, vbHeight) || []
    resetView(visualIndex)
  }

  const transitionTo = (tabKey) => {
    const targetIndex = tabToIndex(tabKey)
    if (targetIndex < 0) return
    if (targetIndex === visualIndex && !transitionTimeline) return

    killTransition()
    resetView(visualIndex)

    if (targetIndex === visualIndex) return

    if (reducedMotion) {
      visualIndex = targetIndex
      resetView(targetIndex)
      return
    }

    baseImage.setAttribute('href', IMAGES[visualIndex])
    topImage.setAttribute('href', IMAGES[targetIndex])
    setBlindsClosed(blinds)

    const timeline = gsap.timeline({
      onComplete: () => {
        transitionTimeline = null
        visualIndex = targetIndex
        resetView(targetIndex)
      },
    })

    transitionTimeline = timeline
    timeline.add(openBlinds(blinds))
  }

  updateLayout()

  let resizeTimer
  const handleResize = () => {
    clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(updateLayout, 200)
  }

  window.addEventListener('resize', handleResize, { passive: true })

  return {
    transitionTo,
    destroy() {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      killTransition()
    },
  }
}
