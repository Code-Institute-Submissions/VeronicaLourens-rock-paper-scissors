/**
 * Wait for the DOM to finish loading the page,
 * manipulate the DOM to get variables.
 */

const gameRulesBtn = document.getElementById('game-rules-btn');
const closeBtn = document.querySelector('.close-btn');
const popupBox = document.getElementById('popup-box');
const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

// Audio sound.
let soundIsOn = false;
const clickSound = document.getElementById('click-sound');



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
        // clickSound.play();
        playAudio();

    });

    gameRulesBtn.addEventListener('mouseover', (e) => {
        gameRulesBtn.style.background = '#F27329';

    });

    gameRulesBtn.addEventListener('mouseout', (e) => {
         gameRulesBtn.style.background = '#128607';

    });

    closeBtn.addEventListener('click', (e) => {
        popupBox.style.display = 'none';
        //  clickSound.play();
        playAudio();


    });

   

});


/**
 * Add event listener to the sound control icon,
 * toggle the audio sound on and off when firing the click function.
 */

soundOff.addEventListener('click', (e) => {
    
    if(soundOn.classList.contains('on')) {

        soundOn.classList.add('active');
        soundOff.classList.remove('active');

        // clickSound.pause();
        // pauseAudio()

    }

    playAudio();
    
});



soundOn.addEventListener('click', (e) => {

    if(soundOff.classList.contains('off')) {

        soundOff.classList.add('active');
        soundOn.classList.remove('active');

        // clickSound.play();

    }

    pauseAudio();

});





function playAudio() {
    if(!soundIsOn) {
        clickSound.play();

    }
}

function pauseAudio() {
    if(soundIsOn) {
        clickSound.pause();
    }
}





/**
 * 
 */


