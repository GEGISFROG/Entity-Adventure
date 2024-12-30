var frame = 0;
var frametimer = 0;
var running = true
const timerElement = document.getElementById('scoreboard');

function scoreupdate() {
    if(running){
    frame++;
    if(frame % 8 === 0){
        frametimer++;
    }
    timerElement.textContent = frametimer;
    requestAnimationFrame(scoreupdate); 
    }
}
requestAnimationFrame(scoreupdate);

function stopscore() {
    running = false;
}