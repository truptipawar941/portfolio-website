
// Initialize Lucide icons
lucide.createIcons();


// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    lucide.createIcons();
});


// Close navigation after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .stat-box, .skill-card, " +
    ".project-card, .timeline-item, .achievement-card, " +
    ".certificate-placeholder, .analytics-content, .analytics-visual"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// Close mobile navigation when clicking outside
document.addEventListener("click", (event) => {

    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        lucide.createIcons();

    }

});
