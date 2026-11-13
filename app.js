// first creating two arrays one for the game sequence and other for the user sequence 
let gameseq=[];
let userseq=[];

// array of all the buttons
let btns=["green" , "red" ,"yellow" , "purple"];

// game has started or not
let started= false;
let level=0;
let h2=document.querySelector("h2");


// if any key is pressed out of 4 coloued keys then the game has started 
document.addEventListener("click" , function(){

    // only one time the game will start
    if(started==false){
        console.log("game has started");
        started=true;

    }

   levelup();
   
})

// button flash
function gameflash(btn){

    btn.classList.add("flash");

    // removing the button colour so it appears like it flashed
    setTimeout( function(){
        btn.classList.remove("flash");
    } , 250) // means the white backgrounf colour will get removed in 1 sec 

}

function userflash(btn){

    btn.classList.add("userflash");

    // removing the button colour so it appears like it flashed
    setTimeout( function(){
        btn.classList.remove("userflash");
    } , 250) // means the white backgrounf colour will get removed in 1 sec 

}


// now level up and flash the random button out of all four buttons 

function levelup(){
    level++;

    //  after pressinf any bitton we will find the level at the h2 heading 
    h2.innerText=`Level ${level}`;

    // now on pressing the button the button will flash
    // random button will be chosen
    let ranidx=Math.floor(Math.random()*3);
    let randcolor=btns[ranidx];
    // creating class from the colour and then choosing the button
    let randbtn=document.querySelector(`.${randcolor}`);
   /*  console.log(ranidx);
    console.log(randcolor);
    console.log(randbtn); */

    gameseq.push(randcolor);
    console.log(gameseq);

    gameflash(randbtn);

}

// match the user sequence with the game sequence 
function checkans(){
    //console.log("curr Level:", level);
    let idx=level-1;

    if(userseq[idx]=== gameseq[idx]){
        console.log("same value");
    }
    else{
          h2.innerText=`Game over! press any key to start`;

    }
}

// creating a btn press function
function btnpress(){
    let btn=this;

    // the bn we have pressed have to flash
    userflash(btn);

    usercolour=btn.getAttribute("id");
    userseq.push(usercolour);
}

let allbtns=document.querySelectorAll(".btn");

for( btn of allbtns){
    btn.addEventListener("click", btnpress)
}
