AOS.init();

/* visual-slider */
var swiper = new Swiper('.visual-slider', {
    loop: true, // 반복 */
    // autoplay: {
    //     delay: 10000,
    // },
    // speed: 1000,

    pagination: {
        el: '.visual-slider-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.visual-slider-button-next',
        prevEl: '.visual-slider-button-prev',
    },
});

/* news-slider */
var swiper = new Swiper('.news-slider', {
    loop: true,
    // autoplay: {
    //     delay: 3000,
    // },
    // speed: 500,

    pagination: {
        el: '.news-slider-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.news-slider-button-next',
        prevEl: '.news-slider-button-prev',
    },

    // 모바일의 세팅으로 시작
    slidesPerView: 1,
    // spaceBetween: 20,

    // 반응형 분기점
    breakpoints: {
        // 375픽셀 이상
        375: {
            slidesPerView: 2,
        },
        // 1024픽셀 이상
        1024: {
            slidesPerView: 3,
        },
    },
});
