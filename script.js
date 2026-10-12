document.documentElement.classList.add('js');
const timeline = document.querySelector('.timeline');
if (timeline) {
  const entries = Array.from(timeline.querySelectorAll('.timeline-entry'));
  const date = document.querySelector('#update-date');
  const search = document.querySelector('#update-search');
  const order = document.querySelector('#update-order');
  const count = document.querySelector('#update-count');
  const empty = document.querySelector('#update-empty');
  const searchable = new Map(entries.map(entry => [entry, entry.textContent.toLocaleLowerCase('de')]));
  const filter = () => {
    const query = search.value.trim().toLocaleLowerCase('de');
    let visible = 0;
    entries.forEach(entry => {
      entry.hidden = !(date.value === 'alle' || entry.dataset.date.startsWith(date.value)) || !searchable.get(entry).includes(query);
      if (!entry.hidden) visible++;
    });
    count.textContent = `${visible} von ${entries.length} Einträgen`;
    empty.hidden = visible > 0;
  };
  date.addEventListener('change', filter);
  search.addEventListener('input', filter);
  order.addEventListener('click', () => {
    const ascending = order.getAttribute('aria-pressed') !== 'true';
    order.setAttribute('aria-pressed', String(ascending));
    order.textContent = ascending ? 'Neueste zuerst' : 'Älteste zuerst';
    const sorted = entries.filter(entry => entry.dataset.date !== 'undatiert').sort((a,b) => ascending ? a.dataset.date.localeCompare(b.dataset.date) : b.dataset.date.localeCompare(a.dataset.date));
    sorted.concat(entries.filter(entry => entry.dataset.date === 'undatiert')).forEach(entry => timeline.appendChild(entry));
  });
}
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menu && navigation) {
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
}
const lightbox = document.querySelector('#lightbox');
if (lightbox) {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('p');
  document.querySelectorAll('.gallery-open').forEach(button => {
    button.addEventListener('click', () => {
      image.src = button.dataset.image;
      image.alt = button.querySelector('img').alt;
      caption.textContent = button.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  } });
  lightbox.addEventListener('close', () => { image.removeAttribute('src'); });
}
