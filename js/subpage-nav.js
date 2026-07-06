import initHeader from './header.js'

const NAV_VERSION = '22'

function ensureSvgDefs() {
  if (document.getElementById('lumio-logo-gradient')) return

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.classList.add('lumio-svg-defs')
  svg.setAttribute('width', '0')
  svg.setAttribute('height', '0')
  svg.setAttribute('aria-hidden', 'true')
  svg.setAttribute('focusable', 'false')
  svg.innerHTML = `
    <defs>
      <linearGradient id="lumio-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#9D6E53"></stop>
        <stop offset="52%" stop-color="#8B6249"></stop>
        <stop offset="100%" stop-color="#7A5540"></stop>
      </linearGradient>
      <linearGradient id="lumio-logo-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D4A88A"></stop>
        <stop offset="100%" stop-color="#9D6E53"></stop>
      </linearGradient>
    </defs>
  `

  const mount = document.getElementById('site-header')
  if (mount) {
    document.body.insertBefore(svg, mount)
  } else {
    document.body.prepend(svg)
  }
}

export async function initSubpageNav(root = document) {
  ensureSvgDefs()
  let mount = root.querySelector?.('#site-header') || document.getElementById('site-header')

  if (!mount) {
    mount = document.createElement('div')
    mount.id = 'site-header'
    const app = document.getElementById('app')
    if (app) {
      document.body.insertBefore(mount, app)
    } else {
      document.body.prepend(mount)
    }
  }

  if (!mount.querySelector('.lumio-header')) {
    const response = await fetch(`/sections/header.html?v=${NAV_VERSION}`)
    if (response.ok) {
      mount.innerHTML = await response.text()
    }
  }

  mount.querySelectorAll('a[href="/"]').forEach((link) => {
    link.setAttribute('data-barba-prevent', '')
  })

  initHeader(document)
}
