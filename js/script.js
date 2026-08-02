/* =========================
   SKSR GAMING STUDIO™
   FIXED JAVASCRIPT
========================= */

// 1. SMOOTH SCROLLING FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 2. SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // stop observing once shown
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});

// 3. BUTTON CLICK FEEDBACK (scale animation)
//    Only applies to <button> elements (not <a> with .button class)
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        // If this button has no functionality, add a friendly fallback
        // (e.g., the "ANDROID RELEASE" button)
        if (!this.hasAttribute("type") || this.getAttribute("type") !== "submit") {
            // For any button that isn't a submit, we can provide a default action
            // But we won't override existing handlers; just add a fallback if it's the dead one
            if (this.textContent.trim() === "ANDROID RELEASE") {
                alert("The Android release will be available soon on Google Play!");
            }
        }

        // Apply the scale animation
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

// 4. DYNAMIC COPYRIGHT YEAR
const copyright = document.querySelector("footer p");
if (copyright) {
    // Replace the whole content to keep the year up-to-date
    copyright.innerHTML = `© ${new Date().getFullYear()} SKSR GAMING STUDIO™. All Rights Reserved.`;
}