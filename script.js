// what will computer choose
let computer_choice = " ";
// make a function called getComputerChoice
function getComputerChoice() {
  // we will do it by using the random method Math.random(),It gives a number 0<=n<1
  // Roundoff the random number from decimal to integer here we will use 3 as there are three choices .
  let random_number = Math.floor(Math.random() * 3);
  // then it will return rock ,paper ,scissor values
  if (random_number == 0) {
    // from the random number we will  assign it a value from rock paper scissor
    computer_choice = "rock";
    return computer_choice;
  } else if (random_number == 1) {
    // from the random number we will  assign it a value from rock paper scissor
    computer_choice = "paper";
    return computer_choice;
  } else {
    // from the random number we will  assign it a value from rock paper scissor
    computer_choice = "scissor";
    return computer_choice;
  }
}

// make a variable to store the human choice
let human_choice = " ";
// make a function to get a human choice
function getHumanChoice() {
  // prompt the user to enter a choice
  human_choice = prompt("Please enter rock or paper or scissor ");
  return human_choice.toLowerCase();
}

// Make a global variable which keeps track of human score
let human_score = 0;
// Make a global variable which keeps track of computer score
let computer_score = 0;

// Make a function which will conduct a round of game which will take two parameters the human_choice and computer_choice as its arguments
function play_Round(human_choice, computer_choice) {
  // Implement the game logic
  // scissor>paper
  // paper>rock
  // rock>scissor

  if (
    (human_choice == "scissor" && computer_choice == "paper") ||
    (human_choice == "paper" && computer_choice == "rock") ||
    (human_choice == "rock" && computer_choice == "scissor")
  ) {
    // update the score
    human_score = human_score + 1;
    // then print the winner statement
    console.log(`You won and have ${human_score} points`);
  } else if (human_choice == computer_choice) {
    console.log("tie");
  } else {
    // update the score
    computer_score = computer_score + 1;
    // then print the winner statement
    console.log(`You lost  and computer has ${computer_score} points`);
  }
}

// make a function which will call the round five times
function playGame() {
  // variable for rounds
  let rounds = 0;
  //   varaible to store winner
  let winner = " ";
  //   variable to store points of winner
  let points = 0;
  //   loop for five rounds
  for (let i = 0; i < 5; i++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    play_Round(human, computer);
    console.log(`human-choice:${human}`);
    console.log(`computer-choice:${computer}`);
  }
  if (human_score > computer_score) {
    winner = "human";
    points = human_score;
  } else {
    winner = "computer";
    points = computer_score;
  }
  console.log(`winner is ${winner} with ${points}points`);
}

playGame();
