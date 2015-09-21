angular.module('parent', []);
angular.module('parent').controller('parentController', function ($scope, $http) {
    $scope.parent = {};
    $scope.save = function () {
        $htpp.post('/saveparent', $scope.parent).success(getSuccess()).error(getError());
    };
    function getSuccess() {
        alert('SaveSuccess');
    }
    function getError() {
        alert('Error');
    }
    $('#date').datepicker();
});