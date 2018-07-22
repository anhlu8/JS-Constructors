var Letter = function (stringVal, wordArr , beenGuessed) {
    this.underscore = [];
    this.wordArr = ["bazinga", "scaredy-cat", "javascript", "margaritaville"];
    this.beenGuessed = false;
};

Letter.prototype.generateUnderscore = function(){
    for (var i = 0; i<this.word.length; i++){
        this.underscore.push("_");
    }
    return this.underscore;
};

Letter.generateWord();
Letter.generateUnderscore();

module.exports = Letter;