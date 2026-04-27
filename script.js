const name = "Karina(Lily)"; // change this

const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

function heartGif() {
  return `
    <div class="heart-gif">
      <span class="sparkle one">✨</span>
      <span class="sparkle two">💫</span>
      <span class="sparkle three">✨</span>
      <div class="heart-shape"></div>
    </div>
  `;
}

function typeText(element, text, speed = 45) {
  element.innerHTML = "";
  element.classList.add("typing");

  let i = 0;

  function write() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(write, speed);
    } else {
      element.classList.remove("typing");
    }
  }

  write();
}

function show(content, typingText = null) {
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation =
    "cardIn 0.8s ease both, cardFloat 4s ease-in-out infinite";

  card.innerHTML = content;

  if (typingText) {
    const typingEl = document.getElementById("typingText");
    typeText(typingEl, typingText);
  }
}

function page1() {
  show(
    `
    ${heartGif()}
    <h1 id="typingText"></h1>
    <p>I made something small for you... but I mean every word.</p>
    <button onclick="page2()">Continue ✨</button>
  `,
    `Hey ${name} ❤️`
  );
}

function page2() {
  show(
    `
    ${heartGif()}
    <h1 id="typingText"></h1>
    <p>You were just someone I liked playing games with.</p>
    <button onclick="page3()">Next 💫</button>
  `,
    "It started simple..."
  );
}

function page3() {
  show(
    `
    ${heartGif()}
    <h1 id="typingText"></h1>
    <p>You became someone I wait for, smile for, and care about more than I expected.</p>
    <button onclick="page4()">Next 💌</button>
  `,
    "But then..."
  );
}

function page4() {
  show(
    `
    ${heartGif()}
    <h1 id="typingText"></h1>
    <p>No games. No overthinking. Just me being honest with you.</p>
    <button onclick="page5()">One last thing 💖</button>
  `,
    "So here I am..."
  );
}

function page5() {
  show(
    `
    <div class="ring"></div>
    <h1 id="typingText"></h1>
    <p>I already feel like you’re mine... I just want to hear you say it.</p>
    <button onclick="yes()">YES ❤️</button>
    <button class="ghost" onmouseover="moveNo(this)" onclick="moveNo(this)">NO 😭</button>
  `,
    `${name}, Will You Be My Girlfriend? 💖`
  );
}

function moveNo(btn) {
  btn.style.position = "fixed";
  btn.style.left = Math.random() * 72 + 8 + "vw";
  btn.style.top = Math.random() * 72 + 8 + "vh";
  btn.style.zIndex = "999";
}

function createHeart(symbol = "❤️", size = null) {
  const heart = document.createElement("div");
  heart.className = "float-heart";
  heart.innerHTML = symbol;
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (size || Math.random() * 24 + 16) + "px";
  heart.style.animationDuration = Math.random() * 4 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8500);
}

setInterval(() => createHeart("❤️"), 420);

function yes() {
  music.currentTime = 0;
  music.volume = 0;
  music.play().catch(() => {});

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.55) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  show(`
    <div style="font-size:92px;margin-bottom:10px;animation:heartbeat 1s infinite;">❤️</div>
    <h1>She said YES!</h1>
    <p>You just made me the happiest person alive 💍</p>
    <button onclick="lastPage()">One last message 💌</button>
  `);

  if (navigator.vibrate) {
    navigator.vibrate([120, 80, 120]);
  }

  setInterval(() => createHeart("💖", Math.random() * 34 + 22), 120);
}

function lastPage() {
  show(`
    <div style="font-size:80px;margin-bottom:15px;">🌙</div>
    <h1>❤️ ${name} ❤️</h1>
    <p>This is not just a cute website.</p>
    <p style="opacity:0.8;">And from today, this little moment is ours.</p>
  `);
}

page1();