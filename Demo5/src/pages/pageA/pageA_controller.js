'use strict';

angular
    .module('PageAModule')
    .controller('PageAController', ['$log', function($log){
            $log.debug('Page A Controller');
        }
    ])
;