const CARS = [
  null,
  { num:'01', name:'Workshop Content' },
  { num:'02', name:'Sketches & Wireframes' },
  { num:'03', name:'Site Map & Development' },
  { num:'04', name:'Readings & Research' },
];

const projectImages = {
  1: [
    { img1:"human-computer.jpeg", img2:'', name:"Week 1",  text:"" },
    { img1:"paper-prototype.jpeg", img2:'',name:"Week 3",  text:"" },
    { img1:"html-relay.jpeg", img2:'', name:"Week 2",  text:"" }
  ],
  2: [
    { img1:"drop-sketch.jpeg", img2:'',   name:"Sketch 1", text:"" },
    { img1:"vending-sketch.jpeg", img2:'', name:"Sketch 2", text:"" },
    { img1:"mind-sketch.jpeg", img2:'',   name:"Sketch 3", text:"" }
  ],
  3: [
    { img1:"train-sketch.jpeg",img2:'',  name:"Site Map 1", text:"" },
    { img1:"development2.jpeg",img2:'',     name:"Site Map 2", text:"" },
    { img1:"figmafull-shot.png", img2:'',   name:"Site Map 3", text:"This site is structured like a train, moving from the engine to the carriages, which gives it a clear and fixed way to navigate from start to end. I kept the content minimal, focusing more on annotations and sketches rather than lots of images, so it feels more like a process than just a showcase. The night background makes it feel more personal and intimate. The blue and red create strong contrast, with red standing out clearly. The yellow cursor and hover effects, like a flashlight, tie into the idea of exploring the site. The bold, simple font keeps everything clear and consistent. Overall, the concept and visuals align well, creating a cohesive and intentional experience focused on exploration and flow." }
],
  4: [
    {
      img1:"MindfulCircle.png",img2:'', name:"Mindful Circle",
      link:"https://circles.todiane.com/",
      text:"Mindful Circle, made by Diane Corriette, was built using p5.js with JavaScript. It is a simple interactive creative coding experiment that uses animation loops, draw functions, colour, and layering to create a responsive visual system. Diane introduces purpose through responsiveness - soft behaviour of the elements, and visual feedback aligning with a mindfulness intention, showing how small-scale interactions can be designed to evoke a specific emotional state."
    },
    {
      img1:"hadakafolio.png",img2:'', name:"Hadaka Portfolio",
      link:"https://hadaka.jp/",
      text:"Hadaka’s portfolio is a visually driven website that uses GIFs, scrolling, and layering to present their work. It relies on dynamic scrolling, responsive wave backgrounds, and layered GIFs to create a subtle 3D, almost film-like effect. Transitions shift from anime-style visuals to more minimal 3D scrolling, using contrast, colour, and motion instead of heavy text. I found it effective because it shows how simple tools like GIFs and scroll-based interactions can create depth, movement, and engagement without complex interactivity. It proves that a portfolio can feel dynamic and immersive through controlled use of motion and layering alone, making the work more experiential rather than just informational."
    },
    {
      img1:"qodaWebsite.png",img2:'', name:"Qode Interactive",
      link:"https://qodeinteractive.com/catalog/",
      text:"This website by Qode Interactive focuses on unique transitions and horizontal scrolling to shape the overall experience. It plays with typography by placing words vertically instead of the usual horizontal layout, making the navigation feel both unfamiliar and intuitive at the same time. The hover states, clickable menu options, and smooth transitions create engagement without overwhelming the user. It also combines GIFs, videos, and block colours to build a strong visual identity. Text layout, scrolling, and small interactions create a distinctive and branded experience. It shows that you don’t need complex systems to make something feel interactive and memorable."
    }
  ]
};

document.querySelectorAll('.fcar-section').forEach(car => {
  car.addEventListener('click', () => {
    const idx = parseInt(car.dataset.car);
    openInterior(idx);
  });
});


function buildProjectWindows(carIdx) {
  const zone   = document.getElementById('proj-windows');
  zone.innerHTML = '';
  const images = projectImages[carIdx] || [];

  for (let w = 0; w < 3; w++) {
    const d   = images[w];
    const win = document.createElement('div');
    win.className = 'proj-win'

if (d && d.img1) {
      const img = document.createElement('img');
      img.src       = d.img1;
      img.alt       = d.name || '';
      img.className = 'proj-win-img';
      win.appendChild(img);

const label = document.createElement('div');
      label.className   = 'proj-win-label';
      label.textContent = d.name || '';
      win.appendChild(label);

     win.addEventListener('click', () => openPopup(d));
    } else {
      const ph = document.createElement('div');
      ph.className = 'proj-win-placeholder';
      ph.textContent = 'No Image';
      win.appendChild(ph);
    }
 
    zone.appendChild(win);
  }
}

function openInterior(carIdx) {
  const data = CARS[carIdx];
  document.getElementById('int-car-num').textContent  = 'Carriage ' + data.num;
  document.getElementById('int-car-name').textContent = data.name;
  buildProjectWindows(carIdx);

 document.getElementById('v-interior').classList.remove('hidden');
  document.getElementById('v-outside').style.display = 'none';
}


function closeInterior() {
   document.getElementById('v-interior').classList.add('hidden');
  document.getElementById('v-outside').style.display = '';
}

document.getElementById('back-btn').addEventListener('click', closeInterior);


function openPopup(d) {
  const ov     = document.getElementById('popup-overlay');
  const nameEl = document.getElementById('popup-name');   
  const capEl  = document.getElementById('popup-caption');
  const linkEl = document.getElementById('popup-link');
  const img1El = document.getElementById('popup-img1');
  const img2El = document.getElementById('popup-img2');
 
  nameEl.textContent = d.name || ''; 
  capEl.textContent  = d.text || ''; 

   img1El.src = d.img1 || '';
  img1El.alt = d.name || '';
  img1El.style.display = d.img1 ? 'block' : 'none';

  img2El.src = d.img2 || '';
  img2El.alt = (d.name || '') + ' — 2';
  img2El.style.display = d.img2 ? 'block' : 'none';

  const right = document.querySelector('.popup-right');
  right.style.justifyContent = d.img2 ? 'flex-start' : 'center';

  if (d.link) {
    linkEl.href = d.link;
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

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePopup();
    closeInterior();
  }
});

const curEl  = document.getElementById('cur');
const curtEl = document.getElementById('curt');
let mx = 0, my = 0, cx = 0, cy = 0;

window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  curEl.style.left = mx + 'px';
  curEl.style.top  = my + 'px';
  
  const hoverable = e.target.closest('button, .fcar-section, .e-win, .proj-win, a');
  curEl.classList.toggle('h', !!hoverable);
  
});

function tickCursor() {
  cx += (mx - cx) * 0.15;
  cy += (my - cy) * 0.15;
  curtEl.style.left = cx + 'px';
  curtEl.style.top  = cy + 'px';
  requestAnimationFrame(tickCursor);
}
tickCursor();
 

