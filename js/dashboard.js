/* =========================================================
   TUTORNEST — PARENT DASHBOARD
   PART 4 — DASHBOARD JAVASCRIPT

   Handles:
   1. Hamburger sidebar
   2. Sidebar close
   3. Overlay
   4. Escape key
   5. Dark Mode
   6. RTL
   7. Shared localStorage settings
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const body = document.body;
    const html = document.documentElement;

    const sidebar = document.getElementById("dashboardSidebar");
    const hamburger = document.getElementById("dashboardHamburger");
    const sidebarClose = document.getElementById("dashboardSidebarClose");
    const sidebarOverlay = document.getElementById("dashboardSidebarOverlay");

    const darkModeToggle =
        document.getElementById("dashboardDarkModeToggle");

    const rtlToggle =
        document.getElementById("dashboardRtlToggle");


    /* =====================================================
       SIDEBAR
    ====================================================== */

    if (
        sidebar &&
        hamburger &&
        sidebarClose &&
        sidebarOverlay
    ) {


        /* ---------------------------------------------
           OPEN SIDEBAR
        --------------------------------------------- */

        function openSidebar() {

            sidebar.classList.add("active");

            sidebarOverlay.classList.add("active");

            body.classList.add("dashboard-menu-open");

            hamburger.setAttribute(
                "aria-expanded",
                "true"
            );
        }


        /* ---------------------------------------------
           CLOSE SIDEBAR
        --------------------------------------------- */

        function closeSidebar() {

            sidebar.classList.remove("active");

            sidebarOverlay.classList.remove("active");

            body.classList.remove("dashboard-menu-open");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );
        }


        /* ---------------------------------------------
           HAMBURGER CLICK
        --------------------------------------------- */

        hamburger.addEventListener(
            "click",
            function () {

                if (
                    sidebar.classList.contains("active")
                ) {

                    closeSidebar();

                } else {

                    openSidebar();

                }

            }
        );


        /* ---------------------------------------------
           CLOSE BUTTON
        --------------------------------------------- */

        sidebarClose.addEventListener(
            "click",
            closeSidebar
        );


        /* ---------------------------------------------
           OVERLAY CLICK
        --------------------------------------------- */

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );


        /* ---------------------------------------------
           ESCAPE KEY
        --------------------------------------------- */

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape" &&
                    sidebar.classList.contains("active")
                ) {

                    closeSidebar();

                }

            }
        );


        /* ---------------------------------------------
           CLOSE SIDEBAR AFTER NAVIGATION
           TABLET / MOBILE ONLY
        --------------------------------------------- */

        const navigationLinks =
            sidebar.querySelectorAll(
                ".dashboard-navigation a"
            );

        navigationLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (window.innerWidth < 1200) {

                        closeSidebar();

                    }

                }
            );

        });


        /* ---------------------------------------------
           RESIZE
           Desktop = Sidebar visible
           Tablet/Mobile = Drawer closed
        --------------------------------------------- */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth >= 1200) {

                    sidebar.classList.remove("active");

                    sidebarOverlay.classList.remove(
                        "active"
                    );

                    body.classList.remove(
                        "dashboard-menu-open"
                    );

                    hamburger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


    /* =====================================================
       DARK MODE
       SHARED TUTORNEST SYSTEM
    ====================================================== */

    function updateDashboardThemeButton() {

        if (!darkModeToggle) {
            return;
        }


        const isDark =
            body.classList.contains("dark-mode");


        const icon =
            darkModeToggle.querySelector("i");


        const text =
            darkModeToggle.querySelector("span");


        if (icon) {

            icon.className = isDark
                ? "fas fa-sun"
                : "fas fa-moon";

        }


        if (text) {

            text.textContent =
                isDark
                    ? "Light"
                    : "Dark";

        }


        darkModeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );


        darkModeToggle.setAttribute(
            "title",
            isDark
                ? "Light Mode"
                : "Dark Mode"
        );

    }


    /* ---------------------------------------------
       APPLY SAVED THEME
    --------------------------------------------- */

    function applyDashboardTheme() {

        const savedTheme =
            localStorage.getItem(
                "tutornest-theme"
            );


        if (savedTheme === "dark") {

            body.classList.add(
                "dark-mode"
            );

        } else {

            body.classList.remove(
                "dark-mode"
            );

        }


        updateDashboardThemeButton();

    }


    /* ---------------------------------------------
       INITIAL THEME
    --------------------------------------------- */

    applyDashboardTheme();


    /* ---------------------------------------------
       DARK MODE BUTTON
    --------------------------------------------- */

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            function () {

                const isDark =
                    body.classList.contains(
                        "dark-mode"
                    );


                if (isDark) {

                    body.classList.remove(
                        "dark-mode"
                    );

                    localStorage.setItem(
                        "tutornest-theme",
                        "light"
                    );

                } else {

                    body.classList.add(
                        "dark-mode"
                    );

                    localStorage.setItem(
                        "tutornest-theme",
                        "dark"
                    );

                }


                updateDashboardThemeButton();

            }
        );

    }


    /* =====================================================
       RTL
       SHARED TUTORNEST SYSTEM
    ====================================================== */

    function updateDashboardRtlButton() {

        if (!rtlToggle) {
            return;
        }


        const isRTL =
            html.getAttribute("dir") === "rtl";


        const icon =
            rtlToggle.querySelector("i");


        const text =
            rtlToggle.querySelector("span");


        if (icon) {

            icon.className = isRTL
                ? "fas fa-align-left"
                : "fas fa-align-right";

        }


        if (text) {

            text.textContent =
                isRTL
                    ? "LTR"
                    : "RTL";

        }


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


    /* ---------------------------------------------
       APPLY SAVED DIRECTION
    --------------------------------------------- */

    function applyDashboardDirection() {

        const savedDirection =
            localStorage.getItem(
                "tutornest-direction"
            );


        if (savedDirection === "rtl") {

            html.setAttribute(
                "dir",
                "rtl"
            );

        } else {

            html.setAttribute(
                "dir",
                "ltr"
            );

        }


        updateDashboardRtlButton();

    }


    /* ---------------------------------------------
       INITIAL DIRECTION
    --------------------------------------------- */

    applyDashboardDirection();


    /* ---------------------------------------------
       RTL BUTTON
    --------------------------------------------- */

    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

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


                updateDashboardRtlButton();

            }
        );

    }


});



