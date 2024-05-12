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

window.onload = function() {
    window.openTab = function(tabName) {
        // Get all elements with the class 'tabContent' and hide them
        const tabContents = document.getElementsByClassName('tabContent');
        for (const content of tabContents) {
            content.style.display = 'none';  // Hide each content section
        }

        // Remove "active" class from all tab links
        const tabLinks = document.getElementsByClassName('tabLinks');
        for (const link of tabLinks) {
            link.classList.remove('active');
        }

        // Display the correct tab content and add "active" class to the clicked tab link
        const activeTabContent = document.getElementById(tabName);
        activeTabContent.style.display = 'block';  // Display the block for the selected tab

        // Also, make sure to display all tourCard elements within the selected tab
        const tourCards = activeTabContent.getElementsByClassName('tourCard');
        for (const card of tourCards) {
            card.style.display = 'block';  // Make sure all cards within the tab are visible
        }

        // Find the button with matching tabName and add "active"
        for (const link of tabLinks) {
            if (link.dataset.tabname === tabName) {
                link.classList.add('active');
            }
        }
    };

    // Automatically open the first tab
    const firstTab = document.getElementsByClassName('tabLinks')[0];
    if (firstTab) {
        openTab(firstTab.dataset.tabname); // Open the first tab by default
    }
};
