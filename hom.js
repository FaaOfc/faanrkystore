// Loading fade out
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 500);
});

// WhatsApp form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsappForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = "6281234567890"; // Ganti nomor ini sesuai kebutuhan

    if (name && message) {
      const url = `https://wa.me/${phone}?text=Halo%20saya%20${encodeURIComponent(name)},%20${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  });

  // Smooth fade-out on navigation
  const links = document.querySelectorAll("a.btn");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      document.body.style.transition = "opacity 0.5s";
      document.body.style.opacity = 0;
      setTimeout(() => window.location.href = href, 500);
    });
  });
});
