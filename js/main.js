// represents the cards of the game
var cards = ['sparrow', 'sparrow', 'robin', 'robin'];

// represents the cards in play
var cardsInPlay = [];



// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById('game-board');
// function that will create your board
function createBoard() {
    // loop through your cards array to create card elements for your board
    for (var i = 0; i < cards.length; i++) {
        // create a div element which will be used as a card
        var cardElement = document.createElement('div');
        // add a class to the card element which will help link styling
        cardElement.className = 'card';
        // this will set the card's 'data-card' to be the element of the array
        // data- attributes are meant to store data about an element that is not tied to a style.
        // i.e. "king"
        cardElement.setAttribute('data-card', cards[i]);
        // when a card is clicked the function isTwoCards will be executed
        cardElement.addEventListener('click', isTwoCards);

        // append the card to the board
        board.appendChild(cardElement);
        board.appendChild(cardElement);
    }

}
//checks to see if there are cards in play
function isTwoCards() {
    // Add card to array of cards being viewed
    // The 'this' keyword gives you access to the cardElement you click on
    cardsInPlay.push(this.getAttribute('data-card'));
    // show the card's image
    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'robin') {
        this.innerHTML = "<img src='http://i66.tinypic.com/2i0wty1.jpg'>"; // robin
    } else {
        this.innerHTML = "<img src='https://s-media-cache-ak0.pinimg.com/236x/d6/d1/a5/d6d1a5a56099effca85b03d418ac008f.jpg'>"; //sparrow
    }
    // If you have two cards in play then check for a match
    if (cardsInPlay.length === 2) {
        // Pass the cardsInPlay as an argument to isMatch function
        isMatch(cardsInPlay);
        // Clear the cards in play array for next try
        cardsInPlay = [];
    }
}

function isMatch(cards) {
    // alert winning message
    if (cards[0] === cards[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
        //TODO: SET CARDS IN PLAY EACH BACK TO TEAL BACKGROUND

    }
}

createBoard();
