(function() {
    'use strict';

    angular.module('monsterchef-app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('recipes', {
                url: '/recipes',
                templateUrl: 'app/features/recipes/template/template.html',
                controller: 'RecipesController as vm'
            })
            .state('registerRecipes', {
                url: '/recipes/register',
                templateUrl: 'app/features/recipes/register/template/template.html',
                controller: 'RegisterRecipesController as vm'
            });

        $urlRouterProvider.otherwise('/recipes/register');
    }

})();
