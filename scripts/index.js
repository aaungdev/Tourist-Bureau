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
    function openTab(evt, tabName) {
        // Hide all tab content first
        var i, tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";  // Hide each content
        }

        // Remove the "active" class from all tabs
        var tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the specific tabs related to the clicked tab link
        var activeContent = document.querySelectorAll('#' + tabName + ' .tabcontent');  // Select all child divs
        for (i = 0; i < activeContent.length; i++) {
            activeContent[i].style.display = "block";  // Display each child content
        }

        // Add "active" class to the clicked tab link
        evt.currentTarget.className += " active";
    }

    // Set the default tab to be open
    // Replace 'ActiveTours' with the ID of the tab you want open by default
    document.getElementById('ActiveTours').style.display = 'block'; 
    var defaultTab = document.querySelector('.tablinks');
    if (defaultTab) {
        defaultTab.click(); // Simulate a click on the default tab
    }
}


