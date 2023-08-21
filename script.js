var randomNum=0;
var score=0;
var timers=5;

function createBubble(){
    var Bubble= "";

    for(var i=1;i<=160;i++){
         var randomNum= Math.floor(Math.random()*10)
        Bubble +=`<div class="bubble">${randomNum}</div>`;
    }
    
    document.querySelector("#pannelFooter").innerHTML=Bubble;
}


function runtimer(){
var setTimer=setInterval(()=>{
    if(timers>0)
    {
    timers--;

document.querySelector("#timerval").innerHTML=timers;
    }
    else{
      clearInterval(setTimer)
      document.querySelector("#pannelFooter").
      innerHTML=`<h2>Game Over</h2> 
      <h2>UR Score is=</h2>
      <h1>${score}</h1>`
    

    }

},500)
}


function getHit(){
    randomNum=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=randomNum
    
}

function scoreIncrease(){
    score+=10;
document.querySelector("#scoreval").innerHTML=score;
}

document.querySelector("#pannelFooter").
addEventListener("click",function(details){
 var clickNum=Number(details.target.textContent);
 if(clickNum==randomNum){
    scoreIncrease();
    createBubble();
    getHit();
 }
    
})

createBubble();
runtimer();
getHit();







// var bulbOn = document.querySelector(".bulb")
// var btnOn=document.querySelector("#btnon")
// var flag=0;
// btnOn.addEventListener("click",()=>{
//     bulbOn.style.backgroundColor="yellow"
// })

// var btnOff=document.querySelector("#btnoff")
// btnOff.addEventListener("click",()=>{
//     bulbOn.style.backgroundColor="#fff"
// })


// var bulbOn=document.querySelector(".bulb")
// var btnOn=document.querySelector("button")
// var flag=0;

// btnOn.addEventListener("click",()=>{
//     if(flag==0){
//         bulbOn.style.backgroundColor="red"
//         bulbOn.style.border="red"
//         flag=1;
//         btnOn.innerHTML="on"
//     }
//     else{
//         btnOn.innerHTML="off"
//         bulbOn.style.backgroundColor="yellow"
//         bulbOn.style.border="black"
        
//         flag=0;  
//     }
    
// })


