const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "Vaishnavi 💖<br>Will you be my Valentine?";

  document.querySelector(".buttons").innerHTML =
    "<p style='font-size:14px;color:#555'>Waiting for your answer 😌</p>";

  document.querySelector(".emoji").innerHTML = "🐱💗";
});
