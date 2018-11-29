const afinn = require('./afinn111.json');
const express = require('express');
let app = express();

function sentimentReader(text) {
    var txt = text;
    var wordsInput = txt;
    var words = wordsInput.split(/\W/);
    var totalscore = 0;
    var scoredwords = [];
    var keys = 0;

    for(let i = 0; i < words.length; i++){
        var word = words[i].toLowerCase();
        if(afinn.hasOwnProperty(word)){
            let score = afinn[word];
            totalscore += Number(score);
            if(word == "not" || word.toString() == "no") {
                keys ++;
            }
            scoredwords.push(word + ': ' + score);
        }
    }

    for(let i = 0; i < keys; i++){
        totalscore = (totalscore * -1);
    }
    return totalscore;
}

app.get("/readSentiment/:text", function (request, response) {
    console.log(request.params.text);
    let sent = sentimentReader(request.params.text);
    console.log(sent);
    response.send(sent.toString());
});

app.listen(8081);
