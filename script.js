const CARS = [
  null, // index 0 = engine
  { num:'01', name:'Workshop Content',       color:'rgba(120,80,40,.15)' },
  { num:'02', name:'Sketches & Wireframes',  color:'rgba(40,80,120,.15)' },
  { num:'03', name:'Site Map & Development', color:'rgba(40,120,80,.15)' },
  { num:'04', name:'Readings & Research',    color:'rgba(120,40,80,.15)' },
];
const PANELS = ['Engine','Workshop Content','Sketches & Wireframes','Site Map & Development','Readings & Research'];
const TOTAL = 5;

const projectImages = {
  1: [
    { src: "human-computer.jpeg", name: "Week 1" },
    { src: "paper-prototype.jpeg", name: "week 3" },
    { src: "html-relay.jpeg", name: "Week 2" }
  ],
  2: [
    { src: "drop-sketch.jpeg", name: "Sketch 1" },
    { src: "vending-sketch.jpeg", name: "Sketch 2" },
    { src: "mind-sketch.jpeg", name: "Sketch 3" }
  ],
  3: [
    { src: "train-sketch.jpeg", name: "Site Map 1" },
    { src: "development2.jpeg", name: "Site Map 2" },
    { src: "figmafull-shot.png", name: "Site Map 3" }
  ],
  4: [
    { src: "research1.jpg", name: "Research 1" },
    { src: "research2.jpg", name: "Research 2" },
    { src: "research3.jpg", name: "Research 3" }
  ]
};

const world = document.getElementById('world');
const engWrap = document.getElementById('engine-wrap');
const panels = document.querySelectorAll('.panel');
const dots = document.querySelectorAll('.dot');
const pb = document.getElementById('pb');
const nextBtn = document.getElementById('next-btn');
const nextSub = document.getElementById('next-sub');
let current=0, busy=false;

function positionTrain(){
  // Loco visual center ≈ 35vw (it's 70vw wide, center at 35vw)
  // Align: when panel 0, loco's right edge meets panel boundary seamlessly
  // Place train at left:0 inside world so it travels with the world translate
  engWrap.style.bottom = 'var(--ground-h)';
  engWrap.style.left = '0px';
}

function goTo(idx, force){
  if(idx<0||idx>=TOTAL) return;
  if(busy&&!force) return;
  busy=true; current=idx;
  world.style.transition='transform 1.1s cubic-bezier(0.16,1,0.3,1)';
  world.style.transform=`translateX(${-idx*window.innerWidth}px)`;
  panels.forEach((p,i)=>p.classList.toggle('active',i===current));
  dots.forEach((d,i)=>d.classList.toggle('active',i===current));
  pb.style.width=(current/(TOTAL-1)*100)+'%';
  if(current>=TOTAL-1) nextBtn.classList.add('gone');
  else{ nextBtn.classList.remove('gone'); nextSub.textContent=PANELS[current+1]+' →'; }
  setTimeout(()=>{ busy=false; },1100);
}

nextBtn.addEventListener('click',()=>goTo(current+1));
dots.forEach(d=>d.addEventListener('click',()=>goTo(parseInt(d.dataset.i))));

let wlock=false;
window.addEventListener('wheel',e=>{
  if(document.getElementById('v-interior').classList.contains('show')) return;
  if(document.getElementById('popup-overlay').classList.contains('show')) return;
  if(wlock) return; wlock=true;
  if(e.deltaY>15||e.deltaX>15) goTo(current+1);
  else if(e.deltaY<-15||e.deltaX<-15) goTo(current-1);
  setTimeout(()=>{ wlock=false; },1100);
},{passive:true});

window.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown') goTo(current+1);
  if(e.key==='ArrowLeft'||e.key==='ArrowUp') goTo(current-1);
  if(e.key==='Escape') closePopup();
});

let tx0=0;
window.addEventListener('touchstart',e=>{ tx0=e.touches[0].clientX; },{passive:true});
window.addEventListener('touchend',e=>{ const dx=tx0-e.changedTouches[0].clientX; if(Math.abs(dx)>50) goTo(current+(dx>0?1:-1)); },{passive:true});

document.querySelectorAll('.e-win').forEach(win=>{
  win.addEventListener('click',e=>{
    e.stopPropagation();
    const car=parseInt(win.dataset.car);
    goTo(car);
  });
});

