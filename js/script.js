/* =========================================================
   TUTORNEST
   PART 4 - JAVASCRIPT
   HEADER / MENU / DROPDOWN / DARK MODE / RTL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;
    const html = document.documentElement;

    /* Hamburger */
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    /* Desktop Home dropdown */
    const desktopDropdown = document.querySelector(".nav-dropdown");
    const desktopDropdownToggle =
        document.querySelector(".dropdown-toggle");

    /* Mobile Home dropdown */
    const mobileDropdown =
        document.querySelector(".mobile-nav-dropdown");

    const mobileDropdownToggle =
        document.querySelector(".mobile-dropdown-toggle");

    /* Theme buttons */
    const themeToggle =
        document.getElementById("themeToggle");

    const mobileThemeToggle =
        document.getElementById("mobileThemeToggle");

    /* RTL buttons */
    const rtlToggle =
        document.getElementById("rtlToggle");

    const mobileRtlToggle =
        document.getElementById("mobileRtlToggle");


    /* =====================================================
       LOAD SAVED SETTINGS
    ===================================================== */

    const savedTheme = localStorage.getItem("tutornest-theme");
    const savedDirection = localStorage.getItem("tutornest-direction");


    /* =====================================================
       DARK MODE
    ===================================================== */

    function updateThemeIcons() {

        const isDarkMode =
            body.classList.contains("dark-mode");

        /* Desktop icon */
        if (themeToggle) {
            const icon =
                themeToggle.querySelector("i");

            if (icon) {
                icon.className = isDarkMode
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";
            }

            themeToggle.setAttribute(
                "aria-label",
                isDarkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            themeToggle.setAttribute(
                "title",
                isDarkMode
                    ? "Light Mode"
                    : "Dark Mode"
            );
        }


        /* Mobile icon */
        if (mobileThemeToggle) {
            const icon =
                mobileThemeToggle.querySelector("i");

            if (icon) {
                icon.className = isDarkMode
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";
            }
        }
    }


    function setDarkMode(enabled) {

        if (enabled) {
            body.classList.add("dark-mode");
            localStorage.setItem(
                "tutornest-theme",
                "dark"
            );
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem(
                "tutornest-theme",
                "light"
            );
        }

        updateThemeIcons();
    }


    /* Apply saved theme */

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    } else if (savedTheme === "light") {
        body.classList.remove("dark-mode");
    }

    updateThemeIcons();


    /* Desktop theme button */

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            const isDark =
                body.classList.contains("dark-mode");

            setDarkMode(!isDark);
        });
    }


    /* Mobile theme button */

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener(
            "click",
            function () {

                const isDark =
                    body.classList.contains("dark-mode");

                setDarkMode(!isDark);
            }
        );
    }


    /* =====================================================
       RTL MODE
    ===================================================== */

    function updateRtlButton() {

        const isRTL =
            html.getAttribute("dir") === "rtl";


        /* Desktop */

        if (rtlToggle) {

            rtlToggle.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to left-to-right"
                    : "Switch to right-to-left"
            );

            rtlToggle.setAttribute(
                "title",
                isRTL
                    ? "LTR"
                    : "RTL"
            );
        }


        /* Mobile */

        if (mobileRtlToggle) {

            mobileRtlToggle.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to left-to-right"
                    : "Switch to right-to-left"
            );
        }
    }


    function setDirection(direction) {

        html.setAttribute("dir", direction);

        localStorage.setItem(
            "tutornest-direction",
            direction
        );

        updateRtlButton();
    }


    /* Apply saved direction */

    if (savedDirection === "rtl") {
        html.setAttribute("dir", "rtl");
    } else {
        html.setAttribute("dir", "ltr");
    }

    updateRtlButton();


    /* Desktop RTL */

    if (rtlToggle) {
        rtlToggle.addEventListener("click", function () {

            const currentDirection =
                html.getAttribute("dir");

            setDirection(
                currentDirection === "rtl"
                    ? "ltr"
                    : "rtl"
            );
        });
    }


    /* Mobile RTL */

    if (mobileRtlToggle) {
        mobileRtlToggle.addEventListener(
            "click",
            function () {

                const currentDirection =
                    html.getAttribute("dir");

                setDirection(
                    currentDirection === "rtl"
                        ? "ltr"
                        : "rtl"
                );
            }
        );
    }


    /* =====================================================
       HAMBURGER MENU
    ===================================================== */

    function openMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.add("open");
        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("mobile-menu-open");
    }


    function closeMobileMenu() {

        if (!mobileMenu || !menuToggle) {
            return;
        }

        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("mobile-menu-open");

        closeMobileDropdown();
    }


    function toggleMobileMenu() {

        if (!mobileMenu) {
            return;
        }

        if (mobileMenu.classList.contains("open")) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleMobileMenu();
            }
        );
    }


    /* =====================================================
       MOBILE HOME DROPDOWN
    ===================================================== */

    function openMobileDropdown() {

        if (!mobileDropdown ||
            !mobileDropdownToggle) {
            return;
        }

        mobileDropdown.classList.add("open");

        mobileDropdownToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }


    function closeMobileDropdown() {

        if (!mobileDropdown ||
            !mobileDropdownToggle) {
            return;
        }

        mobileDropdown.classList.remove("open");

        mobileDropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function toggleMobileDropdown() {

        if (!mobileDropdown) {
            return;
        }

        if (
            mobileDropdown.classList.contains("open")
        ) {
            closeMobileDropdown();
        } else {
            openMobileDropdown();
        }
    }


    if (mobileDropdownToggle) {

        mobileDropdownToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                toggleMobileDropdown();
            }
        );
    }


    /* =====================================================
       DESKTOP HOME DROPDOWN
    ===================================================== */

    if (desktopDropdownToggle &&
        desktopDropdown) {

        desktopDropdownToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                const isOpen =
                    desktopDropdown.classList.contains(
                        "open"
                    );

                /* Close first */
                document
                    .querySelectorAll(".nav-dropdown.open")
                    .forEach(function (item) {
                        item.classList.remove("open");

                        const button =
                            item.querySelector(
                                ".dropdown-toggle"
                            );

                        if (button) {
                            button.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }
                    });


                /* Open selected dropdown */

                if (!isOpen) {

                    desktopDropdown.classList.add(
                        "open"
                    );

                    desktopDropdownToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );
                }
            }
        );
    }


    /* =====================================================
       CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            /* Desktop dropdown */

            if (
                desktopDropdown &&
                !desktopDropdown.contains(event.target)
            ) {

                desktopDropdown.classList.remove(
                    "open"
                );

                if (desktopDropdownToggle) {
                    desktopDropdownToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }


            /* Mobile dropdown */

            if (
                mobileDropdown &&
                !mobileDropdown.contains(event.target)
            ) {

                closeMobileDropdown();
            }
        }
    );


    /* =====================================================
       MOBILE MENU LINKS
       CLOSE MENU AFTER CLICK
    ===================================================== */

    if (mobileMenu) {

        const mobileLinks =
            mobileMenu.querySelectorAll(
                "a"
            );

        mobileLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();
                }
            );
        });
    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                /* Close mobile menu */
                closeMobileMenu();


                /* Close desktop dropdown */

                if (desktopDropdown) {
                    desktopDropdown.classList.remove(
                        "open"
                    );
                }

                if (desktopDropdownToggle) {
                    desktopDropdownToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            }
        }
    );


    /* =====================================================
       RESET MOBILE MENU WHEN WINDOW BECOMES DESKTOP
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth >= 1200) {
                closeMobileMenu();
            }
        }
    );


    /* =====================================================
       PREVENT BODY SCROLL WHILE MOBILE MENU IS OPEN
    ===================================================== */

    const styleSheet = document.createElement("style");

    styleSheet.textContent = `
        body.mobile-menu-open {
            overflow: hidden;
        }
    `;

    document.head.appendChild(styleSheet);


    /* =====================================================
       INITIAL ARIA STATE
    ===================================================== */

    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (desktopDropdownToggle) {
        desktopDropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    if (mobileDropdownToggle) {
        mobileDropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});







