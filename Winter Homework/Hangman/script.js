let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let category;
let gameWord = "";
let lives = 6;
let clickedLetters = [];
let movieArray = [
  {
    title: "Carry On",
    clue: "A 2024 thriller about intense action and suspense.",
  },
  {
    title: "Interstellar",
    clue: "A science fiction film that explores space travel, black holes, and time dilation.",
  },
  {
    title: "The Shawshank Redemption",
    clue: "A story about a man's life sentence in prison and his journey to freedom.",
  },
  {
    title: "The Matrix",
    clue: "A film in which a hacker learns the world he lives in is a simulated reality.",
  },
  {
    title: "The Wolf of Wall Street",
    clue: "A biographical film about the rise and fall of a corrupt stockbroker.",
  },
  {
    title: "Shutter Island",
    clue: "A psychological thriller set on an isolated island with a mental institution.",
  },
  {
    title: "Gone Girl",
    clue: "A thriller about the mysterious disappearance of a woman and the ensuing investigation.",
  },
  {
    title: "How to Train Your Dragon",
    clue: "An animated film about a young Viking who befriends a dragon.",
  },
  {
    title: "Logan",
    clue: "An intense, gritty superhero film featuring the character Wolverine in his final adventure.",
  },
  {
    title: "The Godfather",
    clue: "A crime epic about the powerful Corleone mafia family.",
  },
];

let tvShowsArray = [
  {
    title: "Breaking Bad",
    clue: "A chemistry teacher turned methamphetamine manufacturer teams up with a former student.",
  },
  {
    title: "Chernobyl",
    clue: "A miniseries that dramatizes the 1986 nuclear disaster and its aftermath.",
  },
  {
    title: "You",
    clue: "A psychological thriller about a charming yet obsessive man who becomes fixated on women he falls in love with.",
  },

  {
    title: "Better Call Saul",
    clue: "A prequel to Breaking Bad, focusing on the evolution of lawyer Saul Goodman.",
  },
  {
    title: "Narcos",
    clue: "A crime drama about the rise of the cocaine trade and the efforts to take down notorious drug lords.",
  },
  {
    title: "Peaky Blinders",
    clue: "A British drama about a post-World War I gang family operating in Birmingham, England.",
  },
  {
    title: "Dark",
    clue: "A German sci-fi thriller revolving around time travel and the intertwined fates of four families.",
  },
  {
    title: "The Last of Us",
    clue: "A post-apocalyptic series following two survivors in a world ravaged by a fungal infection.",
  },
  {
    title: "The Boys",
    clue: "A dark, satirical take on superheroes, revealing their corrupt and violent nature.",
  },
  {
    title: "Prison Break",
    clue: "A series about two brothers, one of whom is wrongfully imprisoned, plotting an escape from prison.",
  },
];

let categoryBtn = document.querySelectorAll(".categoryBtn");
let categoryContainer = document.querySelector(".categoryContainer");
let gameContainer = document.querySelector(".gameContainer");
let categoryName = document.getElementById("categoryName");
let mylives = document.getElementById("mylives");
let hold = document.getElementById("hold");
let alphabetButtonsContainer = document.getElementById("alphabetButtons");
let gameOver = document.querySelector(".gameOver");
let hangmanSquare = document.querySelector(".hangmanSquare");
let containerButtons = document.querySelector(".containerButtons");
let playAgain = document.querySelectorAll(".playAgain");
let winnerContainer = document.querySelector(".winnerContainer");
let winnerParagraph = document.querySelector(".winnerParagraph");
let loserParagraph = document.querySelector(".loserParagraph");
let hint = document.querySelector("#hint");
let clue = document.querySelector("#clue");
let selectedArray;

// Canvas setup for hangman drawing
const canvas = document.getElementById("stickman");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";

const baseY = 180;
const baseXStart = 40;
const baseXEnd = 260;
const poleHeight = 180;
const beamLength = 110;
const ropeLength = 30;
const headRadius = 15;
const bodyLength = 50;
const armLength = 30;
const legLength = 40;

/**
 * Draws a straight line on the canvas.
 * @param {number} x1 - Starting X coordinate.
 * @param {number} y1 - Starting Y coordinate.
 * @param {number} x2 - Ending X coordinate.
 * @param {number} y2 - Ending Y coordinate.
 */

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

/**
 * Draws a circle on the canvas.
 * @param {number} x - X coordinate of the circle's center.
 * @param {number} y - Y coordinate of the circle's center.
 * @param {number} radius - Radius of the circle.
 */

function drawCircle(x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}

//Draws the gallows for the hangman game.
function drawGallows() {
  drawLine(baseXStart, baseY, baseXEnd, baseY);
  drawLine(baseXStart, baseY, baseXStart, baseY - poleHeight);
  drawLine(
    baseXStart,
    baseY - poleHeight,
    baseXStart + beamLength,
    baseY - poleHeight
  );
  drawLine(
    baseXStart + beamLength,
    baseY - poleHeight,
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength
  );
}

function drawHead() {
  drawCircle(
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + headRadius,
    headRadius
  );
}

function drawBody() {
  drawLine(
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + 2 * headRadius,
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + bodyLength
  );
}

function drawLeftArm() {
  drawLine(
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + 10,
    baseXStart + beamLength - armLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + 20
  );
}

function drawRightArm() {
  drawLine(
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + 10,
    baseXStart + beamLength + armLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + 20
  );
}

