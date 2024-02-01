let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn")
let msgcontainer = document.querySelector(".msg-container")
let newgame = document.querySelector(".new-btn")
let msg = document.querySelector("#msg")

let turnO = true;

// in the tic tac toe is 8 way of win thw game 
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//this function for reset the game
let resetgame = () => {
    turnO = true;
    enablebtn();
    msgcontainer.classList.add("hide")


}

//this foreach & event function for change the O & X chance and check the winner of the game
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O"
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true
        }
        box.disabled = true;
        checkwinner();
    })
});
//disable function the button for use click
const disablebtn = () => {
    for (const box of boxes) {
        box.disabled = true
    }
}
//enable function the button for use click
const enablebtn = () => {
    for (const box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}
//showing the winner on the display
const showwinner = (winner) => {
    msg.innerText = (`congratulation, winner is ${winner}`)
    msgcontainer.classList.remove("hide")
    disablebtn();
}

//this function for checking and print the game winner 
const checkwinner = () => {
    for (const patter of winpattern) {
        let pos1val = boxes[patter[0]].innerText
        let pos2val = boxes[patter[1]].innerText
        let pos3val = boxes[patter[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val === pos3val) {
                // console.log('winner', pos1val);
                showwinner(pos1val);
            }
        }

    }
}
//event function for reset & newgame
resetbtn.addEventListener("click", resetgame)
newgame.addEventListener("click", resetgame)