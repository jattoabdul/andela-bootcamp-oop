'use strict';

const Mobile = require('./mobile.js');

export default class Samsung extends Mobile {
	constructor(phone_num, imei)
	{
		super(phone_num, imei);
		this.name = "Samsung";
	}

	getImei(){
		return console.log(`Your IMEI is: ${this.imei}`);
	}

	makeSingleCall(number)
	{
		return console.log(`Calling ${super.makeSingleCall(number)} From The ${this.name} Class`);
		// return console.log("Calling " + super.makeSingleCall(number)+ " From The Samsung Class");
	}

	makeConferenceCall(numbers=[])
	{
		if(Array.isArray(numbers) === true && numbers.length>0)
		{
			return console.log(`Calling ${super.makeConferenceCall(numbers)} From The ${this.name} Class`);
			// return console.log(`"Calling " + super.makeConferenceCall(numbers) + " From The Samsung Class"`);
		}
	}

	sendTextMessage(message='', text_recipients=[])
	{
		return super.sendTextMessage(message, text_recipients);
	}

	activate4G()
	{
		return console.log(`activating 4G for ${this.name} Phones Only`);
	}

	startCamera()
	{
		return console.log(`Starting camera for Samsung Phone`);
	}
}

