'use strict';

angular
    .module('PageAModule')
    .controller('PageAController', ['$log','$scope', function($log, $scope){
            $log.debug('Page A Controller');
        }
    ])
;