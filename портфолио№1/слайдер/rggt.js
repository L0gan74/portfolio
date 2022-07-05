var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.qwf',
    prevEl: '.slider1nav1',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }

});

var swiper = new Swiper(".mySwiper2", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.recomend_bnt_next',
    prevEl: '.recomend_bnt_prev',
  },
  loop: true,
});

function one() {
  let full_component = $(".full_component").outerHeight();
  let height_elem1 = 0;
  
  height_elem1 = full_component;
  
  
  console.log(height_elem1);
  
  
  $(".pocledniy_component").outerHeight(height_elem1);
  
  }
  one();

var swiper = new Swiper(".mySwiper3", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.recomend_bnt_prev',
    prevEl: '.recomend_bnt_next',
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});

var swiper = new Swiper(".mySwiper6", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.recomend_bnt_prev',
    prevEl: '.recomend_bnt_next',
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
});


  
  var swiper = new Swiper(".mySwiper4", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var swiper = new Swiper(".mySwiper8", {
    slidesPerView: 6,
    spaceBetween: 1,
    loop: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper7", {
    loop: true,
    navigation: {
      nextEl: ".button-next_1",
      prevEl: ".button-prev_1",
    },
  });

  var swiper = new Swiper(".mySwiper10", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.wqef',
      prevEl: '.slider1nav11',
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  
  });