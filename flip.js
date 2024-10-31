function deal() {
  if (newgame == true) {
    var random = Math.floor((Math.random() * 13));
    var UserCards = document.getElementById('user');
    var card = document.createElement('img');
    card.setAttribute("width", 450);
    card.setAttribute("src", images[random]);
    card.classList.add('card'); // Add the 'card' class
    
    // Start with the card flipped (showing the back)
    card.style.transform = 'rotateY(180deg)';
    
    UserCards.appendChild(card);
    
    // Trigger reflow to ensure the initial state is applied
    void card.offsetWidth;
    
    // Add the 'flipped' class to start the animation
    card.classList.add('flipped');
    
    checkUserScore += cards[random];
    if (checkUserScore > 21) {
      alert("you hit more than 21");
    }
  }
}
