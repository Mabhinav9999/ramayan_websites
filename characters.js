const ramayanaCharacters = [
  {
    id: 'rama', name: 'Rama', formalName: 'Lord Rama', actor: 'Ranbir Kapoor', epithet: 'The exiled prince', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Ayodhya', allegiance: 'Rama’s alliance', tags: ['warriors', 'royals'],
    original: 'assets/characters/rama_original.png', portrayal: 'assets/actors/rama_actor_ranbir.png',
    description: 'Prince of Ayodhya and an embodiment of dharma, courage and righteousness. His exile and conflict with Ravana form the central journey of the Ramayana.',
    relationships: ['Wife: Sita', 'Brothers: Lakshmana and Bharata', 'Father: Dasharatha', 'Devoted allies: Hanuman and Vibhishana'],
    significance: 'Rama’s choices place duty and compassion at the centre of the epic. His return from exile restores the balance of Ayodhya.',
    networkLabel: 'Ayodhya · Rama’s alliance'
  },
  {
    id: 'sita', name: 'Sita', formalName: 'Sita', actor: 'Sai Pallavi', epithet: 'The fearless heart', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Mithila by birth · Ayodhya by marriage', allegiance: 'Rama’s alliance', tags: ['royals'],
    original: 'assets/characters/sita_original.png', portrayal: 'assets/actors/sita_actor_sai_pallavi.png',
    description: 'Princess of Mithila and Rama’s wife, remembered for her dignity, resilience, devotion and strength through exile and captivity in Lanka.',
    relationships: ['Husband: Rama', 'Father: King Janaka', 'Brother-in-law: Lakshmana', 'Protected by Jatayu during her abduction'],
    significance: 'Sita’s resolve gives the epic one of its clearest portraits of inner strength. Her story moves between Mithila, the forest and Lanka.',
    networkLabel: 'Mithila-born · Rama’s alliance'
  },
  {
    id: 'lakshmana', name: 'Lakshmana', formalName: 'Lakshmana', actor: 'Ravi Dubey', epithet: 'The steadfast brother', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Ayodhya', allegiance: 'Rama’s alliance', tags: ['warriors', 'royals'],
    original: 'assets/characters/lakshmana_original.png', portrayal: 'assets/actors/lakshmana_actor_ravi_dubey.png',
    description: 'Rama’s devoted younger brother, who accompanies Rama and Sita into exile and protects them throughout their journey.',
    relationships: ['Brother: Rama', 'Sister-in-law: Sita', 'Brother: Bharata', 'Father: Dasharatha'],
    significance: 'Lakshmana represents loyalty expressed through action, sharing the hardships of exile and standing beside Rama in the struggle against Lanka.',
    networkLabel: 'Ayodhya · Rama’s alliance'
  },
  {
    id: 'hanuman', name: 'Hanuman', formalName: 'Hanuman', actor: 'Sunny Deol', epithet: 'The devoted ally', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Kishkindha · Vanara people', allegiance: 'Rama’s alliance', tags: ['warriors', 'allies'],
    original: 'assets/characters/hanuman_original.png', portrayal: 'assets/actors/hanuman_actor_sunny_deol.png',
    description: 'The devoted Vanara warrior, celebrated for immense strength, wisdom, courage and unwavering devotion to Rama.',
    relationships: ['Devotee and ally: Rama', 'Key ally in the search for Sita', 'Serves as a bridge between Rama’s forces and Lanka'],
    significance: 'Hanuman’s leap to Lanka and service to Rama make devotion, courage and discernment inseparable in his story.',
    networkLabel: 'Kishkindha · Rama’s ally'
  },
  {
    id: 'jatayu', name: 'Jatayu', formalName: 'Jatayu', actor: 'Anupam Kher', epithet: 'The noble defender', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Forest realm · Vulture king', allegiance: 'Rama’s ally', tags: ['warriors', 'allies'],
    original: 'assets/characters/jatayu_original.png', portrayal: 'assets/actors/jatayu_actor_anupam_kher.png',
    description: 'The noble vulture king who attempts to rescue Sita from Ravana and is gravely wounded in the struggle.',
    relationships: ['Tries to rescue Sita from Ravana', 'Tells Rama that Ravana carried Sita south toward Lanka'],
    significance: 'Jatayu’s stand is an act of courage and compassion. Though defeated, his testimony helps Rama continue the search.',
    portrayalNote: 'The supplied actor-side image is a composite promotional image, not a standalone film still.',
    networkLabel: 'Forest ally · Defends Sita'
  },
  {
    id: 'bharata', name: 'Bharata', formalName: 'Bharata', actor: 'Addinath M. Kothare', epithet: 'The humble heir', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Ayodhya', allegiance: 'Rama’s alliance', tags: ['royals'],
    original: 'assets/characters/bharata_original.png', portrayal: 'assets/actors/bharata_actor_addinath_kothare.png',
    description: 'Rama’s younger brother, known for loyalty and humility. He refuses to take Rama’s place and governs Ayodhya as Rama’s representative.',
    relationships: ['Brother: Rama and Lakshmana', 'Mother: Kaikeyi', 'Father: Dasharatha'],
    significance: 'Bharata rejects a crown gained through Rama’s exile and keeps Ayodhya in trust until his brother returns.',
    networkLabel: 'Ayodhya · Rama’s brother'
  },
  {
    id: 'vibhishana', name: 'Vibhishana', formalName: 'Vibhishana', actor: 'Harish Uthaman', epithet: 'The voice of conscience', group: 'rama', groupLabel: 'Rama’s side',
    origin: 'Lanka by birth', allegiance: 'Rama’s alliance · later', tags: ['warriors', 'royals', 'allies'],
    original: 'assets/characters/vibhishana_original.png', portrayal: 'assets/actors/vibhishana_actor_harish_uthaman.png',
    description: 'Ravana’s brother, who opposes the abduction of Sita, leaves Lanka and ultimately supports Rama.',
    relationships: ['Brother: Ravana and Kumbhakarna', 'Sister: Surpanakha', 'Joins Rama’s alliance after leaving Lanka'],
    significance: 'Vibhishana’s path shows that birthplace and allegiance are not the same. He leaves his brother’s court because he cannot support Ravana’s choice.',
    networkLabel: 'Lanka-born → Rama’s ally'
  },
  {
    id: 'ravana', name: 'Ravana', formalName: 'Ravana', actor: 'Yash', epithet: 'The king of Lanka', group: 'ravana', groupLabel: 'Ravana’s side',
    origin: 'Lanka', allegiance: 'Lanka', tags: ['warriors', 'royals'],
    original: 'assets/characters/ravana_original.png', portrayal: 'assets/actors/ravana_actor_yash.png',
    description: 'The powerful king of Lanka, renowned for his knowledge, strength, scholarship and devotion to Shiva. His abduction of Sita brings him into conflict with Rama.',
    relationships: ['Wife: Mandodari', 'Brothers: Kumbhakarna and Vibhishana', 'Sister: Surpanakha', 'Abducts Sita, prompting Rama’s campaign against Lanka'],
    significance: 'Ravana is a formidable ruler and scholar whose pride and refusal to return Sita turn his conflict with Rama into the epic’s central war.',
    networkLabel: 'Lanka · King'
  },
  {
    id: 'kumbhakarna', name: 'Kumbhakarna', formalName: 'Kumbhakarna', actor: 'Faisal Malik', epithet: 'The sleeping giant', group: 'ravana', groupLabel: 'Ravana’s side',
    origin: 'Lanka', allegiance: 'Lanka', tags: ['warriors', 'royals'],
    original: 'assets/characters/kumbhakarna_original.png', portrayal: 'assets/actors/kumbhakarna_actor_faisal_malik.png',
    description: 'Ravana’s gigantic brother, known for immense strength and extraordinary periods of sleep. He eventually fights for Lanka.',
    relationships: ['Brother: Ravana and Vibhishana', 'Sister: Surpanakha'],
    significance: 'Kumbhakarna’s immense strength is drawn into the battle for Lanka despite the family’s divided counsel.',
    networkLabel: 'Lanka · Ravana’s brother'
  },
  {
    id: 'mandodari', name: 'Mandodari', formalName: 'Mandodari', actor: 'Kajal Aggarwal', epithet: 'The wise queen', group: 'ravana', groupLabel: 'Ravana’s side',
    origin: 'Lanka', allegiance: 'Lanka · royal household', tags: ['royals'],
    original: 'assets/characters/mandodari_original.png', portrayal: 'assets/actors/mandodari_actor_kajal_aggarwal.png',
    description: 'Queen of Lanka and Ravana’s wife. Traditionally portrayed as wise and dignified, she cautions Ravana against his actions.',
    relationships: ['Wife of Ravana', 'Queen of Lanka', 'Part of Lanka’s royal household'],
    significance: 'Mandodari’s counsel offers a voice of reason within the court of Lanka, even as Ravana refuses to change course.',
    networkLabel: 'Lanka · Queen'
  },
  {
    id: 'surpanakha', name: 'Surpanakha', formalName: 'Surpanakha', actor: 'Rakul Preet Singh', epithet: 'The forest encounter', group: 'ravana', groupLabel: 'Ravana’s side',
    origin: 'Lanka', allegiance: 'Lanka · royal family', tags: ['royals'],
    original: 'assets/characters/surpanakha_original.png', portrayal: 'assets/actors/surpanakha_actor_rakul_preet_singh.png',
    description: 'Ravana’s sister, whose encounter with Rama and Lakshmana in the forest becomes an important turning point in the conflict.',
    relationships: ['Sister: Ravana, Kumbhakarna and Vibhishana'],
    significance: 'The encounter in Panchavati sets events in motion that carry the conflict from the forest to Lanka.',
    networkLabel: 'Lanka · Ravana’s sister'
  },
  {
    id: 'dasharatha', name: 'Dasharatha', formalName: 'King Dasharatha', actor: 'Arun Govil', epithet: 'The king of Ayodhya', group: 'royal', groupLabel: 'Ayodhya royal household',
    origin: 'Ayodhya', allegiance: 'Ayodhya · royal household', tags: ['royals'],
    original: 'assets/characters/dasharatha_original.png', portrayal: 'assets/actors/dasharatha_actor_arun_govil.png',
    description: 'King of Ayodhya and father of Rama, Bharata, Lakshmana and Shatrughna. His promises to Kaikeyi lead to Rama’s exile.',
    relationships: ['Sons: Rama, Bharata, Lakshmana and Shatrughna', 'Queens: Kaushalya, Kaikeyi and Sumitra'],
    significance: 'Dasharatha’s word binds him to a painful promise and sets the exile in motion, even as he grieves its consequences.',
    networkLabel: 'Ayodhya · Father of Rama'
  },
  {
    id: 'kaikeyi', name: 'Kaikeyi', formalName: 'Queen Kaikeyi', actor: 'Lara Dutta', epithet: 'The queen and mother', group: 'royal', groupLabel: 'Ayodhya royal household',
    origin: 'Ayodhya', allegiance: 'Ayodhya · royal household', tags: ['royals'],
    original: 'assets/characters/kaikeyi_original.png', portrayal: 'assets/actors/kaikeyi_actor_lara_dutta.png',
    description: 'One of Dasharatha’s queens and Bharata’s mother. She invokes her boons, leading to Rama’s exile and the proposed succession of Bharata.',
    relationships: ['Wife of Dasharatha', 'Mother of Bharata', 'Attendant and adviser: Manthara'],
    significance: 'Kaikeyi’s request changes Ayodhya’s succession and launches Rama’s exile, reshaping the lives of both royal families.',
    networkLabel: 'Ayodhya · Queen'
  },
  {
    id: 'manthara', name: 'Manthara', formalName: 'Manthara', actor: 'Sheeba Chaddha', epithet: 'The royal attendant', group: 'royal', groupLabel: 'Ayodhya royal household',
    origin: 'Ayodhya court', allegiance: 'Ayodhya · royal household', tags: [],
    original: 'assets/characters/manthara_original.png', portrayal: 'assets/actors/manthara_actor_sheeba_chaddha.png',
    description: 'Kaikeyi’s attendant, who influences Kaikeyi’s decision to invoke the boons that result in Rama’s exile.',
    relationships: ['Attendant and adviser to Kaikeyi', 'Her counsel influences the succession crisis'],
    significance: 'Manthara’s warning to Kaikeyi sets the palace intrigue in motion and changes the path of Ayodhya’s royal household.',
    networkLabel: 'Ayodhya court · Adviser'
  }
];

