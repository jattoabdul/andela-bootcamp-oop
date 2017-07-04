'use strict';

	export default class Mobile {
		constructor(phone_num, text_recipients=[], text_msg='') {
			this.phone_num = phone_num;
			this.text_recipients = [...text_recipients];
			this.text_msg = text_msg;
		}

	//make call
	makeSingleCall(number)
	{
		return console.log(`Calling ${number} From ${this.phone_num}`);
		// return console.log("Calling "+number+" From "+this.phone_num);
	}

	makeConferenceCall(numbers=[])
	{
		if(typeof(numbers) === 'array' && numbers.length>0)
		{
			// return console.log(`Calling ${number.join()}`);
			return `Calling ${numbers.join()}`;
		}
	}

	sendTextMessage()
	{
		if(typeof(this.text_recipients) === 'array' && this.text_recipients.length>0)
		{
			return console.log(`Sending Text Message to ${this.text_recipients.join()} From ${this.phone_num}`);
			// return console.log("Sending Text Message to "+this.text_recipients.join());
		}
	}

}