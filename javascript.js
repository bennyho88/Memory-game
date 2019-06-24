const cards = document.querySelectorAll(".memory-card");

cards.forEach(card => card.addEventListener("click", flipCard));

function flipCard() {
  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    // first click

    hasFlippedCard = true;
    firstCard = this;

    console.log(hasFlippedCard, firstCard);
  }
}