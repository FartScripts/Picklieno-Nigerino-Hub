const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');
let W, H, drops = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

function initDrops() {
  drops = [];
  const total = Math.floor((W * H) / 9000);
  for (let i = 0; i < total; i++) {
    drops.push({
      x: Math.random() * W,
      y: Math.random() * H,
      l: Math.random() * 20 + 10,
      xs: -2 + Math.random() * 4,
      ys: 4 + Math.random() * 8,
      a: 0.4 + Math.random() * 0.6
    });
  }
}

initDrops();

function draw() {
  ctx.clearRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'source-over';
  for (let i = 0; i < drops.length; i++) {
    const d = drops[i];
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.xs * 2, d.y + d.l);
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = 'rgba(200,230,255,' + d.a + ')';
    ctx.stroke();

    d.x += d.xs;
    d.y += d.ys;
    if (d.x > W + 50 || d.x < -50 || d.y > H) {
      d.x = Math.random() * W;
      d.y = -20;
    }
  }
  requestAnimationFrame(draw);
}

draw();
