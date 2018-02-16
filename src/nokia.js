'use strict';

const Mobile = require('./mobile.js');

export default class Nokia extends Mobile {
	constructor(phone_num, text_recipients=[], text_msg='', bluetooth_pass='')
	{
		super(phone_num, text_recipients, text_msg);
		this.name = "Nokia";
		this.bluetooth_pass = bluetooth_pass;
	}

	getImei(){
		return console.log(`Your IMEI is: ${this._imei}`);
	}

	makeSingleCall(number)
	{
		return console.log(`Calling ${super.makeSingleCall(number)} From The ${this.name} Class"`);
		// return console.log("Calling " + super.makeSingleCall(number)+ " From The Nokia Class");
	}

	makeConferenceCall(numbers=[])
	{
		if(Array.isArray(numbers) === true && numbers.length>0)
		{
			return console.log(`Calling ${super.makeConferenceCall(numbers)} From The ${this.name} Class`);
			// return console.log("Calling " + super.makeConferenceCall(numbers) + " From The Nokia Class");
		}
	}

	sendTextMessage(message='', text_recipients=[])
	{
		return super.sendTextMessage(message, text_recipients);
	}

	startBluetooth(){
		return console.log(`starting bluetooth: ${this.name} - bluetooth password: ${this.bluetooth_pass}`);
	}

}
