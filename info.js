
let player="";
let scoreStack=[];
let max=0;

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
    timecounting(time);
 
    
}

function moveToNextRound()
{
    round++;
    document.getElementById("choose-to-continue").style="z-index:-1"
    document.getElementById("round").innerHTML=`Round:${round}`;
    player1.drawX=100;
    player1.drawY=100
    enemies=[];
    numEnemies+=(round*1)
    enemies.randomMoveTime = randomRange(800-(round*200), 1000-(round*200));
    initEnemies();
    begin();
    timecounting(time);
}

function addSpeed()
{
   
    moveToNextRound();
    player1.speed+=1
    
}
function addTime()
{
    time=35;
    moveToNextRound();
   
    
}

function addBulletSpeed()
{
   
   
    for(let i=0;i<player1.bullets.length;i++)
    {
        player1.bullets[i].speed+=5
        
    }
    moveToNextRound();
    console.log(player1.bullets)
    
}

function reset()
{
    max=scoreStack[0];
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

function save()
{
    var playthrough={'player':player,'high score':max}
    localStorage.setItem('playthrough', JSON.stringify(playthrough));
}
