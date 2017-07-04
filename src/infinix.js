'use strict';

const Mobile = require('./mobile.js');

export default class Infinix extends Mobile {
	constructor(phone_num, text_recipients=[], text_msg='')
	{
		super(phone_num, text_recipients, text_msg);
	}

	getImei(){
		return console.log(`Your IMEI is: ${this.imei}`);
	}

	makeSingleCall(number)
	{
		// return super.makeSingleCall(number);
		return console.log("Calling " + super.makeSingleCall(number)+ " From The Infinix Class");
	}

	makeConferenceCall(numbers=[])
	{
		if(Array.isArray(numbers) === true && numbers.length>0)
		{
			// return super.makeConferenceCall(numbers);
			return console.log("Calling " + super.makeConferenceCall(numbers) + " From The Infinix Class");
		}
	}

	sendTextMessage(message='', text_recipients=[])
	{
		return super.sendTextMessage(message, text_recipients);
	}

}
