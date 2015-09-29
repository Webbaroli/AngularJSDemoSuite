'use strict';

angular
    .module('PageAModule')
    .controller('View2Controller', ['$log','$scope', function($log, $scope){
            $log.debug('View 2 Controller');
        }
    ])
;