const weddingDate = new Date("June 12, 2027 19:00:00").getTime();

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    countdownElement.innerHTML = days + " Gün " + hours + " Saat " + minutes + " Dakika " + seconds + " Saniye ";
  }

  if (distance < 0) {
    clearInterval(countdownFunction);
    if (countdownElement) {
      countdownElement.innerHTML = "Sonsuzluğa Adım Atıldı!";
    }
  }
}, 1000);

// Mühür ve Müzik Kontrolü
const sealContainer = document.getElementById("sealContainer");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");

if (sealContainer && mainContent) {
  sealContainer.addEventListener("click", function() {
    // Önce mühür ekranını kapat ve içeriği aç (Müzik hata verse bile site kesinlikle açılacak)
    sealContainer.style.display = "none";
    mainContent.style.style.display = "none" ? mainContent.style.display = "block" : null; // Güvenli açılış
    mainContent.style.display = "block";

    // Sonra müziği çalmayı dene
    if (music) {
      music.play().catch(function(error) {
        console.log("Müzik çalma engellendi veya dosya bulunamadı:", error);
      });
    }
  });
}
