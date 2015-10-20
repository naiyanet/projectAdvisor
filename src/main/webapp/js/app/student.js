angular.module('student', []);

angular.module('student').controller('studentController', function ($scope, $http) {

    $scope.student = {};

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
    };
    
    getTeacher();
    $scope.teacher = {};
    function  getTeacher(){
        $http.post('/getaccout','Teacher').success(function (data){
            $scope.teacher = data;
        }).error(function (data){
            
        });
    };

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

