// // // // // // // // // Rename this sample file to main.js to use on your project.
// // // // // // // // // The main.js file will be overwritten in updates/reinstalls.

// // // // // // // // //var rn_bridge = require('rn-bridge');
// // // // // // // // var https = require('https');
// // // // // // // // const express = require('express');
// // // // // // // // const CONSTANTS = require('./CONSTANTS/index.constants.js');
// // // // // // // // const axios = CONSTANTS.axios;
// // // // // // // // const app = express();

// // // // // // // // var aval = 'hello';

// // // // // // // // https.get(
// // // // // // // //   'https://google.com',
// // // // // // // //   {'user-agent': 'curl/7.22.0', host: '127.0.0.1:8000', accept: '*/*'},
// // // // // // // //   res => {
// // // // // // // //     console.log(res.data);
// // // // // // // //   },
// // // // // // // // );

// // // // // // // // //create a server object:

// // // // // // // // app.get('/send_recv', (req, res) => {
// // // // // // // //   console.log(req.body);
// // // // // // // //   res.end();
// // // // // // // // });

// // // // // // // // app.post('/send_recv', (req, res) => {
// // // // // // // //   console.log(req.body);
// // // // // // // //   res.end();
// // // // // // // // });
// // // // // // // // console.log(CONSTANTS.val);
// // // // // // // // // Echo every message received from react-native.
// // // // // // // // // rn_bridge.channel.on('message', msg => {
// // // // // // // // //   // http
// // // // // // // // //   //   .createServer(function(req, res) {
// // // // // // // // //   //     res.write(`Running Application of a ${msg} Device`); //write a response to the client
// // // // // // // // //   //     res.end(); //end the response
// // // // // // // // //   //   })
// // // // // // // // //   //   .listen(8080); //the server object listens on port 8080

// // // // // // // // //   /**
// // // // // // // // //    * To Manage Message use If Statement to analyize file types
// // // // // // // // //    */

// // // // // // // // //   //rn_bridge.channel.send(msg);
// // // // // // // // // });

// // // // // // // // // Inform react-native node is initialized.
// // // // // // // // //rn_bridge.channel.send("Node was initialized.");
// // // // // // // var express = require('express');
// // // // // // // var app = express();
// // // // // // // var path = require('path');
// // // // // // // var rn_bridge = require('rn-bridge');
// // // // // // // var leveldown = require('leveldown');
// // // // // // // var appDataDir = rn_bridge.app.datadir();
// // // // // // // var db = leveldown(path.join(appDataDir, 'db'));

// // // // // // // function checkForErrors(err) {
// // // // // // //   if (err) {
// // // // // // //     console.error(err);
// // // // // // //     return;
// // // // // // //     //   process.exit(1);
// // // // // // //   }
// // // // // // // }

// // // // // // // //app.use('/static', express.static('public'));
// // // // // // // app.get('/:post', (req, res) => {
// // // // // // //   res.send(`${req.params.post}`);

// // // // // // //   try {
// // // // // // //     (async () => {
// // // // // // //       await db.put('post', req.params.post, async err => {
// // // // // // //         if (err) throw err;

// // // // // // //         await db.get('post', {asBuffer: false}, (err, value) => {
// // // // // // //           if (err) throw err;
// // // // // // //           //console.log(value) // 'you'
// // // // // // //         });
// // // // // // //       });
// // // // // // //     })();
// // // // // // //   } catch (error) {
// // // // // // //     return;
// // // // // // //   }
// // // // // // //   // db.open(err1 => {
// // // // // // //   //   checkForErrors(err1);
// // // // // // //   //   db.get('counter', {asBuffer: false}, (err2, val) => {
// // // // // // //   //     var nextVal = !val ? '10' : String(Number(val) + 1);
// // // // // // //   //     db.put('counter', nextVal, err3 => {
// // // // // // //   //       checkForErrors(err3);
// // // // // // //   //       db.close(err4 => {
// // // // // // //   //         checkForErrors(err4);
// // // // // // //   //         rn_bridge.channel.send(nextVal);
// // // // // // //   //       });
// // // // // // //   //     });
// // // // // // //   //   });
// // // // // // //   // });
// // // // // // // });
// // // // // // // app.get('/dvVal', (req, res) => {
// // // // // // //   try {
// // // // // // //     (async () => {
// // // // // // //       await db.get('post', {asBuffer: false}, (err, value) => {
// // // // // // //         if (err) {
// // // // // // //           return res.send('error');
// // // // // // //           return;
// // // // // // //           throw err;
// // // // // // //         }
// // // // // // //         return res.send(value);
// // // // // // //         //console.log(value) // 'you'
// // // // // // //       });
// // // // // // //     })();
// // // // // // //   } catch (error) {
// // // // // // //     return;
// // // // // // //   }
// // // // // // // });

