// ========================================
// RAYA STUDIO - MAISON ÉCLAT
// JavaScript
// ========================================


// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Veuillez remplir tous les champs.";

        formMessage.style.color = "#b87872";

        return;
    }

    formMessage.textContent =
        `Merci ${name} ! Votre message a bien été préparé.`;

    formMessage.style.color = "#6d8b74";

    contactForm.reset();

});


// ========================================
// NAVIGATION - ACTIVE LINK
// ========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ========================================
// SIMPLE SCROLL ANIMATION
// ========================================

const animatedElements = document.querySelectorAll(
    ".product-card, .about-box, .gallery-item, .contact-form"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    element.classList.add("hidden");

    observer.observe(element);

});