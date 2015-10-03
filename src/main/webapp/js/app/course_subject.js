angular.module('course_subject', []);
angular.module('course_subject').controller('course_subjectController', function ($scope, $http) {
    
    
    
    $scope.courseSubject = {};
    
    
    
    $scope.saveCourseSubject = function(){
        $http.post('/savecoursesubject',$scope.courseSubject).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delCourseSubject= {};
    $scope.deleteCourseSubject = function (){
        $http.post('/deletecoursesubject',$scope.courseSubject).success(getSuccess()).error(getError());
    };
    
    $scope.delCourseSubject = function (rowcourseCourseSubject) {
        $http.post('/delete-course-subject', rowcourseCourseSubject).success(function (data) {
            getCourseSubject();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    getCourseSubject();
    
    
    
    $scope.courseSubjectshow = {};
        function getCourseSubject(){
            $http.get('/getcoursesubject').success(function(data){
                $scope.courseSubjectshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateCourseSubject){
        $scope.courseSubject = updateCourseSubject;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});