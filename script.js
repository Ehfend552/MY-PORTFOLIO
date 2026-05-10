// JURUS SPOTLIGHT NGIKUTIN KURSOR
const spotlight = document.getElementById("spotlight");

// Cek kalo device bukan HP, baru aktifin spotlight
const isTouchDevice = "ontouchstart" in window;

if (!isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    spotlight.style.left = e.clientX + "px";
    spotlight.style.top = e.clientY + "px";
  });

  document.addEventListener("mouseleave", () => {
    spotlight.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    spotlight.style.opacity = "1";
  });
} else {
  // Kalo HP, matiin aja cahayanya biar ga berat
  spotlight.style.display = "none";
}

// BONUS: Smooth scroll kalo klik #projects
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

console.log("Rasengan! Web TUAN udah aktif 🔥");

// NAVBAR BLUR SAAT SCROLL
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.7)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "none";
  }
});
// ANIMASI FADE IN SAAT SCROLL
const cards = document.querySelectorAll(".project-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "0.6s";
  observer.observe(card);
});
