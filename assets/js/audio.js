// audio and toggle sound variables 

const soundOff = document.querySelector('.off');
const soundOn = document.querySelector('.on');
const clickSound = new Audio('assets/audio/mouse-click.mp3');
const playerSound = new Audio('assets/audio/player.wav');
const pcSound = new Audio('assets/audio/pc.wav');
const drawSound = new Audio('assets/audio/draw.wav');
//const audios = [mouseClickAudio, playerScoredAudio, pcScoredAudio, drawAudio];

//
let audioIsOn = false;

function toggleAudioSound() {

    if (!audioIsOn) {
        clickSound.play();
        playerSound.play();

    } else {
        clickSound.pause();
        playerSound.pause();
    }
}

// toggle the sound control icons

soundOff.addEventListener('click', (e) => {

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

})