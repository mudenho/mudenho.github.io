const profile = window.PROFILE || {};

const linkBuilders = {
  email: (value) => `mailto:${value}`,
  phone: (value) => `tel:${value.replace(/[^+\d]/g, "")}`,
  linkedin: (value) => value,
  github: (value) => value,
  resume: (value) => value,
};

document.querySelectorAll("[data-profile-link]").forEach((link) => {
  const key = link.dataset.profileLink;
  const value = String(profile[key] || "").trim();
  if (!value || !linkBuilders[key]) return;

  link.href = linkBuilders[key](value);
  link.hidden = false;

  if (link.dataset.profileText === key) link.textContent = value;
  if (["linkedin", "github", "resume"].includes(key)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

if (profile.email || profile.linkedin || profile.phone) {
  document.querySelector("[data-contact-fallback]")?.remove();
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const root = document.documentElement;
const savedTheme = localStorage.getItem("asega-theme");

// Dark mode is the intentional first-visit experience. A visitor's manual
// selection is still remembered after they use the theme button.
root.dataset.theme = savedTheme || "dark";

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  localStorage.setItem("asega-theme", nextTheme);
});

const header = document.querySelector(".site-header");
const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 12);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -35px" }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
