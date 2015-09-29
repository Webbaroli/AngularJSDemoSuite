'use strict';

angular
    .module('PageAModule')
    .controller('View3Controller', ['$log','$scope', function($log, $scope){
            $log.debug('View 3 Controller');
        }
    ])
;