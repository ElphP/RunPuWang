


window.addEventListener("load", () => {
    const wrapper = document.getElementById("carousel-wrapper");
    const carousel = document.getElementById("carousel");

    // Mesurer les dimensions
    const distanceToScroll = carousel.scrollWidth - wrapper.clientWidth;

    // Injecter la largeur réelle dans une variable CSS
    wrapper.style.setProperty("--carousel-width", `${distanceToScroll}px`);

    const duration = distanceToScroll / 40; // diviseur + grand = vitesse + rapide
    wrapper.style.setProperty("--scroll-duration", `${duration}s`);
});