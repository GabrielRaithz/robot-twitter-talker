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
        var word = words[i].toLowerCase().toString();
		console.log(word);
		if(word == "not" || word == "no"|| word == "don" || word == "doesn") {
            keys ++;
        }
        if(afinn.hasOwnProperty(word)){
            let score = afinn[word];
            totalscore += Number(score);
            scoredwords.push(word + ': ' + score);
        }
    }

	console.log("keys score = " + keys);
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

try{
	app.listen(8081);
	console.log('sentimenter here ^_^ a');
}catch(err){
	err.toString()
}
