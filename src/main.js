//requires
require('import-export');
const readline = require('readline');

const Mobile = require('./mobile.js');
const Samsung = require('./samsung.js');
const Nokia = require('./nokia.js');
const IPhone = require('./iphone.js');
const Infinix = require('./infinix.js');


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

const samsung = new Samsung("070312", [123, 124], 'samsung is working');
const nokia = new Nokia("070612", [789, 765], 'nokia is working');
const iphone = new IPhone("070612", [789, 765], 'nokia is working');
const infinix = new Infinix("070612", [789, 765], 'nokia is working');

samsung.makeSingleCall(123);
samsung.makeConferenceCall([123,456,789]);

nokia.makeSingleCall(123);
nokia.makeConferenceCall([123,456,789]);

iphone.makeSingleCall(123);
iphone.makeConferenceCall([123,456,789]);

infinix.makeSingleCall(123);
infinix.makeConferenceCall([123,456,789]);
