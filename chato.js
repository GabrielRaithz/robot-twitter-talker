const RiveScript = require('rivescript');
const express = require('express');
let app = express();
let bot = new RiveScript();


bot.loadDirectory("./brain").then(loading_done).catch(loading_error);

function loading_done() {
    bot.sortReplies();
    app.get("/askBot/:text", function (request, response) {
        console.log(request.params.text);
        return bot.reply("local-user", request.params.text).then(function (reply) {
            let answer = "The bot says: " + reply;
            console.log(answer);
            response.send(answer);
        });
    })
}

function loading_error(error, filename, lineno) {
    console.log("Error when loading files: " + error);
}

try{
	app.listen(8080);
	console.log("IT'S ALIVE!!");
}catch(err){
	err.toString()
}
