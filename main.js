// Smooth scroll para links de navegação internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' })
  })
})

// Hamburger menu
const hamburger = document.querySelector('.navbar__hamburger')
const navLinks = document.querySelector('.navbar__links')

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'))
})

// Fade-in ao scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible')
  })
}, { threshold: 0.1 })

document.querySelectorAll('.card, .benefit, .passo-card, .plan-card').forEach(el => {
  el.classList.add('fade-in')
  observer.observe(el)
})
