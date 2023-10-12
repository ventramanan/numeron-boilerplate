// Iteration 2: Generate 2 random number and display it on the screen

var value =document.getElementById("number1")
var value1=document.getElementById("number2")
var random1 =Math.floor(Math.random()*100)+1
var random2= Math.floor(Math.random()*100)+1
value.textContent=random1
value1.textContent=random2
 function toshowData(){
    random1 =Math.floor(Math.random()*100)+1
    random2= Math.floor(Math.random()*100)+1
    value.textContent=random1
    value1.textContent=random2
 }


// Iteration 3: Make the options button functional
var greater=document.getElementById("greater-than")
var lesser=document.getElementById("lesser-than")
var equall=document.getElementById("equal-to")
var scoer=0
greater.onclick=()=>{
    timer=6
    if (random1>random2){
        scoer+=1
        countdown()
        localStorage.setItem("score",scoer)
    }
    else{
        window.location.href="gameover.html"

    }
    toshowData()
}
lesser.onclick=()=>{
    timer=6
    if (random1<random2){
        scoer+=1
        countdown()
        localStorage.setItem("score",scoer)
    }
    else{
        window.location.href="gameover.html"

    }
    toshowData()
}
equall.onclick=()=>{
    timer=6
    if (random1==random2){
        scoer+=1
        countdown()
        localStorage.setItem("score",scoer)
    }
    else{
        window.location.href="gameover.html"

    }
    toshowData()
}

// Iteration 4: Build a timer for the game
let timer=6
var timerdiv=document.getElementById("timer")
function countdown(){
    if (timer>0){
        timer--
        timerdiv.textContent=timer 
    }else{
        window.location.href="gameover.html"
    }
   
}
setInterval(countdown,1000)


