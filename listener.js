const Twit = require('twit');
const config = require('./config.js');
const request = new require('request');
const T = new Twit(config);

let stream = T.stream('statuses/filter', {track: '#chatobot'});

stream.on('tweet', tweetEvent);


function searchTweet(keySearch, times){
    var param = {
        q: keySearch,
        count: times
    }

    T.get('search/tweets',  param , gotData)

    function gotData(err, data, response){
        var tweets = data.statuses;
        for(var i = 0; i < tweets.length ; i++){
            console.log(tweets[i].text);
        }
    };
}

function tweetEvent(eventMsg) {
    //get the text and treat to call the bot
    let text = eventMsg.text;
    let from = eventMsg.id_str;
    text = text.toString().replace("#chatobot ", "");
    text = text.toString().replace("@SrGabriels", "");
    console.log(eventMsg);
    console.log("text getted: "+ text);
    console.log("from: " + from);


    //call sentiment analysis
    request('http://localhost:8081/readSentiment/'+text, function (error, response_sent, body) {
        let sent = response_sent.body;
        console.log("sentiment in the listener / " + sent);
        return;
    });

    //call bot
    let botmessage;
    request('http://localhost:8080/askBot/'+text, function (error, response_bot, body) {
        botmessage = response_bot.body;
        console.log("botmessage: " + botmessage);
        //tweet the answer
        request('http://localhost:8082/tweetIt/'+botmessage+"/"+from, function (error, response_tweet, body) {
            return;
        });
    });

}
