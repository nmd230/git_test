const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
 
const TIE = 0;
const WIN = 1; 
const LOSE = 2;


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("Text");
const userImg = document.getElementById("Useroption")


rockBtn.addEventListener("click", ()=>{
    play(ROCK);
})
paperBtn.addEventListener("click", ()=>{
    play(PAPER)
})
scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS)
})

function play(useroption){
    const machineOption = Math.floor(Math.random() * 3);
    const finalResult = result(useroption, machineOption);

    


    switch(finalResult){
        case TIE:
            resultText.innerHTML = "It´s a tie 😐"
            break;
        case WIN:
            resultText.innerHTML = "You win 🎉"
            break;
        case LOSE:
            resultText.innerHTML = "You lose 😭"
            break;
    }

}

function result(userOption, machineOption){
    if( userOption == machineOption){
        return TIE;
    } else if(userOption == ROCK){
        if(machineOption == PAPER) return LOSE;
        if(machineOption == SCISSORS) return WIN;
    } else if(userOption == SCISSORS){
        if(machineOption == ROCK) return LOSE;
        if(machineOption == PAPER) return WIN;
    }else if(userOption == PAPER){
        if(machineOption == SCISSORS) return LOSE;
        if(machineOption == ROCK) return WIN;
    }

}