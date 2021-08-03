const menuToggle = document.querySelector('.menu-toggle');
const menuHamburger = document.querySelector('.menu-hamburger');
const scrolls = document.querySelectorAll('.scrolls');
const body = document.querySelector('body');

// mobile menu hamburger
menuToggle.addEventListener('click', function () {
  if (menuHamburger.classList.contains('fade-in')) {
    menuHamburger.classList.remove('fade-in');
    menuHamburger.classList.add('fade-out');
  } else {
    menuHamburger.classList.remove('fade-out');
    menuHamburger.classList.add('fade-in');
  }
});

// smooth scroll
scrolls.forEach((scroll) => {
  scroll.addEventListener('click', function (e) {
    e.preventDefault();
    let href = scroll.getAttribute('href');
    let destionation = document.querySelector(`${href}`).offsetTop;
    console.log(destionation);
    window.scrollTo(0, destionation - 48);

    if (menuHamburger.classList.contains('fade-in')) {
      menuHamburger.classList.remove('fade-in');
      menuHamburger.classList.add('fade-out');
    }
  });
});
