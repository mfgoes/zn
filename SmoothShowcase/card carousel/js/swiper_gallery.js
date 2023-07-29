var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1, 
  slidesPerGroup: 1,
  spaceBetween: 10,
  speed: 500,
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',  // numbers instead of dots
  },
  mousewheel: {
    invert: false,
  },
  parallax: true,  // Enable parallax
  breakpoints: {
    800: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    1424: {
      slidesPerView: 4,
      slidesPerGroup: 1
    }
  }
});

