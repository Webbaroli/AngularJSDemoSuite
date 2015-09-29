'use strict';

angular
    .module('PageBModule')
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/pageB', {
                    templateUrl: 'pages/pageB/pageB.html',
                    controller: 'PageBController'
                }
            );
        }
    ])
;