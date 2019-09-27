app.controller('MainCtrl', function($scope,$state, $http,$ionicPopup,$ionicSlideBoxDelegate,HTSServices,$ionicLoading,$timeout) {
    $scope.data = {};

    /*protected*/


    $scope.discoValue = function(disco) {
        $scope.data.disco = disco;
    }
    $scope.operatorValue = function(operator) {
        $scope.data.operator = operator;
    }
    $scope.bankValue = function(bank) {
        $scope.data.bank = bank;
    }

    $scope.SubmitForm = function (formValid) {
        if(formValid) {
            sessionStorage.setItem("opdata", JSON.stringify($scope.data));
            if($scope.data.type=='wallet') {
                localStorage.setItem("balance", localStorage.getItem("balance") + $scope.data.amount);
            }
            $state.go('app.airtime_power_pro');
        }else{
            $ionicPopup.alert({
                title: 'Error Message:',
                template: 'Please complete all inputs'
            });
        }
    };

    $scope.SubmitFormBank = function (formValid) {
        if(formValid) {
            sessionStorage.setItem("opdata", JSON.stringify($scope.data));
            $state.go('app.wallet_bank_pro');
        }else{
            $ionicPopup.alert({
                title: 'Error Message:',
                template: 'Please complete all inputs'
            });
        }
    };

    $scope.SubmitFormAirtimeData = function (formValid) {
        if(formValid) {
            sessionStorage.setItem("opdata", JSON.stringify($scope.data));
            $state.go('app.airtime_data_pro');
        }else{
            $ionicPopup.alert({
                title: 'Error Message:',
                template: 'Please complete all inputs'
            });
        }
    };

    /*Operator*/
    //$scope.posts = sessionStorage.getItem("opdata");
    $scope.posts = JSON.parse(sessionStorage.getItem('opdata'));

    $scope.connectingOperator = true;
    $timeout(function () {
        $scope.connectingOperator = false;
        $scope.connectedOperator = true;
        $scope.connectedOperatorData = true;
        $scope.connectingDisco = true;
    }, 5000);

    /*Disco*/
    $timeout(function () {
        $scope.connectingDisco = false;
        $scope.connectedDisco = true;
        $scope.connectedDiscoData = true;
        $scope.connectingTrans = true;
    }, 10000);

    /*Process Transaction*/
    $timeout(function () {
        $scope.connectingTrans = false;
        $scope.connectedTrans = true;
        $scope.connectedTransData = true;
        $scope.connectedDataMsg = true;
        $scope.connectedDataBtn = true;
    }, 15000);

});
