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

  function scoreIncrement() {
    score = score + 1;
    scoreEl.innerText = score;
    console.log("score", score);

    emoji.remove();
    clearInterval(interval);
  }

  emoji.addEventListener("click", scoreIncrement);

  card.appendChild(emoji);

  function bottomValueConditionChecker() {
    if (bottomValue > 480) {
      clearInterval(interval);
      emoji.remove();
    }
    bottomValue = bottomValue + 5;
    emoji.style.bottom = bottomValue + "px";
  }

  let interval = setInterval(bottomValueConditionChecker, 70);
}

function startGame() {
  stop = setInterval(uptodown, 3000);
}
function stopGame() {
  clearInterval(stop);
}
