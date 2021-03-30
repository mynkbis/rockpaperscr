const getUserChoice=(userInput)=>{
  userInput = userInput.toLowerCase();
if(userInput==='rock'|| userInput==='paper'|| userInput==='scissors'|| userInput==='bomb'){
//console.log('your input is ' + userInput);
return userInput;
} 
else{
  console.log('Invalid input')
};
}
const getComputerChoice=()=>{   // function for computer choice 
  let choice=Math.floor(Math.random()*3);
switch (choice){
  case 0: 
  return 'rock';
  break;
   case 1: 
  return 'paper';
  break;
   case 2: 
  return 'scissors';
  break;
 }
 };
const determineWinner=(userChoice, computerChoice)=> // function for comparison for input and computer
{
  if(userChoice===computerChoice){
  return 'tie occured try again';
}
  if(userChoice==='rock')
{
if (computerChoice==='paper'){
  return 'Computer wins this time';
}
else {
  return 'you won the game';
}
};

 if( userChoice==='paper'){
   if(computerChoice==='scissors')
   {
      return 'Computer wins this time';
   }
   else {
       return 'you wins this time';
   }
 };

if ( userChoice==='scissors'){
  if(computerChoice ==='rock'){
      return 'Computer wins this time';
            }
              else{
            return 'you wins this time';
        }
        };
if(userChoice==='bomb'){
  return 'you won';
}
};
//console.log(determineWinner('paper', 'rock')); // prints something like 'The computer won!'

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
playGame();

