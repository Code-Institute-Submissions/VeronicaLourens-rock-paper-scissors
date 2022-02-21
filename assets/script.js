/**
 * Wait for the DOM to finish loading the page,
 * manipulate the DOM to set variables in global enviroment.
 */

// Header elements variables
const gameRulesBtn = document.getElementById('game-rules-btn');
const closeBtn = document.querySelector('.close-btn');
const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

// Audio sound varibles
const audios = document.querySelectorAll('audio');
const clickSound = document.getElementById('click-sound');
const playerSound = document.getElementById('player-sound');
const pcSound = document.getElementById('pc-sound');
const drawSound = document.getElementById('draw-sound');

// Game section variables
const popupBox = document.getElementById('popup-box');
const rock = document.getElementById('rock').innerHTML;
const paper = document.getElementById('paper').innerHTML;
const scissors = document.getElementById('scissors').innerHTML;
const message = document.getElementById('message');
let playerScore = document.getElementById('player-score').innerText;
let computerScore = document.getElementById('computer-score').innerText;
let gameIsAlive = false;


/**
 * Add event listener to the buttons.
 * Start to play game on clicking each of the game choice buttons.
 */

document.addEventListener('DOMContentLoaded', function() {

    let playerChoice = document.getElementsByClassName('choice');

    for (let choice of playerChoice) {
        choice.addEventListener('click', function () {

            let playerInput = this.getAttribute('value');

            console.log(playerInput);

            renderGame(playerInput);

        });
    }


    /**
     * Add event listener to the header elemets.
     * The function is to change background color on moving mouse in and out,
     * open a popup box on clicking the game rules button,
     * close the popup box on clicking the close button.
     * The buttons have audio sound associated.
     */

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


    /**
     * Add event listener to the sound toggle icon,
     * The function is to toggle the audio sound on and off,
     * and to toggle the sound control icon.
     */

    soundOff.addEventListener('click', (e) => {

        for (let audio of audios) {

            if (soundOn.classList.contains('on')) {
                soundOn.classList.add('active');
                soundOff.classList.remove('active');
            }
            audio.muted = false;
        }

    });

    soundOn.addEventListener('click', (e) => {

        for (let audio of audios) {

            if (soundOff.classList.contains('off')) {
                soundOff.classList.add('active');
                soundOn.classList.remove('active');
            }

            audio.muted = true;
        }

    });


    /**
     * The renderGame function is the primary game function,
     * generate computer's random choice on clicking any of the three hand buttons,
     * display computer's choice on the page to tell what computer choice is,
     * compares the choices between player and the computer.
     */

    function renderGame(playerInput) {

        // get computer's random choice
        let computerChoice = [rock, paper, scissors];
        let computerInput = computerChoice[Math.floor(Math.random() * 3)];

        // create an element to display the computer choice
        let html = `<button>${computerInput}</button>`;
        document.getElementById('computer-choice').innerHTML = html;

        // set the display container visible when the game started.
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

        message.innerHTML = `<h4 id="message">Draw!</h4>`;
        message.style.color = '#F27329';

        movesCount();
        drawSound.play();
    }

    /**
     * The playerWon function is to increment player's score 1 point each time,
     * and display the message when the player wins.
     */

    function playerWon() {

        document.getElementById('player-score').innerText = ++playerScore;

        message.innerHTML = `<h4 id="message">You scored!</h4>`;
        message.style.color = 'red';

        playerSound.play();

    }

    /**
     * The computerWon function is to increment PC's score 1 point each time,
     * and display the message when PC wins.
     */

    function computerWon() {

        document.getElementById('computer-score').innerText = ++computerScore;

        message.innerHTML = `<h4 id="message">PC scored!</h4>`;
        message.style.color = 'blue';

        pcSound.play();

    }

    /**
     * The movesCount function is to increment the game rounds count,
     * the count increases by 1 each time player clicks one of the three hand buttons,
     */

    function movesCount() {

        let movesCount = document.getElementById('moves-count').innerText;
        document.getElementById('moves-count').innerText = ++movesCount;

        // Perform a check to see if 10 moves are made
        if (movesCount === 10) {
            checkWinner(movesCount);

        }
    }

    /**
     * The checkWinner function is to tell who is the final winner,
     * and display the message to state the result.
     */

    function checkWinner(movesCount) {

        //let gameIsAlive = false;

        if (movesCount === 10 && gameIsAlive === false) {

            if (playerScore === computerScore) {

                message.innerHTML = `<h4 id="message">Game over. It's a Tie!</h4>`;
                message.style.color = 'red';

            } else if (playerScore > computerScore) {

                message.innerHTML = `<h4 id="message">Congrats! You won!</h4>`;
                message.style.color = 'red';

            } else {

                message.innerHTML = `<h4 id="message">Oopsie-daisy...you lost! Try again.</h4>`;
                message.style.color = 'red';
            }
        }
    }

    /**
     * The restartGame function is to reset and restart the game on clicking the restart button,
     * to set all the game data to the initical state.
     */

    document.getElementById('restart-btn').addEventListener('click', (e) => {

        document.getElementById('player-score').innerText = 0;
        document.getElementById('computer-score').innerText = 0;
        document.getElementById('moves-count').innerText = 0;
        document.getElementById('message').innerText = '';
        document.getElementById('draw-count').textContent = 0;

        playerScore = 0;
        computerScore = 0;
        message = '';
        drawCount = 0;

        clickSound.play();

    });


});







