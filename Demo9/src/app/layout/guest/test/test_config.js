(function() {
    'use strict';

    angular
        .module('TestModule')
        .config(TestConfig)
    ;

    TestConfig.$inject = ['$stateProvider'];

    function TestConfig($stateProvider) {
        $stateProvider.state('guest.test', {
            url: '/test',
            views: {
                'content@guest': {
                    templateUrl: 'layout/guest/test/test_content.html',
                    controller: 'TestController'
                }
            }
        });
    }

})();