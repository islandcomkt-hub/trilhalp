document.documentElement.classList.add('js')

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const reveals = document.querySelectorAll('.reveal')

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -32px' })
  reveals.forEach((item) => observer.observe(item))
}

const video = document.querySelector('.hero-video')
const pauseVideo = () => {
  if (!video) return
  if (document.hidden || reducedMotion) video.pause()
  else video.play().catch(() => {})
}
document.addEventListener('visibilitychange', pauseVideo)

document.querySelector('#bike-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const need = document.querySelector('#need').value.trim()
  const brand = document.querySelector('#brand').value.trim()
  const model = document.querySelector('#model').value.trim()
  const year = document.querySelector('#year').value.trim()
  const message = `Olá, vim pelo site da Trilha Motos e estou procurando ${need}. Minha moto é ${brand} ${model}${year ? `, ano ${year}` : ''}. Podem me ajudar?`
  window.open(`https://wa.me/5531988386326?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
})

document.querySelector('#year-now').textContent = new Date().getFullYear()
