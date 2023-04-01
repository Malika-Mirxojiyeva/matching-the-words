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
const typingInput = document.querySelector(".typing-input");
function randomWord() {
    //getting random object from wordList
    var ranObj = wordList[Math.floor(Math.random() *wordList.length)];
    var word = ranObj.word;
    console.log(word);

    hint.innerText = ranObj.hint;

    var html = "";
    for (let i = 0; i < word.length; i++){
        html += '<input type="text" disabled maxlength="1">';
    }

    document.querySelector('.inputs').innerHTML = html;
}

randomWord();

function initgame(e) {
    let 
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());
