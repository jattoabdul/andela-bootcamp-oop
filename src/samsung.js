'use strict';

const Mobile = require('./mobile.js');

export default class Samsung extends Mobile {
	constructor(phone_num, text_recipients=[], text_msg='')
	{
			super(phone_num,text_recipients,text_msg);
	}

	makeSingleCall(number)
	{
		return console.log(`Placing Call To ${number}`);
	}

	makeConferenceCall(numbers=[])
	{
		if(typeof(numbers) === 'array' && numbers.length>0)
		{
			return super.makeConferenceCall() + `Calling ${number.join()}`;
			// return console.log(`Calling ${number.join()}`);
		}
	}


}
