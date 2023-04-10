new Swiper('.swiper', {
  // slidesPerView: 1,
  // spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});
