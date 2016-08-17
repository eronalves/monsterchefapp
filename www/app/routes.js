(function() {
    'use strict';

    angular.module('monsterchef-app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
        	.state('menu', {
                url: '/menu',
                abstract: true,
                templateUrl: 'app/menu/template/template.html',
                cache: false
            });
        
        $urlRouterProvider.otherwise('/menu/home');
    }

})();