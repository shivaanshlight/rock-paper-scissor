let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let sect = document.querySelector(".sect");
let para = document.createElement("p");
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
  } //to check if it is a tie
  else if (human_choice == computer_choice) {
    console.log("tie");
  } else {
    // update the score
    computer_score = computer_score + 1;
    // then print the winner statement
    console.log(`You lost  and computer has ${computer_score} points`);
  }
}

paper.addEventListener("click", function (e) {
  getComputerChoice();
  play_Round("paper", computer_choice);
  para.textContent = `
  human choice:paper
  computer choice :${computer_choice}
  
  human score:${human_score}
  computer score:${computer_score}`;
  sect.appendChild(para);
  if (computer_score == 5) {
    para.textContent = `winner is computer `;
  } else if (human_score == 5) {
    para.textContent = `winner is human `;
  }
});
rock.addEventListener("click", function (e) {
  getComputerChoice();
  play_Round("rock", computer_choice);
  para.textContent = `
  human choice:rock
  computer choice :${computer_choice}
  
  human score:${human_score}
  computer score:${computer_score}`;
  sect.appendChild(para);
  if (computer_score == 5) {
    para.textContent = `winner is computer `;
  } else if (human_score == 5) {
    para.textContent = `winner is human `;
  }
});
scissor.addEventListener("click", function (e) {
  getComputerChoice();
  play_Round("scissor", computer_choice);
  para.textContent = `
  human choice:scissor
  computer choice :${computer_choice}
  
  human score:${human_score}
  computer score:${computer_score}`;
  sect.appendChild(para);
  if (computer_score == 5) {
    para.textContent = `winner is computer `;
    human_score = 0;
    computer_score = 0;
  } else if (human_score == 5) {
    para.textContent = `winner is human `;
    human_score = 0;
    computer_score = 0;
  }
});

// make a function which will call the round five times
