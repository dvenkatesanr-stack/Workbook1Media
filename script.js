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
    { src: "human-computer.jpeg",name: "Week 1",
        text:"" },
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
    { src: "MindfulCircle.png", name: "Research 1", link:"https://circles.todiane.com/",
        text:"This project, Mindful Circle made by Diane Corriette, was found on To Dianeand built using p5.js with JavaScript. It is a simple interactive creative coding experiment that uses animation loops, draw functions, colour, and layering to create a responsive visual system.The interaction is minimal but intentional: as the user moves their mouse, the circles shift away from the cursor, then gradually return to a central point. This creates a continuous push-and-pull motion that directly links user input to visual response.What makes this project significant is how it uses a very simple mechanic, basic movement and proximity to produce a more meaningful experience. Rather than existing as purely aesthetic creative coding, it introduces purpose through responsiveness. The calm motion, soft behaviour of the elements, and visual feedback align with a mindfulness intention, showing how small-scale interactions can be designed to evoke a specific emotional state."},
    { src: "hadakafolio.png", name: "Research 2", link:"https://hadaka.jp/",
        text:"Hadaka’s portfolio website stands out for its dynamic use of scrolling, GIFs, and layered visuals. What makes it particularly effective is how relatively simple elements, like GIF, used to create a cinematic, almost 3D-like experience without relying on complex interactivity. The scrolling is central to the design. As the user moves through the site, images and GIFs transition fluidly, supported by a responsive wave-like background and a strong use of colour contrast. These elements work together to create a sense of depth and spatial movement, making the website feel immersive rather than flat.Another key aspect is how the work is presented. Instead of relying on large amounts of text, the site introduces projects through visual transitions and layering. The shift in styles such as moving from anime-inspired visuals to more minimal 3D scrolling sections, adds variation and keeps the experience engaging while still feeling cohesive.What makes this portfolio significant is its restraint. It doesn’t depend on highly complex animations or interactions; instead, it uses GIFs, scrolling, and composition strategically to build a dynamic experience. This shows how thoughtful visual structuring and motion can communicate a designer’s work effectively, even with relatively simple tools." },
    { src: "qodaWebsite.png", name: "Research 3", link:"https://qodeinteractive.com/catalog/",
        text:"This website by Qode Interactive focuses on distinctive transitions and horizontal scrolling to create a more engaging navigation experience. Instead of following a conventional layout, it experiments with how content is structured, particularly through the use of vertically arranged text. This shift makes the interface feel unique, while still remaining familiar enough to navigate intuitively.The interaction design is subtle but effective. Simple hover effects on menu items add a layer of responsiveness, making the experience feel interactive without being overwhelming. These small details contribute to a sense of control and feedback as the user moves through the site. Visually, the website combines transitions, GIFs, videos, and bold blocks of colour to create a strong and cohesive identity. These elements are not overly complex on their own, but when layered together, they enhance the overall engagement and reinforce branding. What makes this website significant is how it balances simplicity with experimentation. By rethinking text orientation, navigation flow, and visual transitions, it demonstrates how small design decisions can reshape a standard browsing experience into something more distinctive and memorable." }
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

function buildProjectWindows(carIdx){
  const zone = document.getElementById('proj-windows');
  zone.innerHTML = '';

  const images = projectImages[carIdx] || [];

  for(let w = 0; w < 3; w++){
    const imgData = images[w];

    const win = document.createElement('div');
    win.className = 'proj-win';

    if(imgData){
      // CREATE IMAGE
      const img = document.createElement('img');
      img.src = imgData.src;
      img.className = 'proj-win-img';

      win.appendChild(img);

      // CLICK OPENS POPUP
      win.addEventListener('click', ()=>{
        openPopup(imgData.src, imgData.name, imgData.link);
      });
    } else {
      // optional placeholder
      win.innerHTML = `<div class="proj-win-placeholder">No Image</div>`;
    }

    // APPEND INSIDE LOOP
    zone.appendChild(win);
  }
}
  


function openInterior(carIdx){
  activeCar=carIdx;
  const data=CARS[carIdx];
  document.getElementById('int-car-num').textContent='Carriage '+data.num;
  document.getElementById('int-car-name').textContent=data.name;
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

function openPopup(src, caption, link){
  const ov=document.getElementById('popup-overlay');
  const img=document.getSelector('.popup-img');
  const caption=document.getElementById('popup-caption');
  const caption=document.getElementById('popup-link');
   img.src = src || '';
  cap.textContent = caption || '';

  if(link){
    a.href = link;
    a.style.display = 'inline-block';
  } else {
    a.style.display = 'none';
  }

  ov.classList.add('show');
}

function closePopup(){
  document.getElementById('popup-overlay').classList.remove('show');
}
document.getElementById('popup-close').addEventListener('click',closePopup);
document.getElementById('popup-overlay').addEventListener('click',e=>{ if(e.target===document.getElementById('popup-overlay')) closePopup(); });

const cur = document.getElementById('cur');
const curt = document.getElementById('curt');

let mx = 0, my = 0;
let cx = 0, cy = 0;

window.addEventListener('mousemove', e=>{
  mx = e.clientX;
  my = e.clientY;

  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';

  const hoverable = e.target.closest('button, .fcar, .e-win, .proj-win, a');
  cur.classList.toggle('h', !!hoverable);
});

function animateCursor(){
  cx += (mx - cx) * 0.1;
  cy += (my - cy) * 0.1;

  curt.style.left = cx + 'px';
  curt.style.top = cy + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();

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
  const offset = current * window.innerWidth;
world.style.transform = `translateX(${-offset}px)`;

engWrap.style.transform = `translateX(${idx * 10}px)`;

  setTimeout(()=>{ world.style.transition='transform 1.1s cubic-bezier(0.16,1,0.3,1)'; },50);
});

init();