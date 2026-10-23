const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const modal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
document.querySelectorAll('[data-cert]').forEach(card => card.addEventListener('click', () => {
  modalImage.src = card.dataset.cert;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImage.src='';}
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {if(e.key === 'Escape') closeModal();});
