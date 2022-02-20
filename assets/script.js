/**
 * Wait for the DOM to finish loading the page,
 * manipulate the DOM to get variables.
 */

const gameRulesBtn = document.getElementById('game-rules-btn');
const closeBtn = document.querySelector('.close-btn');
const popupBox = document.getElementById('popup-box');

/**
 * Add event listener to the game rules button that fires the funtions,
 * the background color of the button changes when moving mouse in and out,
 * opening a popup box when clicking the game rules button,
 * closing the popup box when clicking the close button.
 * 
 */

document.addEventListener('DOMContentLoaded', (e) => {

    gameRulesBtn.addEventListener('click', (e) => {
        popupBox.style.display = 'block';
    
        clickSound.play();

    });

    gameRulesBtn.addEventListener('mouseover', (e) => {
        gameRulesBtn.style.background = '#F27329';

    });

    gameRulesBtn.addEventListener('mouseout', (e) => {
         gameRulesBtn.style.background = '#128607';

    });

    closeBtn.addEventListener('click', (e) => {
        popupBox.style.display = 'none';
        
        clickSound.play();

    });

});


/**
 * Add event listener to the sound control icon,
 * get the sound toggle icons and audio sound valiables,
 * toggle the audio sound on and off when firing the click function.
 */

const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

let soundIsOn = true;
const clickSound = document.getElementById('click-sound');
const playerSound = document.getElementById('player-sound');
const pcSound = document.getElementById('pc-sound');
const drawSound = document.getElementById('draw-sound');


soundOff.addEventListener('click', (e) => {
    if(soundOn.classList.contains('on')) {
        soundOn.classList.add('active');
        soundOff.classList.remove('active');
    }
    
    

    // playSound();
    
});

soundOn.addEventListener('click', (e) => {

    if(soundOff.classList.contains('off')) {

        soundOff.classList.add('active');
        soundOn.classList.remove('active');
    }

    // pauseSound();

});

// function playSound() {
//     if(soundIsOn) {
//         clickSound.play();


//     }
// }

// function pauseSound() {
//     if(soundIsOn == false) {
//         clickSound.pause();
//     }
// }





/**
 * Get the valiables of game choices array, message, move count and restart btn.
 * add event listener to the game choice buttons.
 * generate a PC/computer random choice when clicking each of buttons.
 * display PC/computer choice, move counts, message and scores.
 */

const rock = document.getElementById('rock').innerHTML;
const paper = document.getElementById('paper').innerHTML;
const scissors = document.getElementById('scissors').innerHTML;
const message = document.getElementById('message');


document.addEventListener('DOMContentLoaded', function() {

    let playerChoice = document.getElementsByClassName('choice');

    for (let choice of playerChoice) {
        choice.addEventListener('click', function () {

            // alert('You clicked');

            let playerInput = this.getAttribute('value');

            console.log(playerInput);

            renderGame(playerInput);

        })
    }

})

/**
 * The renderGame function is the primary game,
 * generate PC's random choice when user clicks any of the three hand buttons,
 * display PC's choice on the page to tell what computer choice is,
 * compares the choices between player and the computer to check either who scores 1 point.
 * 
 */

function renderGame(playerInput) {

    // to get computer's random choice
    let computerChoice = [rock, paper, scissors];
    let computerInput = computerChoice[Math.floor(Math.random() * 3)];

    console.log(computerInput);

    // create an element to display the computer choice
    let html = `<button>${computerInput}</button>`;
    document.getElementById('computer-choice').innerHTML = html;

    // to set the display container visible when the game started.
    document.querySelector('.display-container').style.visibility = 'visible';


    // choice of rock
    if (playerInput === 'rock') {

        if (computerInput === rock) {
            draw();
            return

        } else if (computerInput === paper) {
            computerWon();
          
        } else {
            playerWon();
            
        }

    }

    // choice of paper
    if (playerInput === 'paper') {
        
        if (computerInput === paper) {
            draw();
            return

        } else if (computerInput === scissors) {
            computerWon();

        } else {
            playerWon(); 
        }

    }

    // choice of scissors
    if (playerInput === 'scissors') {

        if (computerInput === scissors) {
            draw();
            return

        } else if (computerInput === rock) {
            computerWon();
          
        } else {
            playerWon();
        }
    }

    movesCount();

}


/**
 * The draw function is to increment the draw count by 1 each time,
 * display the message when the result is a "Draw".
 */

function draw() {

    let drawCount = document.getElementById('draw-count').innerText;
    document.getElementById('draw-count').innerText = ++drawCount

    message.innerHTML = `<h4 id="message">It's a Draw!</h4>`;
    message.style.color = '#F27329';

    movesCount();
    drawSound.play();
}

/**
 * The playerWon function is to increment player's score 1 point each time,
 * and display the message when the player wins.
 */

let playerScore = document.getElementById('player-score').innerText;
let computerScore = document.getElementById('computer-score').innerText;
let gameIsAlive = false;

function playerWon() {

    //let playerScore = document.getElementById('player-score').innerText;
    document.getElementById('player-score').innerText = ++playerScore;

    message.innerHTML = `<h4 id="message">You won and scored!</h4>`;
    message.style.color = 'red';

    playerSound.play();
    
}

/**
 * The computerWon function is to increment PC's score 1 point each time,
 * and display the message when PC wins.
 */

function computerWon() {

   // let computerScore = document.getElementById('computer-score').innerText;
    document.getElementById('computer-score').innerText = ++computerScore;

    message.innerHTML = `<h4 id="message">PC won and scored!</h4>`;
    message.style.color = 'blue';

    pcSound.play();

}

/**
 * The movesCount function is to increment the game rounds count,
 * the count increases by 1 each time player clicks one of the three hand buttons,
 * it's the sum of the total number the player selects the buttons.
 */

function movesCount() {

    let movesCount = document.getElementById('moves-count').innerText;
    document.getElementById('moves-count').innerText = ++movesCount;
    // Perform a check to see if 10 moves are made
    if (movesCount === 10) {
        checkWinner(movesCount)
    }

}

/**
 * The checkWinner function is to tell who is the final winner of the game,
 * and display the cheerful celebration message to the winner.
 */

function checkWinner(movesCount) {
    
    if (movesCount === 10 && gameIsAlive === false) {

        if (playerScore === computerScore) {

            message.innerHTML = `<h4 id="message">It's a Draw!</h4>`;
            message.style.color = 'red';
            
        } else if (playerScore > computerScore) {

            message.innerHTML = `<h4 id="message">Congrats! You won!!</h4>`;
            message.style.color = 'red';

        } else {

            message.innerHTML = `<h4 id="message">Oooeps...you lost and please try again.</h4>`;
            message.style.color = 'red';
        }
    }

}

/**
 * The restartGame function is to reset and restart the game on clicking the restart button,
 * to set all the game data to initical state.
 */

/*document.getElementById('restart-btn').addEventListener('click', (e) => {

    document.getElementById('player-score').innerText = 0;
    document.getElementById('computer-score').innerText = 0;
    document.getElementById ('moves-count').innerText = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('draw-count').textContent = 0;

    clickSound.play();

})*/






