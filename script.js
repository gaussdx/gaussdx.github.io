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

const footer = document.querySelector(".site-footer");

if (footer) {
  const counter = document.createElement("span");
  counter.id = "busuanzi_container_site_pv";
  counter.className = "visitor-counter";
  counter.style.display = "none";
  counter.innerHTML = '访问量：<span id="busuanzi_value_site_pv"></span>';

  const footerUrl = footer.querySelector("a");
  if (footerUrl) {
    footer.insertBefore(counter, footerUrl);
  } else {
    footer.appendChild(counter);
  }

  const busuanzi = document.createElement("script");
  busuanzi.async = true;
  busuanzi.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
  document.body.appendChild(busuanzi);
}
