'use strict';

angular
    .module('PageAModule')
    .controller('View4Controller', ['$log','$scope', function($log, $scope){
            $log.debug('View 4 Controller');
        }
    ])
;