$(function () {
    AOS.init();

    // GNB
    // 대상을 변수에 저장
    const $window = $(window);
    const $header = $("header");
    const $subMenu = $(".submenu");
    const $menu = $(".gnb > li");
    const duration = 300;
    console.log($menu);

    let lastScrollTop = 0;

    function toggleHeaderVisibility(isVisible) {
        if (isVisible) {
            $header.removeClass("hide");
        } else {
            $header.addClass("hide");
        }
    }

    // 메뉴 영역에 마우스가 들어오면(event: mouseenter)
    $menu.on("mouseenter", function () {
        // 그 영역 하위 요소 중에서 submenu 찾아서 슬라이드 다운
        $(this).find($subMenu).stop().slideDown(duration);
        // $subMenu.slideDown(duration); // 모든 서브메뉴 떨어뜨리기

        // 메뉴 활성화 표시: on클래스 부여
        $(this).addClass("on");
    });

    // 메뉴 영역에 마우스가 나가면
    $menu.on("mouseleave", function () {
        // submenu 찾아서 슬라이드 업
        $subMenu.stop().slideUp(duration);
        $menu.removeClass("on");
    });

    // 마우스 휠을 조작했을 때
    $window.on("wheel", (e) => {
        // console.log(e);

        if (e.originalEvent.deltaY < 0) {
            // 휠을 올렸을 때 header가 보임(hide클래스 삭제)
            toggleHeaderVisibility(true);
        } else {
            toggleHeaderVisibility(false);
        }
    });

    // 스크롤 이벤트가 일어나면
    $window.on("scroll", () => {
        const scrollTop = $window.scrollTop();
        console.log(scrollTop);

        // 스크롤한 값이 저장된(마지막에 위치했던) 스크롤 값보다 작다면
        if (scrollTop < lastScrollTop) {
            toggleHeaderVisibility(true);
        } else {
            toggleHeaderVisibility(false);
        }

        // 마지막 스크롤 값을 갱신
        lastScrollTop = scrollTop;
    });
    // e: GNB

    /* visual-slider */
    var swiper = new Swiper(".visual-slider", {
        loop: true, // 반복 */
        // autoplay: {
        //     delay: 10000,
        // },
        // speed: 1000,

        pagination: {
            el: ".visual-slider-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".visual-slider-button-next",
            prevEl: ".visual-slider-button-prev",
        },
    });

    /* news-slider */
    var swiper = new Swiper(".news-slider", {
        loop: true,
        // autoplay: {
        //     delay: 3000,
        // },
        // speed: 500,

        pagination: {
            el: ".news-slider-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".news-slider-button-next",
            prevEl: ".news-slider-button-prev",
        },

        // 모바일의 세팅으로 시작
        slidesPerView: 1,
        slidesPerGroup: 1,
        // spaceBetween: 20,

        // 반응형 분기점
        breakpoints: {
            // 375픽셀 이상
            376: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 100,
            },
            // 1025픽셀 이상
            1440: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 80,
            },
        },
    });
});
