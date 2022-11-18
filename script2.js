// //Declare deck
let cardDeck = new Array();
// ['A', 'Spade'],
// ['2', 'Spade'],
// ['3', 'Spade'],
// ['4', 'Spade'],
// ['5', 'Spade'],
// ['6', 'Spade'],
// ['7', 'Spade'],
// ['8', 'Spade'],
// ['9', 'Spade'],
// ['10', 'Spade'],
// ['J', 'Spade'],
// ['Q', 'Spade'],
// ['K', 'Spade'],
// ['A','Club' ],
// ['2','Club' ],
// ['3','Club' ],
// ['4','Club' ],
// ['5','Club' ],
// ['6','Club' ],
// ['7','Club' ],
// ['8','Club' ],
// ['9','Club' ],
// ['10','Club'],
// ['J','Club' ],
// ['Q','Club' ],
// ['K','Club' ],
// ['A','Diamond'],
//     ['2','Diamond'],
//     ['3','Diamond'],
//     ['4','Diamond'],
//     ['5','Diamond'],
//     ['6','Diamond'],
//     ['7','Diamond'],
//     ['8','Diamond'],
//     ['9','Diamond'],
//     ['10','Diamond'],
//     ['J','Diamond'],
//     ['Q','Diamond'],
//     ['K','Diamond'],
//  ['A','Heart'],
// ['2','Heart'],
//     ['3','Heart'],
//     ['4','Heart'],
//     ['5','Heart'],
//     ['6','Heart'],
//     ['7','Heart'],
//     ['8','Heart'],
//     ['9','Heart'],
//     ['10','Heart'],
//     ['J','Heart'],
//     ['Q','Heart'],
//     ['K','Heart'],    
// ];

const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
//declare players
let playerName = "Player 1"
let dealerName = "Dealer"
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
const players = [playerName, dealerName];
const hands = [playerHand, dealerHand];
const scores = [playerScore, dealerScore];



function buildDeck() {
    cardDeck = new Array();
    for (let i = 0; i < values.length; i++){
        console.log(values.length);
        for (let j = 0; j < suits.length; j++){
            let power = parseInt(values[i]);
            if (values[i] === 'J' || values[i] === 'Q' || values[i] === 'K'){
                power = 10;}
                else if (values[i] === 'A'){
                    power = 11;
                }
                let card = {Value: values[i], Suit: suits[j], Power: power}
                cardDeck.push(card);
        }
    }
}

function shuffleDeck(deck) {
//Gathered from stack overflow 
    let currentIndex = deck.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
    return deck;
  }

function makePlayerGraphic(){
    document.querySelector('.player-stack').innerHTML = '';
        let playerDiv = document.createElement('div');
        let handDiv = document.createElement('div');
        let pointsDiv = document.createElement('div');

        playerDiv.className = 'player';
        playerDiv.id = "Player-id";
        handDiv.className = 'hand';
        handDiv.id = "player-hand";
        pointsDiv.className = 'points';
        pointsDiv.id = "player-points";
        playerDiv.appendChild(handDiv);
        playerDiv.appendChild(pointsDiv);
        document.querySelector('.player-stack').appendChild(playerDiv);
    }
    
    function makeDealerGraphic(){
        document.querySelector('.dealer-stack').innerHTML = '';
            let dealerDiv = document.createElement('div');
            let handDiv = document.createElement('div');
            let pointsDiv = document.createElement('div');
    
            dealerDiv.className = 'player';
            dealerDiv.id = "dealer-id";
            handDiv.className = 'hand';
            handDiv.id = "dealer-hand";
            pointsDiv.className = 'points';
            pointsDiv.id = "dealer-points";
            dealerDiv.appendChild(handDiv);
            dealerDiv.appendChild(pointsDiv);
            document.querySelector('.dealer-stack').appendChild(dealerDiv);
        }


function deal(){
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            let tempCard = cardDeck.pop();
            console.log(`CARD DRAWN:${tempCard}`);
            hands[j].push(tempCard)
         console.log(`PLAYER 1 : ${hands[0]}`);
            console.log(`DEALER : ${hands[1]}`);
        }
    }
}

function makeCards(){    
    let cardSpot = document.querySelector('#player-hand');
    let front = document.createElement('div');
    let back = document.createElement('div');
    let emoji = '';

        for(j = 0; j < cardDeck.length; j++){
            cardSpot.appendChild(temp);
            }

console.log(`TESTING HERE ${hands[1][0][0]}`);
        for(i =0; i < hands[1].length; i++)
        tempNumber = hands[[1][i][0]];
           // console.log(`LOOP ---- ${i}----`);
            
                if(hands[1][i][1] === 'Diamond'){
                    emoji = '♦️';
                    front.style.color = 'red';
                }else if (hands[1][i][1] === 'Spade'){
                    emoji = '♠️';
                    front.style.color = 'black';
                }else if (hands[1][i][1] === 'Heart'){
                    emoji = '♥️';
                    front.style.color = 'red';
                }else if (hands[1][i][1] === 'Club'){
                    emoji = '♣️';
                    front.style.color = 'black'
                }
              
                console.log(tempNumber);
                    front.innerText = (`${hands[1][i][0]}${emoji}`);
                    front.className = 'front';
                    back.className = 'back';
                    //console.log(card.innerText);
                    //console.log(card);  
                    cardSpot.appendChild(front);
                    cardSpot.appendChild(back);
    return cardSpot    
}






// // // function buildCard(card, player) {
// // //     let i = document.querySelector()
// // // }


// // function hit() {
// //     let tempCard = cardDeck.pop();
// //     players[currentP].hand.push(Card);
// //     updateScore();
// //     checkAlive();
// // }

// // function checkAlive()
// // {
// //     if (player[currentP].points > 21){
// //         console.log("YOU BUST");
// //     }
// // }

// // function stay(){
// //     if(currentPlayer != players.length-1){
// //         currentPlayer += 1;
// //     }else {
// //         turnOver();
// //     }
// // }

// // function turnOver() {
// //     let win = -1;
// //     let score = 0;

// //     for(let i = 0; i < players.length; i++){
// //         if(players[i].points > score && players[i].points < 22){
// //             winner = i;
// //         }
// //         score = players[i].points;
// //     }
// // }



function runGame() {
buildDeck();
shuffleDeck(cardDeck);
//currentPlayer = 0;
makePlayerGraphic();
makeDealerGraphic();
deal();
//makeCards(hands[0]);
//makeCards(hands[1]);
  
}

runGame();

