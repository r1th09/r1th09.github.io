document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 768px
            768: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 1024px
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    // ... rest of your existing code ...
});