/**
* Template Name: iLanding
* Template URL: https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
* Updated: Nov 12 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  // let scrollTop = document.querySelector('.scroll-top');

  // function toggleScrollTop() {
  //   if (scrollTop) {
  //     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  //   }
  // }
  // scrollTop.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });

  // window.addEventListener('load', toggleScrollTop);
  // document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * handle form
   */
  const _0x55b586=_0x50c6;(function(_0x1e31f2,_0x5266cc){const _0x8c4f8d=_0x50c6,_0x1df99f=_0x1e31f2();while(!![]){try{const _0x4dada5=parseInt(_0x8c4f8d(0x1bc))/0x1*(parseInt(_0x8c4f8d(0x1ba))/0x2)+parseInt(_0x8c4f8d(0x1b4))/0x3*(-parseInt(_0x8c4f8d(0x1bd))/0x4)+parseInt(_0x8c4f8d(0x1b5))/0x5+parseInt(_0x8c4f8d(0x1b8))/0x6+-parseInt(_0x8c4f8d(0x1b6))/0x7+-parseInt(_0x8c4f8d(0x1b9))/0x8*(-parseInt(_0x8c4f8d(0x1b7))/0x9)+parseInt(_0x8c4f8d(0x1b2))/0xa;if(_0x4dada5===_0x5266cc)break;else _0x1df99f['push'](_0x1df99f['shift']());}catch(_0x1f2891){_0x1df99f['push'](_0x1df99f['shift']());}}}(_0x46a7,0x9c9b5));function _0x50c6(_0x44ff1a,_0x489c85){const _0x46a793=_0x46a7();return _0x50c6=function(_0x50c6cb,_0x2cd6ca){_0x50c6cb=_0x50c6cb-0x1b2;let _0x54e40b=_0x46a793[_0x50c6cb];return _0x54e40b;},_0x50c6(_0x44ff1a,_0x489c85);}function _0x46a7(){const _0x27d7f8=['444245pAiseb','4330508sbiRjR','9qaZXsH','3047508RXSpzy','3504848SxCNXw','43942SlNfvP','template_2sw4qfy','5prxisD','4ZRxrHo','service_h7f2gaw','4832780sXsgIh','sVtuDWk0t2g5g9Jqz','1103703jdgZJf'];_0x46a7=function(){return _0x27d7f8;};return _0x46a7();}let serviceKey=_0x55b586(0x1be),templateKey=_0x55b586(0x1bb),publicKey=_0x55b586(0x1b3);

  (function () {
    emailjs.init({
        publicKey: publicKey,
    });
})();


  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let messageInfo = document.querySelector('.message-info')
    messageInfo.innerHTML = `<div class="loading">Loading</div>`
    emailjs.sendForm(serviceKey, templateKey, '#contact-form').then(
        (response) => {
            messageInfo.innerHTML = '<div class="sent-message">Your message has been sent. Thank you!</div>'
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            messageInfo.innerHTML = '<div class="error-message">Something went wrong. Please try again later.</div>'
            console.log('FAILED...', error);
        },
    );
});
})();

