const target = new Date('2026-11-20T09:57:00+05:30').getTime();
const el = id => document.getElementById(id);
let timer;
function tick() {
  const d = target - Date.now();
  if (d <= 0) {
    el('countdown').innerHTML = '<h2 style="width:100%">❤️ The Wedding Day Has Arrived!</h2>';
    clearInterval(timer);
    return;
  }
  const v = [Math.floor(d / 864e5), Math.floor(d % 864e5 / 36e5), Math.floor(d % 36e5 / 6e4), Math.floor(d % 6e4 / 1e3)];
  ['days', 'hours', 'minutes', 'seconds'].forEach((x, i) => el(x).textContent = String(v[i]).padStart(2, '0'));
}
tick();
timer = setInterval(tick, 1000);

// Fade-in on scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .15 });
  items.forEach(i => io.observe(i));
} else items.forEach(i => i.classList.add('in'));
