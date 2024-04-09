document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById("burgerIcon");
    const menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function(event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        // Toggle the visibility of the menu
        menu.style.visibility = (menu.style.visibility === "visible") ? "hidden" : "visible";

        if (menu.style.visibility === "visible") {
            // Add an event listener to the document to hide the menu when clicking outside of it
            document.addEventListener("click", hideMenu);
        } else {
            // Remove the event listener when the menu is hidden
            document.removeEventListener("click", hideMenu);
        }
    });

    // Function to hide the menu
    function hideMenu(event) {
        // Check if the click event target is outside of the menu
        if (!menu.contains(event.target) && event.target !== burgerIcon) {
            menu.style.visibility = "hidden";
        }
    }
});
