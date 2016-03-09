'use strict';

module.exports = function() {
	var number;
	number = Math.floor((Math.random() * 1000000) +1);

	function secretNumber(){
		return number;
	
	}
	
	return secretNumber;
};