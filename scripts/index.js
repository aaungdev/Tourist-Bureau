"use strict"

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carouselItem");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    slides[slideIndex].style.opacity = '1';
}
