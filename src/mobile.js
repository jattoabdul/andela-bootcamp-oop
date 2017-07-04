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
	}

	sendTextMessage()
	{
		if(Array.isArray(this.text_recipients) === true && this.text_recipients.length>0)
		{
			// return console.log(`Sending Text Message to ${this.text_recipients.join()} From ${this.phone_num}`);
			return console.log(`Sending Text Message to ${this.text_recipients.join()} From ${this.phone_num}`);
		}
	}
}