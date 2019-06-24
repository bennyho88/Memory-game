const cards = document.querySelectorAll(".memory-card");

cards.forEach(card => card.addEventListener("click", flipCard));

function flipCard() {
  console.log("I was clicked!");
  console.log(this);
}
