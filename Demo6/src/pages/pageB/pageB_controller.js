'use strict';

angular
    .module('PageBModule')
    .controller('PageBController', ['$log', function($log){
            $log.debug('Page B Controller');
        }
    ])
;