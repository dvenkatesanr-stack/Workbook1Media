const CARS = [
  null,
  { num:'1', name:'Workshop Content' },
  { num:'2', name:'Sketches & Wireframes' },
  { num:'3', name:'Site Map & Development' },
  { num:'4', name:'Readings & Research' },
  { num:'5',  name:'Carriage 5' },
  { num:'6',  name:'Carriage 6' },
  { num:'7',  name:'Carriage 7' },
  { num:'8',  name:'Carriage 8' },
  { num:'9',  name:'Carriage 9' },
  { num:'10', name:'Carriage 10' },
  { num:'11', name:'Carriage 11' },
];

const projectImages = {
  1: [
    { img1:"humacomp1.jpeg", img2:'humancomp2.jpeg', name:"Week 1",  
        text:"My first idea was using the metallic ball’s reflective surface as a 360° camera. It captures not just the subject but the entire environment, and instead of buttons, it’s controlled through hand gestures for things like zoom, brightness, and taking photos. My second idea was turning the ball into an interactive speaker. It’s divided into sections, each producing different sounds—so depending on how you hold or cover it, you can mix, isolate, and manipulate audio. It also works as a recorder, letting you store and layer sounds. Movement controls it too: lifting it changes volume, and tilting it affects pitch" },
    { img1:"paper-prototype.jpeg",name:"Week 3",  
        text:"My idea was to design my portfolio interface like a vending machine. Projects are displayed like snacks, each with a number and name. You browse by looking and scrolling, then select a project by entering its number on a panel and pressing the “Print” button. Once selected, there’s an audio cue like a vending machine drop, and an animation where the project “falls” down behind the bottom push panel. From there, you can click and drag it to view. Each project comes as a snack pack, with a short description about the project placed where the nutritional info would usually be." },
    { img1:"html-relay.jpeg", name:"Week 2",  text:"The human relay was a fun, collaborative experience with my team of seven UX majors, so we were all comfortable with coding basics. We had some confusion while experimenting, mainly around how to structure the layout for images and descriptions. We considered using a div, table, or section since all could achieve similar results, but each came with different constraints. In the end, we chose divs because they allowed more flexibility, easier styling, and better control overall." }
  ],
  2: [
    { img1:"drop-sketch.jpeg",   name:"Concept Sketch 1", 
        text:"My first concept for the portfolio was an “inventory drop” inspired by survival and battle games like Minecraft and Fortnite, where items scatter when a player dies. I used this idea to present my projects as items I’ve “collected,” displayed on the homepage in a playful, scattered layout.When you click on a project, it zooms in and transitions into a card-style view, continuing the game-like experience with images and short descriptions.Visually, I planned to use pixelated fonts and graphics, combined with a realistic image of me falling, creating a mix of real-life and gaming aesthetics." },
    { img1:"vending-sketch.jpeg", name:"Concept Sketch 2", 
        text:"My next idea was the vending machine concept, which I also developed into a paper prototype. Initially, I wanted it to be a 3D vending machine that users could rotate and view from different angles, with each product representing a project. I felt this concept suited the assignment well because of its versatility, completed projects could be displayed normally, while ongoing ones could be labeled “out of stock” or “coming soon,” and new work could be shown as “new releases.” The homepage would have 4 layers, each representing weekly work. Each product includes the project name where the price usually is, and a number that users enter into a selection panel, mimicking a real vending machine interaction. When selected, the project transitions into a simple enlarged image with a short description, keeping it clean, visual, and easy to navigate." },
    { img1:"mind-sketch.jpeg", name:"Concept Sketch 3", 
        text:"My next idea was a simple free-scroll homepage built through photography. It features a side portrait of me sitting, with my projects displayed as compositions on a black wall behind me. Strings connect the projects to my head and back, animated as red, pulsating lines to represent the life and blood spent in doing the work. I focused on experimenting with the composition of the project squares, and the interaction stays minimal, using simple zoom in and zoom out transitions." }
  ],
  3: [
    { img1:"train-sketch.jpeg",img2:'figmafull-shot.png',  name:"Concept Sketch", 
        text:"The final concept I chose was a train with carriages, using a horizontal scroll interaction. Each carriage represents a different stage of the process or a set of projects. I chose this because it’s flexible and scalable—it’s easy to add more carriages as I create more work, while keeping the layout clear and straightforward. The homepage starts with the engine, and as you scroll, you unlock different carriages. Clicking into a carriage takes you “inside,” where projects are displayed. Due to time constraints, I simplified the interior to just three windows instead of fully developed scenes with people, but this is something I plan to expand later. I also created a simple Figma prototype to test the transitions and overall experience." },
    { img1:"Stitchoutcome.jpeg", name:"Development & Experimentation", 
        text:"I was introduced to Stitch in class and used it to build a base for my website, mainly for the CSS, since I was struggling with how to structure elements like the train chain. My first prompt didn’t work at all, so for the second attempt, I used my Figma prototype and gave clearer directions on color, font, and style. I went with a red, blue, and gold palette, red for the train, dark blue for a night background, and gold and lighter tones for contrast and a slightly playful, magical feel. The typography is still experimental, but the color scheme is something I’ll keep consistent. Even then, Stitch didn’t fully match my vision, it generated more of a slideshow layout instead of a smooth horizontal scroll. I mainly used Stitch as a rough stylistic base, a kind of starting skeleton for the homepage. From there, I reworked everything to fit my idea, extending the carriages, refining the structure, and adding details like content in the engine windows. All the interior views and pop-ups were fully coded by me, using YouTube resources. I also found the background too plain, so I developed it further by adding elements like mountains and a moon to enhance the scene." },
    { img1:"finalHome.png", img2:'finalInside.png', name:"Folio", 
        text:"The final draft of the workbook homepage is built around a smooth, horizontal scrollable train as the central interaction. As you scroll and click through each carriage, the experience is supported by a custom cursor, a simple circular form designed to act like a flashlight. It has a soft yellow-gold border that highlights areas on hover, mimicking the effect of a light source scanning across the train. The homepage itself is intentionally minimal: just the engine, the carriages, and the interactive cursor. Once you enter a carriage, the interior shifts into a simple atmospheric design using layered lighting and colour. The top uses a warm yellow glow to suggest ceiling lights inside a train carriage, while the bottom fades into a deep dark blue and black gradient to create depth and contrast. Brown tones are used to reference wood paneling, reinforcing the interior train aesthetic. Each image is framed with a blue-bordered box, designed to feel like a window and maintain consistency across the layout. This is still an area I want to refine further, especially in terms of structure and overall interior detailing. The navigation elements are kept simple and functional: a back button, an exit cross, and a return-to-train button. These are styled in blue with gold text to stay consistent with the window frames and wood tones, keeping the visual language cohesive throughout the experience." }
],
  4: [
    {
      img1:"MindfulCircle.png",img2:'MindfulCircle2.png', name:"Mindful Circle",
      link:"https://circles.todiane.com/",
      text:"Mindful Circle, made by Diane Corriette, was built using p5.js with JavaScript. It is a simple interactive creative coding experiment that uses animation loops, draw functions, colour, and layering to create a responsive visual system. Diane introduces purpose through responsiveness - soft behaviour of the elements, and visual feedback aligning with a mindfulness intention, showing how small-scale interactions can be designed to evoke a specific emotional state."
    },
    {
      img1:"hadakafolio.png",img2:'hadaka2.png', name:"Hadaka Portfolio",
      link:"https://hadaka.jp/",
      text:"Hadaka’s portfolio is a visually driven website that uses GIFs, scrolling, and layering to present their work. It relies on dynamic scrolling, responsive wave backgrounds, and layered GIFs to create a subtle 3D, almost film-like effect. Transitions shift from anime-style visuals to more minimal 3D scrolling, using contrast, colour, and motion instead of heavy text. I found it effective because it shows how simple tools like GIFs and scroll-based interactions can create depth, movement, and engagement without complex interactivity. It proves that a portfolio can feel dynamic and immersive through controlled use of motion and layering alone, making the work more experiential rather than just informational."
    },
    {
      img1:"qodaWebsite.png",img2:'qoda2.png', name:"Qode Interactive",
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
 

