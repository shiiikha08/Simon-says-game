
// first creating two arrays one for the game sequence and other for the user sequence 
let gameseq=[];
let userseq=[];

// array of all the buttons
let btns=["green" , "red" ,"yellow" , "purple"];

// game has started or not
let started= false;
let level=0;
let h2=document.querySelector("h2");


// if any key is pressed out of 4 coloured keys then the game has started 
document.addEventListener("keypress" , function(){

    // only one time the game will start
    if(started==false){
        console.log("game has started");
        started=true;
        levelup();
    }
   
})

// button flash
function gameflash(btn){

    btn.classList.add("flash");

    // removing the button colour so it appears like it flashed
    setTimeout( function(){
        btn.classList.remove("flash");
    } , 250)

}

function userflash(btn){

    btn.classList.add("userflash");

    // removing the button colour so it appears like it flashed
    setTimeout( function(){
        btn.classList.remove("userflash");
    } , 250)

}


// now level up and flash the random button out of all four buttons 

function levelup(){

    userseq=[]; // resetting user sequence for the next level so that you have to remember the whole sequence

    level++;

    // after pressing any button we will find the level at the h2 heading 
    h2.innerText=`Level ${level}`;

    // now on pressing the button the button will flash
    // random button will be chosen
    let ranidx=Math.floor(Math.random()*4);
    let randcolor=btns[ranidx];

    // creating class from the colour and then choosing the button
    let randbtn=document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log(gameseq);

    gameflash(randbtn);

}

// match the user sequence with the game sequence 
function checkans(idx){

    if(userseq[idx]=== gameseq[idx]){
       

        // checking if the complete sequence is correct
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText=`Game over! Your score was ${level}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        }, 150);
        reset();

    }
}

// creating a btn press function
function btnpress(){

    if(started==false){
        return;
    }

    let btn=this;

    // the btn we have pressed have to flash
    userflash(btn);

    let usercolour=btn.getAttribute("id");
    userseq.push(usercolour);

    // checking the answer
    checkans(userseq.length-1);  // checking for the last index 
}

let allbtns=document.querySelectorAll(".btn");

for(let btn of allbtns){
    btn.addEventListener("click", btnpress)
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
