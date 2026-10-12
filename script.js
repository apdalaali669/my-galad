
const button = document.getElementById("celebrate");
const message = document.getElementById("message");

const wishes = [
  "Happy Birthday, GALAD! 👑",
  "May your year shine like gold ✨",
  "Wishing you success and happiness 🥂",
  "Today is your VIP day! 🎂"
];

let count = 0;

button.addEventListener("click", () => {
  message.textContent = wishes[count % wishes.length];
  count++;

  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");
    piece.textContent = ["✦", "★", "●", "✧", "♥"][
      Math.floor(Math.random() * 5)
    ];

    piece.style.position = "fixed";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.top = "-25px";
    piece.style.zIndex = "99";
    piece.style.pointerEvents = "none";
    piece.style.color = ["#ffe08a", "#ff65b5",
      "#d8a3ff", "#ffffff"][Math.floor(Math.random() * 4)];
    piece.style.fontSize = 12 + Math.random() * 18 + "px";
    piece.style.textShadow = "0 0 10px gold";

    document.body.appendChild(piece);

    const drift = (Math.random() - 0.5) * 220;
    const duration = 1800 + Math.random() * 2200;

    const animation = piece.animate([
      { transform: "translate(0, 0) rotate(0deg)",
        opacity: 1 },
      { transform: `translate(${drift}px, 105vh) rotate(720deg)`,
        opacity: 0.2 }
    ], {
      duration,
      easing: "ease-in",
      fill: "forwards"
    });

    animation.onfinish = () => piece.remove();
  }
});
