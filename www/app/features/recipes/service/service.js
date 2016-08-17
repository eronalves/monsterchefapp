(function() {
	'use strict';

	angular.module('monsterchef-app')
		.service('RecipesService', RecipesService);

    RecipesService.$inject = ['$http', 'ApiEndpoint'];
    function RecipesService($http, ApiEndpoint) {
        var baseUrl = ApiEndpoint.url;
        return {
            get: getRecipes,
            post: postRecipe
        };

        function getRecipes() {
            return $http({
                url: baseUrl + '/recipes',
                method: 'GET'
            });
        }

        function postRecipe(recipe) {
            return $http({
                url: baseUrl + '/recipe',
                method: 'POST',
                data: recipe
            });
        }
    }


})();
