angular.module('student', []);

angular.module('student').controller('studentController', function ($scope, $http) {
    
    $scope.student = {};
    
    $scope.saveStudent = function(){
        $http.post('/savestudent',$scope.student).success(function (data){
            getSuccess();
        }).error(getError());
    };
    
    $scope.delStudent = {};
    $scope.deleteStudent = function () {
        $http.post('/deletestudent', $scope.delStudent).success(getSuccess()).error(getError());
    };
    
    $scope.delStudent = function (rowstudent) {
        $http.post('/deletestudent', rowstudent).success(function (data) {
            getStudent();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
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
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
    
});

