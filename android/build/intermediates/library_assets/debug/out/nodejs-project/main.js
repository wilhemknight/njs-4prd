var fs = require('fs');
var os = require('os');
const express = require('express');
const app = express();
var rn_bridge = require('rn-bridge');
var path = require('path');
//var appDataDir = 'abc'; //rn_bridge.app.datadir();
var appDataDir = rn_bridge.app.datadir();

//const odir = os.tmpdir();
const Database = require('./skv.js')

const db_skv = new Database({
  root: `${appDataDir}/skv`,
  maxDirs: 20,
  // maxDirs: 1e4
});
var Datastore = require('nedb'),
  db = new Datastore({ filename: `${appDataDir}/root.db` });
db.loadDatabase(function (err) {
  // Callback is optional
  // Now commands will be executed
});

//const { ClassicLevel } = require('classic-level')
//var lmdb = require('node-lmdb');
// const levelup = require("levelup");
// const leveldown = require("leveldown-nodejs-mobile");

// Create a database
//const db_level = new ClassicLevel(`${appDataDir}/level_db_folder`, { valueEncoding: 'json' })

var doc = {
  _id: '1',
  hello: 'world',
  n: 5,
  today: new Date(),
  nedbIsAwesome: true,
  notthere: null,
  notToBeSaved: undefined, // Will not be saved
  fruits: ['apple', 'orange', 'pear'],
  infos: { name: 'nedb' },
};
db.insert(doc, function (err, newDoc) {
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
  db.find({ hello: 'world' }, function (err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    res.send(JSON.stringify(docs));
  });

  // fs.readFile(`${appDataDir}/tempfile.txt`, 'utf-8', (err, data) => {
  //   console.log(data);
  //   res.send(data);
  // });
});

app.get('/read-level', async (req, res) => {
  //return res.send('Hello World!')
  try {

    var example = {
      id: "12345",
      username: 'test',
      posts: 54,
      tags: ['green', 'red', 'blue']
    };

    await db_skv.set(example.id, example);

    await db_skv.set(example.id, example);

    const val = await db_skv.get(example.id);
    res.send(val)

    // let db_level = levelup(leveldown(`${appDataDir}/level_db_folder`), { createIfMissing: false });

    //await db_level.put('a_val', 'Helo From DB')
    //var val = await db_level.get('a_val')
    //res.send(String(val))
    // await db.put('a', 1)
    // // Add multiple entries
    // await db.batch([{ type: 'put', key: 'b', value: 2 }])
    // // Get value of key 'a': 1
    // const value = await db.get('a')
    // // Iterate entries with keys that are greater than 'a'
    // for await (const [key, value] of db.iterator({ gt: 'a' })) {
    //   console.log(value) // 2
    // }
  } catch (error) {
    console.log(error)
    return
  }
})

app.listen(3000, '0.0.0.0');