/* =========================================================
   TUTORNEST HOME 1
   PART 4 - HERO SLIDER JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const heroSlider = document.querySelector(".home-hero-slider");

    if (!heroSlider) {
        return;
    }

    const slides = heroSlider.querySelectorAll(".home-hero-slide");
    const dots = heroSlider.querySelectorAll(".home-hero-slider-dot");

    if (!slides.length || !dots.length) {
        return;
    }

    let currentSlide = 0;
    let autoSlide;


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });


        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentSlide = index;
    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextSlide() {

        let nextIndex = currentSlide + 1;

        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }

        showSlide(nextIndex);
    }


    /* =====================================================
       START AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        stopAutoSlide();

        autoSlide = setInterval(function () {
            nextSlide();
        }, 5000);
    }


    /* =====================================================
       STOP AUTO SLIDE
    ===================================================== */

    function stopAutoSlide() {

        if (autoSlide) {
            clearInterval(autoSlide);
        }
    }


    /* =====================================================
       DOT CLICK
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);

            startAutoSlide();

        });

    });


    /* =====================================================
       PAUSE WHILE MOUSE IS OVER HERO
    ===================================================== */

    heroSlider.addEventListener("mouseenter", function () {
        stopAutoSlide();
    });


    heroSlider.addEventListener("mouseleave", function () {
        startAutoSlide();
    });


    /* =====================================================
       TOUCH / SWIPE SUPPORT
    ===================================================== */

    let touchStartX = 0;
    let touchEndX = 0;


    heroSlider.addEventListener("touchstart", function (event) {

        touchStartX = event.changedTouches[0].screenX;

    }, { passive: true });


    heroSlider.addEventListener("touchend", function (event) {

        touchEndX = event.changedTouches[0].screenX;

        handleSwipe();

    }, { passive: true });


    function handleSwipe() {

        const swipeDistance = touchEndX - touchStartX;

        /* Minimum swipe distance */

        if (Math.abs(swipeDistance) < 50) {
            return;
        }


        /* Swipe left */

        if (swipeDistance < 0) {

            nextSlide();

        }


        /* Swipe right */

        else {

            let previousIndex = currentSlide - 1;

            if (previousIndex < 0) {
                previousIndex = slides.length - 1;
            }

            showSlide(previousIndex);

        }


        startAutoSlide();
    }


    /* =====================================================
       INITIAL SLIDE
    ===================================================== */

    showSlide(0);

    startAutoSlide();

});








