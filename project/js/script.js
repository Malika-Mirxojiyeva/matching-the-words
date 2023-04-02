const wordList = [
    {
      word: "run",
      hint: "yugurmoq"
    },
    {
      word: "afraid",
      hint: "qo'rqmoq"
    },
    {
      word: "name",
      hint: "ism"
    }
  ];
  
  const inputs = document.querySelector(".inputs");
  const resetBtn = document.querySelector(".reset-btn");
  const hint = document.querySelector(".hint span");
  const guessLeft = document.querySelector(".guess-left span");
  const wrongLetter = document.querySelector(".wrong-letter span");
  
  let word = "";
  let wrongLetters = [];
  let remainingGuesses = 10;
  
  function randomWord() {
    //getting random object from wordList
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
  
    hint.innerText = ranObj.hint;
  
    let html = "";
    for (let i = 0; i < word.length; i++) {
      html += '<input type="text" class="typing-input" maxlength="1" id="typing-input"> ';
    }
  
    inputs.innerHTML = html;
    wrongLetters = [];
    remainingGuesses = 10;
    guessLeft.innerText = remainingGuesses;
    wrongLetter.innerText = "";
  }
  
  function initGame(e) {
    let key = e.target.value;
    if (key) {
      if (word.includes(key)) {
        let inputsArray = document.querySelectorAll(".typing-input");
        inputsArray.forEach((input, index) => {
          if (word[index] === key) {
            input.value = key;
          }
        });
  
        if (!inputs.innerHTML.includes('class="typing-input"')) {
          console.log("You won!");
          guessLeft.innerText = "0";
        }
      } else {
        if (wrongLetters.includes(key)) {
          return;
        }
        wrongLetters.push(key);
        wrongLetter.innerText = wrongLetters.join(", ");
        remainingGuesses--;
        guessLeft.innerText = remainingGuesses;
        if (remainingGuesses === 0) {
          console.log("You lost!");
          guessLeft.innerText = "0";
        }
      }
    }
  }
  
  function resetGame() {
    randomWord();
  }
  
  inputs.addEventListener("keyup", initGame);
  resetBtn.addEventListener("click", resetGame);
  
  randomWord();
  