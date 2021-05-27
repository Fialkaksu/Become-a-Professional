const swiperHead = new Swiper(".head-swiper", {
  slidesPerView: "auto",
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperWonders = new Swiper(".wonders-swiper", {
  slidesPerView: "auto",
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      // slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 640px
    // 640: {
    //   slidesPerView: 3,
    //   spaceBetween: 15.5
    // },
    // when window width is >= 1200px
    1200: {
      // slidesPerView: 3,
      spaceBetween: 24
    },
    // when window width is >= 1920px
    // 1920: {
    //   slidesPerView: 3,
    //   spaceBetween: 26
    // }
  },
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  initialSlide: 2,
  loop: true,
});

const slides = document.querySelectorAll('.wonders-swiper .slide-img');

Array.from(slides).forEach(slide => {
  slide.style.backgroundImage = `url("assets/slide${slide.dataset.count}.jpg")`
})