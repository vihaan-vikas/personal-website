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

// --- TIMELINE CIRCLE LOGIC ONLY ---
window.addEventListener("scroll", () => {
  const wrapper = document.querySelector(".timeline-wrapper");
  const progress = document.querySelector(".timeline-progress");
  const timeline = document.querySelector(".timeline");
  const centerY = window.innerHeight / 2;

  if (wrapper && progress && timeline) {
    const rect = wrapper.getBoundingClientRect();
    const start = rect.top;
    const end = rect.bottom;

    if (centerY >= start && centerY <= end) {
      const visibleHeight = rect.height;
      const progressPercent = (centerY - start) / visibleHeight;
      const clamped = Math.min(Math.max(progressPercent, 0), 1);
      const maxY = timeline.offsetHeight - 16; // 16 = circle height
      const translateY = clamped * maxY;

      progress.style.transform = `translateY(${translateY}px)`;
    }
  }
});
