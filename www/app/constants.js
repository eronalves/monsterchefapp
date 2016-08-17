(function() {
	'use strict';
	angular.module('monsterchef-app')
	.constant('ApiEndpoint',
     {
        // url: 'http://localhost:8100/heroku'
		url: 'https://monsterchef.herokuapp.com'
    });
})();