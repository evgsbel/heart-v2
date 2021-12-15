// $(document).ready(function () {
//   $('body').autoPadding({
//     source: $('.js-header'),
//   });
//   //removeIf(production)
//   console.log("document ready");
//   //endRemoveIf(production)
// });

// mobile menu
$(() => {
  const btnMenu = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-nav');
  const body = document.querySelector('body');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  const toggleMenu = function () {
    menu.classList.add('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.add('is-active');
    body.classList.add('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('.close');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
});

// open sub
var acc = document.getElementsByClassName("sub");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("is-open");
  });
}

// super ellipse
if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');

// fixed header

$(document).ready(function() {

  // function stickySidebar() {
  //   var scrollDistance = $(document).scrollTop(),
  //     headerHeight = $('.header').outerHeight(true),
  //     // sidebarHeight = $('aside').outerHeight(true),
  //     footerOffsetTop = $('.js-stop-header').offset().top,
  //     $header = $('header');
  //
  //   if( scrollDistance >= headerHeight) {
  //     $header.addClass('header_fixed');
  //     $header.removeClass('header_hide');
  //   } else {
  //     $header.removeClass('header_fixed');
  //   }
  //
  //   if ( scrollDistance + headerHeight  >= footerOffsetTop) {
  //     $header.removeClass('header_fixed');
  //     $header.addClass('header_hide');
  //   }
  //
  // }
  // stickySidebar();
  //
  // $(document).scroll(function() {
  //   stickySidebar();
  // });
  var header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 50 && scrolled > scrollPrev ) {
      header.addClass('out header_fixed');
    } else {
      header.removeClass('out');
    }
    if ( scrolled < 50) {
      header.removeClass('header_fixed');
    }
      scrollPrev = scrolled;
  });
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// form
function check() {
  var inputs = document.querySelectorAll(".js-popup-help-input");
  var textareas = document.querySelectorAll(".js-popup-help-textarea");
  var filled = true;


  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text" && !inputs[i].value) {
      filled = false;
    }

  }

  for (var j = 0; j < textareas.length; j++) {
    if (!textareas[j].value) {
      filled = false;
    }
  }

  if (filled) {
    document.querySelector(".js-popup-help-submit").disabled = false;
    document.querySelector(".js-popup-help-conf").classList.add('is-visible');
  } else {
    document.querySelector(".js-popup-help-submit").disabled = true;
    document.querySelector(".js-popup-help-conf").classList.remove('is-visible');
  }
}

window.addEventListener("keyup", check);
window.addEventListener("click", check);

function checkReviews() {
  var inputs = document.querySelectorAll(".js-popup-reviews-input");
  var textareas = document.querySelectorAll(".js-popup-reviews-textarea");
  var filled = true;


  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text" && !inputs[i].value) {
      filled = false;
    }

  }

  for (var j = 0; j < textareas.length; j++) {
    if (!textareas[j].value) {
      filled = false;
    }
  }

  if (filled) {
    document.querySelector(".js-popup-reviews-submit").disabled = false;
    document.querySelector(".js-popup-reviews-conf").classList.add('is-visible');
  } else {
    document.querySelector(".js-popup-reviews-submit").disabled = true;
    document.querySelector(".js-popup-reviews-conf").classList.remove('is-visible');
  }
}

window.addEventListener("keyup", checkReviews);
window.addEventListener("click", checkReviews);


$('.js-close-popup').click(function () {
  $.fancybox.close();
})




