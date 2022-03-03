/* jshint esversion: 6 */ 

/**
 * Wait for the DOM to finish loading the page,
 * manipulate the DOM to get the variables in global enviroment.
 */

// Header elements variables
const gameRulesBtn = document.getElementById('game-rules-btn');
const closeBtn = document.querySelector('.close-btn');
const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

// Audio sound track varibles
const clickSound = new Audio('assets/audio/mouse-click.mp3');
const playerSound = new Audio('assets/audio/player.wav');
const pcSound = new Audio('assets/audio/pc.wav');
const drawSound = new Audio('assets/audio/draw.wav');

// Set the audio sound off by default when the page loaded
let audioIsOn = false;

// Game section variables
const popupBox = document.getElementById('popup-box');
const rock = document.getElementById('rock').innerHTML;
const paper = document.getElementById('paper').innerHTML;
const scissors = document.getElementById('scissors').innerHTML;

let playerScore = document.getElementById('player-score').innerText;
let computerScore = document.getElementById('computer-score').innerText;
let message = document.getElementById('message');

// Hidden elements
 const matchBox = document.querySelector('.match-box');
 const computerChoiceBox = document.querySelector('.computer-choice-box');
 const drawMsg = document.querySelector('.draw-msg');
 const winMsg = document.querySelector('.win-msg');
 const lostMsg = document.querySelector('.lost-msg');
 const restartBtn = document.getElementById('restart-btn');

/**
 * Add event listeners to the buttons when the DOM content is loaded.
 * Initiate all the game functionalities.
 */

document.addEventListener('DOMContentLoaded', function() {

    /**
     * To get computer's random choice on each time user clicks the hand buttons. 
     * Start to play game on clicking each of the game choice buttons.
     */

    let playerChoice = document.querySelectorAll('.choice');

    for (let choice of playerChoice) {
        choice.addEventListener('click', function () {

            let playerInput = this.getAttribute('id');

             // to get computer's random choice
            let computerChoice = [rock, paper, scissors];
            let computerInput = computerChoice[Math.floor(Math.random() * 3)];

             // to display the computer choice
            let html = `<button>${computerInput}</button>`;
            document.getElementById('computer-choice').innerHTML = html;

             // to set the display container visible when the game started.
            document.querySelector('.display-container').style.visibility = 'visible';

            renderGame(playerInput, computerInput);

        });
    }

    /**
     * Add event listener to the game rules and close buttons.
     * The function is to change background color on moving mouse in and out,
     * open a popup box on clicking the game rules button,
     * close the popup box on clicking the close button.
     * The buttons have audio sound associated.
     */

    gameRulesBtn.addEventListener('click', (e) => {
        popupBox.style.display = 'block';

        if(audioIsOn) {
            clickSound.play();

        } else {
            clickSound.pause();
        }

    });

    gameRulesBtn.addEventListener('mouseover', (e) => {
        gameRulesBtn.style.background = '#F27329';

    });

    gameRulesBtn.addEventListener('mouseout', (e) => {
        gameRulesBtn.style.background = '#128607';

    });

    closeBtn.addEventListener('click', (e) => {
        popupBox.style.display = 'none';
        
         if (audioIsOn) {
             clickSound.play();

         } else {
             clickSound.pause();
         }

    });

    /**
     * Add event listener to the sound toggle icon,
     * The function is to toggle the audio sound on and off,
     * and to toggle the sound control icon.
     */

    soundOff.addEventListener('click', turnAudioOn);
    soundOn.addEventListener('click', turnAudioOff);

    function turnAudioOn() {

        audioIsOn = true;

        if (soundOn.classList.contains('on')) {
            soundOn.classList.add('active');
            soundOff.classList.remove('active');
        }
    }

    function turnAudioOff() {

        audioIsOn = false;

        if (soundOff.classList.contains('off')) {
            soundOff.classList.add('active');
            soundOn.classList.remove('active');
        }
    }

    /**
     * compares the choices between player and the computer.
     */

    function renderGame(playerInput, computerInput) {

        // choice of rock
        if (playerInput === 'rock') {

            if (computerInput === rock) {
                incrementDrawCount();
                return;

            } else if (computerInput === paper) {
                incrementComputerScore();

            } else {
                incrementPlayerScore();

            }
        }

        // choice of paper
        if (playerInput === 'paper') {

            if (computerInput === paper) {
                incrementDrawCount();
                return;

            } else if (computerInput === scissors) {
                incrementComputerScore();

            } else {
                incrementPlayerScore();
            }
        }

        // choice of scissors
        if (playerInput === 'scissors') {

            if (computerInput === scissors) {
                incrementDrawCount();
                return;

            } else if (computerInput === rock) {
                incrementComputerScore();

            } else {
                incrementPlayerScore();
            }
        }

        movesCount();

    }

    /**
     * The incrementDrawCount function is to increment the draw count by 1 each time,
     * display the message when the result is a "Draw".
     */

    function incrementDrawCount() {

        let drawCount = document.getElementById('draw-count').innerText;
        document.getElementById('draw-count').innerText = ++drawCount;

        message.innerHTML = `<h4 id="message">Draw!</h4>`;
        message.style.color = '#F27329';

        movesCount();
       
        if (audioIsOn) {
            drawSound.play();

        } else {
            drawSound.pause();
        }
    }

    /**
     * The incrementPlayerScore function is to increment player's score 1 point each time,
     * and display the message when the player wins.
     */

    function incrementPlayerScore() {

        document.getElementById('player-score').innerText = ++playerScore;

        message.innerHTML = `<h4 id="message">You scored!</h4>`;
        message.style.color = 'red';

        if (audioIsOn) {
            playerSound.play();

        } else {
            pcSound.pause();
        }

    }

    /**
     * The incrementComputerScore function is to increment PC's score 1 point each time,
     * and display the message when PC wins.
     */

    function incrementComputerScore() {

        document.getElementById('computer-score').innerText = ++computerScore;

        message.innerHTML = `<h4 id="message">PC scored!</h4>`;
        message.style.color = 'blue';

        if (audioIsOn) {
            pcSound.play();

        } else {
            pcSound.pause();
        }

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

        let gameIsAlive = false;

        if (movesCount === 10 && gameIsAlive === false) {

            if (playerScore === computerScore) {

               drawMsg.style.display = 'flex';

            } else if (playerScore > computerScore) {

                 winMsg.style.display = 'flex';

            } else {

                lostMsg.style.display = 'flex';
            }

            matchBox.style.display = 'none';
            message.style.display = 'none';
            computerChoiceBox.style.display = 'none';
            restartBtn.style.display = 'block';
        }
    }

    /**
     * The restartGame function is to reset and restart the game on clicking the restart button,
     * to set all the game data to the initical state.
     */

    restartBtn.addEventListener('click', (e) => {

        if (audioIsOn) {
            clickSound.play();

        } else {
            clickSound.pause();
        }

        //reset all the data back to initial state

        document.getElementById('player-score').innerText = 0;
        document.getElementById('computer-score').innerText = 0;
        document.getElementById('moves-count').innerText = 0;
        document.getElementById('message').innerText = '';
        document.getElementById('draw-count').textContent = 0;

        // reload the game on clicking the restart button

        window.location.reload();

    });

});