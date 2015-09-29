'use strict';

angular
    .module('PageBModule')
    .controller('PageBController', ['$log','$scope', function($log, $scope){
            $log.debug('Page B Controller');
        }
    ])
;