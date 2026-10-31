// Mobile menu and "Book & Master Class" submenu toggles.
(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const subToggle = document.querySelector('.submenu-toggle');

  const setNav = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  const setSub = (open) => subToggle.setAttribute('aria-expanded', String(open));

  navToggle.addEventListener('click', () => setNav(navToggle.getAttribute('aria-expanded') !== 'true'));
  subToggle.addEventListener('click', () => setSub(subToggle.getAttribute('aria-expanded') !== 'true'));

  // Close menus after choosing a link, on Escape, or on outside click.
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) { setNav(false); setSub(false); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { setSub(false); setNav(false); }
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-submenu')) setSub(false);
    if (!e.target.closest('.site-header')) setNav(false);
  });
})();
