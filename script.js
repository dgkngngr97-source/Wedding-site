// Geri Sayım Sistemi (12 Haziran 2027'ye göre)
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
const musicControl = document.getElementById("musicControl");

if (sealContainer && mainContent) {
  sealContainer.addEventListener("click", function() {
    // Mühür ekranını gizle ve ana içeriği göster
    sealContainer.style.display = "none";
    mainContent.style.display = "block";
    
    // Müzik çalmayı dener, hata verirse sistemi kilitlemez
    if (music) {
      music.play().then(() => {
        musicControl.classList.add("playing");
      }).catch(err => {
        console.log("Müzik otomatik başlatılamadı, buton aktif.");
      });
    }
  });
}

// Özel Müzik Butonu Tıklama Etkinliği
if (musicControl && music) {
  musicControl.addEventListener("click", function() {
    if (music.paused) {
      music.play();
      musicControl.classList.add("playing");
      musicControl.querySelector(".music-icon").innerHTML = "⏸️"; // Durdur simgesi
    } else {
      music.pause();
      musicControl.classList.remove("playing");
      musicControl.querySelector(".music-icon").innerHTML = "🎵"; // Çal simgesi
    }
  });
}
