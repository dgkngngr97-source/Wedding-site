// Hedef Düğün Tarihi: 12 Haziran 2027 saat 19:00 (Saati dilersen değiştirebilirsin)
const weddingDate = new Date("June 12, 2027 19:00:00").getTime();

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Gün, saat, dakika ve saniye hesaplamaları
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Ekranda görünecek formatı düzenleme
  const countdownElement = document.getElementById("countdown");
  
  if (countdownElement) {
    countdownElement.innerHTML = days + " Gün " + hours + " Saat " + minutes + " Dakika " + seconds + " Saniye ";
  }

  // Düğün tarihi geçtiğinde görünecek yazı
  if (distance < 0) {
    clearInterval(countdownFunction);
    if (countdownElement) {
      countdownElement.innerHTML = "Sonsuzluğa Adım Atıldı!";
    }
  }
}, 1000);

// Mühür ve Müzik Animasyonu Kontrolü
const sealContainer = document.getElementById("sealContainer");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

if (sealContainer && mainContent && music) {
  sealContainer.addEventListener("click", function() {
    // Mühür ekranını gizle
    sealContainer.style.display = "none";
    // Ana içeriği göster
    mainContent.style.display = "block";
    // Müziği oynat
    music.play().catch(function(error) {
      console.log("Müzik otomatik oynatılamadı, tarayıcı engellemiş olabilir:", error);
    });
  });
}
