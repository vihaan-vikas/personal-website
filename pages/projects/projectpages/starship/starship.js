// --- FADE LOGIC ---
document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll("a[href]");

  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const url = anchor.getAttribute("href");

      if (url.startsWith("http") || url.startsWith("#") || anchor.target === "_blank") return;

      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 300);
    });
  });
});