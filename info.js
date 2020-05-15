function startGame() {
    let player = document.getElementById("input").value
    document.getElementById("canvas").style = "display:block !important";
    document.getElementById("hello").innerHTML = `Hello player: ${player}`
    document.getElementById("score-section").innerHTML = `${score}`
    document.getElementById("input").disabled=true
    document.getElementById("btn").disabled=true;
    begin();
    
}
