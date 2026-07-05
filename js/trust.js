export default function initTrust(root) {
  const marquee = root.querySelector('.lumio-trust__marquee')
  if (!marquee) return

  marquee.addEventListener('mouseenter', () => marquee.classList.add('is-paused'))
  marquee.addEventListener('mouseleave', () => marquee.classList.remove('is-paused'))
}
