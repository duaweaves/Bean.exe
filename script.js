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

  // subtle rain overlay flicker
  const rainOverlay = document.createElement("div");
  rainOverlay.className = "rain-overlay";
  document.body.appendChild(rainOverlay);
});
