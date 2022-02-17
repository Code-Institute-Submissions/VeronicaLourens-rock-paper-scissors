/**
 * Wait for the DOM to finish loading the page,
 * manipulate the DOM to get variables.
 */

const gameRulesBtn = document.getElementById('game-rules-btn');
const closeBtn = document.querySelector('.close-btn');
const popupBox = document.getElementById('popup-box');
const soundOff = document.querySelector('.sound-off');
const soundOn = document.querySelector('.sound-on');


/**
 * Add event listener to the game rules button that fires the funtion,
 * the background color of the button changes when moving mouse in and out,
 * opening a popup box when clicking the gume rules button
 * 
 */

document.addEventListener('DOMContentLoaded', (e) => {

    

});

gameRulesBtn.addEventListener('click', openPopupBox);
gameRulesBtn.addEventListener('mouseover', setMouseOverColor);
gameRulesBtn.addEventListener('mouseout', setMouseOutColor);

function openPopupBox() {
    popupBox.style.display = 'block';
}

function setMouseOverColor() {
    gameRulesBtn.style.background = '#F27329';

}

function setMouseOutColor() {
    gameRulesBtn.style.background = '#128607';
}
