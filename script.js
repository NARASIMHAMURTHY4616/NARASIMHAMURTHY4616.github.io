// ===== Name Toggle Typing Effect =====
const texts = [
  "BALLA NAGA V VENKATA SATYA NARASIMHAMURTHY",
  "FUTURE DIGITAL FORENSIC EXPERT"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const nameEl = document.getElementById("name");
const cursor = document.getElementById("cursor");

function typeToggle() {
  const current = texts[textIndex];

  if (!deleting) {
    nameEl.textContent = current.slice(0, charIndex++);
  } else {
    nameEl.textContent = current.slice(0, charIndex--);
  }

  if (charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeToggle, 1200);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeToggle, deleting ? 40 : 80);
}

typeToggle();

// Cursor Blink
setInterval(() => {
  cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);

// Live Time
function updateTime() {
  document.getElementById("time").textContent =
    "🕒 " + new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Terminal Intro
const terminalLines = [
  "Initializing secure shell...",
  "Access granted ✔",
  "Loading portfolio...",
  "Welcome, Operative"
];

const terminal = document.getElementById("terminal-text");
let line = 0;

function terminalIntro() {
  if (line < terminalLines.length) {
    terminal.innerHTML += terminalLines[line++] + "<br>";
    setTimeout(terminalIntro, 400);
  } else {
    setTimeout(() => {
      document.getElementById("terminal-intro").style.display = "none";
    }, 800);
  }
}

terminalIntro();
