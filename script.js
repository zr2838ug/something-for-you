const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

// Make the "No" button run away
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// "Yes" button click
yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  document.querySelector(".buttons").style.display = "none";

  document.body.classList.add("heartbeat");
  message.classList.remove("hidden");
  message.innerHTML = "";

  const lines = [
    "Esmeralda… 💖",
    "I’ve been wanting to ask you something for a while.",
    "You make my days brighter just by being you 😊"
  ];

  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        message.innerHTML += lines[lineIndex][charIndex];
        charIndex++;
        setTimeout(typeLine, 50);
      } else {
        message.innerHTML += "<br><br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500);
      }
    } else {
      setTimeout(() => {
        message.innerHTML =
          "One more thing, Esmeralda… 💫<br><br><small>(tap anywhere)</small>";

        document.body.onclick = () => {
          message.innerHTML = `
            💖 Will you be my Valentine? 💖<br><br>
            🌹 Feb 14 🌹
          `;
        };
      }, 1500);
    }
  }

  typeLine();
});
