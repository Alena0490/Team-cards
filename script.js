  /***Přepnutí na Light/Dark mode */
  const toggle = document.getElementById('modeToggle');
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });