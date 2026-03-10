// Smooth scroll para links de navegação internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' })
  })
})
