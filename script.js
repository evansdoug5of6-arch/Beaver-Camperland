// Mobile menu and footer year
const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
  btn.textContent = open ? 'Close' : 'Menu';
});
document.getElementById('yr').textContent = new Date().getFullYear();
