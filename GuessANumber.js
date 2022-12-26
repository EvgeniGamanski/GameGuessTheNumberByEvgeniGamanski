function GuessANumber(){
const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout 
});

let computerGuess=Math.floor(Math.random()*100); 
let guess;

let recursiveAsyncReadLine=function(){
    readline.question('Guess the number (0-100): ',number => 
    {
        guess=Number(number);
        if(guess <= 100 && guess >= 0){
            if(guess==computerGuess){
                console.log("You guessed it! Congratulations!");
                return readline.close();
            }
            else if(guess<computerGuess){
                console.log("Too Low! Try again!");
                recursiveAsyncReadLine(); 
            }
            else if(guess>computerGuess){
                console.log("Too High! Try again!");
                recursiveAsyncReadLine();
            }
            else {
                console.log("The number you entered is not valid! Please enter a valid one!");
                recursiveAsyncReadLine();   
            }
        }
    });
}
recursiveAsyncReadLine();    
}
GuessANumber()
