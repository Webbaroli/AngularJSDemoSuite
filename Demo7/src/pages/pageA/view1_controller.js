'use strict';

angular
    .module('PageAModule')
    .controller('View1Controller', ['$log','$scope', function($log, $scope){
            $log.debug('View 1 Controller');
        }
    ])
;