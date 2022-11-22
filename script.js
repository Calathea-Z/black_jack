//grab buttons.
const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay');
const playAgainButton = document.querySelector('#button-one');
// grab counter for card left in stack.
const cardCount = document.querySelector('.card-pile');
//grab text update area
const textUpdate = document.querySelector('.updates');

//Declare deck
const cardDeck = [
['A', 'Spade', 11],['2', 'Spade', 2],['3', 'Spade', 3],['4', 'Spade', 4],['5', 'Spade', 5],['6', 'Spade', 6],['7', 'Spade', 7],['8', 'Spade', 8],['9', 'Spade', 9],['10', 'Spade', 10],['J', 'Spade', 10],['Q', 'Spade', 10],['K', 'Spade', 10],['A','Club', 11],['2','Club', 2],['3','Club', 3],['4','Club', 4],['5','Club', 5],['6','Club', 6],['7','Club', 7],['8','Club', 8],['9','Club', 9],['10','Club', 10],['J','Club', 10],['Q','Club', 10],['K','Club', 10],['A','Diamond', 11],['2','Diamond', 2],['3','Diamond', 3],['4','Diamond', 4],['5','Diamond', 5],['6','Diamond', 6],['7','Diamond', 7],['8','Diamond', 8],['9','Diamond', 9],['10','Diamond', 10],
['J','Diamond', 10],['Q','Diamond', 10],['K','Diamond', 10],['A','Heart', 11],['2','Heart', 2],['3','Heart', 3],
['4','Heart', 4],['5','Heart', 5],['6','Heart', 6],['7','Heart', 7],['8','Heart', 8],['9','Heart', 9],
['10','Heart', 10],['J','Heart', 10],['Q','Heart', 10],['K','Heart', 10]];
                  
//Global variables
const playerName = "Player"
const dealerName = "The House"
const playerHand = [];
const dealerHand = [];
const players = [playerName, dealerName];
const hands = [playerHand, dealerHand];
let playerScore = 0;
let dealerScore = 0;
let test = 0; 
let scoreP = 0;
let scoreD = 0;
// // counter for new player card graphics after initial deal
// let p = 2;
// // counter for new dealer card graphics after initial deal
// let d = 2;
let dealTo = true;
let playerAlive = true;
let dealerAlive = true;
let dealerTurn = false;


 //shuffles deck   
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
//Makes play area for player
function makePlayerGraphic(){
    let playerDiv = document.createElement('div');
    let pHandDiv = document.createElement('div');
    let pScoreDiv = document.createElement('div');
    
    playerDiv.className = 'cards-in-play';
    playerDiv.id = "Player-id";
    pHandDiv.className = 'card-style';
    pHandDiv.id = "player-hand";
    pScoreDiv.className = 'score';
    pScoreDiv.id = "score_" + 0;
    playerDiv.appendChild(pHandDiv);
    playerDiv.appendChild(pScoreDiv);
    document.querySelector('.player-stack').appendChild(playerDiv);
}      

//Makes play area for dealer
function makeDealerGraphic(){
    let dealerDiv = document.createElement('div');
    let dHandDiv = document.createElement('div');
    let dScoreDiv = document.createElement('div');
        
    dealerDiv.className = 'cards-in-play';
    dealerDiv.id = "dealer-id";
    dHandDiv.className = 'card-style';
    dHandDiv.id = "dealer-hand";
    dScoreDiv.className = 'score';
    dScoreDiv.id = "score_" + 1;
    dealerDiv.appendChild(dHandDiv);
    dealerDiv.appendChild(dScoreDiv);
    document.querySelector('.dealer-stack').appendChild(dealerDiv);
}
 
