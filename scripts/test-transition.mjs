import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []

page.on('pageerror', (e) => errors.push(`PAGE: ${e.message}`))
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`CONSOLE: ${msg.text()}`)
})

await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(4000)

const state = await page.evaluate(() => ({
  hasLumio: !!document.querySelector('[data-barba-namespace="lumio"]'),
  hasOverlay: !!document.querySelector('.transition__overlay'),
  links: [...document.querySelectorAll('a.lumio-updates__card')].map((a) => a.href),
  barbaVersion: window.barba?.version ?? null,
}))

console.log('STATE', JSON.stringify(state, null, 2))
console.log('ERRORS', JSON.stringify(errors, null, 2))

if (state.links[0]) {
  await page.click('a.lumio-updates__card')
  await page.waitForTimeout(500)
  const mid = await page.evaluate(() => ({
    url: location.href,
    overlayVisible: getComputedStyle(document.querySelector('.transition__overlay')).visibility,
    overlayOpacity: getComputedStyle(document.querySelector('.transition__overlay')).opacity,
    transitioning: document.body.classList.contains('is__transitioning'),
  }))
  console.log('MID_CLICK', JSON.stringify(mid, null, 2))
  await page.waitForTimeout(2500)
  const after = await page.evaluate(() => ({
    url: location.href,
    hasHero: !!document.querySelector('[data-subpage-hero-title]'),
    heroText: document.querySelector('[data-subpage-hero-title]')?.textContent,
  }))
  console.log('AFTER', JSON.stringify(after, null, 2))
}

await browser.close()
