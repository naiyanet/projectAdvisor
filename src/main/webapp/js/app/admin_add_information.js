angular.module('admin_add_information', []);
angular.module('admin_add_information').controller('admin_add_informationController', function ($scope, $http) {

    $scope.information = {};



    $scope.saveInformation = function () {
        $http.post('/saveinformation', $scope.information).success(getSuccess()).error(getError());
    };




    $scope.delInformation = {};
    $scope.deleteInformation = function () {
        $http.post('/deleteformation', $scope.information).success(getSuccess()).error(getError());
    };



    getInformation();



    $scope.informationshow = {};
    function getInformation() {
        $http.get('/getinformation').success(function (data) {
            $scope.informationshow = data;
        }).error(function (data) {

        });
    }
    ;




    $scope.clickUpdate = function (updateInformation) {
        $scope.information = updateInformation;
    };



    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }
});

