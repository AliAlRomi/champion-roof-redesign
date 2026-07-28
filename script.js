const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

const heroContactForm = document.querySelector("#hero-contact-form");
const contactForm = document.querySelector("#contact-form");

const whatsappNumber = "971526336867";

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    });
});

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

heroContactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#hero-name").value.trim();
    const phone = document.querySelector("#hero-phone").value.trim();
    const service = document.querySelector("#hero-service").value;

    const message =
        `Hello Champion Roof Insulation,\n\n` +
        `I would like to request a project estimate.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service}`;

    openWhatsApp(message);
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#contact-name").value.trim();
    const phone = document.querySelector("#contact-phone").value.trim();
    const email = document.querySelector("#contact-email").value.trim();
    const service = document.querySelector("#contact-service").value;

    const projectMessage = document
        .querySelector("#contact-message")
        .value
        .trim();

    const message =
        `Hello Champion Roof Insulation,\n\n` +
        `I would like to request an inspection or estimate.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email || "Not provided"}\n` +
        `Service: ${service}\n\n` +
        `Project details:\n${projectMessage}`;

    openWhatsApp(message);
});
