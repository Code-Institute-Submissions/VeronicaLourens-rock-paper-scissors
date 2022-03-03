// toggle audio sound icon variables 

const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');

// audio tracks 
const clickSound = new Audio('assets/audio/mouse-click.mp3');
const playerSound = new Audio('assets/audio/player.wav');
const pcSound = new Audio('assets/audio/pc.wav');
const drawSound = new Audio('assets/audio/draw.wav');

let audioIsOn = false;

// mute the audio sound by default when the page loaded
// clickSound.muted = true;
// playerSound.muted = true;
// pcSound.muted = true;
// drawSound.muted = true;

/**
 * Add event listener to the icons.
 * The functions are to toggle the audio sound on and off on clicking the icons.
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
// function toggleAudioSound() {

//     if (!audioIsOn) {

//         turnAudioOn();

//     } else {

//         turnAudioOff();
       
//     }
// }