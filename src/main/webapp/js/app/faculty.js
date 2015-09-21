angular.module('faculty', []);
angular.module('faculty').controller('facultyController', function ($scope, $http) {
    $scope.faculty = {};
    $scope.save = function () {
        $http.post('/savefaculty', $scope.faculty).success(getSuccess()).error(getError());
    };
    function getSuccess() {
        alert('SaveSuccess');
    }
    function getError() {
        alert('Error');
    }
});
