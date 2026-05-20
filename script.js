// Geri Sayım Sistemi (12 Haziran 2027)
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
    countdownElement.innerHTML = `
      <div style="display:flex; justify-content:center; gap:15px;">
        <div><span style="font-size:2rem; font-family:'Playfair Display'; display:block; font-weight:bold;">${days}</span>Gün</div>
        <div><span style="font-size:2rem; font-family:'Playfair Display'; display:block; font-weight:bold;">${hours}</span>Saat</div>
        <div><span style="font-size:2rem; font-family:'Playfair Display'; display:block; font-weight:bold;">${minutes}</span>Dk</div>
        <div><span style="font-size:2rem; font-family:'Playfair Display'; display:block; font-weight:bold;">${seconds}</span>Sn</div>
      </div>
    `;
  }

  if (distance < 0) {
    clearInterval(countdownFunction);
    if (countdownElement) countdownElement.innerHTML = "Sonsuzluğa Adım Atıldı!";
  }
}, 1000);

// Element Kontrolleri
const sealContainer = document.getElementById("sealContainer");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");
const musicControl = document.getElementById("musicControl");

if (sealContainer && mainContent && music) {
  music.load();

  // Mühüre basıldığında çalışacak alan
  sealContainer.addEventListener("click", function() {
    sealContainer.style.display = "none";
    mainContent.style.display = "block";

    // Müzik çalmayı dener
    music.play().then(function() {
      console.log("Müzik başarıyla başlatıldı.");
    }).catch(function(error) {
      console.log("Otomatik çalma engellendi, butona basılması bekleniyor:", error);
    });
  });
}

// Sağ Üstteki Müzik Butonu Kontrolü
if (musicControl && music) {
  musicControl.addEventListener("click", function() {
    if (music.paused) {
      music.play();
      musicControl.querySelector(".music-icon").innerHTML = "🎵";
      musicControl.querySelector(".music-text").innerHTML = "Müziği Kapat";
    } else {
      music.pause();
      musicControl.querySelector(".music-icon").innerHTML = "⏸️";
      musicControl.querySelector(".music-text").innerHTML = "Müziği Aç";
    }
  });
}
