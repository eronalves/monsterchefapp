(function() {
    'use strict';

    angular.module('monsterchef-app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/features/home/template/template.html',
                controller: 'HomeController as vm'
            })

        $urlRouterProvider.otherwise('/home');
    }

})();