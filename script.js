const CARS = [
  null,
  { num:'01', name:'Workshop Content' },
  { num:'02', name:'Sketches & Wireframes' },
  { num:'03', name:'Site Map & Development' },
  { num:'04', name:'Readings & Research' },
];
const PANELS = ['Engine','Workshop Content','Sketches & Wireframes','Site Map & Development','Readings & Research'];
const TOTAL = 5;

const projectImages = {
  1: [
    { src:"human-computer.jpeg",  name:"Week 1",  text:"" },
    { src:"paper-prototype.jpeg", name:"Week 3",  text:"" },
    { src:"html-relay.jpeg",      name:"Week 2",  text:"" }
  ],
  2: [
    { src:"drop-sketch.jpeg",    name:"Sketch 1", text:"" },
    { src:"vending-sketch.jpeg", name:"Sketch 2", text:"" },
    { src:"mind-sketch.jpeg",    name:"Sketch 3", text:"" }
  ],
  3: [
    { src:"train-sketch.jpeg", name:"Site Map 1", text:"" },
    { src:"development2.jpeg",     name:"Site Map 2", text:"" },
    { src:"figmafull-shot.png",    name:"Site Map 3", text:"This site is structured like a train, moving from the engine to the carriages, which gives it a clear and fixed way to navigate from start to end. I kept the content minimal, focusing more on annotations and sketches rather than lots of images, so it feels more like a process than just a showcase. The night background makes it feel more personal and intimate. The blue and red create strong contrast, with red standing out clearly. The yellow cursor and hover effects, like a flashlight, tie into the idea of exploring the site. The bold, simple font keeps everything clear and consistent. Overall, the concept and visuals align well, creating a cohesive and intentional experience focused on exploration and flow." }
],
  4: [
    {
      src:"MindfulCircle.png", name:"Mindful Circle",
      link:"https://circles.todiane.com/",
      text:"Mindful Circle, made by Diane Corriette, was built using p5.js with JavaScript. It is a simple interactive creative coding experiment that uses animation loops, draw functions, colour, and layering to create a responsive visual system. Diane introduces purpose through responsiveness - soft behaviour of the elements, and visual feedback aligning with a mindfulness intention, showing how small-scale interactions can be designed to evoke a specific emotional state."
    },
    {
      src:"hadakafolio.png", name:"Hadaka Portfolio",
      link:"https://hadaka.jp/",
      text:"Hadaka’s portfolio is a visually driven website that uses GIFs, scrolling, and layering to present their work. It relies on dynamic scrolling, responsive wave backgrounds, and layered GIFs to create a subtle 3D, almost film-like effect. Transitions shift from anime-style visuals to more minimal 3D scrolling, using contrast, colour, and motion instead of heavy text. I found it effective because it shows how simple tools like GIFs and scroll-based interactions can create depth, movement, and engagement without complex interactivity. It proves that a portfolio can feel dynamic and immersive through controlled use of motion and layering alone, making the work more experiential rather than just informational."
    },
    {
      src:"qodaWebsite.png", name:"Qode Interactive",
      link:"https://qodeinteractive.com/catalog/",
      text:"This website by Qode Interactive focuses on unique transitions and horizontal scrolling to shape the overall experience. It plays with typography by placing words vertically instead of the usual horizontal layout, making the navigation feel both unfamiliar and intuitive at the same time. The hover states, clickable menu options, and smooth transitions create engagement without overwhelming the user. It also combines GIFs, videos, and block colours to build a strong visual identity. Text layout, scrolling, and small interactions create a distinctive and branded experience. It shows that you don’t need complex systems to make something feel interactive and memorable."
    }
  ]
};


const canvas = document.createElement('canvas');
canvas.id = 'stars-c';
canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;';
document.getElementById('v-outside').prepend(canvas);

const ctx = canvas.getContext('2d');
let stars = [], starT = 0, lastRaf = 0;

const STAR_COLORS = [
  [255,255,255],[220,235,255],[255,245,220],[200,220,255]
];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  buildStars();
}

function buildStars() {
  stars = [];
  // Large glowing stars
  for (let i = 0; i < 12; i++) stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.55,
    r: Math.random() * 1.8 + 1.2,
    baseOp: 0.7 + Math.random() * 0.3,
    phase: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.5,
    col: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    glow: true
  });
  // Medium stars
  for (let i = 0; i < 80; i++) stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.62,
    r: Math.random() * 0.9 + 0.4,
    baseOp: 0.4 + Math.random() * 0.45,
    phase: Math.random() * Math.PI * 2,
    speed: 0.5 + Math.random() * 0.8,
    col: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    glow: false
  });
  // Faint field
  for (let i = 0; i < 160; i++) stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.65,
    r: Math.random() * 0.4 + 0.15,
    baseOp: 0.15 + Math.random() * 0.3,
    phase: Math.random() * Math.PI * 2,
    speed: 0.6 + Math.random() * 1.2,
    col: [255,255,255],
    glow: false
  });
}

