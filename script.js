// Düğün Tarihi Sayacı (12 Haziran 2027)
const weddingDate = new Date("June 12, 2027 19:30:00").getTime();
const countdownTarget = document.getElementById("countdown");

const updateCountdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(updateCountdown);
    countdownTarget.innerHTML = "DÜĞÜN GÜNÜ GELDİ!";
    return;
  }

  countdownTarget.innerHTML = `
    <div class="countdown-item"><span class="countdown-number">${days}</span><span class="countdown-label">Gün</span></div>
    <div class="countdown-item"><span class="countdown-number">${hours}</span><span class="countdown-label">Saat</span></div>
    <div class="countdown-item"><span class="countdown-number">${minutes}</span><span class="countdown-label">Dk</span></div>
    <div class="countdown-item"><span class="countdown-number">${seconds}</span><span class="countdown-label">Sn</span></div>
  `;
}, 1000);

// SİHİRLİ ZARF AÇILMA VE MÜZİK MOTORU
const sealButton = document.getElementById("sealButton");
const envelopeWrapper = document.getElementById("envelopeWrapper");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("music");
const musicControl = document.getElementById("musicControl");

let isPlaying = false;

sealButton.addEventListener("click", () => {
  // 1. Adım: Zarf kapağını aç (CSS tetikle)
  envelopeWrapper.classList.add("open");
  
  // 2. Adım: Kapak açıldıktan sonra tüm zarfı aşağı kaydır ve ana ekranı getir
  setTimeout(() => {
    envelopeWrapper.classList.add("slide-out");
    mainContent.style.display = "block";
    
    // Müzik çalmaya başlasın
    music.play().then(() => {
      isPlaying = true;
      musicControl.querySelector(".music-text").innerText = "Müziği Kapat";
    }).catch(err => console.log("Müzik engellendi:", err));
  }, 700); // Kapak dönme hızına uyumlu senkronizasyon
});

// Müzik Kontrol Butonu Aç/Kapat
musicControl.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicControl.querySelector(".music-text").innerText = "Müziği Aç";
    musicControl.querySelector(".music-icon").innerText = "🔇";
  } else {
    music.play();
    musicControl.querySelector(".music-text").innerText = "Müziği Kapat";
    musicControl.querySelector(".music-icon").innerText = "🎵";
  }
  isPlaying = !isPlaying;
});