/* =========================================================
   ACTIVE MENU ITEM
========================================================= */

function setActiveMenuItem() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    /* Desktop links */

    const desktopLinks =
        document.querySelectorAll(
            ".desktop-navigation a"
        );


    desktopLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (!linkPage || linkPage === "#") {
            return;
        }

        const cleanLinkPage =
            linkPage.split("/").pop();

        if (cleanLinkPage === currentPage) {

            link.classList.add("active");

            const parentDropdown =
                link.closest(".nav-dropdown");

            if (parentDropdown) {
                parentDropdown.classList.add("active");
            }

        }

    });


    /* Mobile links */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-navigation a"
        );


    mobileLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (!linkPage || linkPage === "#") {
            return;
        }

        const cleanLinkPage =
            linkPage.split("/").pop();

        if (cleanLinkPage === currentPage) {

            link.classList.add("active");

            const parentDropdown =
                link.closest(".mobile-nav-dropdown");

            if (parentDropdown) {
                parentDropdown.classList.add("active");
            }

        }

    });

}


/* Run after page loads */

setActiveMenuItem();




/* =========================================================
   HOME 2
   SECTION 6: FAQ
   PART 4 - JAVASCRIPT ACCORDION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".home-two-faq-item");

    if (!faqItems.length) {
        return;
    }

    faqItems.forEach(function (item) {

        const question = item.querySelector(".home-two-faq-question");
        const answer = item.querySelector(".home-two-faq-answer");
        const icon = item.querySelector(".home-two-faq-question-icon i");

        if (!question || !answer || !icon) {
            return;
        }

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            /*
             * Close all FAQ items
             */
            faqItems.forEach(function (faqItem) {

                faqItem.classList.remove("active");

                const faqQuestion =
                    faqItem.querySelector(".home-two-faq-question");

                const faqAnswer =
                    faqItem.querySelector(".home-two-faq-answer");

                const faqIcon =
                    faqItem.querySelector(".home-two-faq-question-icon i");

                if (faqQuestion) {
                    faqQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

                if (faqAnswer) {
                    faqAnswer.hidden = true;
                }

                if (faqIcon) {
                    faqIcon.classList.remove("fa-minus");
                    faqIcon.classList.add("fa-plus");
                }

            });


            /*
             * Open clicked item
             */
            if (!isActive) {

                item.classList.add("active");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

                answer.hidden = false;

                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");

            }

        });

    });

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function setActiveMenuItem() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    /* =====================================================
       DESKTOP NAVIGATION
    ===================================================== */

    const desktopLinks =
        document.querySelectorAll(".desktop-navigation a");

    desktopLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage || linkPage === "#") {
            return;
        }

        const cleanLinkPage =
            linkPage.split("/").pop();

        if (cleanLinkPage === currentPage) {

            link.classList.add("active");

            const parentDropdown =
                link.closest(".nav-dropdown");

            if (parentDropdown) {
                parentDropdown.classList.add("active");
            }
        }
    });


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileLinks =
        document.querySelectorAll(".mobile-navigation a");

    mobileLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage || linkPage === "#") {
            return;
        }

        const cleanLinkPage =
            linkPage.split("/").pop();

        if (cleanLinkPage === currentPage) {

            link.classList.add("active");

            const parentDropdown =
                link.closest(".mobile-nav-dropdown");

            if (parentDropdown) {
                parentDropdown.classList.add("active");
            }
        }
    });
}


