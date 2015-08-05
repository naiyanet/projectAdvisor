angular.module('teacher', []);
angular.module('teacher').controller('teacherController', function ($scope, $http) {
    $scope.teacher = {};
    $scope.save = function () {
        $http.post('/saveTeacher', $scope.teacher).success().error();
    };
    function getSuccess(){
        alert('SaveSuccess');
    }
    function getError(){
        alert('Error');
    }
});