document.querySelectorAll('.fcar').forEach(car=>{
  car.addEventListener('click',()=>{
    const idx=parseInt(car.dataset.car);
    openInterior(idx);
  });
});

let activeCar=1;

function buildPassengers(side, count){
  const el=document.getElementById('seats-'+side);
  el.innerHTML='';
  for(let i=0;i<count;i++){
    const g=document.createElement('div'); g.className='seat-group';
    g.innerHTML=`<div class="p-head"></div><div class="p-body"></div><div class="seat-back"></div><div class="seat-base"></div>`;
    el.appendChild(g);
  }
}

function buildProjectWindows(carIdx){
  const zone = document.getElementById('proj-windows');
  zone.innerHTML = '';

  const images = projectImages[carIdx] || [];

  for(let w = 0; w < 3; w++){
    const img = images[w];
    if(!img) continue;

    const win = document.createElement('div');
    win.className = 'proj-win';

    win.addEventListener('click', ()=>{
      openPopup(img.src, img.name);
    });

    zone.appendChild(win);
  }
}

  


function openInterior(carIdx){
  activeCar=carIdx;
  const data=CARS[carIdx];
  document.getElementById('int-car-num').textContent='Carriage '+data.num;
  document.getElementById('int-car-name').textContent=data.name;
  buildPassengers('left',3);
  buildPassengers('right',3);
  buildProjectWindows(carIdx);
  const vi=document.getElementById('v-interior');
  vi.classList.remove('hidden');
  vi.classList.add('show');
  document.getElementById('v-outside').classList.add('hidden');
}

function closeInterior(){
  const vi=document.getElementById('v-interior');
  vi.classList.remove('show');
  vi.style.opacity='0';
  setTimeout(()=>{ vi.classList.add('hidden'); vi.style.opacity=''; document.getElementById('v-outside').classList.remove('hidden'); }, 500);
}

document.getElementById('back-btn').addEventListener('click', closeInterior);
document.getElementById('exit-door').addEventListener('click', closeInterior);

function openPopup(src, caption){
  const ov=document.getElementById('popup-overlay');
  const img=document.getElementById('popup-img');
  const ph=document.getElementById('popup-placeholder');
  const cap=document.getElementById('popup-caption');
  if(src){ img.src=src; img.style.display='block'; ph.style.display='none'; }
  else { img.style.display='none'; ph.style.display='flex'; }
  cap.textContent=caption||'';
  ov.classList.add('show');
}
function closePopup(){
  document.getElementById('popup-overlay').classList.remove('show');
}
document.getElementById('popup-close').addEventListener('click',closePopup);
document.getElementById('popup-overlay').addEventListener('click',e=>{ if(e.target===document.getElementById('popup-overlay')) closePopup(); });

const curEl=document.getElementById('cur');
const curtEl=document.getElementById('curt');
let mx=0,my=0,cx=0,cy=0;
window.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  curEl.style.left=mx+'px'; curEl.style.top=my+'px';
  const ov=e.target.closest('.fcar,.e-win,button,a,.proj-win,.dot,#exit-door,.int-door');
  curEl.classList.toggle('h',!!ov);
});

function raf(t){
  const dt=Math.min(t-lastRaf,60); lastRaf=t;
  drawStars(dt);
  slOff=(slOff+.45)%40; sw.style.transform=`translateX(-${slOff}px)`;
  cx+=(mx-cx)*.1; cy+=(my-cy)*.1;
  curtEl.style.left=cx+'px'; curtEl.style.top=cy+'px';
  requestAnimationFrame(raf);
}

function init(){
  world.style.width=(TOTAL*100)+'vw';
  panels.forEach((p,i)=>{ p.style.left=(i*100)+'vw'; });
  positionTrain();
  goTo(0,true);
  resizeCanvas();
  requestAnimationFrame(raf);
}

window.addEventListener('resize',()=>{
  resizeCanvas();
  world.style.transition='none';
  world.style.transform=`translateX(${-current*window.innerWidth}px)`;
  setTimeout(()=>{ world.style.transition='transform 1.1s cubic-bezier(0.16,1,0.3,1)'; },50);
});

init();