// // // // // // // app.listen(3000);
// // // // // // const fudb = require('./fudb');
// // // // // // var express = require('express');
// // // // // // var app = express();
// // // // // // var path = require('path');
// // // // // // //var rn_bridge = require('rn-bridge');
// // // // // // //var leveldown = require('leveldown');
// // // // // // //  var appDataDir = rn_bridge.app.datadir();
// // // // // // // var db = leveldown(path.join(appDataDir, 'db'));
// // // // // // var appDataDir = 'here'; //rn_bridge.app.datadir();
// // // // // // const createDoubledb = require('doubledb');
// // // // // // const doubledb = createDoubledb(appDataDir);

// // // // // // /**
// // // // // //  * const fn = async itemNum => {
// // // // // //   const db = await fudb.Create(appDataDir, 'name');
// // // // // //   for (let i = 0; i < itemNum; i += 1) {
// // // // // //     await db.put({
// // // // // //       name: `funer80900090009${i}`,
// // // // // //       sex: `${{0: 'female', 1: 'male', 2: 'shemale'}[i % 3]}`,
// // // // // //       className: `super${i}`,
// // // // // //     }); // eslint-disable-line
// // // // // //   }
// // // // // //   await db.flush();
// // // // // // };
// // // // // // fn(100);
// // // // // //  */
// // // // // // const valz = 'hello';
// // // // // // app.get('/pt/:post', (req, res) => {
// // // // // //   try {
// // // // // //     res.send(String(req.params.post));
// // // // // //     (async () => {
// // // // // //       doubledb.insert({
// // // // // //         id: String(req.params.post), // defaults to uuid, must be unique
// // // // // //         firstName: 'Joe',
// // // // // //         lastName: 'Bloggs',
// // // // // //         stats: {
// // // // // //           wins: 10,
// // // // // //           loses: 5,
// // // // // //         },
// // // // // //         skills: ['cooking', 'running'],
// // // // // //       });

// // // // // //       // const db = await fudb.Create(appDataDir, 'name'); // name is the key for this datastore
// // // // // //       // await db.put({
// // // // // //       //   name: `funer80900090009${1}`,
// // // // // //       //   sex: `${{0: 'female', 1: 'male', 2: 'shemale'}[1 % 3]}`,
// // // // // //       //   className: `super${1}`,
// // // // // //       // });
// // // // // //     })();
// // // // // //   } catch (error) {
// // // // // //     return;
// // // // // //   }
// // // // // // });

// // // // // // app.get('/gt/:post', (req, res) => {
// // // // // //   try {
// // // // // //     //res.send(String(req.params.post));
// // // // // //     (async () => {
// // // // // //       try {
// // // // // //         // const db = await fudb.Connect(appDataDir);
// // // // // //         // const result = await db.findByKey('name', `funer80900090009${1}`);
// // // // // //         // console.log(result);
// // // // // //         // res.send(result);

// // // // // //         doubledb.get(String(req.params.post));
// // // // // //       } catch (error) {
// // // // // //         console.log(error);
// // // // // //         return;
// // // // // //       }
// // // // // //     })();
// // // // // //   } catch (error) {
// // // // // //     return;
// // // // // //   }
// // // // // // });

// // // // // // app.listen(8080);
// // // // // var appDataDir = 'here'; //rn_bridge.app.datadir();
// // // // // const {EJDB2} = require('ejdb2_node');
// // // // // const express = require('express');
// // // // // const app = express();
// // // // // async function run() {
// // // // //   const db = await EJDB2.open(appDataDir, {truncate: true});

// // // // //   var id = await db.put('parrots', {name: 'Bianca', age: 4});
// // // // //   console.log(`Bianca record: ${id}`);

