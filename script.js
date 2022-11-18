//grab buttons
const hitButton = document.querySelector('#hit');
const stayButton = document.querySelector('#stay')



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
        document.querySelector('.player-stack');
            let playerDiv = document.createElement('div');
            let pHandDiv = document.createElement('div');
            let pPointsDiv = document.createElement('div');
    
            playerDiv.className = 'player';
            playerDiv.id = "Player-id";
            pHandDiv.className = 'hand';
            pHandDiv.id = "player-hand";
            pPointsDiv.className = 'points';
            pPointsDiv.id = "player-points";
            playerDiv.appendChild(pHandDiv);
            playerDiv.appendChild(pPointsDiv);
            document.querySelector('.player-stack').appendChild(playerDiv);
        }
        
    function makeDealerGraphic(){
            document.querySelector('.dealer-stack');
                let dealerDiv = document.createElement('div');
                let dHandDiv = document.createElement('div');
                let dPointsDiv = document.createElement('div');
        
                dealerDiv.className = 'player';
                dealerDiv.id = "dealer-id";
                dHandDiv.className = 'hand';
                dHandDiv.id = "dealer-hand";
                dPointsDiv.className = 'points';
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
                    }
                }
            }
    
            function makeCards(){    
                let cardSpot = document.querySelector('#player-stack');
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
    let currentPlayer = 0
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

    function updateScore(){

    }
    
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
       deal();
      makePlayerGraphic();
       makeDealerGraphic();
      
    }
    
    runGame();


