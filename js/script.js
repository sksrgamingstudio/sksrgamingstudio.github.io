/* =========================
   SKSR GAMING STUDIO™
   WEBSITE JAVASCRIPT
========================= */


// Page loading animation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});




// Smooth scrolling for internal links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});





// Scroll reveal animation

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});



revealElements.forEach(element => {

    observer.observe(element);

});






// Button click animation

document.querySelectorAll("button")
.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";


        setTimeout(() => {

            button.style.transform = "";

        }, 150);

    });

});






// Dynamic copyright year

const copyright =
document.querySelector("footer p");


if (copyright) {

    copyright.innerHTML =
    "© " +
    new Date().getFullYear() +
    " SKSR GAMING STUDIO™. All Rights Reserved.";

}