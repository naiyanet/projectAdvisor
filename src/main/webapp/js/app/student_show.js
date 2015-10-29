angular.module('studentshow', []);

angular.module('studentshow').controller('studentshowController', function (UserService , $scope, $http) {

    $scope.student = {};
    $scope.parentShow = {};

    $scope.saveStudent = function () {
        $http.post('/savestudent', $scope.student).success(function (data) {
            getSuccess();
            getStudent();
            console.log(data);
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };

    $scope.clear = function () {
        $scope.student = {};
    };

    $scope.delStudent = {};
    $scope.deleteStudent = function (delstudent) {
        $http.post('/deletestudent', delstudent).success(function (data) {
            getStudent();
        }).error(function (data) {
            getError();
        });
    };

    getStudent();

    $scope.students = {};
    function getStudent() {
        $http.get('/getstudent').success(function (data) {
            $scope.students = data;
        }).error(function (data) {
        });
    }
    ;

    $scope.clickUpdate = function (updateStudent) {
        $scope.student = updateStudent;
    };


    $scope.clearUser = function () {
        $scope.user = {};
        $scope.password = "";
        checkPassword();
    };

    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }

});

