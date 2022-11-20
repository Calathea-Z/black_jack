//grab buttons.
const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay');
const playAgainButton = document.querySelector('#button-one');
// grab counter for card left in stack.
const cardCount = document.querySelector('.card-pile');

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
let dealTo = true;
let isAlive = true;
let dealerTurn = false;
let winner = '';
    
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
        
function deal(){
    
    for (let i = 0; i < 2; i++){  
        for (let j = 0; j < 2; j++){  
            let tempCard = cardDeck.pop();
            hands[j].push(tempCard)
        } 
    updateScore(); 
    }   
}

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

function addCard(divNeeded, handType, area) {
    let cardSpot = document.querySelector(divNeeded);
    let fullCard = document.createElement('div');
        fullCard.className = "full-card_" + area;   
        cardSpot.appendChild(fullCard)

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
            fullCard.appendChild(frontCard);
            fullCard.appendChild(backCard);
}
function playerInput(){
    hitButton.addEventListener('click', () => {
        console.log(`Hit Button Works`)
        let tempCard = cardDeck.pop();
        hands[0].push(tempCard) 
        updateScore();
        addCard('#player-hand', playerHand, 1);
        checkAlive();
        dealerMove();      
    });
    stayButton.addEventListener('click', () => {
        console.log(`Stay Button Works`);
        playerStay = true;
        dealerMove();
    });
    
}
    
function dealerMove() {
    if (dealerScore <= 17){
    let tempCard = cardDeck.pop();
    hands[1].push(tempCard)
    updateScore();
    addCard('#dealer-hand', dealerHand, 2);
    checkAlive();
    console.log(`IS ALIVE? ${isAlive}`);
    }else{
    dealerStay();
    alert("the Dealer has chosen to stand");
    console.log(`IS ALIVE? ${isAlive}`);
    }
}
    
function checkAlive(){
    if (playerScore > 21 || dealerScore > 21){
      isAlive = !isAlive;
    }
    updateDeckCount();
    return
}

function endCondition() {
    if (isAlive === false) {
        return false}
    else {
        return true;
    };
};

function findWinner(){
        if(playerScore === 21 && dealerScore != 21){ 
            winner = "Player 1";           
            alert('PLAYER 1 GOT BLACKJACK - LUCKY!!!')
            updateDeckCount();
        }
        else if (dealerScore === 21 && playerScore != 21 ) {
            winner = "Dealer";
            alert('THE HOUSE ALWAYS WINS ;-)')
            updateDeckCount();
        }
        else if(playerScore === 21 & dealerScore === 21){
            alert('You are both lucky, but it cancels out. TIE')
            updateDeckCount();
        }       
        else if (playerScore > dealerScore && playerScore < 22){
            winner = "Player 1";
            alert(`PLAYER 1 WINS`)
            updateDeckCount();
        }else if (dealerScore > playerScore && dealerScore < 22){
            winner = "Dealer";
            updateDeckCount();
        }
        alert(`TIE GAME`); 
    } 

function dealerStay(){
    return
}
function updateDeckCount(){
    cardCount.innerHTML = ("CARDS REMAINING: " + cardDeck.length)
}

function startGame(){
shuffleDeck(cardDeck);
makePlayerGraphic();
makeDealerGraphic();
deal();
makeCards('#player-hand', playerHand, 1);
makeCards('#dealer-hand', dealerHand, 2);
updateDeckCount();
}

function gameLoop(){
    startGame();
    playerInput();
    updateDeckCount();
    if (endCondition() === false){
        findWinner();
    }
    }

gameLoop();



