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
