'use strict';

angular
    .module('AppDemo6Module') //COSI LEGGE UN MODULO!!! NOTARE LA MANCANZA DI []

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/pageA'
        });
    }])
;