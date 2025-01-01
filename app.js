const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerchoice = () => {
  const randomChoice = Math.random();
  if (randomChoice < 0.34) {
    return ROCK;
  } else if (randomChoice < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
   cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS; 

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   (cChoice === ROCK && pChoice === PAPER) ||
  //   (cChoice === PAPER && pChoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pChoice === ROCK)
  // ) {
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
  // }


startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('game starts');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerchoice();
  let winner;
  if (playerSelection) {
      winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice); 
  }
  let message = `you picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});


const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (numb) => {
    return isNaN(numb) ? 0 : numb;
  }
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD') {
      sum += validateNumber(num);

    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum); 
};

// const subtractUp = (resultHandler,...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum, 'the result after subtracting all numbers is:'); 
// };

const showResult = (messageText, result) => {
  alert(messageText + '' + result);
};


combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  2,
  3,
  4,
  5,
  6
); 
combine(showResult.bind(this, 'The result after subtracting all numbers is: '),'SUBTRACT', 2, 3, 4, 5, 6); 
// 