function drawLeftLeg() {
  drawLine(
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + bodyLength,
    baseXStart + beamLength - legLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + bodyLength + legLength
  );
}

function drawRightLeg() {
  drawLine(
    baseXStart + beamLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + bodyLength,
    baseXStart + beamLength + legLength,
    baseY - poleHeight + ropeLength + 2 * headRadius + bodyLength + legLength
  );
}

/**
 * Draws specific parts of the hangman based on remaining lives.
 * @param {number} livesLeft - The number of lives remaining.
 */

function drawHangman(livesLeft) {
  switch (livesLeft) {
    case 5:
      drawHead();
      break;
    case 4:
      drawBody();
      break;
    case 3:
      drawLeftArm();
      break;
    case 2:
      drawRightArm();
      break;
    case 1:
      drawLeftLeg();
      break;
    case 0:
      drawRightLeg();
      break;
  }
}

/**
 * Initializes and starts the game based on the selected category.
 * @param {string} category - The selected category ("Movies" or "TV Shows").
 */

function startGame(category) {
  drawGallows();

  if (category === "Movies") {
    selectedArray = movieArray;
  } else {
    selectedArray = tvShowsArray;
  }

  winnerContainer.style.display = "none";
  categoryContainer.style.display = "none";
  gameContainer.style.display = "block";
  hangmanSquare.style.display = "block";
  containerButtons.style.display = "block";
  categoryName.innerText = `The Chosen Category is ${category}`;
  mylives.innerText = `You have ${lives} lives`;

  gameWord = selectedArray[Math.floor(Math.random() * selectedArray.length)];
  hold.innerHTML = "";

  gameWord.title.split("").forEach((char) => {
    let character = document.createElement("div");
    character.className = "hiddenWord";
    if (char === " ") {
      character.innerText = " ";
    } else {
      character.innerText = "_";
    }
    hold.appendChild(character);
  });
}

categoryBtn.forEach((button) => {
  button.addEventListener("click", function () {
    startGame(this.innerText);
  });
});

//Checks if the player has guessed all letters and won the game.
function checkForWin() {
  let hiddenLetters = document.querySelectorAll(".hiddenWord");
  const allGuessed = Array.from(hiddenLetters).every(
    (letter) => letter.innerText !== "_"
  );

  if (allGuessed && lives > 0) {
    hangmanSquare.style.display = "none";
    gameContainer.style.display = "none";
    containerButtons.style.display = "none";
    gameOver.style.display = "none";
    winnerContainer.style.display = "block";
    winnerContainer.style.marginTop = "70px";
    winnerParagraph.innerText = `The word is ${gameWord.title}`;
    winnerContainer.insertBefore(
      winnerParagraph,
      winnerContainer.querySelector(".playAgain")
    );
  }
}

/**
 * Handles letter button click events.
 * @param {HTMLElement} button - The clicked letter button.
 */

function handleLetterClick(button) {
  let letter = button.innerText;
  clickedLetters.push(letter);
  button.disabled = true;

  let hiddenLetters = document.querySelectorAll(".hiddenWord");
  const letterIndexes = [];

  if (gameWord.title.toLowerCase().includes(letter)) {
    for (let i = 0; i < gameWord.title.length; i++) {
      const char = gameWord.title[i];
      if (char.toLowerCase() === letter) {
        letterIndexes.push({
          index: i,
          isUpperCase: char === char.toUpperCase(),
        });
      }
    }

    for (const letterData of letterIndexes) {
      if (letterData.isUpperCase) {
        hiddenLetters[letterData.index].innerText = letter.toUpperCase();
      } else {
        hiddenLetters[letterData.index].innerText = letter;
      }
    }
  } else {
    lives--;
    mylives.innerText = `You have ${lives} lives`;
    drawHangman(lives);
  }
  checkForWin();
  if (lives <= 0) {
    hangmanSquare.style.marginTop = "50px";
    gameContainer.style.display = "none";
    containerButtons.style.display = "none";
    gameOver.style.display = "block";
    gameOver.style.marginTop = "50px";
    loserParagraph.innerText = `The word is ${gameWord.title}`;
    document.body.appendChild(gameOver);
  }
}

for (let i = 0; i < letters.length; i++) {
  let button = document.createElement("button");
  button.innerText = letters[i];
  button.className = "alphabetButton";

  button.addEventListener("click", function () {
    handleLetterClick(button);
  });

  alphabetButtonsContainer.appendChild(button);
}

playAgain.forEach(function (button) {
  button.addEventListener("click", function () {
    gameContainer.style.display = "none";
    containerButtons.style.display = "none";
    gameOver.style.display = "none";
    categoryContainer.style.display = "block";
    winnerContainer.style.display = "none";
    hangmanSquare.style.display = "none";
    clue.innerHTML = "Clue - ";
    hint.disabled = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGallows();

    lives = 6;
    clickedLetters = [];
    mylives.innerText = `You have ${lives} lives`;

    let alphabetButtons = document.querySelectorAll(".alphabetButton");
    alphabetButtons.forEach((button) => {
      button.disabled = false;
    });
  });
});

hint.addEventListener("click", function () {
  const currentGame = selectedArray.find(
    (item) => item.title === gameWord.title
  );

  clue.innerHTML += `${currentGame.clue}`;
  hint.disabled = true;
});
