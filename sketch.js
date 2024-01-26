const prev_btn = document.querySelector('.prev');
const nxt_btn = document.querySelector('.nxt');
let cards = document.querySelector('.cards');
let currentCard = 5;

prev_btn.addEventListener('click', () => {
  currentCard = currentCard - 1 < 0 ? 4 : --currentCard;
  cards.style.setProperty('--shift', `${currentCard * -82}vw`);
});

nxt_btn.addEventListener('click', () => {
  currentCard = ++currentCard % 5;
  cards.style.setProperty('--shift', `${currentCard * -82}vw`);
});

setInterval(() => nxt_btn.click(), 5000);
