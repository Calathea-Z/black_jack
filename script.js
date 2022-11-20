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
let playerScore = 0;
let dealerScore = 0;
let dealTo = true;
let test = 0; 
const players = [playerName, dealerName];
const hands = [playerHand, dealerHand];


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
    dScoreDiv.id = "score_" + 0;
    dealerDiv.appendChild(dHandDiv);
    dealerDiv.appendChild(dScoreDiv);
    document.querySelector('.dealer-stack').appendChild(dealerDiv);
}
        
function deal(){
    
    for (let i = 0; i < 2; i++){ 
        console.log(`OUT LOOP HIT`)  
        for (let j = 0; j < 2; j++){
            console.log(`IN LOOP HIT`)
            console.log(`BOOLEAN: ${dealTo}`);  
            console.log(`PLAYER's HAND:: ${hands[0]}`)
            console.log(`DEALER's HAND:: ${hands[1]}`)     
            let tempCard = cardDeck.pop();
            console.log(`CARD DRAWN:${tempCard}`);
            hands[j].push(tempCard)
            console.log(`PLAYER's HAND:: ${hands[0]}`)
            console.log(`DEALER's HAND:: ${hands[1]}`) 
            // console.log (`DRAWN CARD POWER :: ${hands[j][0][2]}`);
            // console.log(`FULL HANDS ARRAY ::  ${hands}`);
            console.log(`PLAYER SCORE :: ${playerScore}`);
            console.log(`DEALER SCORE :: ${dealerScore}`);    
        } 
        console.log(`-------------------UPDATING SCORES`)
        updateScore(); 
    }   
}

function updateScore(){
    for (let i = 0; i < hands.length; i++){
        // console.log(`PLAYER HANDS ARRAY LENGTH:::${hands[0].length}`)
        // console.log(`DEALER HANDS ARRAY LENGTH:::${hands[1].length}`)
        temp = hands[i];
        getScore(temp);    
        //   document.querySelector('#score_' + i).innerHTML = 
    }
}
function getScore(cards){
    let scoreP = 0;
    let scoreD = 0;
     //this loops through the entire hand of the player and adds score before switching player.
        for (i = 0; i < cards.length; i++){  
            console.log(`LOOP 3 HIT`);
            if (dealTo === true ){
                console.log(cards[i][2])
                console.log(cards[0][2])
                scoreP = (scoreP + cards[i][2]);
                console.log(`-----IF----- ${cards}`)
                console.log(`A:: Player Score: ${playerScore}`);
                console.log(`A:: Dealer Score: ${dealerScore}`);
            }else{
                scoreD = (scoreD + cards[i][2])
                console.log(`-----ELSE-----${cards}`); 
                console.log(`B:: Player Score: ${playerScore}`);
                console.log(`B:: Dealer Score: ${dealerScore}`);
            }
        } 
    playerScore += scoreP
    dealerScore += scoreD
    dealTo = !dealTo
    } 
 
        
    




    
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
    
// function hit() {
//     let tempCard = cardDeck.pop();
//     players[currentP].hand.push(Card);
//     updateScore();
//     checkAlive();
//     currentPlayer+1
// }
    
// function checkAlive(){
//     for (let i = 0;i< scores.length; i++){
//         if(scores[i] > 21){
//             console.log( "BUST");
//         }
//     }
// }
    
// function stay(){
//     if(currentPlayer  < 2){
//         currentPlayer += 1;
//     }else {
//         turnOver();
//     }
// }

// function turnOver(){
//     let winner = -1;
//     let score = 0;

//     for(let i = 0; i < players.length; i++){    
//         if (scores[i] >  score && scores[i] < 22)
//             winner = i;
//     }
//     score = scores[i];
// }




function updateDeckCount(){
    cardCount.innerHTML = ("CARDS REMAINING " + cardDeck.length)
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
updateDeckCount();
}



