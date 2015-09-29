'use strict';

angular
    //dichiarazione di un modulo con le relative dipendenze
    .module('AppDemo4Module',[])

    //configurazione del modulo
    .config(function(){
        console.log('Module Config function!');
    })

    //blocco eseguito una volta caricato tutto il framework angular
    .run(function(){
        console.log('Module Run function!');
    })

    //dichiarazione di un controller
    .controller('MainController',['$scope', 'Costante1', 'Factory1', function($scope, Constante1, Factory1){
        console.log('MainController');

        $scope.funzione1 = Factory1.metodo_esposto1;
        $scope.funzione2 = function(){
            console.log('Valore costante -> '+Constante1);
        };
        $scope.funzione3 = function(){
            Factory1.metodo_esposto2();
        }
    }])

    //dichiarazione di una costante
    .constant('Costante1', 'Valore costante1')

    //dichiarazione di una factory
    .factory('Factory1', ['Costante1', function(Costante1){
        console.log('Factory1');

        var apiEsposte = {
            metodo_esposto1 : metodo_interno1,
            metodo_esposto2 : metodo_interno2
        };

        function metodo_interno1(){
            console.log('Metodo interno 1');
        }

        function metodo_interno2(){
            console.log('Metodo interno 2 '+Costante1);
        }

        return apiEsposte;
    }])

;