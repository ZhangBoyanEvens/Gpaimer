import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})

await page.goto('http://localhost:8080/', { waitUntil: 'networkidle' })
await page.waitForTimeout(3000)
await page.click('a.lumio-updates__card')
await page.waitForTimeout(4000)

const final = await page.evaluate(() => ({
  url: location.href,
  hero: document.querySelector('[data-subpage-hero-title]')?.textContent,
  overlayHidden: getComputedStyle(document.querySelector('.transition__overlay')).visibility === 'hidden',
  gallery: !!document.querySelector('[data-gallery-container]'),
  webgl: !!document.getElementById('webgl'),
}))

console.log('FINAL', JSON.stringify(final, null, 2))
console.log('ERRORS', errors)
await browser.close()

process.exit(final.url.includes('/bg/') && final.hero === 'background' && final.overlayHidden && final.gallery ? 0 : 1)
