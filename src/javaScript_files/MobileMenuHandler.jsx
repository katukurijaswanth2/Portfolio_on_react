import { useEffect } from "react";

 export const MobileMenuHandler = () => {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const contactParent = document.querySelector(".contact-parent");
        const closeIcon = document.querySelector(".contactm i.fa-x");

        if (!hamburger || !contactParent || !closeIcon) return;

        const openMenu = () => {
            contactParent.style.display = "block";
            hamburger.style.display = "none";
        };

        const closeMenu = () => {
            contactParent.style.display = "none";
            hamburger.style.display = "flex";
        };

        hamburger.addEventListener("click", openMenu);
        closeIcon.addEventListener("click", closeMenu);

        return () => {
            hamburger.removeEventListener("click", openMenu);
            closeIcon.removeEventListener("click", closeMenu);
        };
    }, []);

    return null;
};

