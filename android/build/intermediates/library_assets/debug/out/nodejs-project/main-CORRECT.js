var fs = require('fs');
var os = require('os');
const express = require('express');
const app = express();
//var rn_bridge = require('rn-bridge');
var path = require('path');
var appDataDir = 'abc'; //rn_bridge.app.datadir();

//const odir = os.tmpdir();
var Datastore = require('nedb'),
  db = new Datastore({filename: `${appDataDir}/root.db`});
db.loadDatabase(function(err) {
  // Callback is optional
  // Now commands will be executed
});

var doc = {
  _id: '1',
  hello: 'world',
  n: 5,
  today: new Date(),
  nedbIsAwesome: true,
  notthere: null,
  notToBeSaved: undefined, // Will not be saved
  fruits: ['apple', 'orange', 'pear'],
  infos: {name: 'nedb'},
};

db.insert(doc, function(err, newDoc) {
  // Callback is optional
  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});
var data = 'New File Contents';

// app.get('/', function(req, res) {
//   res.sendFile(path.resolve(`../*`));
// });
app.use('/static', express.static(`${__dirname}/public`));

app.get('/write', (req, res) => {
  res.send('write');
  fs.writeFile(`${appDataDir}/tempfile.txt`, data, err => {
    if (err) console.log(err);
    console.log('Successfully Written to File.');
  });
});

app.get('/read', (req, res) => {
  db.find({hello: 'world'}, function(err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    res.send(JSON.stringify(docs));
  });

  // fs.readFile(`${appDataDir}/tempfile.txt`, 'utf-8', (err, data) => {
  //   console.log(data);
  //   res.send(data);
  // });
});

app.listen(3000);
