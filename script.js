//grab buttons.
const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay');
const playAgainButton = document.querySelector('#button-one');
// grab counter for card left in stack.
const cardCount = document.querySelector('.card-pile');



//Declare deck
const cardDeck = [
['A', 'Spade'],['2', 'Spade'],['3', 'Spade'],['4', 'Spade'],['5', 'Spade'],['6', 'Spade'],['7', 'Spade'],
['8', 'Spade'],['9', 'Spade'],['10', 'Spade'],['J', 'Spade'],['Q', 'Spade'],['K', 'Spade'],['A','Club' ],
['2','Club' ],['3','Club' ],['4','Club' ],['5','Club' ],['6','Club' ],['7','Club' ],['8','Club' ],['9','Club' ],
['10','Club'],['J','Club' ],['Q','Club' ],['K','Club' ],['A','Diamond'],['2','Diamond'],['3','Diamond'],
['4','Diamond'],['5','Diamond'],['6','Diamond'],['7','Diamond'],['8','Diamond'],['9','Diamond'],
['10','Diamond'],['J','Diamond'],['Q','Diamond'],['K','Diamond'],['A','Heart'],['2','Heart'],['3','Heart'],
['4','Heart'],['5','Heart'],['6','Heart'],['7','Heart'],['8','Heart'],['9','Heart'],['10','Heart'],
['J','Heart'],['Q','Heart'],['K','Heart'],];
                  
//declare players
const playerName = "Player 1"
const dealerName = "Dealer"
const playerHand = [];
const dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
const players = [playerName, dealerName];
const hands = [playerHand, dealerHand];
const scores = [playerScore, dealerScore];

//runGame();
runGame();    
 
    
function shuffleDeck(array) {
//Gathered from stack overflow 
let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;   
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function makePlayerGraphic(){
    let playerDiv = document.createElement('div');
    let pHandDiv = document.createElement('div');
    let pPointsDiv = document.createElement('div');
    
    playerDiv.className = 'cards-in-play';
    playerDiv.id = "Player-id";
    pHandDiv.className = 'card-style';
    pHandDiv.id = "player-hand";
    pPointsDiv.className = 'card-style';
    pPointsDiv.id = "player-points";
    playerDiv.appendChild(pHandDiv);
    playerDiv.appendChild(pPointsDiv);
    document.querySelector('.player-stack').appendChild(playerDiv);
    console.log(playerDiv);
}       
function makeDealerGraphic(){
    let dealerDiv = document.createElement('div');
    let dHandDiv = document.createElement('div');
    let dPointsDiv = document.createElement('div');
        
    dealerDiv.className = 'cards-in-play';
    dealerDiv.id = "dealer-id";
    dHandDiv.className = 'card-style';
    dHandDiv.id = "dealer-hand";
    dPointsDiv.className = 'card-style';
    dPointsDiv.id = "dealer-points";
    dealerDiv.appendChild(dHandDiv);
    dealerDiv.appendChild(dPointsDiv);
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
            updateScore();
        }
    }
}
    
function makeCards(divNeeded,handType,area){ 
    let cardSpot = document.querySelector(divNeeded);  
    console.log(`HAND TYPLE LENGTH: ${handType.length}`);

        for(i = 0; i < handType.length; i++){ 
            let fullCard = document.createElement('div');
            fullCard.className = "full-card_" + area;   
            cardSpot.appendChild(fullCard)
            
        }
        
    let cardSpotTwo = document.querySelectorAll('.full-card_' + area);
    let temp = [...cardSpotTwo];
        console.log(temp);

        for(j = 0; j < handType.length; j++){
            let frontCard = document.createElement('div');
            let backCard = document.createElement('div');   
            let emoji = ''; 
            console.log(`LOOOOOOP`);
            let number = handType[j][0];
            console.log(number);            
                if(handType[j][1] === 'Diamond'){
                    emoji = '♦️';
                    frontCard.style.color = 'red';
                }else if (handType[j][1] === 'Spade'){
                    emoji = '♠️';
                    frontCard.style.color = 'black';
                }else if (handType[j][1] === 'Heart'){
                    emoji = '♥️';
                    frontCard.style.color = 'red';
                }else if (handType[j][1] === 'Club'){
                    emoji = '♣️';
                    frontCard.style.color = 'black'
                }

            frontCard.innerText = (emoji + "  " + number);
            frontCard.className = 'front';
            backCard.className = 'back';
            temp[j].appendChild(frontCard);
            temp[j].appendChild(backCard);
        }

}
    
function hit() {
    let tempCard = cardDeck.pop();
    players[currentP].hand.push(Card);
    updateScore();
    checkAlive();
    currentPlayer+1
}
    
function checkAlive(){
    for (let i = 0;i< scores.length; i++){
        if(scores[i] > 21){
            console.log( "BUST");
        }
    }
}
    
function stay(){
    if(currentPlayer  < 2){
        currentPlayer += 1;
    }else {
        turnOver();
    }
}

function turnOver(){
    let winner = -1;
    let score = 0;

    for(let i = 0; i < players.length; i++){    
        if (scores[i] >  score && scores[i] < 22)
            winner = i;
    }
    score = scores[i];
}
function getScore(player){

}

function updateScore(){
    for (let i = 0; i < players.length; i++){
        getScore(i);
        document.querySelector
    }

}

function updateDeckCount(){
    cardCount.innerHTML = cardDeck.length
}

function runGame(){
currentPlayer = 0;
shuffleDeck(cardDeck);
// console.log(`OG DECK: ${cardDeck}----`);
makePlayerGraphic();
makeDealerGraphic();
deal();
makeCards('#player-hand', playerHand, 1);
makeCards('#dealer-hand', dealerHand, 2);
}



