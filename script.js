const name = "Lily";

const nameText = document.getElementById("nameText");
const line1 = document.getElementById("line1");

function typeText(el, text, speed = 60) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

setTimeout(() => {
  typeText(nameText, "Hey " + name + " ❤️");
}, 500);

setTimeout(() => {
  typeText(line1, "I already feel like you’re mine…");
}, 2000);

function next() {
  document.body.innerHTML = `
    <div class="card">
      <h1 class="typing">${name}, Will You Be My Girlfriend? 💖</h1>
      <p>I just want to hear you say it.</p>
      <button class="yes" onclick="yes()">YES ❤️</button>
      <button onmouseover="move(this)">NO 😭</button>
    </div>
  `;
}

function move(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "%";
  btn.style.top = Math.random() * 80 + "%";
}

function yes() {
  document.body.innerHTML = `
    <div class="card">
      <h1>YAY ❤️</h1>
      <p>You just made me the happiest person alive 💍</p>
    </div>
  `;

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 200);
}