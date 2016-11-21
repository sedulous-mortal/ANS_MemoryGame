var board = document.getElementById('gameBoard');
var i;
var createCards = function (num) {
    for (i = 0; i < 4; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        board.appendChild(card);
    }
}
createCards();
