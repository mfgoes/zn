var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1, 
  slidesPerGroup: 1,
  spaceBetween: 0,
  speed: 500,
  centeredSlides: false,
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
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    1424: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  on: {
    slideChange: function () {
      let allSlides = Array.from(this.slides); // Convert to array

      allSlides.forEach((slide, index) => {
        let content = slide.querySelector('.project-content');
        
        if (index === this.activeIndex) {
          content.style.opacity = "1";
          content.style.transform = "translateY(0px)";
        } else {
          content.style.opacity = "0";
          content.style.transform = "translateY(10px)";
          
        }
      });
    },
  },
  slideChange: function() {
    let allSlides = Array.from(this.slides); // Convert to array

    allSlides.forEach((slide, index) => {
      let content = slide.querySelector('.project-content');
      
      if (index === this.activeIndex) {
        content.style.opacity = "1";
        content.style.transform = "translateY(0px)";
      } else {
        content.style.opacity = "0";
        content.style.transform = "translateY(10px)";
      }
    });
  }
  
});

var swiper = new Swiper(".swiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1.0001,
  centeredSlides: true,
  loop: true,
});



// Immediately target the first slide after initialization
const firstSlide = mySwiper.slides[0];
const firstSlideContent = firstSlide.querySelector('.project-content');
firstSlideContent.style.opacity = "1";
firstSlideContent.style.transform = "translateY(0)";

