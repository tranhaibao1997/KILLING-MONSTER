function startGame() {
    let player = document.getElementById("input").value
    document.getElementById("canvas").style = "display:block !important";
    document.getElementById("hello").innerHTML = `Hello player: ${player}`
    document.getElementById("score-section").innerHTML = `Current score:${score}`
    document.getElementById("input").disabled=true
    document.getElementById("btn").disabled=true;
    document.getElementById("round").innerHTML=`Round:${round}`;
    begin();
    timecounting();
    
}
function moveToNextRound()
{
    round++;
    document.getElementById("btn-next-round").style="opacity:0"
    document.getElementById("round").innerHTML=`Round:${round}`;
    player1.drawX=100;
    player1.drawY=100
    enemies=[];
    numEnemies+=(round*1)
    enemies.randomMoveTime = randomRange(800-(round*200), 1000-(round*200));
    initEnemies();
    begin();
    console.log(enemies)
    console.log(round)
    timecounting(30);
   
    
}

