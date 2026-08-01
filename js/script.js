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


    link.addEventListener("click", function(e){


        e.preventDefault();


        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});






// Card reveal animation


const cards =
document.querySelectorAll(
".game-card, .about-card, .contact-card, .featured-card"
);



const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
            "show"
            );


        }


    });


},{
    threshold:0.15
});




cards.forEach(card=>{


    observer.observe(card);


});







// Simple button click effect


document.querySelectorAll("button")
.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        button.style.transform =
        "scale(0.95)";


        setTimeout(()=>{


            button.style.transform =
            "scale(1)";


        },150);


    });


});







// Dynamic copyright year


const year =
document.querySelector("footer p");



if(year){


    year.innerHTML =
    "© " +
    new Date().getFullYear() +
    " SKSR GAMING STUDIO™. All Rights Reserved.";


}
