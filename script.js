// Page transition fade-out before navigating
document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll("a[href]");

  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const url = anchor.getAttribute("href");

      // Skip external links, anchors, and new tabs
      if (url.startsWith("http") || url.startsWith("#") || anchor.target === "_blank") return;

      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 300); // Match fade-out time in CSS
    });
  });
});

// Hero zoom and header visibility on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const hero = document.querySelector(".hero");
  const header = document.getElementById("main-header");
  const heading = document.querySelector(".hero h2");
  const subtext = document.querySelector(".hero p");

  // Show header after scrolling 100px
  if (scrollY > 100) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }

  // Smooth zoom-out effect: slow at first, fast later
  const maxZoomScroll = 600;
  const t = Math.min(scrollY / maxZoomScroll, 1); // 0 to 1
  const eased = t < 0.5
    ? 2 * t * t         // Ease-in (slow start)
    : -1 + (4 - 2 * t) * t; // Speed up after halfway

  const scale = 1 - eased * 0.4; // Shrinks down to 60%
  const opacity = 1 - eased;

  if (hero) {
    hero.style.transform = `scale(${scale})`;
    hero.style.opacity = opacity;
  }

  if (heading && subtext) {
    const textScale = 1 - (eased * 0.3); // shrink to 70%
    heading.style.transform = `scale(${textScale})`;
    subtext.style.transform = `scale(${textScale})`;
  }
});
