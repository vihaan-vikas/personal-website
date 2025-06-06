document.addEventListener("DOMContentLoaded", function () {
  // Apply fade-out on link click
  const anchors = document.querySelectorAll("a[href]");

  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const url = anchor.getAttribute("href");

      // Skip external links, anchor jumps, and new tabs
      if (url.startsWith("http") || url.startsWith("#") || anchor.target === "_blank") return;

      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 300); // Match fade-out duration in CSS
    });
  });
});