// Shooting stars
let shoots = [], nextShoot = 2500;

function spawnShoot() {
  shoots.push({
    x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
    y: Math.random() * canvas.height * 0.3,
    prog: 0,
    dx: (Math.random() - 0.3) * 300,
    dy:  Math.random() * 180 + 80,
    dur: 600 + Math.random() * 400,
    len: 110 + Math.random() * 80
  });
}

function drawShootingStars(dt) {
  nextShoot -= dt;
  if (nextShoot < 0) { spawnShoot(); nextShoot = 3000 + Math.random() * 5000; }

  shoots = shoots.filter(s => {
    s.prog += dt;
    const t = s.prog / s.dur;
    if (t >= 1) return false;
    const eased = t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9;
    const tailOp = eased * (1 - Math.pow(t, 0.5)) * 0.85;
    const cx2 = s.x + s.dx * t,  cy2 = s.y + s.dy * t;
    const mag = Math.sqrt(s.dx * s.dx + s.dy * s.dy);
    const tx  = cx2 - s.dx / mag * (s.len * (0.1 + t * 0.15));
    const ty  = cy2 - s.dy / mag * (s.len * (0.1 + t * 0.15));
    const grad = ctx.createLinearGradient(tx, ty, cx2, cy2);
    grad.addColorStop(0, 'rgba(255,255,255,0)');
    grad.addColorStop(0.7, `rgba(220,235,255,${(tailOp*0.5).toFixed(3)})`);
    grad.addColorStop(1,   `rgba(255,255,255,${tailOp.toFixed(3)})`);
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(cx2, cy2);
    ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx2, cy2, 2.2, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${(eased*0.9).toFixed(3)})`; ctx.fill();
    return true;
  });
}

function drawStars(dt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  starT += dt * 0.0007;
  stars.forEach(s => {
    const op = s.baseOp * (0.4 + 0.6 * Math.abs(Math.sin(starT * s.speed + s.phase)));
    const [r, g, b] = s.col;
    if (s.glow) {
      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
      grad.addColorStop(0, `rgba(${r},${g},${b},${(op*0.6).toFixed(3)})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI*2);
      ctx.fillStyle = grad; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(${r},${g},${b},${op.toFixed(3)})`;
    ctx.fill();
  });
  drawShootingStars(dt);
}


const sw = document.getElementById('sw');
for (let i = 0; i < 200; i++) {
  const s = document.createElement('div');
  s.className = 'slp';
  s.style.left = (i * 40) + 'px';
  sw.appendChild(s);
}
let slOff = 0;


const world   = document.getElementById('world');
const engWrap = document.getElementById('engine-wrap');
const panels  = document.querySelectorAll('.panel');
const pb      = document.getElementById('pb');
const nextBtn = document.getElementById('next-btn');
const nextSub = document.getElementById('next-sub');
let current = 0, busy = false;

function positionTrain() {
  engWrap.style.bottom = 'var(--ground-h)';
  engWrap.style.left   = '0px';
}

function goTo(idx, force) {
  if (idx < 0 || idx >= TOTAL) return;
  if (busy && !force) return;
  busy = true;
  current = idx;
  world.style.transition = 'transform 1.1s cubic-bezier(0.16,1,0.3,1)';
  world.style.transform  = `translateX(${-idx * window.innerWidth}px)`;
  panels.forEach((p, i) => p.classList.toggle('active', i === current));
  pb.style.width = (current / (TOTAL - 1) * 100) + '%';
  if (current >= TOTAL - 1) nextBtn.classList.add('gone');
  else { nextBtn.classList.remove('gone'); nextSub.textContent = PANELS[current + 1] + ' →'; }
  setTimeout(() => { busy = false; }, 1100);
}

nextBtn.addEventListener('click', () => goTo(current + 1));

let wlock = false;
window.addEventListener('wheel', e => {
  if (document.getElementById('v-interior').classList.contains('show')) return;
  if (document.getElementById('popup-overlay').classList.contains('show')) return;
  if (wlock) return;
  wlock = true;
  if (e.deltaY > 15 || e.deltaX > 15) goTo(current + 1);
  else if (e.deltaY < -15 || e.deltaX < -15) goTo(current - 1);
  setTimeout(() => { wlock = false; }, 1100);
}, { passive: true });

window.addEventListener('keydown', e => {
  if (document.getElementById('v-interior').classList.contains('show')) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(current + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(current - 1);
  if (e.key === 'Escape') closePopup();
});

let tx0 = 0;
window.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, { passive: true });
window.addEventListener('touchend',   e => {
  const dx = tx0 - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 50) goTo(current + (dx > 0 ? 1 : -1));
}, { passive: true });

// Engine window clicks
document.querySelectorAll('.e-win').forEach(win => {
  win.addEventListener('click', e => {
    e.stopPropagation();
    goTo(parseInt(win.dataset.car));
  });
});

// Freight car clicks
document.querySelectorAll('.fcar').forEach(car => {
  car.addEventListener('click', () => openInterior(parseInt(car.dataset.car)));
});


let activeCar = 1;

function buildProjectWindows(carIdx) {
  const zone   = document.getElementById('proj-windows');
  zone.innerHTML = '';
  const images = projectImages[carIdx] || [];

  for (let w = 0; w < 3; w++) {
    const imgData = images[w];
    const win = document.createElement('div');
    win.className = 'proj-win';

    // Night sky background layer
    const sky = document.createElement('div');
    sky.className = 'proj-win-sky';
    win.appendChild(sky);

    // Moving track at bottom
    const track = document.createElement('div');
    track.className = 'proj-win-track';
    win.appendChild(track);

    if (imgData) {
      win.classList.add('has-image');
      const img = document.createElement('img');
      img.src = imgData.src;
      img.alt = imgData.name || '';
      img.className = 'proj-win-img';
      win.appendChild(img);

      const hint = document.createElement('div');
      hint.className = 'proj-win-click-hint';
      hint.textContent = 'CLICK TO ENLARGE';
      win.appendChild(hint);

      win.addEventListener('click', () => openPopup(imgData.src, imgData.name, imgData.text, imgData.link));
    } else {
      const ph = document.createElement('div');
      ph.className = 'proj-win-placeholder';
      ph.innerHTML = `<div class="pw-icon">🌌</div><div class="pw-label">No Image</div>`;
      win.appendChild(ph);
    }

    zone.appendChild(win);
  }
}

function openInterior(carIdx) {
  activeCar = carIdx;
  const data = CARS[carIdx];
  document.getElementById('int-car-num').textContent  = 'Carriage ' + data.num;
  document.getElementById('int-car-name').textContent = data.name;
  buildProjectWindows(carIdx);
  const vi = document.getElementById('v-interior');
  vi.classList.remove('hidden');
  vi.classList.add('show');
  document.getElementById('v-outside').classList.add('hidden');
}

function closeInterior() {
  const vi = document.getElementById('v-interior');
  vi.classList.remove('show');
  vi.style.opacity = '0';
  setTimeout(() => {
    vi.classList.add('hidden');
    vi.style.opacity = '';
    document.getElementById('v-outside').classList.remove('hidden');
  }, 500);
}

document.getElementById('back-btn').addEventListener('click', closeInterior);


function openPopup(src, name, text, link) {
  const ov      = document.getElementById('popup-overlay');
  const imgEl   = document.querySelector('.popup-img');
  const capEl   = document.getElementById('popup-caption');
  const linkEl  = document.getElementById('popup-link');

  imgEl.src = src || '';
  imgEl.alt = name || '';
  capEl.textContent = text || '';

  if (link) {
    linkEl.href = link;
    linkEl.style.display = 'inline-block';
  } else {
    linkEl.style.display = 'none';
  }

  ov.classList.add('show');
}

function closePopup() {
  document.getElementById('popup-overlay').classList.remove('show');
}

document.getElementById('popup-close').addEventListener('click', closePopup);
document.getElementById('popup-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('popup-overlay')) closePopup();
});


const curEl  = document.getElementById('cur');
const curtEl = document.getElementById('curt');
let mx = 0, my = 0, cx = 0, cy = 0;

window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  curEl.style.left = mx + 'px';
  curEl.style.top  = my + 'px';
  const hoverable = e.target.closest('button, .fcar, .e-win, .proj-win, a');
  curEl.classList.toggle('h', !!hoverable);
});


function raf(t) {
  const dt = Math.min(t - lastRaf, 60);
  lastRaf = t;

  drawStars(dt);

  slOff = (slOff + 0.45) % 40;
  sw.style.transform = `translateX(-${slOff}px)`;

  cx += (mx - cx) * 0.1;
  cy += (my - cy) * 0.1;
  curtEl.style.left = cx + 'px';
  curtEl.style.top  = cy + 'px';

  requestAnimationFrame(raf);
}

function init() {
  world.style.width = (TOTAL * 100) + 'vw';
  panels.forEach((p, i) => { p.style.left = (i * 100) + 'vw'; });
  positionTrain();
  goTo(0, true);
  resizeCanvas();
  requestAnimationFrame(raf);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  world.style.transition = 'none';
  world.style.transform  = `translateX(${-current * window.innerWidth}px)`;
  setTimeout(() => { world.style.transition = 'transform 1.1s cubic-bezier(0.16,1,0.3,1)'; }, 50);
});

init();