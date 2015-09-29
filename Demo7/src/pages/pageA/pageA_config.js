'use strict';

angular
    .module('PageAModule')
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('pageA', {
                url: "/pageA",
                views: {
                    '': {
                        templateUrl: 'pages/pageA/pageA.html',
                        controller: 'PageAController'
                    },
                    'view1@pageA': {
                        templateUrl: 'pages/pageA/view1.html',
                        controller: 'View1Controller'
                    },
                    'view2@pageA': {
                        templateUrl: 'pages/pageA/view2.html',
                        controller: 'View2Controller'
                    },
                    'view3@pageA': {
                        templateUrl: 'pages/pageA/view3.html',
                        controller: 'View3Controller'
                    },
                    'view4@pageA': {
                        templateUrl: 'pages/pageA/view4.html',
                        controller: 'View4Controller'
                    }
                }
            }
        );

    }])
;