//Deals 2 cards to each player 
function deal(){  
    for (let i = 0; i < 2; i++){  
        for (let j = 0; j < 2; j++){  
            let tempCard = cardDeck.pop();
            hands[j].push(tempCard)
        } 
    updateScore(); 
    }   
}
//Updates score tally
function updateScore(){
    scoreP = 0;
    scoreD = 0;
    for (let i = 0; i < hands.length; i++){
        temp = hands[i];
        getScore(temp);
        dealTo = !dealTo 
    }
    document.querySelector('#score_0').innerHTML = playerScore;
    document.querySelector('#score_1').innerHTML = dealerScore;
}
//Calculates score of hand
function getScore(cards){;
    for (i = 0; i < cards.length; i++){
            if (dealTo === true ){ 
                scoreP += cards[i][2];
            }else{
                scoreD += cards[i][2];
            }
    }
    playerScore = scoreP;
    dealerScore = scoreD;
};
//Makes card graphics.  
function makeCards(divNeeded,handType,area){ 
    let cardSpot = document.querySelector(divNeeded);
        for(i = 0; i < handType.length; i++){ 
            let fullCard = document.createElement('div');
            fullCard.className = "full-card_" + area;   
            cardSpot.appendChild(fullCard)
         } 
    let cardSpotTwo = document.querySelectorAll('.full-card_' + area);
    let temp = [...cardSpotTwo];

        for(j = 0; j < handType.length; j++){
            let frontCard = document.createElement('div');
            let backCard = document.createElement('div');   
            let emoji = ''; 
            let number = handType[j][0];          
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
// Adds a new card to the hand after a hit.
function addCard(divNeeded, handType, area) {
    let cardSpot = document.querySelector(divNeeded);
    let fullCard = document.createElement('div');
        fullCard.className = "full-card_" + area;   
        cardSpot.appendChild(fullCard)
    let frontCard = document.createElement('div');
    let backCard = document.createElement('div');   
    let emoji = ''; 
    let number = handType[2][0];
    console.log(handType[2][0]);          
         if(handType[2][1] === 'Diamond'){
             emoji = '♦️';
             frontCard.style.color = 'red';
            }else if (handType[2][1] === 'Spade'){
             emoji = '♠️';
             frontCard.style.color = 'black';
            }else if (handType[2][1] === 'Heart'){
             emoji = '♥️';
             frontCard.style.color = 'red';
            }else if (handType[2][1] === 'Club'){
             emoji = '♣️';
             frontCard.style.color = 'black'
            }

            frontCard.innerText = (emoji + "  " + number);
            frontCard.className = 'front';
            backCard.className = 'back';
            fullCard.appendChild(frontCard);
            fullCard.appendChild(backCard);
}
//Player move function
function playerInput(){
    hitButton.addEventListener('click', () => {
        document.querySelector('.narration').innerHTML = "You hit!"
        let tempCard = cardDeck.pop();
        hands[0].push(tempCard) 
        addCard('#player-hand', playerHand, 1);
        updateScore();
        if (playerScore >= 21){
            console.log(`HIT`)
            findWinner();
            return;
        }
        setTimeout(dealerMove, 2000);    
    });
    stayButton.addEventListener('click', () => {
        document.querySelector('.narration').innerHTML = "You stay!"
        updateScore();
        playerStay = true;
        setTimeout(dealerMove, 2000);
    });
    
}
//Allows the dealer to take turn   
function dealerMove() {
    if (dealerScore <= 17){
    document.querySelector('.narration').innerHTML = "The house hits."
    let tempCard = cardDeck.pop();
    hands[1].push(tempCard)
    addCard('#dealer-hand', dealerHand, 2);
    updateScore();
        if(dealerScore >= 21){
            console.log(`DEALER HIT`);
            findWinner();
            return;
        }
    }else{
    document.querySelector('.narration').innerHTML = "The house stays."
    updateScore();
    findWinner();
    return;
    }
}
    
function findWinner(){
     if (playerScore > dealerScore && dealerScore >= 17 && playerScore < 22){
        document.querySelector('.narration').innerHTML = "You have Won!"
        console.log(`find winner working`)
            updateDeckCount();
        }else if (dealerScore > playerScore && playerScore >= 17 && dealerScore < 22){
        document.querySelector('.narration').innerHTML = "The house ALWAYS wins!"
            console.log(`find winner working`)
            updateDeckCount();
        }else if (playerScore > 21 ){ 
        document.querySelector('.narration').innerHTML = "Ouch! Too high.. better luck next time."
        }else if (dealerScore > 21){
        document.querySelector('.narration').innerHTML = "The house busts, YOU WIN!" 
        }else if (playerScore > 17 && playerScore < 21 && dealerScore > 17 && dealerScore < 21){
            document.querySelector('.narration').innerHTML = "Its a draw. Play Again?" 
        }
 }

 function checkBJ() {
    if(playerScore === 21 && dealerScore != 21){           
        document.querySelector('.narration').innerHTML = "BLACKJACK!"
        updateDeckCount();
    }
    else if (dealerScore === 21 && playerScore != 21 ) {
        winner = "Dealer";
        document.querySelector('.narration').innerHTML = "HOUSE BLACKJACK"
        updateDeckCount();
    }
    else if(playerScore === 21 & dealerScore === 21){
        document.querySelector('.narration').innerHTML = "What are the odds? You and the house got blackjack"
        updateDeckCount();
    }    
 }

function updateDeckCount(){
    cardCount.innerHTML = ("CARDS REMAINING: " + cardDeck.length)
}

playAgainButton.addEventListener('click', () => {
    location.reload(true)
});


function startGame(){
shuffleDeck(cardDeck);
makePlayerGraphic();
makeDealerGraphic();
deal();
makeCards('#player-hand', playerHand, 1);
makeCards('#dealer-hand', dealerHand, 2);
checkBJ();
updateDeckCount();
gameLoop();
}

function gameLoop(){
playerInput();
updateDeckCount();
}

startGame();





