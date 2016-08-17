(function() {
	'use strict';

	angular.module('monsterchef-app')
		.controller('RegisterRecipesController', RegisterRecipesController);

    RegisterRecipesController.$inject = ['RecipesService', '$cordovaCamera'];
    function RegisterRecipesController(RecipesService, $cordovaCamera) {
        var vm = this;

        vm.register = function() {
            RecipesService.post(vm.recipe);
        };

        vm.takePicture = function() {
            $cordovaCamera.getPicture().then(function(response) {
                vm.pictureSrc = "data:image/jpeg;base64," + response;
            });
        };

        init();
    }


})();
