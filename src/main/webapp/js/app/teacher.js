angular.module('teacher',[]);
angular.module('teacher').controller('teacherController',function($scope,$http){
    
    
    
    $scope.teacher = {};
    
    
    
    $scope.save = function(){
        $http.post('/saveteacher',$scope.teacher).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delTeacher = {};
    $scope.deleteTeacher = function (){
        $http.post('/deleteteacher',$scope.teacher).success(getSuccess()).error(getError());
    };
    
    
    $scope.delTeacher = function (rowteacher) {
        $http.post('/deleteteacher', rowteacher).success(function (data) {
            getTeacher();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    
    getTeacher();
    
    
    
    $scope.teachershow = {};
        function getTeacher(){
            $http.get('/getteacher').success(function(data){
                $scope.teachershow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateTeacher){
        $scope.teacher = updateTeacher;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});