const characterById = new Map(ramayanaCharacters.map((character) => [character.id, character]));
const preferredMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const characterGallery = document.querySelector('#characterGallery');
const profileSelect = document.querySelector('#profileSelect');
let activeProfileId = 'rama';

function makeImageMarkup(character, imageKind, alt, className = '') {
  const source = character[imageKind];
  return `<img class="${className}" src="${source}" alt="${alt}" loading="lazy" decoding="async">`;
}

function renderCharacterCard(character) {
  return `<button type="button" class="character-card ${character.group === 'ravana' ? 'character-card-lanka' : ''}" data-character-profile="${character.id}" data-character-tags="${[character.group, ...character.tags].join(' ')}" aria-label="Open profile for ${character.formalName}, portrayed by ${character.actor}">
    <span class="character-card-image">${makeImageMarkup(character, 'original', `Original artwork of ${character.formalName}`)}<span class="character-card-index">${String(ramayanaCharacters.indexOf(character) + 1).padStart(2, '0')}</span><span class="character-card-action">OPEN PROFILE ↗</span></span>
    <span class="character-card-copy"><span class="character-card-epithet">${character.epithet}</span><strong>${character.formalName}</strong><span class="character-card-actor">Portrayed by <b>${character.actor}</b></span></span>
  </button>`;
}

