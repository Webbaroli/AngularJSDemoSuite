'use strict';

angular
    .module('PageCModule')
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('pageC', {
                url: "/pageC",
                views: {
                    '': {
                        templateUrl: 'pages/pageC/pageC.html',
                        controller: 'PageCController'
                    }
                }
            })
            .state('pageC.state1', {
                url: "/state1",
                views: {
                    'state1@pageC': {
                        templateUrl: 'pages/pageC/state1.html'
                    }
                }
            })
            .state('pageC.state1.view1', {
                views: {
                    'view1@pageC.state1': {
                        templateUrl: 'pages/pageC/view1.html'
                    }
                }
            })
            .state('pageC.state1.view2', {
                views: {
                    'view1@pageC.state1': {
                        templateUrl: 'pages/pageC/view2.html'
                    }
                }
            })
            .state('pageC.state1.bothViews', {
                views: {
                    'view1@pageC.state1': {
                        templateUrl: 'pages/pageC/view1.html'
                    },
                    'view2@pageC.state1': {
                        templateUrl: 'pages/pageC/view2.html'
                    }
                }
            })
        ;

    }])
;