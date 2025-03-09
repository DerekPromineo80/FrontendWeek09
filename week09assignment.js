/* JavaScript Final Project */
/* Week 9 */
/* By Derek McGuire */


class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
};


class Deck {
    constructor() {
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
        this.shuffle();
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    deal() {
        return this.cards.pop();
    }
};


class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    draw(deck) {
        this.hand.push(deck.deal());
    }
    playCard() {
        return this.hand.shift();
    }

    addScore() {
        this.score += 1;
        return this.score;
    }

};


class Game {
    constructor(player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        this.deck = new Deck();
        this.player1.hand = this.deck.cards.splice(0, 26)
        this.player2.hand = this.deck.cards.splice(0, 26)
        this.player1.score = 0;
        this.player2.score = 0;
        this.roundCount = 1;
    }
   
    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

        console.log(`ROUND ${this.roundCount}`)
        console.log(`${this.player1.name} plays ${card1.rank} of ${card1.suit}.`);
        console.log(`${this.player2.name} plays ${card2.rank} of ${card2.suit}.`);
        this.roundCount++;

        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (ranks.indexOf(card1.rank) > ranks.indexOf(card2.rank)) {
            this.player1.score++;
            this.player1.hand.push(card1, card2);
            console.log(`${this.player1.name} wins the round.\n`);
            console.log(`Current Score For Player 1: ${this.player1.score}`);
            console.log(`Current Score For Player 2: ${this.player2.score}`);
            console.log(' ');
        } else if (ranks.indexOf(card1.rank) < ranks.indexOf(card2.rank)) {
            this.player2.score++;
            this.player2.hand.push(card2, card1);
            console.log(`${this.player2.name} wins the round.\n`);
            console.log(`Current Score For Player 1: ${this.player1.score}`);
            console.log(`Current Score For Player 2: ${this.player2.score}`);
            console.log(' ');
        } else {
            console.log(' - - - - - - - - - Tie Round (No Point)');
            console.log(' ');
        };
    };

    playGame() {
        for(let i = 1; i <= 26; i++){
            this.playRound()
        };
        console.log("+ + + + + + + + + + + + + + + + + + +");
        console.log('END OF GAME!')
        if (this.player1.score > this.player2.score) {
            console.log(`${this.player1.name} WINS THE GAME!`);
            console.log(`FINAL SCORE FOR PLAYER 1: ${this.player1.score}`);
            console.log(`FINAL SCORE FOR PLAYER 2: ${this.player2.score}`);
            } else if ((this.player1.score < this.player2.score)) {
            console.log(`${this.player2.name} WINS THE GAME!`);
            console.log(`FINAL SCORE FOR PLAYER 1: ${this.player1.score}`);
            console.log(`FINAL SCORE FOR PLAYER 2: ${this.player2.score}`);
            } else {
            console.log("TIE GAME!");
            console.log(`FINAL SCORE FOR PLAYER 1: ${this.player1.score}`);
            console.log(`FINAL SCORE FOR PLAYER 2: ${this.player2.score}`);
        };
        
    };
};

// This runs before the game onto the console:
console.log("+ + + + + + + + + +");
console.log("+  Game of War  +");
console.log("+ + + + + + + + + +");
console.log(" ");
console.log(" ");

// This runs the game:
// New Game Object, and then below that the function to play the game
const game = new Game('Player 1', 'Player 2');
game.playGame();

// Decorative Console Close Out
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" = = = = = = = = = THANK YOU FOR PLAYING = = = = = = = = = ");
console.log(" ");
console.log(" ");
console.log(" ");