angular.module('student', []);

angular.module('student').controller('studentController', function ($scope, $http) {
    
    $scope.student = {};
    
    $scope.save = function () {
        $http.post('/savestudent', $scope.student).success(function (data) {
            growl('Save Success', 'success', 'top');
            getStudent();
        }).error(function (data) {
        });
    };
    
    $scope.delStudent = {};
    $scope.deleteStudent = function () {
        $http.post('/deletestudent', $scope.delStudent).success(function(data){
            growl('Delete success','info','top');
            getStudent();
        }).error(function(data){
            growl('Delete error','info','top');
        });
    };
    
    getStudent();
    
    $scope.students = {};
    function getStudent(){
      $http.get('/getstudent').success(function(data){
          $scope.students = data;
      }).error(function(data){});  
    };
    
    $scope.clickUpdate = function(updateStudent){
        $scope.student = updateStudent;
    };
    
});

