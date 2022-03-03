// toggle audio sound icon variables 

const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

// audio tracks 
const clickSound = new Audio('assets/audio/mouse-click.mp3');
const playerSound = new Audio('assets/audio/player.wav');
const pcSound = new Audio('assets/audio/pc.wav');
const drawSound = new Audio('assets/audio/draw.wav');

let audioIsOn = false;

/**
 * Add event listener to the icons.
 * The functions are to toggle the audio sound on and off on clicking the icons.
 */

soundOff.addEventListener('click', turnAudioOn);
soundOn.addEventListener('click', turnAudioOff);

function turnAudioOn() {

    audioIsOn = false;

    if (soundOn.classList.contains('on')) {
        soundOn.classList.add('active');
        soundOff.classList.remove('active');
    }

}

function turnAudioOff() {

    audioIsOn = true;

    if (soundOff.classList.contains('off')) {
        soundOff.classList.add('active');
        soundOn.classList.remove('active');
    }

}


/*soundOff.addEventListener('click', (e) => {

    //audioIsOn = false;

    if (soundOn.classList.contains('on')) {
        soundOn.classList.add('active');
        soundOff.classList.remove('active');
    }

    toggleAudioSound();

})

soundOn.addEventListener('click', (e) => {

    //audioIsOn = true;

    if (soundOff.classList.contains('off')) {
        soundOff.classList.add('active');
        soundOn.classList.remove('active');
    }

    toggleAudioSound();

})*/

/**
 * The function is to toggle the audio sound.
 */
function toggleAudioSound() {

    if (!audioIsOn) {
        clickSound.play();
        playerSound.play();

    } else {
        clickSound.pause();
        playerSound.pause();
    }
}