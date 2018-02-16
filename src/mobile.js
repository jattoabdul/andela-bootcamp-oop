'use strict';

export default class Mobile {
	constructor(phone_num, imei) {
		this.phone_num = phone_num;
		this._imei = imei;
	}

	getImei(){
		return this._imei;
	}
	//make call
	makeSingleCall(number)
	{
		// return console.log("Calling " + number + " From " + this.phone_num);
		return number;
	}

	makeConferenceCall(numbers=[])
	{
		if(Array.isArray(numbers) === true && numbers.length>0)
		{
			// return console.log("Calling " + numbers.join());
			return numbers.join();
		}
		// return undefined;
		return "Value not a list of numbers";
	}

	sendTextMessage(message='', text_recipients=[])
	{
		if(typeof(message) === 'string' && text_recipients.length>0)
		{
			console.log(`Sending Text Message to ${text_recipients.join()} From ${this.phone_num} And the message body is ${message}`);
			return 'sent';
		}
		return "Message Value not a string of numbers";
	}

}