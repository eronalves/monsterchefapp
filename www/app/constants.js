(function() {
	'use strict';
	angular.module('monsterchef-app')
	.constant('ApiEndpoint',
     {
        url: 'http://localhost:8100/api'
		// url: 'https://monsterchef.herokuapp.com'
    });
})();