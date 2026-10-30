```javascript
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const yearElement = document.getElementById("current-year");

    // Automatically update the copyright year.
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Toggle mobile navigation.
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("is-open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        // Close the menu after a navigation link is selected.
        navItems.forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            });
        });

        // Close the menu when the user clicks outside it.
        document.addEventListener("click", (event) => {
            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {
                navLinks.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            }
        });

        // Close the menu when returning to desktop screen sizes.
        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                navLinks.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
            }
        });
    }
});
```
