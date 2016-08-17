(function() {
	'use strict';

	angular.module('monsterchef-app')
		.controller('RegisterRecipesController', RegisterRecipesController);

    RegisterRecipesController.$inject = ['RecipesService', '$cordovaCamera'];
    function RegisterRecipesController(RecipesService, $cordovaCamera) {
        var vm = this;

        vm.register = function() {
            vm.recipe.photo = vm.pictureSrc;
            
            RecipesService.post(vm.recipe).then(function(response) {
                console.log(response);
            });
        };

        vm.takePicture = function() {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.JPEG,
                correctOrientation:true
            };

            $cordovaCamera.getPicture(options).then(function(response) {
                vm.pictureSrc = response;
            });
        };
    }
})();
