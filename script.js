function uptodown() {
  let card = document.getElementById("card");
  let emoji = document.createElement("p");
  emoji.innerText = "😀";
  emoji.style.position = "absolute";
  emoji.style.bottom = "0px";

  card.appendChild(emoji);
}