function renderGallery() {
  document.querySelectorAll('[data-character-grid]').forEach((grid) => {
    grid.innerHTML = ramayanaCharacters.filter((character) => character.group === grid.dataset.characterGrid).map(renderCharacterCard).join('');
  });
  profileSelect.innerHTML = ramayanaCharacters.map((character) => `<option value="${character.id}">${character.formalName} · ${character.actor}</option>`).join('');
  applyCharacterFilters();
}

function applyCharacterFilters() {
  const selectedFilter = document.querySelector('[data-character-filter].is-active')?.dataset.characterFilter || 'all';
  const query = document.querySelector('#characterSearch').value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  document.querySelectorAll('.character-card').forEach((card) => {
    const character = characterById.get(card.dataset.characterProfile);
    const filterMatches = selectedFilter === 'all' || character.group === selectedFilter || character.tags.includes(selectedFilter);
    const searchable = `${character.formalName} ${character.actor} ${character.description} ${character.origin} ${character.allegiance}`.toLocaleLowerCase();
    const queryMatches = !query || searchable.includes(query);
    const visible = filterMatches && queryMatches;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  document.querySelectorAll('[data-character-category]').forEach((category) => {
    const hasVisibleCard = [...category.querySelectorAll('.character-card')].some((card) => !card.hidden);
    category.hidden = !hasVisibleCard;
  });
  document.querySelector('#characterEmpty').hidden = visibleCount > 0;
}

function updateProfile(characterId, shouldScroll = false) {
  const character = characterById.get(characterId);
  if (!character) return;
  activeProfileId = character.id;
  profileSelect.value = character.id;
  document.querySelector('#profileEpithet').textContent = character.epithet.toUpperCase();
  document.querySelector('#profileName').textContent = character.formalName;
  document.querySelector('#profileActorLabel').textContent = character.actor.toUpperCase();
  document.querySelector('#profileActorName').textContent = character.actor;
  document.querySelector('#profileOrigin').textContent = `ORIGIN · ${character.origin}`;
  document.querySelector('#profileAllegiance').textContent = `ALLEGIANCE · ${character.allegiance}`;
  document.querySelector('#profileDescription').textContent = character.description;
  document.querySelector('#profileSignificance').textContent = character.significance;
  document.querySelector('#profileRelationships').innerHTML = character.relationships.map((relationship) => `<li>${relationship}</li>`).join('');
  const profileNote = document.querySelector('#profilePortrayalNote');
  profileNote.textContent = character.portrayalNote || '';
  profileNote.hidden = !character.portrayalNote;
  setProfileImage('profileOriginal', character.original, `Original character artwork of ${character.formalName}`);
  setProfileImage('profileActor', character.portrayal, `Supplied portrayal image for ${character.formalName}, portrayed by ${character.actor}`);
  document.querySelector('#profileCard').dataset.activeCharacter = character.id;
  if (shouldScroll) document.querySelector('#character-profiles').scrollIntoView({ behavior: preferredMotion ? 'auto' : 'smooth', block: 'start' });
}

function setProfileImage(elementId, src, alt) {
  const image = document.getElementById(elementId);
  const zoomButton = image.closest('.image-zoom');
  const applyImage = () => {
    image.alt = alt;
    zoomButton.dataset.imageCaption = alt;
    zoomButton.setAttribute('aria-label', `Enlarge image: ${alt}`);
    image.closest('.profile-image-frame')?.classList.remove('image-missing');
  };
  applyImage();
  if (image.getAttribute('src') === src) return;

  const requestId = Number(image.dataset.imageRequest || 0) + 1;
  image.dataset.imageRequest = String(requestId);
  image.classList.add('is-changing');
  const nextImage = new Image();
  nextImage.onload = () => {
    if (image.dataset.imageRequest !== String(requestId)) return;
    image.src = src;
    applyImage();
    requestAnimationFrame(() => requestAnimationFrame(() => image.classList.remove('is-changing')));
  };
  nextImage.onerror = () => {
    if (image.dataset.imageRequest !== String(requestId)) return;
    image.src = src;
    applyImage();
    image.classList.remove('is-changing');
  };
  nextImage.src = src;
}

function moveCharacter(currentId, offset, update) {
  const currentIndex = ramayanaCharacters.findIndex((character) => character.id === currentId);
  const nextIndex = (currentIndex + offset + ramayanaCharacters.length) % ramayanaCharacters.length;
  update(ramayanaCharacters[nextIndex].id);
}

function renderRelationships() {
  const positions = {
    dasharatha: [185, 38], kaikeyi: [42, 150], manthara: [42, 320], bharata: [306, 147],
    rama: [475, 147], sita: [635, 147], lakshmana: [460, 308], hanuman: [620, 308], jatayu: [780, 308],
    ravana: [930, 147], mandodari: [1014, 38], kumbhakarna: [890, 308], vibhishana: [1060, 268], surpanakha: [1050, 417]
  };
  const edges = [
    ['dasharatha', 'rama', 'family', 'father'], ['dasharatha', 'lakshmana', 'family', 'father'], ['dasharatha', 'bharata', 'family', 'father'],
    ['dasharatha', 'kaikeyi', 'marriage', 'marriage'], ['kaikeyi', 'bharata', 'family', 'mother'], ['manthara', 'kaikeyi', 'advisory', 'influences Kaikeyi to claim the boons'],
    ['rama', 'sita', 'marriage', 'marriage'], ['rama', 'lakshmana', 'family', 'brothers'], ['rama', 'bharata', 'family', 'brothers'],
    ['rama', 'hanuman', 'alliance', 'devotion and alliance'], ['rama', 'vibhishana', 'alliance', 'Vibhishana leaves Lanka and joins Rama'],
    ['lakshmana', 'bharata', 'family', 'brothers'],
    ['jatayu', 'rama', 'alliance', 'tells Rama where Ravana carried Sita'], ['jatayu', 'ravana', 'conflict', 'tries to rescue Sita from Ravana'],
    ['rama', 'ravana', 'conflict', 'war for Sita'], ['ravana', 'sita', 'conflict', 'abducts Sita'],
    ['ravana', 'mandodari', 'marriage', 'marriage'], ['ravana', 'kumbhakarna', 'family', 'brothers'],
    ['ravana', 'vibhishana', 'family', 'brothers'], ['ravana', 'surpanakha', 'family', 'siblings']
  ];
  const center = ([left, top]) => [left + 68, top + 31];
  const lines = edges.map(([from, to, kind, label]) => {
    const [x1, y1] = center(positions[from]);
    const [x2, y2] = center(positions[to]);
    const route = from === 'rama' && to === 'ravana' ? ' Q 770 85' : from === 'rama' && to === 'vibhishana' ? ' Q 790 280' : from === 'dasharatha' && to === 'lakshmana' ? ' Q 140 270' : '';
    const path = route ? `M ${x1} ${y1}${route} ${x2} ${y2}` : `M ${x1} ${y1} L ${x2} ${y2}`;
    return `<path class="relationship-edge edge-${kind}" d="${path}"><title>${characterById.get(from).formalName} — ${label} — ${characterById.get(to).formalName}</title></path>`;
  }).join('');
  const nodes = ramayanaCharacters.map((character) => {
    const [left, top] = positions[character.id];
    const extraClass = character.id === 'vibhishana' ? ' relationship-node-vibhishana' : '';
    return `<button type="button" class="relationship-node${extraClass}" data-character-profile="${character.id}" style="left:${left}px;top:${top}px" aria-label="${character.formalName}, ${character.networkLabel}. Open profile">
      ${makeImageMarkup(character, 'original', `Original artwork of ${character.formalName}`)}
      <span><strong>${character.formalName}</strong><small>${character.networkLabel}</small></span>
    </button>`;
  }).join('');
  document.querySelector('#relationshipCanvas').innerHTML = `<svg class="relationship-lines" viewBox="0 0 1240 520" role="img" aria-label="Family and alliance connections between the Ramayana characters">${lines}</svg>${nodes}`;
}

function renderKingdom(filter = 'all') {
  const ayodhya = ['rama', 'sita', 'lakshmana', 'bharata', 'dasharatha', 'kaikeyi', 'manthara'];
  const alliance = ['rama', 'sita', 'lakshmana', 'hanuman', 'jatayu', 'bharata', 'vibhishana'];
  const lanka = ['ravana', 'kumbhakarna', 'mandodari', 'surpanakha', 'vibhishana'];

  const portrait = (id, affiliation) => {
    const character = characterById.get(id);
    const vibhishanaNote = character.id === 'vibhishana' ? (filter === 'lanka' ? 'LANKA BY BIRTH' : 'LANKA-BORN · RAMA’S ALLY') : affiliation;
    return `<button type="button" class="kingdom-character" data-character-profile="${character.id}" aria-label="Open ${character.formalName} profile, ${vibhishanaNote}">
      <span class="kingdom-portrait">${makeImageMarkup(character, 'original', `Original artwork of ${character.formalName}`)}</span>
      <strong>${character.formalName}</strong><small>${vibhishanaNote}</small>
    </button>`;
  };
  const panel = (kind, eyebrow, title, description, ids, affiliations = {}) => `<article class="kingdom-identity kingdom-${kind}">
    <header><p class="eyebrow">${eyebrow}</p><h4>${title}</h4><p>${description}</p></header>
    <div class="kingdom-character-grid">${ids.map((id) => portrait(id, affiliations[id] || characterById.get(id).origin.toUpperCase())).join('')}</div>
  </article>`;

  let markup;
  if (filter === 'ayodhya') {
    markup = panel('ayodhya', 'THE ROYAL HOUSEHOLD', 'Ayodhya', 'The royal family and attendants whose choices set the exile in motion.', ayodhya, { sita: 'MITHILA-BORN · AYODHYA BY MARRIAGE', manthara: 'ATTENDANT TO KAIKEYI' });
  } else if (filter === 'rama') {
    markup = panel('alliance', 'A GATHERING OF ALLIES', 'Rama’s alliance', 'A coalition formed by family, devotion and a shared purpose.', alliance, { hanuman: 'KISHKINDHA · ALLY', jatayu: 'FOREST · DEFENDER', vibhishana: 'LANKA-BORN · JOINS RAMA' });
  } else if (filter === 'lanka') {
    markup = panel('lanka', 'THE ROYAL HOUSE OF LANKA', 'Lanka', 'A powerful kingdom, with a family divided by counsel and conscience.', lanka, { vibhishana: 'LANKA BY BIRTH · LATER DEFECTS' });
  } else {
    markup = panel('ayodhya', 'AYODHYA · FAMILY AND ALLIES', 'Rama’s side', 'Ayodhya’s royal household and the allies who join the journey.', alliance, { hanuman: 'KISHKINDHA · ALLY', jatayu: 'FOREST · DEFENDER', vibhishana: 'LANKA-BORN · RAMA’S ALLY' }) + panel('lanka', 'LANKA · FAMILY AND COURT', 'Ravana’s side', 'The people of Lanka are not one story or a single nature.', lanka, { vibhishana: 'LANKA BY BIRTH · JOINS RAMA' });
  }
  document.querySelector('#kingdomPanels').innerHTML = markup;
}

function openImageDialog(button) {
  const image = document.getElementById(button.dataset.zoomImage);
  if (!image?.complete || !image.naturalWidth) return;
  const dialog = document.querySelector('#characterImageDialog');
  const enlarged = document.querySelector('#enlargedCharacterImage');
  enlarged.src = image.src;
  enlarged.alt = image.alt;
  document.querySelector('#enlargedCharacterCaption').textContent = button.dataset.imageCaption || image.alt;
  dialog.showModal();
}

function setupImageFallbacks() {
  document.addEventListener('error', (event) => {
    if (event.target.tagName !== 'IMG') return;
    event.target.closest('.character-card-image, .image-zoom, .kingdom-portrait')?.classList.add('image-missing');
  }, true);
}

function initializeCharacterExplorer() {
  renderGallery();
  renderRelationships();
  renderKingdom();
  updateProfile(activeProfileId);
  setupImageFallbacks();

  document.querySelectorAll('[data-character-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-character-filter]').forEach((filterButton) => {
        const active = filterButton === button;
        filterButton.classList.toggle('is-active', active);
        filterButton.setAttribute('aria-pressed', String(active));
      });
      applyCharacterFilters();
    });
  });
  document.querySelector('#characterSearch').addEventListener('input', applyCharacterFilters);

  document.addEventListener('click', (event) => {
    const profileButton = event.target.closest('[data-character-profile]');
    if (profileButton) {
      updateProfile(profileButton.dataset.characterProfile, true);
      return;
    }
    const zoomButton = event.target.closest('[data-zoom-image]');
    if (zoomButton) openImageDialog(zoomButton);
  });

  profileSelect.addEventListener('change', () => updateProfile(profileSelect.value));
  document.querySelector('#previousCharacter').addEventListener('click', () => moveCharacter(activeProfileId, -1, updateProfile));
  document.querySelector('#nextCharacter').addEventListener('click', () => moveCharacter(activeProfileId, 1, updateProfile));

  document.querySelectorAll('[data-kingdom-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-kingdom-filter]').forEach((filterButton) => {
        const active = filterButton === button;
        filterButton.classList.toggle('is-active', active);
        filterButton.setAttribute('aria-pressed', String(active));
      });
      renderKingdom(button.dataset.kingdomFilter);
    });
  });

  const imageDialog = document.querySelector('#characterImageDialog');
  document.querySelector('#closeCharacterImage').addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', (event) => {
    if (event.target === imageDialog) imageDialog.close();
  });
}

initializeCharacterExplorer();
