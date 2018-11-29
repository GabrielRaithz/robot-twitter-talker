
const request = new require('request');

//call sentiment analysis
request('http://localhost:8081/readSentiment/'+'damn', function (error, response_sent, body) {
    console.log("sentiment in the listener / a " +  response_sent.body);
    return;
});
