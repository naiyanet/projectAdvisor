angular.module('behavior', []);
angular.module('behavior').controller('behaviorController', function ($scope, $http) {

    $scope.behavior = {};


    $scope.saveBehavior = function () {
        $http.post('/savebehavior', $scope.behavior).success(function (data) {
            getSuccess();
            getBehavior();
            console.log(data);
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };


    $scope.clear = function () {
        $scope.behavior = {};
    };



    $scope.delBehavior = {};
    $scope.deleteBehavior = function (delBehavior) {
        $http.post('/deletebehavior', delBehavior).success(function (data) {
            getBehavior();
        }).error(function (data) {
            getError();
        });
    };

    getBehavior();



    $scope.behaviorshow = {};
    function getBehavior() {
        $http.get('/getbehavior').success(function (data) {
            $scope.behaviorshow = data;
        });
    };



    $scope.clickUpdate = function (updateBehavior) {
        $scope.behavior = updateBehavior;
    };




    function getSuccess() {
        alert('Save Success');
    }
    
    function getError() {
        alert('Error');
    }
    
    
     $('.datepicker-custom').datepicker({
        changeYear:true,
        yearRange:'-100:+100',
        dateFormat: 'yy-mm-dd'
    });
    
});