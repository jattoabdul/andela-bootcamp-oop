'use strict';

const Mobile = require('./mobile.js');

export default class Infinix extends Mobile {
	constructor(phone_num, text_recipients=[], text_msg='')
	{
		super(phone_num, text_recipients, text_msg);
		this.name = "Infinix";
	}

	getImei(){
		return console.log(`Your IMEI is: ${this.imei}`);
	}

	makeSingleCall(number)
	{
		return console.log(`Calling ${super.makeSingleCall(number)} From The ${this.name} Class`);
		// return console.log("Calling " + super.makeSingleCall(number)+ " From The Infinix Class");
	}

	makeConferenceCall(numbers=[])
	{
		if(Array.isArray(numbers) === true && numbers.length>0)
		{
			return console.log(`Calling ${super.makeConferenceCall(numbers)} From The ${this.name} Class`);
			// return console.log("Calling " + super.makeConferenceCall(numbers) + " From The Infinix Class");
		}
	}

	sendTextMessage(message='', text_recipients=[])
	{
		return super.sendTextMessage(message, text_recipients);
	}

	hotSharing(){
		return console.log("running transfer of files between two Infinix phone by facing the two phones together");
	}

}
