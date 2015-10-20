angular.module('admin_add_information', []);
angular.module('admin_add_information').controller('admin_add_informationController', function ($scope, $http) {

    $scope.information = {};

    $scope.saveInfor = function () {
        console.log($scope.information);
        $http.post('/saveinformation', $scope.information).success(function (data) {
            getSuccess();
            getInformation();
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };

    $scope.clear = function () {
        $scope.information = {};
    };

    $scope.delInformation = {};
    $scope.deleteInformation = function (del_information) {
        $http.post('/deleteinformation', del_information).success(function (data) {
            getInformation();
        }).error(function (data) {
            getError();
        });
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

    $('.datepicker.form-control').datepicker({
        changeYear:true,
        yearRange:'-100:+100',
        dateFormat: 'yy-mm-dd'
    });
});

