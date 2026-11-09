const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const videoSource = document.querySelector('.video-source');
const videoCreditTrigger = document.querySelector('.video-source-trigger');
const toast = document.querySelector('.status-toast');
let toastTimer;

// Share the current page through native sharing or common social destinations.
const shareButton = document.querySelector('.share-button');
if (shareButton) {
  shareButton.removeAttribute('data-coming-soon');
  shareButton.setAttribute('aria-haspopup', 'true');
  shareButton.setAttribute('aria-expanded', 'false');

  const shareMenu = document.createElement('div');
  shareMenu.className = 'share-menu';
  shareMenu.id = 'shareMenu';
  shareMenu.setAttribute('role', 'menu');
  shareMenu.setAttribute('aria-label', 'Share this page');
  shareMenu.innerHTML = `
    <p>SHARE THIS JOURNEY</p>
    <button type="button" role="menuitem" data-share-action="native">More sharing options <span>↗</span></button>
    <a role="menuitem" data-share-link="whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp <span>↗</span></a>
    <a role="menuitem" data-share-link="facebook" target="_blank" rel="noopener noreferrer">Facebook <span>↗</span></a>
    <a role="menuitem" data-share-link="x" target="_blank" rel="noopener noreferrer">X <span>↗</span></a>
    <button type="button" role="menuitem" data-share-action="copy">Copy page link <span>⧉</span></button>`;
  shareButton.insertAdjacentElement('afterend', shareMenu);

  const pageUrl = window.location.href;
  const shareTitle = document.title;
  const shareText = 'Explore the world of Ramayana.';
  shareMenu.querySelector('[data-share-link="whatsapp"]').href = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`;
  shareMenu.querySelector('[data-share-link="facebook"]').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  shareMenu.querySelector('[data-share-link="x"]').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
  const nativeShareOption = shareMenu.querySelector('[data-share-action="native"]');
  if (!navigator.share) nativeShareOption.hidden = true;

  const closeShareMenu = () => {
    shareMenu.classList.remove('is-open');
    shareButton.setAttribute('aria-expanded', 'false');
  };
  shareButton.setAttribute('aria-controls', shareMenu.id);
  shareButton.addEventListener('click', () => {
    const open = !shareMenu.classList.contains('is-open');
    shareMenu.classList.toggle('is-open', open);
    shareButton.setAttribute('aria-expanded', String(open));
  });
  shareMenu.addEventListener('click', async (event) => {
    const action = event.target.closest('[data-share-action]')?.dataset.shareAction;
    if (!action) return;
    try {
      if (action === 'native') {
        await navigator.share({ title: shareTitle, text: shareText, url: pageUrl });
        closeShareMenu();
      } else {
        await navigator.clipboard.writeText(pageUrl);
        closeShareMenu();
        if (toast) {
          toast.textContent = 'Page link copied to clipboard';
          toast.classList.add('visible');
          window.clearTimeout(toastTimer);
          toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2200);
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError' && toast) {
        toast.textContent = 'Could not share this page. Please try again.';
        toast.classList.add('visible');
        window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2200);
      }
    }
  });
  document.addEventListener('click', (event) => {
    if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) closeShareMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeShareMenu();
  });
}

if (videoSource && videoCreditTrigger) {
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
}

document.querySelectorAll('[data-coming-soon]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!toast) return;
    toast.textContent = `${button.dataset.comingSoon} — coming soon`;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2200);
  });
});

if (menuButton && navigation) {
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
}
