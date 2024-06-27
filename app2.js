let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let reset = document.querySelector(".reset");

let turnO = true;

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetBtn = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
} 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPattern) {
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;

        if(pat1 != "" && pat2 != "" && pat3 != "") {
            if(pat1 === pat2 && pat2 === pat3) {
                console.log("winner", pat1);

                showWinner(pat1);
            }    
        }
        
    }
}

newGame.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);