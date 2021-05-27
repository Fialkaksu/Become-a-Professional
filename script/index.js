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
  breakpoints: {
    320: {
      spaceBetween: 16
    },
    1200: {
      spaceBetween: 24
    },
  },
  initialSlide: 2,
  loop: true,
});

const slides = document.querySelectorAll('.wonders-swiper .slide-img');

Array.from(slides).forEach(slide => {
  slide.style.backgroundImage = `url("assets/slide${slide.dataset.count}.jpg")`
});