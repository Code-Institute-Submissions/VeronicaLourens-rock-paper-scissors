/**
 * Wait for the DOM to finish loading the page,
 * manipulate the DOM to get variables.
 */

const gameRulesBtn = document.getElementById('game-rules-btn');
const closeBtn = document.querySelector('.close-btn');
const popupBox = document.getElementById('popup-box');
// const soundOff = document.querySelector('.off');
// const soundOn = document.querySelector('.on');

// // Audio sound.
// let soundIsOn = false;
// const clickSound = document.getElementById('click-sound');



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
    
        playSound();

    });

    gameRulesBtn.addEventListener('mouseover', (e) => {
        gameRulesBtn.style.background = '#F27329';

    });

    gameRulesBtn.addEventListener('mouseout', (e) => {
         gameRulesBtn.style.background = '#128607';

    });

    closeBtn.addEventListener('click', (e) => {
        popupBox.style.display = 'none';
        
        playSound();


    });

   

});


/**
 * Add event listener to the sound control icon,
 * toggle the audio sound on and off when firing the click function.
 */


const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

let soundIsOn = false;
const clickSound = document.getElementById('click-sound');
const playerSound = document.getElementById('player-sound');
const pcSound = document.getElementById('pc-sound');
const drawSound = document.getElementById('draw-sound');


soundOff.addEventListener('click', (e) => {
    
    if(soundOn.classList.contains('on')) {

        soundOn.classList.add('active');
        soundOff.classList.remove('active');

    }

    playSound();
    
});



soundOn.addEventListener('click', (e) => {

    if(soundOff.classList.contains('off')) {

        soundOff.classList.add('active');
        soundOn.classList.remove('active');

        pauseSound();
       
    }

     

    
});

function playSound() {
    if(!soundIsOn) {
        clickSound.play();

    }
}

function pauseSound() {
    if(soundIsOn == false) {
        clickSound.pause();
    }
}





/**
 * Get the valiables of game choices array, message, move count and restart btn.
 * add event listener to the game choice buttons.
 * generate a computer random choice when clicking each of buttons.
 * display computer choice, move counts, message and scores.
 */

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


document.addEventListener('DOMContentLoaded', function() {

    let playerChoice = document.getElementsByClassName('choice');

    for (let choice of playerChoice) {
        choice.addEventListener('click', function () {

            alert('You clicked');

            let playerInput = this.getAttribute('value');

            console.log(playerInput);

            

        })
    }

})







