// Düğün Tarihi Ayarı: 12 Haziran 2027 Saat 19:30
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

// Giriş Ekranı ve Müzik Kontrolleri
const sealContainer = document.getElementById("sealContainer");
const mainContent = document.getElementById("mainContent");
const seal = document.getElementById("seal");
const music = document.getElementById("music");
const musicControl = document.getElementById("musicControl");

let isPlaying = false;

seal.addEventListener("click", () => {
  sealContainer.style.transition = "opacity 1s ease";
  sealContainer.style.opacity = "0";
  setTimeout(() => {
    sealContainer.style.display = "none";
    mainContent.style.display = "block";
    // Müzik Başlatma
    music.play().then(() => {
      isPlaying = true;
      musicControl.querySelector(".music-text").innerText = "Müziği Kapat";
    }).catch(err => console.log("Otomatik oynatma engellendi:", err));
  }, 1000);
});

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
