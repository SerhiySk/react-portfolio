export const scrollFunc = function (e) {
  const navbar = document.querySelector('#nav');

  e.preventDefault(); // Matching strategy
  if (e.target.classList.contains('link')) {
    const id = e.target.getAttribute('href');
    const el = document.querySelector(id).getBoundingClientRect();
    const top =
      window.pageYOffset > 80
        ? el.top + window.pageYOffset - navbar.getBoundingClientRect().height
        : el.top +
          window.pageYOffset -
          navbar.getBoundingClientRect().height -
          80;
    window.scrollTo({
      left: el.left + window.pageXOffset,
      top,
      behavior: 'smooth',
    });
  }
};
