AOS.init();

/* visual-slider */
var swiper = new Swiper('.visual-slider', {
    loop: true, // 반복 */
    autoplay: {
        delay: 10000,
    },
    speed: 1000,

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
    autoplay: {
        delay: 3000,
    },
    speed: 500,

    pagination: {
        el: '.news-slider-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.news-slider-button-next',
        prevEl: '.news-slider-button-prev',
    },
});
