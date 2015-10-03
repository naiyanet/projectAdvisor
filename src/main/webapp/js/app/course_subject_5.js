angular.module('course_subject_5', []);
angular.module('course_subject_5').controller('course_subject_5Controller', function ($scope, $http) {

$scope.CourseSubjectClassFive = {};
    
    
    
    $scope.saveCourseSubjectClassFive = function(){
        $http.post('/savecoursesubjectclassfive',$scope.CourseSubjectClassFive).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delCourseSubjectClassFive= {};
    $scope.deleteCourseSubjectClassFive = function (){
        $http.post('/deletecoursesubjectclassfive',$scope.CourseSubjectClassFive).success(getSuccess()).error(getError());
    };
    
    $scope.delCourseSubjectClassFive = function (rowcourseCourseSubjectClassFive) {
        $http.post('/deletecoursesubjectclassfive', rowcourseCourseSubjectClassFive).success(function (data) {
            getCourseSubjectClassFive();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    getCourseSubjectClassFive();
    
    
    
    $scope.courseSubjectClassFiveshow = {};
        function getCourseSubjectClassFive(){
            $http.get('/getcoursesubjectclassfive').success(function(data){
                $scope.courseSubjectClassFiveshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateCourseSubjectClassFive){
        $scope.CourseSubjectClassFive = updateCourseSubjectClassFive;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});