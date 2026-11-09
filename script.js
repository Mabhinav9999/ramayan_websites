const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
  const videoId = heroVideo.dataset.videoId;

  if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
    const playerParams = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: videoId,
      controls: '1',
      playsinline: '1',
      rel: '0',
      origin: window.location.origin
    });

    heroVideo.src = `https://www.youtube-nocookie.com/embed/${videoId}?${playerParams}`;
  } else {
    heroVideo.remove();
    const fallback = document.createElement('a');
    fallback.className = 'video-fallback';
    fallback.href = `https://youtu.be/${videoId}`;
    fallback.target = '_blank';
    fallback.rel = 'noopener noreferrer';
    fallback.textContent = 'Watch the trailer on YouTube ↗';
    document.querySelector('.hero-copy .button').after(fallback);
  }
}

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
