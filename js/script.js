document.addEventListener('DOMContentLoaded', function(){
        // burger 
        const burger = document.querySelector('.js-burger');
        const nav = document.querySelector('.js-header-nav');

        document.addEventListener('click', (e) => {
            const isBurger = e.target.closest('.js-burger');
            const isNav = e.target.closest('.js-header-nav');

            if (isBurger) {
                burger.classList.toggle('clicked');
                nav.classList.toggle('show');
                return; 
            }
            if (e.target.matches('.header__nav-link')) {
                e.preventDefault();
                burger.classList.remove('clicked');
                nav.classList.remove('show');
                return;
            }
            if (!isNav) {
                burger.classList.remove('clicked');
                nav.classList.remove('show');
            }
        });


        // swiper 
        var swiper = new Swiper(".bannerSwiper", {
                direction: "vertical",
                slidesPerView: 'auto',
                freeMode: true,
                navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                },
        });

        const customSwiper = document.querySelectorAll('.customSwiper');
        customSwiper.forEach(swiperContainer => {
        const gap = swiperContainer.dataset.space || 20;

        // example:
        // data-center="true"
        // data-center-mobile="true"
        // data-center-tablet="false"

        const centerDesktop = swiperContainer.dataset.center === 'true';
        const centerTablet = swiperContainer.dataset.centerTablet === 'true';
        const centerMobile = swiperContainer.dataset.centerMobile === 'true';

        new Swiper(swiperContainer, {
                slidesPerView: 'auto',
                spaceBetween: Number(gap),

                centeredSlides: centerDesktop,

                navigation: {
                nextEl: swiperContainer.querySelector(".custom-arrow-next"),
                prevEl: swiperContainer.querySelector(".custom-arrow-prev"),
                },

                breakpoints: {
                0: {
                        centeredSlides: centerMobile,
                },

                768: {
                        centeredSlides: centerTablet,
                },

                1024: {
                        centeredSlides: centerDesktop,
                }
                }
        });
        });


})
