// ────────────────────────────────
// Bean.exe — Vintage Café Terminal
// ────────────────────────────────

// typing animation
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing");
  if (typingText) {
    const fullText = typingText.textContent;
    typingText.textContent = "";
    let index = 0;

    function type() {
      if (index < fullText.length) {
        typingText.textContent += fullText.charAt(index);
        index++;
        setTimeout(type, 80); // typing speed
      }
    }
    type();
  }

  // subtle rain overlay flicker (only if not already present)
  if (!document.querySelector(".rain-overlay")) {
    const rainOverlay = document.createElement("div");
    rainOverlay.className = "rain-overlay";
    document.body.appendChild(rainOverlay);
  }

  // gentle glowing flicker for Bean.exe text
  const glowText = document.querySelector(".glow");
  if (glowText) {
    setInterval(() => {
      const intensity = Math.random() * 10 + 5;
      glowText.style.textShadow = `0 0 ${intensity}px #c3874f`;
    }, 400);
  }
});
