function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() *wordList.length)];
    console.log(ranObj);
}
randomWord();