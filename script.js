const CARS = [
  null,
  { num:'1', name:'Workshop Content' },
  { num:'2', name:'Sketches & Wireframes' },
  { num:'3', name:'Site Map & Development' },
  { num:'4', name:'Readings & Research' },
  { num:'5',  name:'Pointillism Picture' },
  { num:'6',  name:'HuntNGather' },
  { num:'7',  name:'Arduino "In my Headspace"' },
  { num:'8',  name:'Arduino "Piano"' },
  { num:'9',  name:'Research' },
  { num:'10', name:'Ideas & Sketches' },
  { num:'11', name:'Experiments' },
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


/* ─── GALLERY CARRIAGES (5–11): which car indices use the gallery layout ─── */
const GALLERY_CARS = new Set([5, 6, 7, 8, 9, 10, 11]);

function buildProjectWindows(carIdx) {
  const zone = document.getElementById('proj-windows');
  zone.innerHTML = '';

  if (GALLERY_CARS.has(carIdx)) {
    /* ── Gallery layout: 3×2 grid of media tiles ── */
    zone.classList.add('gallery-mode');
    const items = galleryData[carIdx] || [];

    for (let i = 0; i < 6; i++) {
      const d   = items[i];
      const tile = document.createElement('div');
      tile.className = 'gallery-tile';

      const mediaWrap = document.createElement('div');
      mediaWrap.className = 'gallery-tile-media';

      if (d && d.media) {
        const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(d.media);
        if (isVideo) {
          const vid = document.createElement('video');
          vid.src = d.media;
          vid.loop = true;
          vid.muted = true;
          vid.playsInline = true;
          vid.autoplay = true;
          mediaWrap.appendChild(vid);
        } else {
          const img = document.createElement('img');
          img.src = d.media;
          img.alt = d.caption || '';
          mediaWrap.appendChild(img);
        }
        tile.addEventListener('click', () => openGalleryPopup(d));
      } else {
        const ph = document.createElement('div');
        ph.className = 'gallery-tile-placeholder';
        ph.textContent = 'Empty';
        mediaWrap.appendChild(ph);
      }

      tile.appendChild(mediaWrap);

      const cap = document.createElement('div');
      cap.className = 'gallery-tile-caption';
      cap.textContent = (d && d.caption) ? d.caption : '—';
      tile.appendChild(cap);

      zone.appendChild(tile);
    }
  } else {
    /* ── Original 3-window layout for carriages 1–4 ── */
    zone.classList.remove('gallery-mode');
    const images = projectImages[carIdx] || [];

    for (let w = 0; w < 3; w++) {
      const d   = images[w];
      const win = document.createElement('div');
      win.className = 'proj-win';

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
}

function openGalleryPopup(d) {
  openPopup({
    name:  d.caption  || '',
    text:  d.text     || '',
    img1:  d.media    || '',
    img2:  d.img2     || '',
    link:  d.link     || ''
  });
}


const galleryData = {
  5: [
    { media: 'sq1.png', caption: 'squarcurser', text: 'We experimented with creating custom cursors and backgrounds using p5.js. Through this experiment, we explored how to edit and manipulate the cursor’s shape, colour, size, and opacity to understand how small visual changes affect interaction and movement on screen. We changed the cursor into a yellow square and programmed it to leave behind a trail of low-opacity squares that followed the path of the cursor. This created a layered motion effect that visually tracked the user’s movement across the canvas' },
    { media: 'sq2.png', caption: 'size and speed', text: 'We further experimented with randomness by exploring random colours, text, and shapes using p5.js. This experiment focused on generating unpredictable visual outputs, where different colours, words, and shapes would randomly appear and disappear across the background. The screen continuously filled with random pops of colour and text, creating a chaotic and constantly changing visual environment. Through this process, we explored how randomness and repetition can create movement, variation, and unpredictability within interactive digital spaces.' },
    { media: 'sq3.png', caption: 'colour changing', text: 'This image shows the initial stage of the sketchboard development process. At this stage, we began experimenting with the overall layout, visual direction, and interactive elements of the sketchboard. The purpose of this early iteration was to test ideas, explore possible features, and understand how users might interact with the digital space before moving into further refinement and development.' },
    { media: 'sq4.png', caption: 'pen curser', text: 'In this experiment, we changed the background colour to red and transformed the cursor into a circular ink-blot style brush. Instead of functioning as a standard cursor, it acted more like a sketch pen that could draw directly onto the screen as it moved. This created a more expressive and hand-drawn interaction style, allowing the movement of the cursor to leave flowing marks and sketch-like traces across the background.' },
    { media: 'sq5.png', caption: 'click colour', text: 'Building on the ink-blot sketch cursor, we added a click-and-hold feature that allowed the colour of the drawing tool to change while interacting. When the mouse is pressed and held, the brush switches to a different colour, enabling us to toggle between multiple drawing states. This added another layer of interactivity to the sketching experience, allowing for more variation and control in how the marks are made and further expanding the idea of drawing as an evolving, responsive system.' },
    { media: 'sq6.png', caption: 'drawing', text: 'For this task, we were asked to create a self-portrait using p5.js. I chose to represent myself through my online MC cartoon character instead of a realistic self-portrait. This allowed me to translate my identity into a more stylised and digital form, using shapes and coded elements to construct the character. Through this process, I explored how self-representation can be abstracted in creative coding, and how identity can be expressed through simplified visual components rather than literal imagery.' },
  ],
  6: [
    { media: 'affordanceExample1.png', caption: 'Affordance of Interaction Reseach Consistant', text: 'This website uses a simple and consistent grid layout to organise photography projects clearly and effectively. A hover feature allows low-opacity image previews to appear when the user moves over a project, giving quick snapshots of the photography before clicking. Once selected, the layout splits into two sections, allowing users to view the chosen project while still exploring other available works. The consistent use of grids, opacity, and hover interactions creates a clean, minimal, and accessible browsing experience.', link:'https://david-william-baum-2023.vercel.app/' },
    { media: 'affordanceExample2.png', caption: 'Affordance of Interaction Reseach Complex', text: 'This portfolio website by Chudy uses a desktop-style interface inspired by a Mac device, where projects are scattered across the screen like draggable files and folders. When a project is clicked, a pop-up window opens, allowing the user to scroll through the project details while still interacting with the desktop environment. The design uses familiar Apple-inspired elements such as Trash, Photoshop, Illustrator, Gallery, Mail, and Instagram icons to navigate different sections of the portfolio. Hover interactions and movable windows make the experience feel playful, immersive, and highly interactive while still clearly presenting the creator’s work and information. ', link:'https://www.bychudy.com/' },
    { media: 'popingShapes.png', caption: 'Code Exterimentation', text: 'I experimented with a simple p5.js interaction where clicking on a shape causes it to expand in size. Each click gradually increases the shape’s scale, making it grow progressively larger with repeated interaction. After 10 clicks, the shape “pops,” resetting or disappearing as a final state. This helped explore basic user interaction, state changes, and how repeated input can be used to trigger different visual outcomes.' },
    { media: 'movingShape.mp4', caption: 'Experimenation', text: 'I then extended this idea by adding a drag function to the shapes, allowing them to be moved freely across the screen. Similar to the approach used in the Chudy folio example, this made the interaction more dynamic and tactile, as users could click and reposition elements rather than just trigger static changes. This added a layer of spatial interaction, where the arrangement of shapes becomes something the user can actively control and explore. ' },
    { media: 'movingColour.mp4', caption: 'Simple Affordance', text: 'I extended this further by linking the drag interaction to a collision-based function. When two shapes are dragged and touch each other, it triggers a random colour generation cycle (like shown in class). This creates a reactive system where interaction isn’t just movement, but also transformation based on contact. Although it didn’t fully develop into the growth mechanic I initially planned, it became an interesting experiment in how collision and randomness can be combined to produce unpredictable visual outcomes.' },
    { media: 'movingThree.mp4', caption: 'Complex Afforance', text: 'I developed the idea further by focusing on colour interaction between shapes. Using the three primary colours—blue, red, and yellow—I explored how they could mix when shapes come into contact, generating new colours and forming different visual combinations. The intention was also for the shapes to grow in size as they combined, but I wasn’t able to fully implement that part, so I kept the focus on the colour-mixing interaction instead. This resulted in a simpler but still effective system where collision drives colour change and visual transformation.' },
  ],
  7: [
    { media: 'Set-up.jpeg', caption: 'Set-up', text: 'The board was set up using a microchip, breadboard, resistors, and jumper wires in a simple physical computing configuration. A distance-based sensor was integrated so that its output changes depending on how much it is covered—when the sensor is obstructed, it triggers a loud sound. This setup was guided step-by-step by the tutors, focusing on the fundamentals of how the system operates, including how resistors regulate current and how jumper wires connect inputs and outputs on the board.' },
    { media: 'making.jpeg', caption: 'Making', text: 'testing out waying to attach the device on the bag securly without tearing' },
    { media: 'Run1.mp4', caption: 'Trial Run 1 (waiting for the video to be sent)', text: 'This was a simple trial run where we wore the bag over our head to test how the system responds in a partially covered state. The purpose was to observe how effectively the sensor detects obstruction and how consistently it triggers the output when the coverage changes. This helped us understand the sensitivity and behaviour of the setup in a real use scenario before further refinement.' },
    { media: 'Run2.mp4', caption: 'Trial Run 2', text: 'This trial run helped us identify several limitations when wearing the bag over the head. The system did not consistently detect obstacles on the floor, which increased the risk of tripping during use. Another issue was that the sensor distance was initially set too close, meaning users had very little time to react after detection. To improve this, we increased the sensing range to 1 metre, giving the user more time to identify and respond to obstacles safely.' },
    { media: 'editing.jpeg', caption: 'Editing', text: 'We worked with the tutor to debug and refine the setup of the device. This involved troubleshooting the wiring and reviewing how each component was connected within the circuit to ensure the system functioned correctly. Through this process, we made adjustments to improve stability and accuracy, while also learning how small changes in the setup can significantly affect how the device performs.' },
    { media: 'Run3.mp4', caption: 'Trial Run 3', text: 'In the final trial run, we decided to shift the concept from a helmet-based system to a walking stick format. This change made the device more practical and safer to use, allowing it to better detect obstacles at ground level while guiding movement more effectively. The walking stick setup improved reliability in identifying obstacles and provided a more intuitive way for the user to navigate their environment.' },
  ],
  8: [
    { media: 'set-up2.jpeg', caption: 'Set-up', text: 'For this activity, we followed the tutor’s guidance and experimented with different materials to understand conductivity in a physical computing context. We learned how the human body can act as a ground within a circuit, completing the electrical loop and allowing objects to become interactive inputs. This helped us understand how simple conductive materials can be used to trigger responses in a system and create interactive outcomes through touch and contact.' },
    { media: 'materials.jpeg', caption: 'Materials', text: 'We experimented with a range of different materials including foil, potatoes, carrots, branches, leaves, and metal objects such as pens and keys. This helped us test how different levels of conductivity affect interaction within the circuit, and how both organic and non-organic materials can be used as input triggers in a physical computing setup.' },
    { media: 'errorfixing.jpeg', caption: 'Error fixing', text: 'There was an issue where the alligator clips were not properly connecting the plant branch to the board, resulting in no response when touched. We worked with the tutors to troubleshoot and debug the setup, checking the connections and identifying where the circuit was breaking. Through this process, we refined the wiring and ensured proper contact, which helped restore the responsiveness of the system.' },
    { media: 'run1.1.mp4', caption: 'experimenting', text: 'In Trial Run 1, we experimented with using jumper wires inserted into vegetables to test conductivity and interaction within the circuit. This allowed us to explore how organic materials can act as inputs when connected to a simple physical computing setup. The process helped us understand how direct contact and material properties affect whether or not a signal is successfully triggered.' },
    { media: 'run2.2.mp4', caption: 'Video 1', text: 'In Trial 2, after debugging and refining the setup, we simplified our materials and focused on more reliable conductive inputs. We selected carrots, potatoes, and crumpled foil as the main materials for the circuit. This adjustment improved the consistency of the responses and made the interaction clearer, allowing us to better observe how different materials affect conductivity and trigger input within the system.' },
    { media: 'run3.3.mp4', caption: 'Video 2', text: 'We then explored the setup in a more playful way by identifying the musical notes produced through the circuit and using them to play Mary Had a Little Lamb. This helped us understand how the system could be used not just for sensing inputs, but also for creating unique sound outputs and mimic instruments.' },
  ],
  9: [
    { media: 'research1.webp', caption: 'Twinkle Tartiflette', text: 'This work is called “Twinkle Tartiflette” by Rain Ashford. It is an emotive wearable created using Arduino, LilyPads, and conductive thread. The piece is an experimental exploration of sound, conductive materials, and text-based interaction.What stood out to me visually is how the words are arranged and shaped across the garment, and how they respond to touch. Although the embroidery is simple and quite minimal, that simplicity makes the work feel more intentional, as it draws attention to each individual element and what it represents', link:'https://rainycatz.wordpress.com/2010/07/09/twinkle-tartiflette-an-arduino-driven-interactive-wordmusic-artwork/' },
    { media: 'research2.png', caption: 'Electronic Art', text: 'Description.', link:'https://community.element14.com/challenges-projects/project14/electronicart/b/blog/posts/electronic-art-app-controlled-by-arduino-uno' },
    { media: 'research3.png', caption: 'BirdFeedR', text: 'Description.', link:'https://www.hackster.io/ishotjr/birdfeedr-the-bird-only-feeder-powered-by-arduino-uno-q-2c3259'  },
    { media: 'research4.mp4', caption: 'Globe Trotter', text: 'Description.', link:'https://www.hackster.io/carolinebuttet/globe-trotter-5188e8'  },
    { media: 'research5.png', caption: 'Intelligent art', text: 'This project is called “Intelligent Art”, made by Tauno Erik. It is a fascinating interactive piece where the artwork appears to have a sense of awareness or even emotion. It is designed to trigger an alarm when it is being photographed, as if the work is reacting defensively to being captured. This creates the impression that the artwork is “resisting” the camera or even calling for help when it is documented. The work uses a simple system involving a custom-made PCB, Arduino, LED modules, and a camera. The camera detects when a person takes a photograph, and this action triggers a sound or alarm response from the installation.', link:'https://www.hackster.io/taunoerik/intelligent-art-969d81'  },
    { media: 'research6.webp', caption: 'Possessed Portrait', text: 'This project I really liked is called “The Possessed Portrait” by Dominick Marino. It really stood out to me as a work created using Raspberry Pi, where a simple computer vision setup detects when a person walks up to the portrait and triggers a visual response. What I find interesting is how the interaction is based on something so simple—proximity. When a person approaches the screen, the system responds with a change in the digital image, creating an immediate feedback loop between viewer and artwork.', link:'https://www.hackster.io/dominick-marino/possessed-portrait-updated-32a7a6'  },
  ],
  10: [
    { media: '', caption: 'Image 1', text: 'Description.' },
    { media: '', caption: 'Image 2', text: 'Description.' },
    { media: '', caption: 'Image 3', text: 'Description.' },
    { media: '', caption: 'Image 4', text: 'Description.' },
    { media: '', caption: 'Image 5', text: 'Description.' },
    { media: '', caption: 'Image 6', text: 'Description.' },
  ],
  11: [
    { media: '', caption: 'Image 1', text: 'Description.' },
    { media: '', caption: 'Image 2', text: 'Description.' },
    { media: '', caption: 'Image 3', text: 'Description.' },
    { media: '', caption: 'Image 4', text: 'Description.' },
    { media: '', caption: 'Image 5', text: 'Description.' },
    { media: '', caption: 'Image 6', text: 'Description.' },
  ],
};

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
 

