//requires
require('import-export');
const readline = require('readline');

const Mobile = require('./mobile.js');
const Samsung = require('./samsung.js');


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
			// rl.close();
// });

const samsung = new Samsung(123, [123, 124], 'samsung is working');

samsung.makeSingleCall(123);
samsung.makeConferenceCall([123,456,789]);
