angular.module('admin_add_User', []);
angular.module('admin_add_User').controller('admin_add_UserController', function ($scope, $http) {

    $scope.addUser = {};



    $scope.saveAddUser = function () {
        $http.post('/saveadduser', $scope.addUser).success(getSuccess()).error(getError());
        getAddUser();
    };


    $scope.delAddUser = {};

    $scope.delAddUser = function (rowadduser) {
        $http.post('/deleteadduser', rowadduser).success(function (data) {
            getAddUser();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };


    getAddUser();

    $scope.addUsershow = {};
    function getAddUser() {
        $http.get('/getadduser').success(function (data) {
            $scope.addUsershow = data;
        }).error(function (data) {

        });
    }
    ;


    $scope.clickUpdate = function (updateAddUsre) {
        $scope.addUser = updateAddUsre;
    };



    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }
});