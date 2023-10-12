// Iteration 5: Store the player score and display it on the game over screen
var play=document.getElementById("play-again-button")
play.addEventListener("click",()=>{
    window.location.href="index.html"
})

   
var board=document.getElementById("score-board")
var score =localStorage.getItem("score")
board.innerHTML=score