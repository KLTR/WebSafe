const express = require('express');
const router = express.Router();
var schedule = require('node-schedule');
var config = require('../config')
var rawjs = require('raw.js');
var Twit = require('twit');
var T = new Twit(config.twit)
var sentiment = require('sentiment');
var firebase = require('firebase');
var reddit = new rawjs("raw.js SafeWeb Script");
var MS_PER_MINUTE = 60000;


var firebase_config = config.firebase
firebase.initializeApp(firebase_config)
let d = new Date()

console.log('started at @', d);
//* Schedulder

var j = schedule.scheduleJob('0 */2 * * *', function() {
    let d = new Date()
    console.log('updated alerts @', d.toString());
    getTwitterAlerts();
    getRedditAlerts();
});

getTwitterAlerts();
getRedditAlerts();
//* Twitter Query

// 120 minutes before
// no retweets


function getTwitterAlerts() {
    var d = new Date()
    var day = d.getUTCDay();
    if (day < 10) {
        day = '0' + day
    }
    var month = d.getUTCMonth() + 1; //months from 1-12
    if (month < 10) {
        month = '0' + month
    }
    var year = d.getUTCFullYear();

    date = year + '-' + month + '-' + day;
    console.log(date);
    var params = {
        q: `?=suicide?|(?=kill)(?=myself)| -filter:retweets AND -filter:replies&count=500&result_type=recent`,
        count: 100,
    }
    T.get('search/tweets', params, searchCallback)
}

function searchCallback(err, data, response) {
    var twitter_alerts = [];
    var tweets = data.statuses;
    if (tweets) {
        for (var i = 0; i < tweets.length; i++) {
            var k = sentiment(tweets[i].text)

            if (k.score < 0) {
                var url = '';
                var content = tweets[i].text
                if (findUrls(tweets[i].text)) {
                    url = findUrls(tweets[i].text);
                    content = tweets[i].text.slice(0, -23);
                }
                let tweetDate = new Date(tweets[i].created_at)
                let tweetHours = tweetDate.getHours();
                var d = new Date()
                var hoursNow = d.getHours()
                isRetweet = tweets[i].in_reply_to_status_id; //if this is null, this is not a retweet
                //! will get all posts in the last 2 hours and only will drop all retweets
                if (tweetHours >= hoursNow - 2 && tweetHours <= hoursNow && isRetweet) {
                    var tempDate = (tweets[i].created_at)
                    var year = new Date(tempDate).getFullYear();
                    let alert = {
                            post_id: tweets[i].id,
                            display_name: tweets[i].user.screen_name,
                            link_to_post: url,
                            content: content,
                            network: 'twitter',
                            time_posted_by_user: tempDate.slice(0, -10) + ' ' + year,
                            time_created: new Date(),
                            confidence: k.score * -1,
                            state: 'open',
                            img_url: tweets[i].user.profile_image_url,
                            user_location: tweets[i].user.location,
                            order: k.score

                        }
                        //check if the post already exists on firebase
                    firebase.database().ref(`alerts/${alert.post_id}`).once('value', snapshot => {
                        var exists = (snapshot.val() !== null);
                        if (!exists) {
                            firebase.database().ref(`twitter/${alert.post_id}`).update(alert);
                            firebase.database().ref(`alerts/${alert.post_id}`).update(alert);
                            twitter_alerts.push(alert);

                        }
                    })

                }
            }
        }
        console.log(twitter_alerts.length, 'new Twitter Post were updated ..')

        return twitter_alerts;
    } else {
        console.log('no tweets');
        return null;
    }

}


//* Reddit query

function getRedditAlerts() {
    reddit.setupOAuth2("CEgF6T2RjZD7dA", "y6T_wdIFtjV_R2ZeBJ5ZupO03fc", "https://pacific-eyrie-76182.herokuapp.com/");

    reddit.auth({ "username": "roylevyz", "password": "AaAa1234" }, function(err, response) {

        if (err) {
            console.log("Unable to authenticate user: " + err);
        } else {
            var d = new Date();
            // 120 minutes before
            let options = {
                // q: '?=suicide?|(?=kill)(?=myself)',
                q: '((kill myself) OR suicide OR (i want to die))',
                t: d.getDate()
            };
            reddit.search(options, function(err, res) {
                var reddit_alerts = [];
                if (err) {
                    console.log('err', err);
                } else {
                    for (let i = 0; i < res.children.length; i++) {
                        myDate = new Date(1000 * res.children[i].data.created);

                        // create objects to send to MONGO
                        var k = sentiment(res.children[i].data.selftext)
                        if (k.score < 0) {
                            let tempDate = (res.children[i].data.created);
                            let alert = {
                                    display_name: res.children[i].data.author,
                                    link_to_post: res.children[i].data.url,
                                    post_id: res.children[i].data.id,
                                    content: res.children[i].data.title,
                                    network: 'reddit',
                                    time_posted_by_user: myDate.toString(),
                                    time_created: new Date(),
                                    confidence: k.score * -1,
                                    state: 'open',
                                    order: k.score
                                }
                                //check if the post already exists on firebase
                            firebase.database().ref(`alerts/${alert.post_id}`).once('value', snapshot => {
                                var exists = (snapshot.val() !== null);
                                if (!exists) {
                                    reddit_alerts.push(alert);
                                    firebase.database().ref(`reddit/${alert.post_id}`).update(alert);
                                    firebase.database().ref(`alerts/${alert.post_id}`).update(alert);
                                }
                            })

                        }
                    }
                    console.log(reddit_alerts.length, 'new reddit Post were updated ..')
                    return (reddit_alerts);
                }
            })
        }
    });
    return;
}

//* Url finder. find url inside the twitter.text 
function findUrls(text, toRemove) {
    var source = (text || '').toString();
    var urlArray = [];
    var url;
    var matchArray;
    var res;
    // Regular expression to find FTP, HTTP(S) and email URLs.
    var regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)/g;

    // Iterate through any URLs in the text.
    while ((matchArray = regexToken.exec(source)) !== null) {
        var token = matchArray[0];
        res = token;
    }

    return res;
}
module.exports = router;