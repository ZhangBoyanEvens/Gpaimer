import { initStudioBlinds } from './studio-blinds.js?v=30'

export default function initStudio(root) {
  const tabs = root.querySelectorAll('.lumio-studio__tab')
  const blindsApi = initStudioBlinds(root)

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

    blindsApi?.transitionTo(key)
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setActiveTab(tab)
    })
  })

  return () => {
    blindsApi?.destroy?.()
  }
}
