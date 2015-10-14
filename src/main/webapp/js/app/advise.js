angular.module('advise', []);
angular.module('advise').controller('adviseController', function ($scope, $http) {

    $scope.advise = {};
    $scope.mo = {};


    $scope.saveAdvise = function () {
        $http.post('/saveadvise', $scope.advise).success(function (data) {
            getSuccess();
            getAdvise();
            console.log(data);
            $scope.clear();
        });
    };
    
    $scope.delAdvise = {};
    $scope.deleteAdvise = function (delAd) {
        $http.post('/deleteadvise', delAd).success(function (data) {
            getAdvise();
        });
    };

    getAdvise();

    $scope.adviseshow = {};
    function getAdvise() {
        $http.get('/getadvise').success(function (data) {
            $scope.adviseshow = data;
            console.log('..........................'+data);
        }).error(function (data) {

        });
    }
    ;
    
    getAdviseCategory();
    
    $scope.advisecateshow = {};
    function getAdviseCategory() {
        $http.get('/getcategory').success(function (data) {
            $scope.advisecateshow = data;
            console.log(data);
        }).error(function (data) {

        });
    };


    $scope.clickUpdate = function (updateAdvise) {
        $scope.advise = updateAdvise;
    };

    $scope.clear = function (){
        $scope.advise = {};
    };
    
    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }
});