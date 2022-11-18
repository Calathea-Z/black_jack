//Declare deck
let cardDeck = [];
let suits = [];
suits['spades'] = [
    ['A', 'Spade', 11],
    ['2', 'Spade', 2],
    ['3', 'Spade', 3],
    ['4', 'Spade', 4],
    ['5', 'Spade', 5],
    ['6', 'Spade', 6],
    ['7', 'Spade', 7],
    ['8', 'Spade', 8],
    ['9', 'Spade', 9],
    ['10', 'Spade', 10],
    ['J', 'Spade', 10],
    ['Q', 'Spade', 10],
    ['K', 'Spade', 10],
]
suits['clubs'] = [
    ['A','Club', 11],
    ['2','Club', 2],
    ['3','Club', 3],
    ['4','Club', 4],
    ['5','Club', 5],
    ['6','Club', 6],
    ['7','Club', 7],
    ['8','Club', 8],
    ['9','Club', 9],
    ['10','Club', 10],
    ['J','Club', 10],
    ['Q','Club', 10],
    ['K','Club', 10],
]
suits['diamonds'] = [
    ['A','Diamond', 11],
    ['2','Diamond', 2],
    ['3','Diamond', 3],
    ['4','Diamond', 4],
    ['5','Diamond', 5],
    ['6','Diamond', 6],
    ['7','Diamond', 7],
    ['8','Diamond', 8],
    ['9','Diamond', 9],
    ['10','Diamond', 10],
    ['J','Diamond', 10],
    ['Q','Diamond', 10],
    ['K','Diamond', 10],
]
suits['hearts'] = [
    ['A','Heart', 11],
    ['2','Heart', 2],
    ['3','Heart', 3],
    ['4','Heart', 4],
    ['5','Heart', 5],
    ['6','Heart', 6],
    ['7','Heart', 7],
    ['8','Heart', 8],
    ['9','Heart', 9],
    ['10','Heart', 10],
    ['J','Heart', 10],
    ['Q','Heart', 10],
    ['K','Heart', 10],    
];

//declare players
let players = [];
let currentP = 0;


runGame();


function randomizeSuit(array){
    while(array.length){
        const random = Math.floor(Math.random() * array.length);
        const randomTwo = Math.floor(Math.random() * 53);
        let randomArrayElement = array.splice(random, 1)[0];
        cardDeck.splice(randomTwo,0,randomArrayElement);
     }
return cardDeck
};

function shuffleDeck(){
    randomizeSuit(suits.clubs);
    randomizeSuit(suits.diamonds);
    randomizeSuit(suits.hearts);
    randomizeSuit(suits.spades);
};

function makePlayer(playerAmount)
{
    for(i = 1; i <= playerAmount; i++)
    {
        let hand = new Array();
        let player = {name: `Player${i}`, hand: hand, points: 0 };
        players.push(player);
    }
}

function makePlayerGraphic(){
    document.querySelector('.dealing-area').innerHTML = '';

    for(let i = 0; i < players.length; i++){
        let playerDiv = document.createElement('div');
        let playerIdDiv = document.createElement('div');
        let handDiv = document.createElement('div');
        let pointsDiv = document.createElement('div');

        playerDiv.className = 'player';
        playerDiv.id = (`Player ${i}`);
        handDiv.className = 'hand';
        handDiv.id = (`Hand ${i}`);
        pointsDiv.className = 'points';
        pointsDiv.id = (`Points ${i}`);

        playerDiv.appendChild(playerIdDiv);
        playerDiv.appendChild(handDiv);
        playerDiv.appendChild(pointsDiv);
        document.querySelector('.dealing-area').appendChild(playerDiv);
    }
}


function deal(){
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < players.length; j++){
            let tempCard = cardDeck.pop();
            console.log(`CARD DRAWN - ${tempCard}`);
            players[j].hand.push(tempCard);
            makeCardOne(tempCard, j);
            console.log(`PLAYER${j} ---${players[j].hand}`);
            //console.log(players[j].hand);
        }
    }
}

function makeCardOne(tempCard,player) {
    let myHand = document.querySelector('#hand' + player)
        myHand.appendChild(makeCardTwo)
}

function makeCardTwo(tempCard){
    let temp = document.querySelector('.handDiv');
    let front = document.createElement('div');
    let back = document.createElement('div');
           // console.log(`LOOP ---- ${i}----`);
            let emoji = '';
                if(deck[i][1] === 'Diamond'){
                    emoji = '♦️';
                    front.style.color = 'red';
                }else if (deck[i][1] === 'Spade'){
                    emoji = '♠️';
                    front.style.color = 'black';
                }else if (deck[i][1] === 'Heart'){
                    emoji = '♥️';
                    front.style.color = 'red';
                }else if (deck[i][1] === 'Club'){
                    emoji = '♣️';
                    front.style.color = 'black'
                }
                    front.innerText = (deck[i][0] + ' ' + emoji);
                    front.className = 'front';
                    back.className = 'back';
                    //console.log(card.innerText);
                    //console.log(card);  
                    temp.appendChild(front);
                    temp.appendChild(back);
    return temp     
}


// function buildCard(card, player) {
//     let i = document.querySelector()
// }


function hit() {
    let tempCard = cardDeck.pop();
    players[currentP].hand.push(Card);
    updateScore();
    checkAlive();
}

function checkAlive()
{
    if (player[currentP].points > 21){
        console.log("YOU BUST");
    }
}

function stay(){
    if(currentPlayer != players.length-1){
        currentPlayer += 1;
    }else {
        turnOver();
    }
}

function turnOver() {
    let win = -1;
    let score = 0;

    for(let i = 0; i < players.length; i++){
        if(players[i].points > score && players[i].points < 22){
            winner = i;
        }
        score = players[i].points;
    }
}



function runGame() {
    currentPlayer = 0;
    shuffleDeck();
    console.log(`OG DECK - ${cardDeck}----`);
    makePlayer(2);
    makePlayerGraphic();
    deal();
}

console.log(cardDeck);



