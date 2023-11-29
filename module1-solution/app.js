(function() {
    'use strict';

    
    angular.module('LunchCheck', [])

    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items="";
        $scope.message = "";

        $scope.CalculateQuantity= function (){
             $scope.message = CalculateListItems($scope.items);
            
             if ($scope.message ==="Please enter data first"){
                $scope.myStyle = {"color" :"red"};
             } else {
                $scope.myStyle = {"color" :"green"};
             }
        }
       
    }
    
    function CalculateListItems(str){
        var msg = '';
        if (str === '') {
            msg = "Please enter data first";
        } else {
            var arrstr = str.split(',');
            if (arrstr.length >3) {
                msg="Too much!";
            } else {
                msg="Enjoy!"
            }
            
        }
        return msg;
    }

})();