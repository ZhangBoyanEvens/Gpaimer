export const PAGE_CONFIG = {
  '/bg/': { label: 'background' },
  '/arch/': { label: 'architecture' },
  '/model/': { label: 'model' },
}

export const GALLERY_BUNDLE =
  '/_astro/Layout.astro_astro_type_script_index_0_lang.BS-Q_rAI.js'

export function normalizePath(href) {
  const url = new URL(href, window.location.origin)
  let path = url.pathname
  if (path.endsWith('/index.html')) path = path.slice(0, -'/index.html'.length) || '/'
  if (!path.endsWith('/')) path += '/'
  return path
}

export function getPageConfig(href) {
  return PAGE_CONFIG[normalizePath(href)]
}

export function isSubpageLink(href) {
  return Boolean(getPageConfig(href))
}

export function injectSubpageAssets(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html')

  if (!document.getElementById('lumio-subpage-styles')) {
    const style = doc.querySelector('head style')
    if (style?.textContent) {
      const el = document.createElement('style')
      el.id = 'lumio-subpage-styles'
      el.textContent = style.textContent
      document.head.appendChild(el)
    }
  }

  doc.querySelectorAll('head link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute('href')
    if (!href || href.includes('page-transition.css')) return
    if (document.querySelector(`link[href="${href}"]`)) return
    document.head.appendChild(link.cloneNode(true))
  })

  if (!document.getElementById('webgl')) {
    const canvas = document.createElement('canvas')
    canvas.id = 'webgl'
    document.body.appendChild(canvas)
  }
}

export function setSubpageHeroLabel(container, href) {
  const config = getPageConfig(href)
  const heroTitle = container?.querySelector('[data-subpage-hero-title]')
  if (heroTitle && config) {
    heroTitle.textContent = config.label
  }
}
