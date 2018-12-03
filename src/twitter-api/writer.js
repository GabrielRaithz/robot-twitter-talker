const Twit = require('twit');
const config = require('./config.js');
const T = new Twit(config);
const express = require('express');
let app = express();


function tweetIt(postThis, reply_status) {
    console.log("reply id: " + reply_status);
    var postParam = {
        status: postThis,
        in_reply_to_status_id: reply_status,
        auto_populate_reply_metadata: true
    };

    T.post('statuses/update', postParam, postTweet);

    function postTweet(err, data, response){
        if(err){
            console.log("something went wrrooong!" + err.toString());
        }else {
            console.log(data);
        }
    }
}

app.get("/tweetIt/:text/:from", function (request_, response) {
    console.log("say: " + request_.params.text + " to: " + request_.params.from);
    tweetIt(request_.params.text, request_.params.from);
})

try{
	app.listen(8082);
	console.log('Writer up Sir!');
}catch(err){
	err.toString()
}