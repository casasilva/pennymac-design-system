// Injects nav.html into #nav-slot and highlights the active link by data-nav key.
(function () {
  const slot = document.getElementById('nav-slot');
  if (!slot) return;
  const active = document.body.dataset.nav || '';
  fetch('nav.html').then(r => r.text()).then(html => {
    slot.outerHTML = html;
    if (active) {
      const a = document.querySelector(`.nav a[data-nav="${active}"]`);
      if (a) a.classList.add('active');
    }
  });
})();
