document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById("burgerIcon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function(event) {
        event.stopPropagation();
        menu.style.visibility = (menu.style.visibility === "visible") ? "hidden" : "visible";

        if (menu.style.visibility === "visible") {
            document.addEventListener("click", hideMenu);
        } else {
            document.removeEventListener("click", hideMenu);
        }
    });

    function hideMenu(event) {
        if (!menu.contains(event.target) && event.target !== burgerIcon) {
            menu.style.visibility = "hidden";
        }
    }
});
