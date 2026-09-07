/* =========================================================
   LOGIN + REGISTER RTL TOGGLE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;

    const loginRtlButton =
        document.getElementById("loginRtlToggle");

    const registerRtlButton =
        document.getElementById("registerRtlToggle");


    /* ---------------------------------------------------------
       UPDATE RTL BUTTON
    --------------------------------------------------------- */

    function updateRTLButton(button) {

        if (!button) return;

        const isRTL =
            html.getAttribute("dir") === "rtl";

        const icon = button.querySelector("i");
        const text = button.querySelector("span");

        /* Two-way arrow icon */
        if (icon) {
            icon.className = "fas fa-right-left";
        }

        /* Button text */
        if (text) {
            text.textContent = isRTL ? "LTR" : "RTL";
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
    }


    /* ---------------------------------------------------------
       UPDATE ALL BUTTONS
    --------------------------------------------------------- */

    function updateAllRTLButtons() {

        updateRTLButton(loginRtlButton);
        updateRTLButton(registerRtlButton);

    }


    /* ---------------------------------------------------------
       APPLY SAVED DIRECTION
    --------------------------------------------------------- */

    function applySavedDirection() {

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

        updateAllRTLButtons();
    }


    /* ---------------------------------------------------------
       LOGIN RTL
    --------------------------------------------------------- */

    if (loginRtlButton) {

        loginRtlButton.addEventListener("click", function (event) {

            event.preventDefault();

            const currentDirection =
                html.getAttribute("dir") || "ltr";

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

            updateAllRTLButtons();

        });
    }


    /* ---------------------------------------------------------
       REGISTER RTL
    --------------------------------------------------------- */

    if (registerRtlButton) {

        registerRtlButton.addEventListener("click", function (event) {

            event.preventDefault();

            const currentDirection =
                html.getAttribute("dir") || "ltr";

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

            updateAllRTLButtons();

        });
    }


    /* ---------------------------------------------------------
       INITIALIZE
    --------------------------------------------------------- */

    applySavedDirection();

});