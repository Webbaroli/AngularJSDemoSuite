'use strict';

angular
    .module('PageBModule')
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('pageB', {
                url: "/pageB",
                views: {
                    '': {
                        templateUrl: 'pages/pageB/pageB.html',
                        controller: 'PageBController'
                    }
                }
            })
            .state('pageB.view1', {
                url: "/view1",
                views: {
                    'view1@pageB': {
                        templateUrl: 'pages/pageB/view1.html',
                        controller: 'View1Controller'
                    }
                }
            })
            .state('pageB.view1.view2', {
                url: "/view2",
                views: {
                    'view2@pageB.view1': {
                        templateUrl: 'pages/pageB/view2.html',
                        controller: 'View2Controller'
                    }
                }
            })
            .state('pageB.view1.view2.view3', {
                url: "/view3",
                views: {
                    'view3@pageB.view1.view2': {
                        templateUrl: 'pages/pageB/view3.html',
                        controller: 'View3Controller'
                    }
                }
            })
            .state('pageB.view1.view2.view3.view4', {
                url: "/view4",
                views: {
                    'view4@pageB.view1.view2.view3': {
                        templateUrl: 'pages/pageB/view4.html',
                        controller: 'View4Controller'
                    }
                }
            })
        ;

    }])
;