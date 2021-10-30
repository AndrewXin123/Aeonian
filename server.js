// setup and connect to twilio account
// account SID and Auth Token can be found at twilio.com/console
const accountSid = 'AC1cb322eb82f1b833d21e4f43748b56c2';
const authToken = '6394cfdaa521ab36d1882b39443a9642';
const client = require('twilio')(accountSid, authToken);

// http communication between html client and node server 
const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')

console.log("imported dependencies and set up messaging");

// server listens on port 3000
var port = 3000;

app.listen(port, function() {
  console.log('We are listening on port ' + port);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/num', function(req, res) {
  var num = req.body.value;
  console.log(num);
  client.messages
  .create({
     body: 'Your phone number has been registered!',
     from: '+13253081767',
     to: num
   })
  .then(message => console.log(message.sid));
  return res.end('done');
});

// weeklyRecap() {
//     let num = "6503814944"
//   let d = new Date();
//   let day = d.getDay();
//   if (day == 0) {
//     let message = "Your weekly recap!\n";
//     message = message + "You met your budgeting goals for the week! ";
//     client.messages
//     .create({
//       body: message,
//       from: '+13253081767',
//       to: num
//     })
//   .then(message => console.log(message.sid));
//   return res.end('done');
//   }
// }

// notifySuspicious() {
//     let num = "6503814944";
//     let message = "Suspicious financial activity was detected.\n";
//     client.messages
//     .create({
//       body: message,
//       from: '+13253081767',
//       to: num
//     })
//   .then(message => console.log(message.sid));
//   return res.end('done');
// }

// http requesting code from https://hub.packtpub.com/how-use-xmlhttprequests-send-post-server/