// // // // //   id = await db.put('parrots', {name: 'Darko', age: 8});
// // // // //   console.log(`Darko record: ${id}`);

// // // // //   const q = db.createQuery('/[age > :age]', 'parrots');

// // // // //   for await (const doc of q.setNumber('age', 3).stream()) {
// // // // //     console.log(`Found ${doc}`);
// // // // //   }

// // // // //   await db.close();
// // // // // }

// // // // // run();

// // // // // app.get('/pt/:post', (req, res) => {
// // // // //   res.send(req.params.post);
// // // // //   (async () => {
// // // // //     async function run() {
// // // // //       const db = await EJDB2.open(appDataDir, {truncate: true});

// // // // //       var id = await db.put(`${req.params.post}`, {
// // // // //         id: `${req.params.post}`,
// // // // //         name: 'Bianca',
// // // // //         age: 4,
// // // // //       });
// // // // //       //console.log(`Bianca record: ${id}`);

// // // // //       // id = await db.put('parrots', {name: 'Darko', age: 8});
// // // // //       // console.log(`Darko record: ${id}`);

// // // // //       await db.close();
// // // // //     }

// // // // //     run();
// // // // //   })();
// // // // // });

// // // // // app.get('/pt/:post', (req, res) => {
// // // // //   //res.send(req.params.post);
// // // // //   (async () => {
// // // // //     async function run() {
// // // // //       const db = await EJDB2.open(appDataDir, {truncate: true});

// // // // //       //var id = await db.put(`${req.params.post}`, {name: 'Bianca', age: 4});
// // // // //       //console.log(`Bianca record: ${id}`);

// // // // //       var val = await db.get(`${req.params.post}`, bia);
// // // // //       console.log(val);
// // // // //       // id = await db.put('parrots', {name: 'Darko', age: 8});
// // // // //       // console.log(`Darko record: ${id}`);

// // // // //       await db.close();
// // // // //     }

// // // // //     run();
// // // // //   })();
// // // // // });

// // // // var fs = require('fs');
// // // // var crypto = require('crypto');

// // // // var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
// // // // var cipher = crypto.createCipher('aes-256-cbc', key);
// // // // var deCipher = crypto.createDecipher('aes-256-cbc', key);

// // // // var cipherRead = crypto.re;
// // // // fs.open('test.txt', 'w', function(err, file) {
// // // //   var input = fs.createReadStream('test.txt');
// // // //   var output = fs.createWriteStream('test.txt.enc');

// // // //   input.pipe(cipher).pipe(output);
// // // //   output.on('finish', function() {
// // // //     console.log('Encrypted file written to disk!');
// // // //   });
// // // //   if (err) throw err;
// // // //   console.log('Saved!');
// // // // });

// // // // fs.open('test.txt.enc', 'r', function(err, file) {
// // // //   var input = fs.createReadStream('test.txt.enc');
// // // //   var output = fs.createWriteStream('test.decrypted.txt');

// // // //   input.pipe(deCipher).pipe(output);
// // // //   // output.on('finish', function() {
// // // //   //   console.log('Decrypted file written to disk!');
// // // //   // });
// // // //   if (err) throw err;
// // // //   console.log('Saved!');
// // // // });

// // // // // const crypto = require('crypto');
// // // // // const Algorithm = 'aes-128-ecb';
// // // // // const fs = require('fs');

// // // // // function encryptFile(key, inputFile, outputFile) {
// // // // //   const inputData = fs.readFileSync(inputFile);
// // // // //   const cipher = crypto.createCipheriv(Algorithm, key, Buffer.alloc(0));
// // // // //   const output = Buffer.concat([cipher.update(inputData), cipher.final()]);
// // // // //   fs.writeFileSync(outputFile, output);
// // // // // }

// // // // // function decryptFile(key, inputFile, outputFile) {
// // // // //   const inputData = fs.readFileSync(inputFile);
// // // // //   const cipher = crypto.createDecipheriv(Algorithm, key, Buffer.alloc(0));
// // // // //   const output = Buffer.concat([cipher.update(inputData), cipher.final()]);
// // // // //   fs.writeFileSync(outputFile, output);
// // // // // }

// // // // // const KEY = Buffer.from('0123456789ABDCEF', 'utf8');

