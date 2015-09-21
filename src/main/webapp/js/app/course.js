angular.module('course',[]);
angular.module('course').controller('courseController',function($scope,$http){
    
    
    
    $scope.course = {};
    
    
    
    $scope.save = function(){
        $http.post('/savecourse',$scope.course).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delCourse= {};
    $scope.deleteCourse = function (){
        $http.post('/deletecourse',$scope.course).success(getSuccess()).error(getError());
    };
    
    
    
    getCourse();
    
    
    
    $scope.courseshow = {};
        function getCourse(){
            $http.get('/getcourse').success(function(data){
                $scope.courseshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateCourse){
        $scope.course = updateCourse;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});