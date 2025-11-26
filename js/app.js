(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
//меню бургер
    const menuBurger = document.querySelector(".icon-menu");
    const menuNav = document.querySelector(".menu__body");
    const menuBody = document.querySelector("body");
    if (menuBurger) menuBurger.addEventListener("click", (function(e) {
        menuBurger.classList.toggle("menu-open");
        menuNav.classList.toggle("body-active");
        menuBody.classList.toggle("lock");
        if (menuNav) menuNav.addEventListener("click", (function(e) {
            menuBurger.classList.remove("menu-open");
            menuNav.classList.remove("body-active");
            menuBody.classList.remove("lock");
        }));
    }));
//меню бургер - end
//video
    document.querySelectorAll(".video-content").forEach((el => el.addEventListener("click", (() => {
        let wrapperVideo = el.firstElementChild;
        let btnStop = el.lastElementChild;
        if (btnStop) btnStop.classList.add("btn-play_active");
        if (wrapperVideo) wrapperVideo.controls = "controls";
        if (/Firefox|Mac68K|MacPPC|MacIntel|Macintosh|macOS|iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) wrapperVideo.play();
    }))));
//video - end
    function initSliders() {
         //slider skills
        if (document.querySelector(".skills__slider")) new Swiper(".skills__slider", {
            direction: "vertical",
            spaceBetween: 30,
            initialSlide: 1,
            speed: 500,
            loop: true,
            autoplay: true,
            delay: 4e3,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 381,
                depth: 210,
                modifier: 1,
                slideShadows: false
            },
            navigation: {
                prevEl: ".skills-btn-prev",
                nextEl: ".skills-btn-next"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    coverflowEffect: {
                        rotate: 1,
                        stretch: 220,
                        depth: 410,
                        modifier: 1,
                        slideShadows: false
                    }
                },
                730: {
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 381,
                        depth: 210,
                        modifier: 1,
                        slideShadows: false
                    }
                },
                850: {},
                992: {},
                1268: {}
            }
        });
         //slider users
        if (document.querySelector(".users__slider")) new Swiper(".users__slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoHeight: true,
            speed: 1100,
            pagination: {
                el: ".pagination-users",
                clickable: true
            },
            navigation: {
                prevEl: ".users-btn-prev",
                nextEl: ".users-btn-next"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                850: {
                    slidesPerView: 1
                },
                992: {
                    spaceBetween: 30
                }
            }
        });
    }
    window.addEventListener("load", (function(e) {
        initSliders();
    }));
//accordion
    document.querySelectorAll(".faq-accordion__question").forEach((el => el.addEventListener("click", (() => {
        let questions__answer = el.nextElementSibling;
        if (questions__answer.style.maxHeight) document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null)); else {
            document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null));
            questions__answer.style.maxHeight = questions__answer.scrollHeight + "px";
        }
    }))));
    document.querySelectorAll(".faq-accordion__answet").forEach((el => el.addEventListener("click", (() => {
        let questions__answe = el.previousElementSibling;
        if (questions__answe.style.maxHeight) document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null)); else {
            document.querySelectorAll(".faq-accordion__answet").forEach((el => el.style.maxHeight = null));
            questions__answe.style.maxHeight = questions__answe.scrollHeight + "px";
        }
    }))));
    document.querySelectorAll(".faq-accordion__question, .faq-accordion__answet").forEach((item => item.addEventListener("click", (() => {
        const parent = item.parentNode;
        if (parent.classList.contains("faq-accordion__card-active")) parent.classList.remove("faq-accordion__card-active"); else {
            document.querySelectorAll(".faq-accordion__card").forEach((child => child.classList.remove("faq-accordion__card-active")));
            parent.classList.add("faq-accordion__card-active");
        }
    }))));
//accordion - end
//popup
    const popups = document.querySelectorAll(".popup");
    const popupButton = document.querySelectorAll(".button, .button-main");
    const body = document.body;
    const popupWrapper = document.querySelectorAll(".popup__wrapper");
    const fixBlock = document.querySelectorAll(".fix-block");
    let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
    let marginOffset = document.body.offsetWidth - window.innerWidth + "px";
    function openPopup(elem) {
        elem.classList.add("popup-open");
        body.classList.add("lock");
        document.body.style.paddingRight = paddingOffset;
        fixBlock.forEach((el => {
            el.style.paddingRight = paddingOffset;
        }));
        popupWrapper.forEach((el => {
            el.style.marginLeft = marginOffset;
        }));
    }
    function closePopup(e) {
        if (e.target.classList.contains("close-popup") || e.target.closest(".close-popup") || e.target.classList.contains("popup__wrapper")) {
            e.target.closest(".popup").classList.remove("popup-open");
            body.classList.remove("lock");
            document.body.style.paddingRight = "0px";
            fixBlock.forEach((el => {
                el.style.paddingRight = "0px";
            }));
            popupWrapper.forEach((el => {
                el.style.marginLeft = "auto";
            }));
        }
    }
    popupButton.forEach((btn => {
        btn.addEventListener("click", (e => {
            let data = e.target.dataset.popupOpen;
            popups.forEach((popup => {
                if (popup.dataset.popup == data || popup.dataset.popup == e.target.closest(".button, .button-main").dataset.popupOpen) openPopup(popup);
            }));
        }));
    }));
    popups.forEach((popup => {
        popup.addEventListener("click", (e => closePopup(e)));
    }));
//popup - end
    window["FLS"] = true;
    isWebp();
})();