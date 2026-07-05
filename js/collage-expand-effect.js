/**
 * Ported from Ws_FinDoc VetraOverview / Codrops Image Expansion Typography (effect-3).
 * https://github.com/ZhangBoyanEvens/Ws_FinDoc
 * https://tympanus.net/codrops/2024/06/19/image-expansion-typography-animation/
 */
export function mountCollageCardExpand(card, Flip, options = {}) {
  if (!card || !(card instanceof HTMLElement)) return

  const imageWrap = card.querySelector('.lumio-collage__expand-img')
  if (!imageWrap) return

  const { start = 'top 92%', end = 'center 58%', scrub = 1.2 } = options

  card.classList.add('lumio-collage__card--open')
  const flipState = Flip.getState(imageWrap)
  card.classList.remove('lumio-collage__card--open')

  Flip.to(flipState, {
    ease: 'sine.inOut',
    simple: true,
    scrollTrigger: {
      trigger: card,
      start,
      end,
      scrub,
    },
  })
}
