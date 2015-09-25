angular.module('student', []);

angular.module('student').controller('studentController', function ($scope, $http) {
    
    $scope.student = {};
    
    $scope.save = function(){
        $http.post('/savestudent',$scope.student).success(getSuccess()).error(getError());
    };
    
    $scope.delStudent = {};
    $scope.deleteStudent = function () {
        $http.post('/deletestudent', $scope.delStudent).success(getSuccess()).error(getError());
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
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
    
});

