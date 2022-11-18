//Declare deck
let cardDeck = [
['A', 'Spade'],
['2', 'Spade'],
['3', 'Spade'],
['4', 'Spade'],
['5', 'Spade'],
['6', 'Spade'],
['7', 'Spade'],
['8', 'Spade'],
['9', 'Spade'],
['10', 'Spade'],
['J', 'Spade'],
['Q', 'Spade'],
['K', 'Spade'],
['A','Club' ],
['2','Club' ],
['3','Club' ],
['4','Club' ],
['5','Club' ],
['6','Club' ],
['7','Club' ],
['8','Club' ],
['9','Club' ],
['10','Club'],
['J','Club' ],
['Q','Club' ],
['K','Club' ],
['A','Diamond'],
    ['2','Diamond'],
    ['3','Diamond'],
    ['4','Diamond'],
    ['5','Diamond'],
    ['6','Diamond'],
    ['7','Diamond'],
    ['8','Diamond'],
    ['9','Diamond'],
    ['10','Diamond'],
    ['J','Diamond'],
    ['Q','Diamond'],
    ['K','Diamond'],
 ['A','Heart'],
['2','Heart'],
    ['3','Heart'],
    ['4','Heart'],
    ['5','Heart'],
    ['6','Heart'],
    ['7','Heart'],
    ['8','Heart'],
    ['9','Heart'],
    ['10','Heart'],
    ['J','Heart'],
    ['Q','Heart'],
    ['K','Heart'],    
];


    

// //declare players
// let playerOne = ["Player 1", 0, ""];
// let dealer = ["Player 1", 0, "hand"];
// players = [playerOne, dealer];
// console.log(players[1][2]);


// runGame();

function shuffleDeck(array) {
    //Gathered from stack overflow 
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


function makePlayerGraphic(){
    document.querySelector('.dealing-area').innerHTML = '';
        let playerDiv = document.createElement('div');
        let handDiv = document.createElement('div');
        let pointsDiv = document.createElement('div');

        playerDiv.className = 'player';
        playerDiv.id = ("Player 1");
        handDiv.className = 'hand';
        handDiv.id = ("player-hand");
        pointsDiv.className = 'points';
        pointsDiv.id = ("player-points");
        playerDiv.appendChild(handDiv);
        playerDiv.appendChild(pointsDiv);
        document.querySelector('.dealing-area').appendChild(playerDiv);
    }
    
//     function makeDealerGraphic(){
//         document.querySelector('.dealing-area').innerHTML = '';
//             let dealerDiv = document.createElement('div');
//             let handDiv = document.createElement('div');
//             let pointsDiv = document.createElement('div');
    
//             dealerDiv.className = 'player';
//             dealerDiv.id = ("dealer");
//             handDiv.className = 'hand';
//             handDiv.id = ("dealer-hand");
//             pointsDiv.className = 'points';
//             pointsDiv.id = ("dealer-points");
//             dealerDiv.appendChild(handDiv);
//             dealerDiv.appendChild(pointsDiv);
//             document.querySelector('.dealing-area').appendChild(dealerDiv);
//         }


// function deal(){
//     for (let i = 0; i < 2; i++){
//         for (let j = 0; j < 2; j++){
//             let tempCard = cardDeck.pop();
//             console.log(`CARD DRAWN: ${tempCard}`);
//             // console.log(players[j]);
//             players[j][2].push(tempCard);
//         //    makeCardOne(tempCard,j);
//             console.log(players[j][2]);
//             //console.log(players[j].hand);
//         }
//     }
// }

// function makeCardOne(card){
//     let myHand = document.querySelector('#hand_' + "1")
//         myHand.appendChild(card)
// }

// function makeCardTwo(tempCard){
//     let temp = document.querySelector('.handDiv');
//     let front = document.createElement('div');
//     let back = document.createElement('div');
//            // console.log(`LOOP ---- ${i}----`);
//             let emoji = '';
//                 if(deck[i][1] === 'Diamond'){
//                     emoji = '♦️';
//                     front.style.color = 'red';
//                 }else if (deck[i][1] === 'Spade'){
//                     emoji = '♠️';
//                     front.style.color = 'black';
//                 }else if (deck[i][1] === 'Heart'){
//                     emoji = '♥️';
//                     front.style.color = 'red';
//                 }else if (deck[i][1] === 'Club'){
//                     emoji = '♣️';
//                     front.style.color = 'black'
//                 }
//                     front.innerText = (deck[i][0] + ' ' + emoji);
//                     front.className = 'front';
//                     back.className = 'back';
//                     //console.log(card.innerText);
//                     //console.log(card);  
//                     temp.appendChild(front);
//                     temp.appendChild(back);
//     return temp     
// }





// // function buildCard(card, player) {
// //     let i = document.querySelector()
// // }


// function hit() {
//     let tempCard = cardDeck.pop();
//     players[currentP].hand.push(Card);
//     updateScore();
//     checkAlive();
// }

// function checkAlive()
// {
//     if (player[currentP].points > 21){
//         console.log("YOU BUST");
//     }
// }

// function stay(){
//     if(currentPlayer != players.length-1){
//         currentPlayer += 1;
//     }else {
//         turnOver();
//     }
// }

// function turnOver() {
//     let win = -1;
//     let score = 0;

//     for(let i = 0; i < players.length; i++){
//         if(players[i].points > score && players[i].points < 22){
//             winner = i;
//         }
//         score = players[i].points;
//     }
// }



function runGame() {
    currentPlayer = 0;
     shuffleDeck(cardDeck);
    console.log(`OG DECK: ${cardDeck}----`);
//    deal();
  makePlayerGraphic();
//    makeDealerGraphic();
  
}

runGame();



