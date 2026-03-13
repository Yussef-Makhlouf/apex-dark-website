// ── CURSOR + SPOTLIGHT
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
const spl = document.getElementById('spotlight');
let mx=0,my=0,rx=0,ry=0,shown=false;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if(cur) { cur.style.left=mx+'px'; cur.style.top=my+'px'; }
  if(spl) { spl.style.left=mx+'px'; spl.style.top=my+'px'; if(!shown){spl.style.opacity='1';shown=true;} }
});
function lerp() {
  rx += (mx-rx)*.12; ry += (my-ry)*.12;
  if(curR) { curR.style.left=rx+'px'; curR.style.top=ry+'px'; }
  requestAnimationFrame(lerp);
}
lerp();

// ── PROGRESS BAR
const prog = document.getElementById('prog');
if(prog) {
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    prog.style.width = Math.min(pct,100) + '%';
  }, {passive:true});
}

// ── REVEAL ON SCROLL
const revEls = document.querySelectorAll('.reveal, .reveal-l');
if(revEls.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.08, rootMargin:'0px 0px -24px 0px'});
  revEls.forEach(el => io.observe(el));
}
