(function() {
    'use strict';

    angular.module('monsterchef-app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
         $stateProvider
            .state('menu.home', {
                url: '/home',
                cache: false,
                views: {
                    menuContent: {
                        templateUrl: 'app/features/home/template/template.html'
                    }
                }
                    
                    
        });
    }

})();