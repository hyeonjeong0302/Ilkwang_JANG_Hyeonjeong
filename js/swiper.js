//main_page
//visual_main
var visual_swiper = new Swiper(".visual_main", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// new
var new_swiper = new Swiper(".new", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  loop: true,

  autoplay: {
    delay: 2000,
  },
  slidesPerView: 3,
  // spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// best

var best_swiper = new Swiper(".best", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

//instagram

//sub_page

//detail_page

/* //상품 이미지 스와이퍼
var product_images_swiper = new Swiper(".product_images", {
  pagination: {
    el: ".swiper-pagination",
    hide: false,
    clickable: true,
  },
  loop: true,
  loopedSlides: 1,

//   autoplay: {
//     delay: 2000
// },

});

// review_image swiper

var review_image_swiper = new Swiper(".review_image", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 5,
}); */
