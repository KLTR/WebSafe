var config = require('../config')

var rawjs = require('raw.js');
var sentiment = require('sentiment');

var reddit = new rawjs("raw.js SafeWeb Script");
var MS_PER_MINUTE = 60000;
var res_array = [];

// reddit.setupOAuth2("CEgF6T2RjZD7dA", "y6T_wdIFtjV_R2ZeBJ5ZupO03fc", "https://pacific-eyrie-76182.herokuapp.com/");

// reddit.auth({ "username": "roylevyz", "password": "AaAa1234" }, function(err, response) {
//     if (err) {
//         console.log("Unable to authenticate user: " + err);
//     } else {
//         console.log('success')
//         var d = new Date();
//         var t = (d - 1000 * MS_PER_MINUTE);
//         console.log(t)
//         let options = {
//             // q: '?=suicide?|(?=kill)(?=myself)',
//             q: '((kill myself) OR suicide OR (i want to die)) NOT tried',
//             t: t
//         };
//         reddit.search(options, function(err, res) {
//             if (err) {
//                 console.log('err', err);
//             } else {
//                 for (let i = 0; i < res.children.length; i++) {
//                     // create objects to send to MONGO
//                     var k = sentiment(res.children[i].data.selftext)
//                     if (k.score < 0) {
//                         let alert = {
//                                 display_name: res.children[i].data.author,
//                                 link_to_post: res.children[i].data.url,
//                                 content: res.children[i].data.title,
//                                 network: 'reddit',
//                                 time_posted_by_user: res.children[i].data.created_utc,
//                                 time_created: new Date(),
//                                 confidence: k.score
//                             }
//                             // console.log(alert);
//                         res_array.push(alert);
//                     }

//                     // send objects to mongo
//                 }
//                 getAlerts();
//             }
//         })

//     }
// });

var getAlerts = function() {

    reddit.setupOAuth2("CEgF6T2RjZD7dA", "y6T_wdIFtjV_R2ZeBJ5ZupO03fc", "https://pacific-eyrie-76182.herokuapp.com/");

    reddit.auth({ "username": "roylevyz", "password": "AaAa1234" }, function(err, response) {
        if (err) {
            console.log("Unable to authenticate user: " + err);
        } else {
            console.log('success')
            var d = new Date();
            var t = (d - 1000 * MS_PER_MINUTE);
            console.log(t)
            let options = {
                // q: '?=suicide?|(?=kill)(?=myself)',
                q: '((kill myself) OR suicide OR (i want to die)) NOT tried',
                t: t
            };
            reddit.search(options, function(err, res) {
                if (err) {
                    console.log('err', err);
                } else {
                    for (let i = 0; i < res.children.length; i++) {
                        // create objects to send to MONGO
                        var k = sentiment(res.children[i].data.selftext)
                        if (k.score < 0) {
                            let alert = {
                                    display_name: res.children[i].data.author,
                                    link_to_post: res.children[i].data.url,
                                    content: res.children[i].data.title,
                                    network: 'reddit',
                                    time_posted_by_user: res.children[i].data.created_utc,
                                    time_created: new Date(),
                                    confidence: k.score
                                }
                                // console.log(alert);
                            res_array.push(alert);
                        }
                        console.log('from reddit.js', res_array);
                        return (res_array);
                        // send objects to mongo
                    }
                }
            })
        }
    });
}

module.exports = {
    getAlerts: getAlerts
}



// const snoowrap = require('snoowrap');

// const r = new snoowrap(config.reddit);
// var res;

// r.getSubmission('https://www.reddit.com/new/').expandReplies({ limit: Infinity, depth: Infinity }).selftext_html.then(console.log)