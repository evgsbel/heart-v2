"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// $(document).ready(function () {
//   $('body').autoPadding({
//     source: $('.js-header'),
//   });
//   //removeIf(production)
//   console.log("document ready");
//   //endRemoveIf(production)
// });
// mobile menu
$(function () {
  var btnMenu = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-nav');
  var body = document.querySelector('body'); // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  var toggleMenu = function toggleMenu() {
    menu.classList.add('is-open'); // menu.style.height = heroHeight + headerHeight + 'px'

    btnMenu.classList.add('is-active');
    body.classList.add('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.close');

  var closeMenu = function closeMenu() {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
}); // open sub

var acc = document.getElementsByClassName("sub");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("is-open");
  });
} // super ellipse


if (CSS && 'paintWorklet' in CSS) CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners'); // fixed header

$(document).ready(function () {
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
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass('out header_fixed');
    } else {
      header.removeClass('out');
    }

    if (scrolled < 50) {
      header.removeClass('header_fixed');
    }

    scrollPrev = scrolled;
  });
});
var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } // form

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

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
});