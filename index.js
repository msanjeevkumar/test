var SlackBot = require('slackbots');
var bot = new SlackBot({
	token: 'xoxb-20423989204-kcBf5SRQWKN3iM1t7eEtcU9N', // Add a bot https://my.slack.com/services/new/bot and put the token
	name: 'Fropcornian'
});

var http = require('http');


//bot.postMessageToChannel('devop', '<!channel> testing');


//bot.postMessageToChannel('devop', '<!channel> <http://grumaster.cloudapp.net:3000/#/client/Sensu/' + minion.minionId + '|' + minion.minionId + '> came online', null, null);

var sendMessage = function (number, message) {
if (!number || !message)
    return;

  var options = {
    "method": "GET",
    "hostname": "logpipesvm.cloudapp.net",
    "port": null,
    "path": "/api/sendMessage?mobileNo=" + number + "&message=" + encodeURIComponent(message)
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();

};

sendMessage('9030500259','Awesome! Just click on http://fropcorn.com to get started');


var isValid = function (mobile) {
  return (mobile.length === 10 && (mobile.startsWith('9') || mobile.startsWith('8') || mobile.startsWith('7')))
};