'use strict';

angular
    .module('PageCModule')
    .controller('PageCController', ['$log','$scope', function($log, $scope){
            $log.debug('Page C Controller');
        }
    ])
;