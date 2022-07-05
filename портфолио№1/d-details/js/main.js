let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');



const toggleMenu = () => {
  menu.classList.toggle('active');
}

menuBtn.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_menuBtn = target == menuBtn;
  let menu_is_active = menu.classList.contains('active');
  
  if (!its_menu && !its_menuBtn && menu_is_active) {
    toggleMenu();
  }
})


  $(document).ready(function(){
	$("#sb_1").click(function(){
	  $("#ind_1").slideToggle("slow");
	});
  });

  $(document).ready(function(){
	$("#sb_2").click(function(){
	$("#ind_2").slideToggle("slow");
  });
  });

  $(document).ready(function(){
	$("#sb_3").click(function(){
	$("#ind_3").slideToggle("slow");
  });
  });

  $(document).ready(function(){
	$("#sb_4").click(function(){
	$("#ind_4").slideToggle("slow");
  });
  });

  $(document).ready(function(){
	$("#sb_5").click(function(){
	$("#ind_5").slideToggle("slow");
  });
  });

  $(document).ready(function(){
    $("#sb_6").click(function(){
    $("#ind_6").slideToggle("slow");
    });
    });

  var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 10,
  loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  
	},
	breakpoints: {
	  991: {
		slidesPerView: 1,
	  },
	  992: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	},
  });

