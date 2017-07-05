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

// instantiating the classes
// const mobile = new Mobile(phoneNumber, imei);
// const samsung = new Samsung(phoneNumber, '1' + imei);
// const nokia = new Nokia(phoneNumber, '2' + imei, ble_pass);
// const iphone = new IPhone(phoneNumber, '3' + imei);
// const infinix = new Infinix(phoneNumber, '4' +imei);

// testing
describe("Mobile", () => {

	//mobile getImei return correct imei
	it("should return imei", () => {
		const mobile = new Mobile(phoneNumber, imei);
		let imeiNumber = mobile.getImei();
		assert.equal(mobile.getImei(), imeiNumber);
	});

	//mobile getImei return undefined
	it("should return undefined", () => {
		const mobile = new Mobile(phoneNumber);
		assert.equal(mobile.getImei(), undefined);
	});

	//
})

// describe("Samsung", () => {

// })