// // // // // fs.open('node-input.txt', 'w', function(err, file) {
// // // // //   encryptFile(KEY, file, 'node-output.txt');
// // // // //   if (err) throw err;
// // // // //   //   console.log('Saved!');
// // // // // });
// // // // // fs.open('node-output.txt', 'r', function(err, file) {
// // // // //   decryptFile(KEY, file, 'node-decrypted.txt');

// // // // //   if (err) throw err;
// // // // //   //   console.log('Saved!');

// // // // //   /**
// // // // //    * fs.unlink node-out.txt after decrypt
// // // // //    * output.txt after encryption
// // // // //    */
// // // // // });

// // // // Import module into your application
// // // const crypto = require('crypto');

// // // const algorithm = 'aes-192-cbc';
// // // const password = 'Password that was used to generate key';

// // // // We will first generate the key, as it is dependent on the algorithm.
// // // // In this case for aes192, the key is 24 bytes (192 bits).
// // // // We will use the async `crypto.scrypt()` instead for deciphering.
// // // const key = crypto.scryptSync(password, 'salt', 24);
// // // // The IV is usually passed along with the ciphertext.
// // // const iv = Buffer.alloc(16, 0); // Initialization vector.

// // // // Create decipher with key and iv
// // // const cipher = crypto.createDecipheriv(algorithm, key, iv);

// // // var deStr = "ABC"

// // // cipher.on
// // // // const decipher = crypto.createDecipheriv(algorithm, key, iv);

// // // // let decrypted = '';
// // // // decipher.on('readable', () => {
// // // //   while (null !== (chunk = decipher.read())) {
// // // //     decrypted += chunk.toString('utf8');
// // // //   }
// // // // });
// // // // decipher.on('end', () => {
// // // //   console.log(decrypted);
// // // //   // Prints: some clear text data
// // // // });

// // // // // Encrypted with same algorithm, key and iv.
// // // // const encrypted =
// // // //   'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
// // // // decipher.write(encrypted, 'hex');
// // // // decipher.end();

// // const {scrypt, randomFill, createCipheriv, createDecipheriv} = require('crypto');

// // const algorithm = 'aes-192-cbc';
// // const password = 'Password used to generate key';

// // // First, we'll generate the key. The key length is dependent on the algorithm.
// // // In this case for aes192, it is 24 bytes (192 bits).
// // scrypt(password, 'salt', 24, (err, key) => {
// //   if (err) throw err;
// //   // Then, we'll generate a random initialization vector
// //   randomFill(new Uint8Array(16), (err, iv) => {
// //     if (err) throw err;

// //     // Once we have the key and iv, we can create and use the cipher...
// //     const cipher = createCipheriv(algorithm, key, iv);

// //     let encrypted = '';
// //     cipher.setEncoding('hex');

// //     cipher.on('data', chunk => (encrypted += chunk));
// //     cipher.on('end', () => console.log(encrypted));

// //     cipher.write('some clear text data');
// //     cipher.end();
// //   });
// // });

// //Checking the crypto module
// const crypto = require('crypto');
// const algorithm = 'aes-256-cbc'; //Using AES encryption
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// //Encrypting text
// function encrypt(text) {
//   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//   let encrypted = cipher.update(text);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   return {iv: iv.toString('hex'), encryptedData: encrypted.toString('hex')};
// }

// // Decrypting text
// function decrypt(text) {
//   let iv = Buffer.from(text.iv, 'hex');
//   let encryptedText = Buffer.from(text.encryptedData, 'hex');
//   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
//   let decrypted = decipher.update(encryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// }

// // Text send to encrypt function
// var hw = encrypt('Welcome to Tutorials Point...');
// console.log(hw);
// console.log(decrypt(hw));
var fs = require('fs');
const express = require('express');
const app = express();
var rn_bridge = require('rn-bridge');
var appDataDir = rn_bridge.app.datadir();

var data = 'New File Contents';

app.get('/write', (req, res) => {
  res.send('write');
  fs.writeFile(`${appDataDir}/tempfile.txt`, data, err => {
    if (err) console.log(err);
    console.log('Successfully Written to File.');
  });
});

app.get('/read', (req, res) => {
  fs.readFile(`${appDataDir}/tempfile.txt`, 'utf-8', (err, data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(8080);
