document.addEventListener('DOMContentLoaded', () => {
  let openMenu_btn = $('.burger_menu_btn');
  let closeMenu_btn = $('.close_menuMobile_btn');
  let menu = $('#menuMobile');

  let menuIsOpen = 0;

  openMenu_btn.on('click', function() {
      if (menuIsOpen == 0) {
          menu.css({ left: '0' });
          menuIsOpen = 1;
      } else {
          menu.css({ left: '-150%' });
          menuIsOpen = 0;
      }
  });

  closeMenu_btn.on('click', function() {
      menu.css({ left: '-150%' });
      menuIsOpen = 0;
  });
});