setActiveMenuItem();






/* =========================================================
   TUTORNEST - SHARED FAQ ACCORDION
   Works for:
   1. Home 2 FAQ
   2. Pricing FAQ
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       HOME 2 FAQ
    ----------------------------------------------------- */

    const homeTwoFaqItems = document.querySelectorAll(
        ".home-two-faq-item"
    );

    if (homeTwoFaqItems.length) {

        homeTwoFaqItems.forEach(function (item) {

            const question = item.querySelector(
                ".home-two-faq-question"
            );

            const answer = item.querySelector(
                ".home-two-faq-answer"
            );

            const toggleIcon = item.querySelector(
                ".home-two-faq-toggle i"
            );

            if (!question || !answer || !toggleIcon) return;

            question.addEventListener("click", function () {

                const isOpen = item.classList.contains(
                    "home-two-faq-item-active"
                );

                /* Close all Home 2 FAQ items */
                homeTwoFaqItems.forEach(function (otherItem) {

                    const otherQuestion =
                        otherItem.querySelector(
                            ".home-two-faq-question"
                        );

                    const otherAnswer =
                        otherItem.querySelector(
                            ".home-two-faq-answer"
                        );

                    const otherToggleIcon =
                        otherItem.querySelector(
                            ".home-two-faq-toggle i"
                        );

                    otherItem.classList.remove(
                        "home-two-faq-item-active"
                    );

                    if (otherQuestion) {
                        otherQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }

                    if (otherAnswer) {
                        otherAnswer.hidden = true;
                    }

                    if (otherToggleIcon) {
                        otherToggleIcon.classList.remove(
                            "fa-minus"
                        );

                        otherToggleIcon.classList.add(
                            "fa-plus"
                        );
                    }
                });

                /* Open clicked item */
                if (!isOpen) {

                    item.classList.add(
                        "home-two-faq-item-active"
                    );

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    answer.hidden = false;

                    toggleIcon.classList.remove(
                        "fa-plus"
                    );

                    toggleIcon.classList.add(
                        "fa-minus"
                    );
                }

            });

        });
    }


    /* -----------------------------------------------------
       PRICING FAQ
    ----------------------------------------------------- */

    const pricingFaqItems = document.querySelectorAll(
        ".pricing-faq-item"
    );

    if (pricingFaqItems.length) {

        pricingFaqItems.forEach(function (item) {

            const question = item.querySelector(
                ".pricing-faq-question"
            );

            const answer = item.querySelector(
                ".pricing-faq-answer"
            );

            const toggleIcon = item.querySelector(
                ".pricing-faq-toggle i"
            );

            if (!question || !answer || !toggleIcon) return;

            question.addEventListener("click", function () {

                const isOpen = item.classList.contains(
                    "pricing-faq-item-active"
                );

                /* Close all Pricing FAQ items */
                pricingFaqItems.forEach(function (otherItem) {

                    const otherQuestion =
                        otherItem.querySelector(
                            ".pricing-faq-question"
                        );

                    const otherAnswer =
                        otherItem.querySelector(
                            ".pricing-faq-answer"
                        );

                    const otherToggleIcon =
                        otherItem.querySelector(
                            ".pricing-faq-toggle i"
                        );

                    otherItem.classList.remove(
                        "pricing-faq-item-active"
                    );

                    if (otherQuestion) {
                        otherQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }

                    if (otherAnswer) {
                        otherAnswer.hidden = true;
                    }

                    if (otherToggleIcon) {
                        otherToggleIcon.classList.remove(
                            "fa-minus"
                        );

                        otherToggleIcon.classList.add(
                            "fa-plus"
                        );
                    }
                });

                /* Open clicked item */
                if (!isOpen) {

                    item.classList.add(
                        "pricing-faq-item-active"
                    );

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    answer.hidden = false;

                    toggleIcon.classList.remove(
                        "fa-plus"
                    );

                    toggleIcon.classList.add(
                        "fa-minus"
                    );
                }

            });

        });
    }

});








