angular.module('teacher', []);
angular.module('teacher').controller('teacherController', function ($scope, $http) {
    $scope.teacher = {};
    $scope.save = function () {
        $http.post('/saveteacher', $scope.teacher).success(function (data) {
            growl('Save Success', 'success', 'top');
            getTeacher();
        }).error(function (data) {

        });
    };
    $scope.delTeacher = {};
    $scope.deleteTeacher = function(){
      $http.post('deleteteacher',$scope.delTeacher).success(function(data){
          growl('Delete success','info','top');
          getTeacher();
      }).error(function(data){
          growl('Delete error','info','top');
      });  
    };
    getTeacher();
    
    $scope.teachers = {};
    function getTeacher(){
      $http.get('/getteacher').success(function (data){
          $scope.teachers = data;
      }).error(function(data){});  
    };
    
    $scope.clickUpdate = function(updateTeacher){
      $scope.teacher = updateTeacher;
    };
});

