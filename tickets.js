const stateInput = document.querySelector('#stateInput');
const cityInput = document.querySelector('#cityInput');
const stateOptions = document.querySelector('#stateOptions');
const cityOptions = document.querySelector('#cityOptions');
const locationForm = document.querySelector('#locationForm');
const bookingReveal = document.querySelector('#bookingReveal');
const bookingResults = document.querySelector('#bookingResults');
const bookingGrid = document.querySelector('#bookingGrid');
const bookingEmpty = document.querySelector('#bookingEmpty');
const formatFilters = document.querySelector('#formatFilters');
const selectedLocation = document.querySelector('#selectedLocation');
const partnerCount = document.querySelector('#partnerCount');
const changeLocation = document.querySelector('#changeLocation');
let activeState = null;
let activeFormat = 'all';
let revealTimer;

const normalize = (value) => value.trim().toLocaleLowerCase('en-IN').replace(/\s+/g, ' ');
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const verifiedForCity = (platform, city, state) => {
  const listing = bookingConfig.verifiedListings[platform.id]?.[normalize(city)] || null;
  return listing && normalize(listing.state) === normalize(state.name) ? listing : null;
};

function loadStates() {
  stateOptions.innerHTML = bookingConfig.states.map(({ name }) => `<option value="${escapeHTML(name)}"></option>`).join('');
}

function setStateFromInput({ resetCity = true } = {}) {
  const matchedState = bookingConfig.states.find(({ name }) => normalize(name) === normalize(stateInput.value));
  if (!matchedState) {
    activeState = null;
    cityInput.disabled = true;
    cityInput.placeholder = 'Choose a state first';
    cityOptions.replaceChildren();
    if (resetCity) cityInput.value = '';
    return null;
  }

  if (!activeState || normalize(activeState.name) !== normalize(matchedState.name)) {
    if (resetCity) cityInput.value = '';
    cityOptions.innerHTML = matchedState.cities.map((city) => `<option value="${escapeHTML(city)}"></option>`).join('');
  }
  activeState = matchedState;
  cityInput.disabled = false;
  cityInput.placeholder = 'Search or enter a city';
  return matchedState;
}

function getSelectedPlatforms(city, state) {
  return bookingConfig.platforms.map((platform) => ({
    ...platform,
    listing: verifiedForCity(platform, city, state)
  })).sort((left, right) => Number(Boolean(right.listing)) - Number(Boolean(left.listing)));
}

function renderFormats(city, state) {
  const platforms = getSelectedPlatforms(city, state);
  const availableFormats = new Set(platforms.flatMap(({ listing }) => listing?.formats || []));
  formatFilters.innerHTML = [
    `<button class="format-chip is-active" type="button" data-format="all" aria-pressed="true">Any format</button>`,
    ...bookingConfig.formats.map((format) => {
      const available = availableFormats.has(format);
      return `<button class="format-chip" type="button" data-format="${escapeHTML(format)}" aria-pressed="false" ${available ? '' : 'disabled title="No checked city listing currently advertises this format."'}>${escapeHTML(format)}${available ? '' : ' · not verified'}</button>`;
    })
  ].join('');
  document.querySelector('#formatHint').textContent = availableFormats.size
    ? `Checked city listings advertise ${[...availableFormats].join(', ')}.`
    : 'No checked city listing currently advertises a format.';
  document.querySelector('#formatDisclaimer').textContent = availableFormats.size
    ? 'Filters reflect formats advertised by the checked city listings. They do not guarantee availability at every cinema; confirm the exact venue and showtime on the partner site.'
    : 'No cinema formats are confirmed for this city in the checked listings. Use a partner site to check venue-level formats and showtimes.';
  activeFormat = 'all';
  formatFilters.querySelectorAll('[data-format]').forEach((button) => {
    button.addEventListener('click', () => {
      activeFormat = button.dataset.format;
      formatFilters.querySelectorAll('[data-format]').forEach((choice) => {
        const active = choice === button;
        choice.classList.toggle('is-active', active);
        choice.setAttribute('aria-pressed', String(active));
      });
      renderPartners(city, state);
    });
  });
}