/* =========================================================
   SCROLL TO TOP BUTTON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (!scrollTopBtn) return;


    /* Show / hide button */
    function toggleScrollTopButton() {

        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }

    }


    /* Check on page scroll */
    window.addEventListener("scroll", toggleScrollTopButton, {
        passive: true
    });


    /* Initial check */
    toggleScrollTopButton();


    /* Scroll to top */
    scrollTopBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});






/* =========================================================
   TUTORNEST LOGIN PAGE
   SHARED DARK MODE + RTL
   CONNECTED TO SITE-WIDE SETTINGS
========================================================= */

/* =========================================================
   TUTORNEST — SHARED RTL / LTR
   NO HTML CHANGES REQUIRED
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;

    const rtlButtons = [
        document.getElementById("loginRtlToggle"),
        document.getElementById("registerRtlToggle"),
        document.getElementById("dashboardRtlToggle")
    ].filter(Boolean);


    /* -----------------------------------------
       APPLY SAVED DIRECTION
    ----------------------------------------- */

    function applyDirection() {

        const savedDirection =
            localStorage.getItem("tutornest-direction");

        if (savedDirection === "rtl") {

            html.setAttribute("dir", "rtl");

        } else {

            html.setAttribute("dir", "ltr");

            localStorage.setItem(
                "tutornest-direction",
                "ltr"
            );
        }

        updateDirectionButtons();
    }


    /* -----------------------------------------
       UPDATE ALL RTL BUTTONS
    ----------------------------------------- */

    function updateDirectionButtons() {

        const isRTL =
            html.getAttribute("dir") === "rtl";

        rtlButtons.forEach(function (button) {

            const icon = button.querySelector("i");
            const text = button.querySelector("span");

            if (icon) {

                icon.className = isRTL
                    ? "fa-solid fa-align-left"
                    : "fa-solid fa-align-right";
            }

            if (text) {

                text.textContent =
                    isRTL ? "LTR" : "RTL";
            }

            button.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to left-to-right"
                    : "Switch to right-to-left"
            );

            button.setAttribute(
                "title",
                isRTL ? "LTR" : "RTL"
            );
        });
    }


    /* -----------------------------------------
       RTL BUTTON CLICK
    ----------------------------------------- */

    rtlButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const currentDirection =
                html.getAttribute("dir");

            const newDirection =
                currentDirection === "rtl"
                    ? "ltr"
                    : "rtl";

            html.setAttribute(
                "dir",
                newDirection
            );

            localStorage.setItem(
                "tutornest-direction",
                newDirection
            );

            updateDirectionButtons();
        });

    });


    /* -----------------------------------------
       START
    ----------------------------------------- */

    applyDirection();

});






