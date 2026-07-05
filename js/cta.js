export default function initCta(root) {
  const button = root.querySelector('.lumio-cta__button')
  if (!button) return

  button.addEventListener('click', () => {
    button.textContent = 'Thanks — we\'ll be in touch'
    button.disabled = true
    button.style.opacity = '0.85'
  })
}
