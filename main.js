const gotoBtn = document.getElementById('gotoBtn');
const countdownEl = document.getElementById('countdown');
const secsEl = document.getElementById('secs');
const revealEl = document.getElementById('reveal');

gotoBtn.addEventListener('click', () => {
  gotoBtn.disabled = true;
  gotoBtn.style.opacity = 0.6;

  countdownEl.style.display = 'block';
  let seconds = 100;
  secsEl.textContent = seconds;

  const timer = setInterval(() => {
    seconds--;
    secsEl.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(timer);
      revealEl.style.display = 'block';
      countdownEl.style.display = 'none';
    }
  }, 1000);
});
