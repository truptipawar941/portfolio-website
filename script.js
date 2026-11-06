// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.setAttribute("data-lucide", "x");
  } else {
    icon.setAttribute("data-lucide", "menu");
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");
    icon.setAttribute("data-lucide", "menu");

    if (window.lucide) {
      lucide.createIcons();
    }
  });
});

// Automatically update footer year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  ".section-heading, .about-grid, .skill-card, " +
  ".analytics-copy, .analytics-visual, .project-card, " +
  ".education-card, .achievement-card, .certificate-card, .contact-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

// Initialize Lucide icons
if (window.lucide) {
  lucide.createIcons();
}
