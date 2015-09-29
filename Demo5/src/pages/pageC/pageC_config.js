'use strict';

angular
    .module('PageCModule')
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/pageC', {
                    templateUrl: 'pages/pageC/pageC.html',
                    controller: 'PageCController',
                    resolve: {
                        'variabileDaOttenerePrimaDiArrivareSullaView': function () {
                            console.log('Resolve delle variabili prima di arrivare sulla view');
                            return 'ciao!';
                        }
                    }
                }
            );
        }
    ])
;