/* =========================================================
   TUTORNEST — SHARED DARK MODE + RTL
   NO HTML CHANGES REQUIRED
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    const html = document.documentElement;


    /* =====================================================
       DARK MODE BUTTONS
    ===================================================== */

    const darkModeButtons = [
        document.getElementById("loginDarkModeToggle"),
        document.getElementById("registerDarkModeToggle"),
        document.getElementById("dashboardDarkModeToggle")
    ].filter(Boolean);


    /* =====================================================
       RTL BUTTONS
    ===================================================== */

    const rtlButtons = [
        document.getElementById("loginRtlToggle"),
        document.getElementById("registerRtlToggle"),
        document.getElementById("dashboardRtlToggle")
    ].filter(Boolean);


    /* =====================================================
       UPDATE DARK MODE BUTTONS
    ===================================================== */

    function updateDarkModeButtons() {

        const isDark =
            body.classList.contains("dark-mode");

        darkModeButtons.forEach(function (button) {

            const icon = button.querySelector("i");
            const text = button.querySelector("span");

            if (icon) {

                icon.className = isDark
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";
            }

            if (text) {

                text.textContent =
                    isDark ? "Light" : "Dark";
            }

            button.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            button.setAttribute(
                "title",
                isDark
                    ? "Light Mode"
                    : "Dark Mode"
            );
        });
    }


    /* =====================================================
       APPLY SAVED DARK MODE
    ===================================================== */

    function applyDarkMode() {

        const savedTheme =
            localStorage.getItem("tutornest-theme");

        if (savedTheme === "dark") {

            body.classList.add("dark-mode");

        } else {

            body.classList.remove("dark-mode");

            localStorage.setItem(
                "tutornest-theme",
                "light"
            );
        }

        updateDarkModeButtons();
    }


    /* =====================================================
       DARK MODE CLICK
    ===================================================== */

    darkModeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isDark =
                body.classList.contains("dark-mode");

            if (isDark) {

                body.classList.remove("dark-mode");

                localStorage.setItem(
                    "tutornest-theme",
                    "light"
                );

            } else {

                body.classList.add("dark-mode");

                localStorage.setItem(
                    "tutornest-theme",
                    "dark"
                );
            }

            updateDarkModeButtons();
        });

    });


    /* =====================================================
       UPDATE RTL BUTTONS
    ===================================================== */

    function updateDirectionButtons() {

        const isRTL =
            html.getAttribute("dir") === "rtl";

        rtlButtons.forEach(function (button) {

            const icon = button.querySelector("i");
            const text = button.querySelector("span");

            if (icon) {

                icon.className = isRTL
                    ? "fa-solid fa-align-left"
                    : "fa-solid fa-align-right";
            }

            if (text) {

                text.textContent =
                    isRTL ? "LTR" : "RTL";
            }

            button.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to left-to-right"
                    : "Switch to right-to-left"
            );

            button.setAttribute(
                "title",
                isRTL ? "LTR" : "RTL"
            );
        });
    }


    /* =====================================================
       APPLY SAVED RTL
    ===================================================== */

    function applyDirection() {

        const savedDirection =
            localStorage.getItem("tutornest-direction");

        if (savedDirection === "rtl") {

            html.setAttribute("dir", "rtl");

        } else {

            html.setAttribute("dir", "ltr");

            localStorage.setItem(
                "tutornest-direction",
                "ltr"
            );
        }

        updateDirectionButtons();
    }


    /* =====================================================
       RTL CLICK
    ===================================================== */

    rtlButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const currentDirection =
                html.getAttribute("dir");

            const newDirection =
                currentDirection === "rtl"
                    ? "ltr"
                    : "rtl";

            html.setAttribute(
                "dir",
                newDirection
            );

            localStorage.setItem(
                "tutornest-direction",
                newDirection
            );

            updateDirectionButtons();
        });

    });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    applyDarkMode();
    applyDirection();

});