/* =========================================================
   LOGOUT CONFIRMATION POPUP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const logoutLink = document.querySelector(
        ".dashboard-sidebar-bottom a"
    );

    const logoutModal = document.getElementById(
        "dashboardLogoutModal"
    );

    const logoutOverlay = document.getElementById(
        "dashboardLogoutOverlay"
    );

    const logoutClose = document.getElementById(
        "dashboardLogoutClose"
    );

    const logoutNo = document.getElementById(
        "dashboardLogoutNo"
    );

    const logoutYes = document.getElementById(
        "dashboardLogoutYes"
    );


    if (!logoutLink || !logoutModal) {
        return;
    }


    /* OPEN POPUP */

    function openLogoutPopup() {

        logoutModal.classList.add("active");

        logoutModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "dashboard-logout-open"
        );

        if (logoutNo) {
            setTimeout(function () {
                logoutNo.focus();
            }, 100);
        }
    }


    /* CLOSE POPUP */

    function closeLogoutPopup() {

        logoutModal.classList.remove("active");

        logoutModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "dashboard-logout-open"
        );
    }


    /* LOGOUT CLICK */

    logoutLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            openLogoutPopup();
        }
    );


    /* NO */

    if (logoutNo) {

        logoutNo.addEventListener(
            "click",
            function () {

                closeLogoutPopup();
            }
        );
    }


    /* CLOSE BUTTON */

    if (logoutClose) {

        logoutClose.addEventListener(
            "click",
            function () {

                closeLogoutPopup();
            }
        );
    }


    /* OVERLAY */

    if (logoutOverlay) {

        logoutOverlay.addEventListener(
            "click",
            function () {

                closeLogoutPopup();
            }
        );
    }


    /* YES */

    if (logoutYes) {

        logoutYes.addEventListener(
            "click",
            function () {

                window.location.href = "login.html";
            }
        );
    }


    /* ESCAPE */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                logoutModal.classList.contains("active")
            ) {

                closeLogoutPopup();
            }
        }
    );

});


document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;
    const rtlButton = document.getElementById("dashboardRtlToggle");

    if (!rtlButton) return;

    function updateRTLButton() {

        const isRTL = html.getAttribute("dir") === "rtl";

        const icon = rtlButton.querySelector("i");
        const text = rtlButton.querySelector("span");

        if (icon) {
            icon.className = "fas fa-right-left";
        }

        if (text) {
            text.textContent = isRTL ? "LTR" : "RTL";
        }

        rtlButton.setAttribute(
            "aria-label",
            isRTL
                ? "Switch to left-to-right"
                : "Switch to right-to-left"
        );

        rtlButton.setAttribute(
            "title",
            isRTL ? "LTR" : "RTL"
        );
    }

    /* Apply saved direction */
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

    updateRTLButton();


    /* Toggle RTL */
    rtlButton.addEventListener("click", function () {

        const currentDirection =
            html.getAttribute("dir") || "ltr";

        const newDirection =
            currentDirection === "rtl"
                ? "ltr"
                : "rtl";

        html.setAttribute("dir", newDirection);

        localStorage.setItem(
            "tutornest-direction",
            newDirection
        );

        updateRTLButton();
    });

});


/* =========================================================
   DASHBOARD RTL TOGGLE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;
    const rtlButton = document.getElementById("dashboardRtlToggle");

    if (!rtlButton) return;


    function updateRTL() {

        const isRTL = html.getAttribute("dir") === "rtl";

        const icon = rtlButton.querySelector("i");

        if (icon) {
            icon.className = isRTL
                ? "fas fa-right-left"
                : "fas fa-right-left";
        }

        rtlButton.setAttribute(
            "aria-label",
            isRTL
                ? "Switch to left-to-right"
                : "Switch to right-to-left"
        );

        rtlButton.setAttribute(
            "title",
            isRTL ? "LTR" : "RTL"
        );
    }


    /* APPLY SAVED DIRECTION */

    const savedDirection =
        localStorage.getItem("tutornest-direction");

    if (savedDirection === "rtl") {
        html.setAttribute("dir", "rtl");
    } else {
        html.setAttribute("dir", "ltr");
    }


    updateRTL();


    /* TOGGLE RTL */

    rtlButton.addEventListener("click", function () {

        const currentDirection =
            html.getAttribute("dir");

        if (currentDirection === "rtl") {

            html.setAttribute("dir", "ltr");

            localStorage.setItem(
                "tutornest-direction",
                "ltr"
            );

        } else {

            html.setAttribute("dir", "rtl");

            localStorage.setItem(
                "tutornest-direction",
                "rtl"
            );
        }

        updateRTL();

    });

});