angular.module('admin_add_groupemail', []);
angular.module('admin_add_groupemail').controller('admin_add_groupemailController', function ($scope, $http) {


    $scope.groupemail = {};



    $scope.saveGroupemail = function () {
        $http.post('/savegroupemail', $scope.groupemail).success(getSuccess()).error(getError());
    };




    $scope.delGroupemail = {};
    $scope.deleteGroupemail = function () {
        $http.post('/deletegroupemail', $scope.groupemail).success(getSuccess()).error(getError());
    };


    $scope.delGroupemail = function (rowaddgroupemail) {
        $http.post('/deletegroupemail', rowaddgroupemail).success(function (data) {
            getGroupemail();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };

    getGroupemail();



    $scope.groupemailshow = {};
    function getGroupemail() {
        $http.get('/getgroupemail').success(function (data) {
            $scope.groupemailshow = data;
        }).error(function (data) {

        });
    }
    ;




    $scope.clickUpdate = function (updateGroupemail) {
        $scope.groupemail = updateGroupemail;
    };



    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }
});