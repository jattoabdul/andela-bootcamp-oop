//requires
require('import-export');
const readline = require('readline');

const Mobile = require('./mobile.js');
const Samsung = require('./samsung.js');
const Nokia = require('./nokia.js');
const IPhone = require('./iphone.js');
const Infinix = require('./infinix.js');


const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let phoneModel = '';
let phoneNumber = '';

let message = '';
let text_recipients = [];
let conferenceCallContacts = [];


rl.question('What phone do you use? ', (answer) => {
	phoneModel = answer
	console.log(`Thank you for your valuable feedback: ${answer}. Please answer next question`);

	rl.question('What is your phone number? ', (answer) => {
		phoneNumber = answer
		console.log(`Thank you for your valuable feedback: ${answer}. Please answer next question`);

		rl.close();
	});
});



// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
			// rl.close();
// });

const samsung = new Samsung(phoneNumber, '1293485578849');
		// const nokia = new Nokia("070612", '284859088594040');
		// const iphone = new IPhone("070612", '33949349595943');
		// const infinix = new Infinix("070612", '4959593482308');

			samsung.makeSingleCall(123);
			samsung.makeConferenceCall([123,456,789]);
			samsung.sendTextMessage('THis is body of message message from samsung staring you in the face', [08162740850, 2348162]);
			samsung.getImei();

// nokia.makeSingleCall(223);
// nokia.makeConferenceCall([223,456,789]);
// nokia.sendTextMessage('THis is body of message message from nokia staring you in the face', [08162740850, 2348162]);
// nokia.getImei();

// iphone.makeSingleCall(323);
// iphone.makeConferenceCall([323,456,789]);
// iphone.sendTextMessage('THis is body of message message from iphone staring you in the face', [08162740850, 2348162]);
// iphone.getImei();

// infinix.makeSingleCall(423);
// infinix.makeConferenceCall([423,456,789]);
// infinix.sendTextMessage('THis is body of message from infinix staring you in the face', [08162740850, 2348162]);
// infinix.getImei();

