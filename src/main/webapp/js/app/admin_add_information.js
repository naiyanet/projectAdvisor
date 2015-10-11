angular.module('admin_add_information', []);
angular.module('admin_add_information').controller('admin_add_informationController', function ($scope, $http) {

    $scope.information = {};

    $scope.saveInfor = function () {
        $http.post('/saveinformation', $scope.information).success(getSuccess()).error(getError());

    };


    $scope.delInformation = {};
    $scope.deleteInformation = function (del_information) {
        $http.post('/deleteformation', del_information).success(function (data) {
            getInformation();
        });
    };

    getInformation();

    $scope.informationshow = {};
    function getInformation() {
        $http.get('/getinformation').success(function (data) {
            $scope.informationshow = data;
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

