let boxes=document.querySelectorAll('.box');
// console.log(boxes);

let resetBtn=document.querySelector('#resetBtn');

let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
// console.log(msgContainer);
let msg=document.querySelector('#msg');

let turnO=true; // playerX  playerY

const WinPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const restGame=()=>{
    turnO=true;
    enableBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box clicked');
        if(turnO==true){  //player O
            box.innerText="O";
            turnO=false;
        }else{  //player  X
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        // box.customDisabled = true;
        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

const showWinner=(winner)=> {
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattren of WinPattern){
        // console.log(pattren[0]);
        let pos1Val=boxes[pattren[0]].innerText;
        let pos2Val=boxes[pattren[1]].innerText;
        let pos3Val=boxes[pattren[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner "+pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",restGame);
resetBtn.addEventListener('click',restGame);
