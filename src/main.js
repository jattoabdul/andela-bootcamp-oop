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
let singleCallContact = '';
let conferenceCallContacts = [];
let ble_pass = '123jat';

rl.question('What phone do you use? \n (1) samsumg \n (2) nokia \n (3) iphone \n (4) infinix \n >>>  ', (answer) => {
	phoneModel = answer;
	console.log(`Thank you for your valuable feedback: ${answer}. Please answer next question`);

	rl.question('What is your phone number? ', (answer) => {
		phoneNumber = answer;
		console.log(`Thank you for your valuable feedback: ${answer}. Please answer next question`);

		rl.question('What phone number would you like to make a single call to? ', (answer) => {
			singleCallContact = answer;
			console.log(`Thank you for your valuable feedback: ${answer}. Please answer next question`);

			rl.question('What phone numbers would you like to make a conference calls to? (seperate with a comma) ', (answer) => {
				conferenceCallContacts = answer.split(',');
				console.log(`Thank you for your valuable feedback: ${answer.split(',')}. Please answer next question`);

				rl.question('What phone numbers would you like to send text message to? (seperate by comma) ', (answer) => {
					text_recipients = answer.split(',');
					console.log(`Thank you for your valuable feedback: ${answer.split(',')}. Please answer next question`);

					rl.question('What is the content of the message to be sent? ', (answer) => {
						message = answer;
						console.log(`Thank you for your valuable feedback: ${answer.split(',')}. Wait while we make all your requests \n \n Running Queries: \n`);

						//switch cases for phone models
						switch (phoneModel) {
						  case '1':
						  	const samsung = new Samsung(phoneNumber, '1293485578849');
						  	// making method calls
			  				samsung.makeSingleCall(singleCallContact);
								samsung.makeConferenceCall(conferenceCallContacts);
								samsung.sendTextMessage(message, text_recipients);
								samsung.getImei();
								samsung.activate4G();
								samsung.startCamera();
						    break;
						  case '2':
								const nokia = new Nokia(phoneNumber, '284859088594040', ble_pass);
						  	// making method calls
			  				nokia.makeSingleCall(singleCallContact);
								nokia.makeConferenceCall(conferenceCallContacts);
								nokia.sendTextMessage(message, text_recipients);
								nokia.getImei();
								nokia.startBluetooth();
						    break;
						  case '3':
								const iphone = new IPhone(phoneNumber, '33949349595943');
						    // making method calls
			  				iphone.makeSingleCall(singleCallContact);
								iphone.makeConferenceCall(conferenceCallContacts);
								iphone.sendTextMessage(message, text_recipients);
								iphone.getImei();
								iphone.iMessageSending(message, text_recipients);
						    break;
					    case '4':
						    const infinix = new Infinix(phoneNumber, '4959593482308');
						    // making method calls
			  				infinix.makeSingleCall(singleCallContact);
								infinix.makeConferenceCall(conferenceCallContacts);
								infinix.sendTextMessage(message, text_recipients);
								infinix.getImei();
								infinix.hotSharing();
						  default:
						  	const defaultPhone = new Samsung(phoneNumber, '1293485578849');
						  	// making method calls
			  				defaultPhone.makeSingleCall(singleCallContact);
								defaultPhone.makeConferenceCall(conferenceCallContacts);
								defaultPhone.sendTextMessage(message, text_recipients);
								defaultPhone.getImei();
								defaultPhone.startCamera();
						    break;
						}
						rl.close();
					});
				});
			});
		});
	});

});
