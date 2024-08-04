document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('.learn-btn');

    button.addEventListener('click', () => {

        var mainc = document.getElementById("scrollToMain");
        mainc.scrollIntoView({
            behavior: "smooth"
        });


    });
});


const scrollThreshold = 870; // Adjust this value as needed
let prevScrollpos = window.scrollY;
let navbar = document.getElementById("headbar");

window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    // Show the navbar when scrolling up
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else if (currentScrollPos > scrollThreshold) {
        // Hide the navbar only if scrolling down beyond the threshold
        navbar.style.top = "-100px"; // Adjust this value based on navbar height
        navbar.style.backgroundColor = rgba(0, 0, 0, .75);
    }

    // Update previous scroll position
    prevScrollpos = currentScrollPos;
}
