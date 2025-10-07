// ────────────────────────────────
// Bean.exe ☕ — Vintage Café Terminal
// ────────────────────────────────

// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing");

  if (typingText) {
    const fullText = typingText.textContent.trim();
    typingText.textContent = "";
    let index = 0;

    function type() {
      if (index < fullText.length) {
        typingText.textContent += fullText.charAt(index);
        index++;
        setTimeout(type, 80); // speed of typing
      }
    }

    type();
  }

  // Create subtle rain overlay dynamically
  const rainOverlay = document.createElement("div");
  rainOverlay.className = "rain-overlay";
  document.body.appendChild(rainOverlay);
});
