(function() {
    'use strict';

    angular.module('monsterchef-app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('menu.recipes', {
                url: '/recipes',
                cache: false,
                views: {
                    menuContent: {
                        templateUrl: 'app/features/recipes/template/template.html',
                        controller: 'RecipesController as vm'
                    }
                }
            })

            .state('menu.registerRecipes', {
                url: '/recipes/register',
                cache: false,
                views: {
                    menuContent: {
                        templateUrl: 'app/features/recipes/register/template/template.html',
                        controller: 'RegisterRecipesController as vm'
                    }
                }
            });

    }

})();
