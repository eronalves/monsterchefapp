(function() {
	'use strict';

	angular.module('monsterchef-app')
		.controller('RecipesController', RecipesController);

    RecipesController.$inject = ['RecipesService'];
    function RecipesController(RecipesService) {
        var vm = this;

        function init() {
			RecipesService.get().then(function(response) {
                var i,
                    length = response.data.length;

                vm.recipes = response.data;

                for (i = 0; i < length; i++) {
                    if (vm.recipes[i].photo) {
                        vm.recipes[i].photoBase64 = convertBase64Char(vm.recipes[i].photo.data); 
                    }
                }
            });
        }

        init();
    }

    function getChunks(list, maxLength) {
        var arrays = [], i = 0, chunks = Math.ceil(list.length / maxLength);
        
        for (i; i < chunks; i++) {
            arrays.push(list.splice(0, (maxLength > list.length ? list.length : maxLength)));
        }

        return arrays;
    }

    function convertBase64Char(list) {
        var chunkList = getChunks(list, 64000), i = 0, len = chunkList.length, chars = [];

        for (i; i < len; i++) {
            chars.push(String.fromCharCode.apply(null, chunkList[i]));
        }

        return chars.join("");        
    }


})();
