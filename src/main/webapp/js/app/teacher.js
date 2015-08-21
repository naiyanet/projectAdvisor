angular.module('teacher', []);
angular.module('teacher').controller('teacherController', function ($scope, $http) {
    $scope.teacher = {};
    $scope.save = function () {
        $http.post('/saveTeacher', $scope.teacher).success().error();
    };

    $scope.delStudent = {};
    $scope.deleteTeacher = function () {
        $http.post('/deleteteacher', $scope.delStudent).success(function (data) {
            growl('Delete success', 'info', 'top');
            getStudent();
        }).error(function (data) {
            growl('Delete error', 'info', 'top');
        });
    };
   
});

