'use strict';

angular
    .module('PageAModule')
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/pageA', {
                    templateUrl: 'pages/pageA/pageA.html',
                    controller: 'PageAController'
                }
            );
        }
    ])
;