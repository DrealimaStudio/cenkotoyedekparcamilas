const whatsappNumber = "905323423772";

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

const partForm = document.getElementById("partForm");

if (partForm) {
  partForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const car = document.getElementById("car").value.trim();
    const part = document.getElementById("part").value.trim();
    const note = document.getElementById("note").value.trim();

    const message =
      `Merhaba, yedek parça fiyat bilgisi almak istiyorum.\n\n` +
      `Ad Soyad: ${name}\n` +
      `Telefon: ${phone}\n` +
      `Araç: ${car}\n` +
      `Aranan Parça: ${part}\n` +
      `Not: ${note || "-"}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const messageText = document.getElementById("contactMessage").value.trim();

    const message =
      `Merhaba, websitesi üzerinden iletişime geçiyorum.\n\n` +
      `Ad Soyad: ${name}\n` +
      `Telefon: ${phone}\n` +
      `Mesaj: ${messageText}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}
const galleryTrack = document.getElementById("galleryTrack");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

if (galleryTrack && galleryPrev && galleryNext) {
  const slides = galleryTrack.querySelectorAll(".gallery-slide");
  let currentSlide = 0;

  function updateGallery() {
    galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  galleryNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateGallery();
  });

  galleryPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateGallery();
  });
}