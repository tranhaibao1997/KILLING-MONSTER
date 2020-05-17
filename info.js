
let player = "";
let scoreStack = [0]
a = JSON.parse(localStorage.getItem('session')) || [];

function render(data) {
    function createScoreTable(elm) {
        return `
      <tr>
      <td>${elm.player}</td>
      <td>${elm.highscore}</td>
      </tr>
   `}
    const scoreNode = data.map(createScoreTable);
    document.getElementById("history").innerHTML = (scoreNode);
}
render(a)


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
    document.getElementById("history").style="display:none"
    document.getElementById("empty").style="display:none"
    document.getElementById("playthrough-info").style="display:block"


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
    let max = updateHighScore()

    document.getElementById("highscore-section").innerHTML = `Highest Score:${max}`
    round = 1;
    score = 0;
    player1.speed = 2;
    for (let i = 0; i < player1.bullets.length; i++) {
        player1.bullets[i].speed = 6

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
    let max = updateHighScore()
    alert(`Your best score:${max}`)
    var playthrough = { 'player': player , 'highscore': max }



    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(playthrough);
    localStorage.setItem('session', JSON.stringify(a));
    window.location.reload();
}
