var letter = require("./Letters.js");

var Word = function (){
    
};

Word.prototype.generateWord = function () {
    rand = Math.floor(Math.random() * letter.wordArr.length);
    word = letter.wordArr[rand];
    console.log(word);
};

