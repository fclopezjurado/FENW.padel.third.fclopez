/**
 * Created by fran lopez on 28/11/2016.
 *
 * CommonJS file to the application routing.
 * For each endpoint, angularJS loads a different view with the associated CSS stylesheet.
 */

angular.module('app').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/mainPage.html',
                css: 'css/index.css',
            })
            .when('/instalaciones', {
                templateUrl: 'views/instalaciones.html',
                css: 'css/instalaciones.css'
            })
            .when('/reservar', {
                templateUrl: 'views/reservar.html',
                css: 'css/form.css'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                css: 'css/form.css'
            })
            .when('/registro', {
                templateUrl: 'views/registro.html',
                css: 'css/form.css'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);