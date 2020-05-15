
let player="";
let scoreStack=[];

function startGame() {
    player = document.getElementById("input").value
    document.getElementById("canvas").style = "display:block !important";
    document.getElementById("hello").innerHTML = `Hello player: ${player}`
    document.getElementById("score-section").innerHTML = `Current score:${score}`
    document.getElementById("highscore-section").innerHTML = "High Score: 0"
    document.getElementById("input").disabled=true
    document.getElementById("btn").disabled=true;
    document.getElementById("round").innerHTML=`Round:${round}`;
    begin();
    timecounting(30);
 
    
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
function reset()
{
    let max=scoreStack[0];
    round=1;
    score=0;
    for(let i=0;i<scoreStack.length;i++)
    {
        if(scoreStack[i]>max)
        {
            max=scoreStack[i]
        }
    }
    document.getElementById("highscore-section").innerHTML = `Highest Score:${max}`
    document.getElementById("score-section").innerHTML = `Current score:${score}`
    document.getElementById("round").innerHTML=`Round:${round}`;
    player1.drawX=100;
    player1.drawY=100
    enemies=[];
    numEnemies=3
    enemies.randomMoveTime = randomRange(800-(round*200), 1000-(round*200));
    initEnemies();
    begin();
    timecounting(30);
    document.getElementById("btn-reset").style="display:none"
        

}
