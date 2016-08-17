(function() {
	'use strict';

	angular.module('monsterchef-app')
		.controller('RecipesController', RecipesController);

    RecipesController.$inject = ['RecipesService'];
    function RecipesController(RecipesService) {
        var vm = this;

        function init() {
			RecipesService.get().then(function(response) {
                vm.recipes = response.data;
            });
        }

        init();
    }


})();
