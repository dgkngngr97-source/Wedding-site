const seal = document.getElementById('sealContainer');
const mainContent = document.getElementById('mainContent');
const music = document.getElementById('music');

seal.addEventListener('click', () => {
  seal.style.display = 'none';
  mainContent.style.display = 'block';
  music.play();
});

const targetDate = new Date('June 12, 2026 19:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('countdown').innerHTML =
    `${days} Gün ${hours} Saat ${minutes} Dakika`;
}, 1000);
