let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-button");
let turnO=true;//playerX,playerO
//if turnO is true O,else X
let newGameBtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

//storing winning patterns in arrays 
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
//resetgame
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){//playerO's turn
    box.innerText="O";
    turnO=false;
    }
    else{//player X's turn;
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;

    //checking winner
    checkwinner();
}));
//disabling boxes after win
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//enabling boxes for reset
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
//displaying winner
const showWinner=(winner)=>{
    msg.innerText=`Congrats,winner is  ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkwinner=()=>{
    for( let pattern of winPatterns){
//         console.log(pattern[0],pattern[1],pattern[2]);
//         console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
// //storing them in individual variables
let position1=boxes[pattern[0]].innerText;
let position2=boxes[pattern[1]].innerText;
let position3=boxes[pattern[2]].innerText;
//should not be empty
if(position1!=""&&position2!=""&&position3!=""){
    if(position1==position2&&position2==position3){
      console.log("winner",position1); 
      showWinner(position1);
      disableBoxes();
    }
}
    }
}
//creating new game
newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);