import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage()
const failed = []

page.on('requestfailed', (req) => {
  failed.push(`${req.failure()?.errorText} ${req.url()}`)
})
page.on('response', (res) => {
  if (res.status() >= 400) failed.push(`${res.status()} ${res.url()}`)
})

await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 60000 })
await page.waitForTimeout(4000)

console.log('FAILED', JSON.stringify(failed, null, 2))

await browser.close()
