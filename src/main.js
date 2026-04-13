// Minimal Canvas2D engine skeleton (ES module)
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');


function resizeCanvas(){
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);
  // set CSS size for layout
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  // set actual backing store size for high-DPI
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  // match drawing scale so drawing uses CSS pixels
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}


function loop(t){
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w, h);
  requestAnimationFrame(loop);
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

// Start
document.addEventListener('DOMContentLoaded', ()=>{
  resizeCanvas();
  requestAnimationFrame(loop);
});
