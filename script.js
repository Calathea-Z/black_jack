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
                  
//declare players
const playerName = "Player 1"
const dealerName = "Dealer"
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
    pScoreDiv.className = 'card-style';
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
    dScoreDiv.className = 'card-style';
    dScoreDiv.id = "score_" + 1;
    dealerDiv.appendChild(dHandDiv);
    dealerDiv.appendChild(dScoreDiv);
    document.querySelector('.dealer-stack').appendChild(dealerDiv);
}
        
function deal(){
    
    for (let i = 0; i < 2; i++){ 
        console.log(`OUT LOOP HIT`)  
        for (let j = 0; j < 2; j++){
            console.log(`IN LOOP HIT`)
            console.log(`PLAYER's HAND:: ${hands[0]}`)
            console.log(`DEALER's HAND:: ${hands[1]}`)     
            let tempCard = cardDeck.pop();
            hands[j].push(tempCard)
            console.log(`PLAYER's HAND:: ${hands[0]}`)
            console.log(`DEALER's HAND:: ${hands[1]}`) 
            // console.log (`DRAWN CARD POWER :: ${hands[j][0][2]}`);
            // console.log(`FULL HANDS ARRAY ::  ${hands}`);    
        } 
        console.log(`-------------------UPDATING SCORES`)
        updateScore(); 
    }   
}

function updateScore(){
    scoreP = 0;
    scoreD = 0;
    for (let i = 0; i < hands.length; i++){
        // console.log(`PLAYER HANDS ARRAY LENGTH:::${hands[0].length}`)
        // console.log(`DEALER HANDS ARRAY LENGTH:::${hands[1].length}`)
        temp = hands[i];
        getScore(temp);
        dealTo = !dealTo 
        console.log(`PLAYER SCORE :: ${playerScore}`);
        console.log(`DEALER SCORE :: ${dealerScore}`);     
    }
    document.querySelector('#score_0').innerHTML = playerScore;
    document.querySelector('#score_1').innerHTML = dealerScore;
}
function getScore(cards){;
    for (i = 0; i < cards.length; i++){
            console.log(`LOOP 3 HIT`);
            console.log(`SCORE P ${scoreP}`)
            console.log(`SCORE D ${scoreD}`)
            console.log(`BOOLEAN: ${dealTo}`);   
            console.log(`length: ${cards.length}`)
            if (dealTo === true ){ 
                console.log(cards[i][2])
                console.log(cards[0][2])
                scoreP += cards[i][2];
                console.log(`-----IF----- ${cards}`)
                console.log(`A:: Player Score: ${playerScore}`);
                console.log(`A:: Dealer Score: ${dealerScore}`); 
            }else{
                scoreD += cards[i][2];
                console.log(`-----ELSE-----${cards}`); 
                console.log(`B:: Player Score: ${playerScore}`);
                console.log(`B:: Dealer Score: ${dealerScore}`);
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
        setTimeout(dealerMove(), 50000);       
    });

    stayButton.addEventListener('click', () => {
        console.log(`Stay Button Works`); 
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
    }else{
    dealerStay();
    alert("the Dealer has chosen to stand");
    }
}
    
function checkAlive(){
        if(playerScore > 21 ){
            isAlive = !isAlive;
            alert( `PLAYER 1 BUSTS`)
        }else if(dealerScore > 21) {
            isAlive = !isAlive;
            alert(`DEALER BUSTS`)
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
        if(playerScore > dealerScore && playerScore < 22){
            winner = "Player 1";
            alert(`PLAYER 1 WINS`)
            updateDeckCount();
        }

            winner = "Dealer";
            alert(`THE HOUSE WINS`);
            updateDeckCount();
    }
function checkBlackJack() {
    if (playerScore = 21){
        alert('PLAYER 1 GOT BLACKJACK - LUCKY!!!')
    }else
    ( alert ('DEALER GOT BLACKJACK - UNLUCKY!'))
};
    
// function playerStay(){
//     dealerTurn === true;
//     return
// }
function dealerStay(){
    return
}
function updateDeckCount(){
    cardCount.innerHTML = ("CARDS REMAINING " + cardDeck.length)
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
    if (endCondition() === false){
        findWinner();
    }
    playerInput();
    updateDeckCount();
    }

gameLoop();



