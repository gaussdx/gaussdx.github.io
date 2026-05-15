const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const footerLink = document.querySelector(".site-footer a");

if (footerLink) {
  footerLink.href = "https://gaussdx.github.io/";
  footerLink.textContent = "https://gaussdx.github.io/";
}
