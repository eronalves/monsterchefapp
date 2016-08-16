(function() {
	'use strict';

    angular.module('monsterchef-app')
        .run(runCordova);

    runCordova.$inject = ['$ionicPlatform'];

    function runCordova($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

})();