function renderPartners(city, state) {
  const allPlatforms = getSelectedPlatforms(city, state);
  const visiblePlatforms = activeFormat === 'all'
    ? allPlatforms
    : allPlatforms.filter(({ listing }) => listing?.formats.includes(activeFormat));

  bookingGrid.innerHTML = visiblePlatforms.map((platform) => {
    const listing = platform.listing;
    const destination = listing?.url || platform.fallback;
    const locationLine = listing && normalize(listing.region) !== normalize(city)
      ? `Ramayana listing for ${listing.region} · your selection: ${city}`
      : `Selected location · ${city}`;
    const status = listing
      ? `Ramayana listing confirmed · checked ${bookingConfig.checkedOn}`
      : platform.fallbackLabel;
    const description = listing
      ? `${locationLine}. Select a cinema, date and showtime on the partner page.`
      : `${locationLine}. Official destination · search for Ramayana and confirm service in this city.`;
    return `<article class="booking-card">
      <div class="booking-card-main">
        <span class="platform-logo ${platform.className}" aria-label="${escapeHTML(platform.name)}">${platform.logo === 'bookmyshow' ? 'book<span>my</span>show' : escapeHTML(platform.logo)}</span>
        <h4>${escapeHTML(platform.name)}</h4>
        <p>${escapeHTML(description)}</p>
        <span class="listing-status ${listing ? 'is-confirmed' : ''}">${escapeHTML(status)}</span>
      </div>
      <div class="booking-card-action">
        <small>OFFICIAL PARTNER ↗</small>
        <a href="${escapeHTML(destination)}" target="_blank" rel="noopener noreferrer">BOOK NOW <span>↗</span></a>
      </div>
    </article>`;
  }).join('');

  partnerCount.textContent = activeFormat === 'all'
    ? `${visiblePlatforms.length} official booking destinations`
    : `${visiblePlatforms.length} checked partner${visiblePlatforms.length === 1 ? '' : 's'} advertise ${activeFormat}`;
  bookingGrid.hidden = visiblePlatforms.length === 0;
  bookingEmpty.hidden = visiblePlatforms.length !== 0;
}

function showLocationResults(state, city, { animate = true } = {}) {
  activeState = state;
  stateInput.value = state.name;
  cityInput.value = city;
  cityOptions.innerHTML = state.cities.map((name) => `<option value="${escapeHTML(name)}"></option>`).join("");
  cityInput.disabled = false;
  cityInput.placeholder = 'Search or enter a city';
  selectedLocation.textContent = `${city}, ${state.name}`;
  try {
    sessionStorage.setItem('ramayanaBookingLocation', JSON.stringify({ state: state.name, city }));
  } catch (error) {
    // Booking works even when browser storage is unavailable.
  }

  renderFormats(city, state);
  renderPartners(city, state);
  bookingResults.hidden = true;
  bookingReveal.hidden = false;
  if (!animate) {
    bookingReveal.hidden = true;
    bookingResults.hidden = false;
    return;
  }
  window.clearTimeout(revealTimer);
  window.setTimeout(() => bookingReveal.classList.add('is-playing'), 10);
  revealTimer = window.setTimeout(() => {
    bookingReveal.hidden = true;
    bookingReveal.classList.remove('is-playing');
    bookingResults.hidden = false;
    bookingResults.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }, 1050);
}

loadStates();
stateInput.addEventListener('input', () => setStateFromInput());
stateInput.addEventListener('change', () => setStateFromInput());

locationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const state = setStateFromInput({ resetCity: false });
  if (!state) {
    stateInput.setCustomValidity('Choose a state or Union Territory from the list.');
    stateInput.reportValidity();
    stateInput.addEventListener('input', () => stateInput.setCustomValidity(''), { once: true });
    return;
  }
  stateInput.setCustomValidity('');
  if (!cityInput.value.trim()) {
    cityInput.setCustomValidity('Enter a city in the selected state.');
    cityInput.reportValidity();
    cityInput.addEventListener('input', () => cityInput.setCustomValidity(''), { once: true });
    return;
  }
  cityInput.setCustomValidity('');
  const submitButton = locationForm.querySelector('.location-submit');
  submitButton.disabled = true;
  submitButton.classList.add('is-loading');
  const submitLabel = submitButton.querySelector('span');
  submitLabel.textContent = 'PREPARING YOUR JOURNEY';
  showLocationResults(state, cityInput.value.trim());
  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.classList.remove('is-loading');
    submitLabel.textContent = 'EXPLORE SHOWTIMES';
  }, 1100);
});

changeLocation.addEventListener('click', () => {
  document.querySelector('#booking-finder').scrollIntoView({ behavior: 'smooth', block: 'start' });
  stateInput.focus({ preventScroll: true });
});

document.querySelector('#clearFormat').addEventListener('click', () => {
  const anyFormat = formatFilters.querySelector('[data-format="all"]');
  anyFormat?.click();
});

try {
  const saved = JSON.parse(sessionStorage.getItem('ramayanaBookingLocation') || 'null');
  if (saved) {
    const state = bookingConfig.states.find(({ name }) => normalize(name) === normalize(saved.state));
    if (state && typeof saved.city === 'string' && saved.city.trim()) showLocationResults(state, saved.city.trim(), { animate: false });
  }
} catch (error) {
  // A malformed or blocked session value is ignored.
}
