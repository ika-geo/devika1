document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper-container', {
        loop: false,
        autoplay: false,
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 0
        //     },
        //     480: {
        //         slidesPerView: 1,
        //         spaceBetween: 0
        //     },
        //     640: {
        //         slidesPerView: 1,
        //         spaceBetween: 0
        //     },
        //     992: {
        //         slidesPerView: 4,
        //         spaceBetween: 0
        //     }
        // }
    });
});
