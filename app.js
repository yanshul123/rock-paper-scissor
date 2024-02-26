let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usersScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawgame = () =>{
    console.log("game was draw");
    msg.innerHTML = "game draw play again!";
    msg.style.backgroundColor = "#32a6a8";
}

const showWinner = (userWin,userChoice,compChoices) =>{
    if(userWin){
        user_score++;
        usersScorePara.innerText =user_score;
        msg.innerHTML =`you win! your ${userChoice} beats ${compChoices}`;
        msg.style.backgroundColor = "green";
    }
    else{
       comp_score++;
       compScorePara.innerText =comp_score;
        msg.innerHTML = `you lose computer ${compChoices} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user Choice =",userChoice);
    //generate comp choice
    const compChoices = genCompChoice();
    console.log("comp choice =",compChoices);

    if(userChoice === compChoices){
        //Draw game
        drawgame();
    } else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissor paper
            userWin = compChoices === "paper" ? false:true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoices === "scissors" ?false:true;
        } else{
            //rock paper
            userWin = compChoices === "rock"?false:true
        }
        showWinner(userWin,userChoice,compChoices);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});