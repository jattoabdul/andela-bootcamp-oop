const assert = require('chai').assert;
const expect = require('chai').expect;

require('mocha-sinon');
const app = require('../src/main.js');
// each class
const Mobile = require('../src/mobile.js');
const Samsung = require('../src/samsung.js');
const Nokia = require('../src/nokia.js');
const IPhone = require('../src/iphone.js');
const Infinix = require('../src/infinix.js');

// variable to be used during instantiation
let phoneModel = 'Samsung';
let phoneNumber = '08162740850';
let message = 'I am testing classes and this is a message body';
let text_recipients = ['08168861541', '08033920706'];
let singleCallContact = '08055370900';
let conferenceCallContacts = ['07087116336', '08033920706', '08055370900'];
let ble_pass = '123jat';
let imei = '993485578849';

// testing Parent Class
describe("Mobile", () => {
	let mobile;

	beforeEach(() => {
		mobile = new Mobile(phoneNumber, imei);
	});

	// Mobile Class getImei method tests
	describe("Mobile getImei Method", () => {

		//mobile getImei return correct imei
		it("should return imei", () => {
			let imeiNumber = mobile.getImei();
			assert.equal(mobile.getImei(), imeiNumber);
		});

		//mobile getImei return undefined
		it("should return undefined", () => {
			mobile = new Mobile(phoneNumber);
			assert.equal(mobile.getImei(), undefined);
		});

	})

	//mobile makeConference call method tests
	describe("Mobile makeSingleCall Method", () => {

		//mobile makeSingleCall method returns number passed as Argument
		it("should get return a string of value passed as argument into method", () => {
			let nums = '1233455';
			assert.equal(mobile.makeSingleCall(nums), nums);
		});

	})

	//mobile makeConference call method tests
	describe("Mobile makeConferenceCall Method", () => {

		//mobile makeConference method returns error if passed arg is not an array
		it("should get return an error if value passed as argument is not an array", () => {
			let nums = '0706432';
			assert.equal(mobile.makeConferenceCall(nums), "Value not a list of numbers");
		});

		//mobile makeConference method returns string of joined array Args only if passed arg is array
		it("should get return a string of joined array if value passed as argument is an array", () => {
			let nums = ['0706432', '1233455'];
			assert.equal(mobile.makeConferenceCall(nums), nums.join());
		});

	})

		//mobile makeConference call method tests
	describe("Mobile sendTextMessage Method", () => {

		//mobile sendTextMessage method returns error if passed arg message is not string and recipient array is greater than or equals to 0
		it("should get return an error if value passed as msg argument is not a string", () => {
			let msg = 123;
			let text_recipients = [];
			assert.equal(mobile.sendTextMessage(msg, text_recipients), "Message Value not a string of numbers");
		});

		//mobile makeConference method returns string of joined array Args only if passed arg is array
		it("should get return a string of joined array if value passed as argument is an array", () => {
			let msg = 'My message Body is THis';
			let text_recipients = ['07023454545', '080213453454'];
			assert.equal(mobile.sendTextMessage(msg, text_recipients), "sent");
		});

	})

})

// testing subClass
describe("Samsung", () => {
	let samsung;

	beforeEach(() => {
		samsung = new Samsung(phoneNumber, imei);
	});

	// Samsung Class getImei method tests
	describe("Samsung getImei Method", () => {

		//samsung getImei return correct imei
		it("should return imei", () => {
			let imeiNumber = samsung.getImei();
			assert.equal(samsung.getImei(), imeiNumber);
		});

		//samsung getImei return undefined
		it("should return undefined", () => {
			samsung = new Samsung(phoneNumber);
			assert.equal(samsung.getImei(), undefined);
		});

	})

	//samsung makeSingleCall method tests
	describe("Samsung makeSingleCall Method", () => {

		//mobile makeSingleCall method returns number passed as Argument
		it("should return a string of message with value passed as argument into the method", () => {
			let result = samsung.makeSingleCall();
			let nums = '1233455';
			assert.equal(samsung.makeSingleCall(nums), result);
		});

	})

	//samsung activate4G method tests
	describe("Samsung Activate4G Method", () => {

		//samsung activate4G method returns a string of message
		it("should get return a string of message ", () => {
			let result = samsung.activate4G();
			assert.equal(samsung.activate4G(), result);
		});
	})

})
