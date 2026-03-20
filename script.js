let stop;
let score = 0;
let scoreEl = document.getElementById("score");
function uptodown() {
  let card = document.getElementById("card");

  let emoji = document.createElement("p");
  emoji.innerText = "😀";
  emoji.style.position = "absolute";

  let bottomValue = 0;
  emoji.style.bottom = bottomValue + "px";

  emoji.addEventListener("click", function () {
    score = score + 1;
    scoreEl.innerText = score;
    console.log("score", score);

    emoji.remove();
    clearInterval(interval);
  });

  card.appendChild(emoji);

  let interval = setInterval(function () {
    if (bottomValue > 480) {
      clearInterval(interval);
      emoji.remove();
    }
    bottomValue = bottomValue + 5;
    emoji.style.bottom = bottomValue + "px";
  }, 70);
}

function startGame() {
  stop = setInterval(uptodown, 3000);
}
function freeze() {
  clearInterval(stop);
}
