// mega menu start 
const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
   if (!menu.classList.contains('active')) {
      return;
   }

   if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
   }
});

menuArrow.addEventListener('click', () => {
   hideSubMenu();
});

menuTrigger.addEventListener('click', () => {
   toggleMenu();
});

menuClosed.addEventListener('click', () => {
   toggleMenu();
});

menuOverlay.addEventListener('click', () => {
   toggleMenu();
});

function toggleMenu() {
   menu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
}

function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector('.menu-subs');
   subMenu.classList.add('active');
   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
   menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
   menu.querySelector('.menu-mobile-header').classList.add('active');
}

function hideSubMenu() {
   subMenu.style.animation = 'slideRight 0.5s ease forwards';
   setTimeout(() => {
      subMenu.classList.remove('active');
   }, 300);

   menu.querySelector('.menu-mobile-title').innerHTML = '';
   menu.querySelector('.menu-mobile-header').classList.remove('active');
}

window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains('active')) {
         toggleMenu();
      }
   }
};

// ✅ NEW: Close mobile menu on anchor click
document.querySelectorAll('.menu-section a[href^="#"]').forEach(link => {
   link.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
         menu.classList.remove('active');
         menuOverlay.classList.remove('active');
      }
   });
});

// mega menu end
// top menu start
$(".dropdown_click .selected").on('click', function() {
   $(".dropdown_click .drop-content ul").slideToggle();
});

$(".dropdown_click .drop-content ul li span").on('click', function() {
   $(".dropdown_click .selected  span").html($(this).html());
   $(".dropdown_click .drop-content ul").slideUp();
}); 

$(document).bind('click', function(e) {
   var $clickhide = $(e.target);
   if (! $clickhide.parents().hasClass("dropdown_c"))
       $(".dropdown_c .drop-content ul").slideUp();
});
// top menu end
// top menu scroll start
// let wndowScoll = function() {
//    $('.top_header_block')[$(window).scrollTop() > 20 ? 'addClass' : 'removeClass']('black');
// }
// $(window).scroll(function() { wndowScoll() });
// wndowScoll();
// top menu scroll end




