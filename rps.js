console.info("Let's play Rock paper scissor !");
console.log("Enter the number for your selection");
console.log(" 1 for Rock , 2 for paper , and 3 for Scissor");
const args = process.argv.slice(2);
args[0]=Number(args[0]);
if (args[0]===1 || args[0]===2 || args[0]===3){
                let chosenByMan=0;
                    if(args[0]===1){
                        chosenByMan="Rock";
                    }else if (args[0]===2){
                        chosenByMan="Paper"
                    }else{
                        chosenByMan="Scissor";
                    }
                let number = Math.floor((Math.random()*3)+1);
                let chosenByPc=0;
                    if (number ===1){
                        chosenByPc="Rock";
                    }else if (number===2){
                        chosenByPc="Paper";
                    }else{
                        chosenByPc="Scissor";
                    }
            if (args[0]===number){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and and it is a draw !!`);
            }else if (args[0]===1 && number===3){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and you Win !!`);
            }else if (args[0]===2 && number===1){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and you win !!`);
            }else if (args[0]===3 && number===2){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and you win !!`);
            }else if (args[0]===1 && number===2){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and you lose !!`);
            }else if (args[0]===2 && number===3){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and you lose !!`);
            }else if (args[0]===3 && number===1){
                console.log(`You chose ${chosenByMan} and The computer chose ${chosenByPc} and you lose !!`);
            }

}else{
    console.error("You musst enter 1 or 2 or 3");
}