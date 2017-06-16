myApp.service('SockService', function($http) {
	var sv = this;

	sv.checkSocks = function() {
		console.log('in checkSocks');
	};
}); // end SockService
