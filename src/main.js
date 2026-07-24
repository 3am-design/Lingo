const menu = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav-links')
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  menu.setAttribute('aria-expanded', open)
  menu.textContent = open ? 'Close' : 'Menu'
})

document.querySelectorAll('.language-list button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.language-list .active')?.classList.remove('active')
    button.classList.add('active')
    document.querySelector('.current-language span').textContent = button.dataset.lang
    document.querySelector('.current-language strong').textContent = button.textContent.trim().replace(button.dataset.lang, '').replace('✓', '').trim()
  })
})

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('in-view')
}), { threshold: 0.12 })
document.querySelectorAll('.reveal, .compare-card, .feature-list article, .plan').forEach((item) => observer.observe(item))
