console.log('twitter works !');

// Importing the Twit package.
var Twit = require('twit');
// config for keys
var config = require('../config')
    // sentiment analysis package
var sentiment = require('sentiment');
var T = new Twit(config.twit)

// q = suicide OR (Kill AND myself)
params = {
    q: '?=suicide?|(?=kill)(?=myself) since:2017-12-01',
    count: 10
}

T.get('search/tweets', params, searchCallback)

function searchCallback(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
        var k = sentiment(tweets[i].text)
        if (k.score < -2) {
            console.dir(k);
        }
    }
}