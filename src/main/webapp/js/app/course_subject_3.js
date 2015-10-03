angular.module('course_subject_3', []);
angular.module('course_subject_3').controller('course_subject_3Controller', function ($scope, $http) {

$scope.CourseSubjectClassThree = {};
    
    
    
    $scope.saveCourseSubjectClassThree = function(){
        $http.post('/savecoursesubjectclassthree',$scope.CourseSubjectClassThree).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delCourseSubjectClassThree= {};
    $scope.deleteCourseSubjectClassThree = function (){
        $http.post('/deletecoursesubjectclassthree',$scope.CourseSubjectClassThree).success(getSuccess()).error(getError());
    };
    
    $scope.delCourseSubjectClassThree = function (rowcourseSubjectClassThree) {
        $http.post('/deletecoursesubjectclassthree', rowcourseSubjectClassThree).success(function (data) {
            getCourseSubjectClassThree();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    getCourseSubjectClassThree();
    
    
    
    $scope.courseSubjectClassThreeshow = {};
        function getCourseSubjectClassThree(){
            $http.get('/getcoursesubjectclassthree').success(function(data){
                $scope.courseSubjectClassThreeshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateCourseSubjectClassThree){
        $scope.CourseSubjectClassThree = updateCourseSubjectClassThree;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});