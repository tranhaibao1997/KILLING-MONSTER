
let player = "";
let scoreStack = [0]

function startGame() {
    player = document.getElementById("input").value
    document.getElementById("canvas").style = "display:block !important";
    document.getElementById("hello").innerHTML = `Hello Player: ${player}`
    document.getElementById("score-section").innerHTML = `Current score:${score}`
    document.getElementById("highscore-section").innerHTML = "High Score: 0"
    document.getElementById("player-input").style = "display:none"
    document.getElementById("round").innerHTML = `Round:${round}`;
    begin();
    timecounting(time);


}
function updateHighScore() {

    let max = scoreStack[0];
    console.log(scoreStack)
    for (let i = 1; i < scoreStack.length; i++)
        if (scoreStack[i] > max)
            max = scoreStack[i];

    return max;
}

function moveToNextRound() {

    let max = updateHighScore()

    document.getElementById("highscore-section").innerHTML = `Highest Score:${max}`
    round++;
    document.getElementById("choose-to-continue").style = "z-index:-1"
    document.getElementById("round").innerHTML = `Round:${round}`;
    player1.drawX = 100;
    player1.drawY = 100
    enemies = [];
    numEnemies += (round * 1)
    enemies.randomMoveTime = randomRange(800 - (round * 200), 1000 - (round * 200));
    initEnemies();
    begin();
    timecounting(time);
}

function addSpeed() {

    moveToNextRound();
    player1.speed += 0.5

}
function addTime() {
    time = 35;
    moveToNextRound();


}

function addBulletSpeed() {


    for (let i = 0; i < player1.bullets.length; i++) {
        player1.bullets[i].speed += 4

    }
    moveToNextRound();
    console.log(player1.bullets)

}

function reset() {
    round = 1;
    score = 0;
    player1.speed=1;
    for (let i = 0; i < player1.bullets.length; i++) {
        player1.bullets[i].speed =5

    }
    
    document.getElementById("score-section").innerHTML = `Current score:${score}`
    document.getElementById("round").innerHTML = `Round:${round}`;
    player1.drawX = 100;
    player1.drawY = 100;
    enemies = [];
    numEnemies = 3
    enemies.randomMoveTime = randomRange(800 - (round * 200), 1000 - (round * 200));
    initEnemies();
    begin();
    timecounting(time);
    document.getElementById("lose").style = "z-index:-1"


}

function save() {
    var playthrough = { 'player': player, 'high score': max }
    localStorage.setItem('playthrough', JSON.stringify(playthrough));
}
