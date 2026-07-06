/** Ported from Ws_FinDoc src/arbixWave/ArbixOverviewPage.jsx */
export default function initHeader(root) {
  const shell = root.querySelector('[data-arbix-nav-shell]')
  if (!shell || shell.dataset.navInit === 'true') return

  shell.dataset.navInit = 'true'

  const drag = {
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  }

  requestAnimationFrame(() => {
    shell.classList.add('arbixWaveSearchShell--entered')
  })

  const handlePointerDown = (event) => {
    if (event.button !== 0 || !event.isPrimary) return

    const interactiveTarget = event.target instanceof Element
      ? event.target.closest('a, button')
      : null
    if (interactiveTarget) return

    drag.active = true
    drag.pointerId = event.pointerId
    drag.startX = event.clientX - drag.offsetX
    drag.startY = event.clientY - drag.offsetY
    shell.classList.add('arbixWaveSearchShell--dragging')
    shell.setPointerCapture(event.pointerId)
    event.preventDefault()
  }

  const handlePointerMove = (event) => {
    if (!drag.active || event.pointerId !== drag.pointerId) return

    drag.offsetX = event.clientX - drag.startX
    drag.offsetY = event.clientY - drag.startY
    shell.style.setProperty('--drag-x', `${drag.offsetX}px`)
    shell.style.setProperty('--drag-y', `${drag.offsetY}px`)
  }

  const stopDragging = (event) => {
    if (!drag.active || event.pointerId !== drag.pointerId) return

    drag.active = false
    drag.pointerId = null
    shell.classList.remove('arbixWaveSearchShell--dragging')

    if (shell.hasPointerCapture(event.pointerId)) {
      shell.releasePointerCapture(event.pointerId)
    }
  }

  shell.addEventListener('pointerdown', handlePointerDown)
  shell.addEventListener('pointermove', handlePointerMove)
  shell.addEventListener('pointerup', stopDragging)
  shell.addEventListener('pointercancel', stopDragging)
}
