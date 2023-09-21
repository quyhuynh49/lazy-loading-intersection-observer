function loadImage(img) {
  img.setAttribute("src", img.getAttribute("lazy-src"));
  img.removeAttribute("lazy-src");
}

function ready() {
  if ("IntersectionObserver" in window) {
    var lazyImages = document.querySelectorAll("[lazy-src]");

    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    lazyImages.forEach((img) => {
      observer.observe(img); //check img có trong viewport
    });
  }
}

document.addEventListener("DOMContentLoaded", ready);
