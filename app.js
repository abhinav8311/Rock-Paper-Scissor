let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true)
    {   userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win!! Your "+userChoice+" beats "+compChoice;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose. "+compChoice+" beats your "+userChoice;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice) =>{
    console.log("user choice= ",userChoice);
    const compChoice= genCompChoice();
    console.log("user choice= ",compChoice);

    if(userChoice===compChoice)
    {
        console.log("game was draw");
        msg.innerText="Game was a draw";
        msg.style.backgroundColor="black";
    }
    else{
        let userWin=true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
          } 
          else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
          } 
          else {
            
            userWin = compChoice === "rock" ? false : true;
          }
          showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
            playGame(userChoice);
    });
});
