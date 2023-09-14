document.addEventListener('DOMContentLoaded', () => {
	const navbarbutton = document.querySelector('#nav-button');
  const navbaropen = document.querySelector('#nav-open');
  const navbarclose = document.querySelector('#nav-close');
  const navbar = document.querySelector('#navbar');
  navbarbutton.addEventListener('click', (e) => {
      navbaropen.classList.toggle('hidden');
      navbarclose.classList.toggle('hidden');
      navbar.classList.toggle('hidden');
  });
});
