let coins = 0;
const coinsDisplay = document.getElementById('coins');
const tapButton = document.getElementById('tapButton');

tapButton.addEventListener('click', () => {
  coins += 1;
  coinsDisplay.textContent = `Coins: ${coins}`;
});
