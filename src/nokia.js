class CardScanner {
	// constructor (cardname, bank, pin) {
	// 	this.cardName = cardname;
	// 	this.bank = bank;
	// 	this.pin = pin;
	// }

	// func (){

	// }

	// METHODS

	// accept card
	login (){
		const comm = new Communication();

		if (comm.makeRequest() == 'Success') {
			// auth success
		} else {
			error = new ErrorHandler();
			error.handleAuthError(msg);

		}
	}
	//end accept card

	// Read Card
	logout (){

	}

	//end Read Card


	// eject card

	// validate pin


}

module.exports = Auth;