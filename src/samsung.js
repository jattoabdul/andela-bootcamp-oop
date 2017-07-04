'use strict';

const Mobile = require('./mobile.js');

export default class Samsung extends Mobile {
	constructor(phone_num, imei)
	{
		super(phone_num, imei);
	}

	getImei(){
		return console.log(`Your IMEI is: ${this.imei}`);
	}

	makeSingleCall(number)
	{
		// return super.makeSingleCall(number);
		return console.log("Calling " + super.makeSingleCall(number)+ " From The Samsung Class");
	}

	makeConferenceCall(numbers=[])
	{
		if(Array.isArray(numbers) === true && numbers.length>0)
		{
			// return super.makeConferenceCall(numbers);
			return console.log("Calling " + super.makeConferenceCall(numbers) + " From The Samsung Class");
		}
	}

	sendTextMessage(message='', text_recipients=[])
	{
		return super.sendTextMessage(message, text_recipients);
	}
}
