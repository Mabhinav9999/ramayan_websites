const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const videoSource = document.querySelector('.video-source');
const videoCreditTrigger = document.querySelector('.video-source-trigger');
const toast = document.querySelector('.status-toast');
let toastTimer;

videoCreditTrigger.addEventListener('click', () => {
  const open = !videoSource.classList.contains('is-open');
  videoSource.classList.toggle('is-open', open);
  videoCreditTrigger.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', (event) => {
  if (!videoSource.contains(event.target)) {
    videoSource.classList.remove('is-open');
    videoCreditTrigger.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    videoSource.classList.remove('is-open');
    videoCreditTrigger.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('[data-coming-soon]').forEach((button) => {
  button.addEventListener('click', () => {
    toast.textContent = `${button.dataset.comingSoon} — coming soon`;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2200);
  });
});

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
