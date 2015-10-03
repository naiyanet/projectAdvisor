angular.module('course_subject_4', []);
angular.module('course_subject_4').controller('course_subject_4Controller', function ($scope, $http) {

$scope.CourseSubjectClassFour = {};
    
    
    
    $scope.saveCourseSubjectClassFour = function(){
        $http.post('/savecoursesubjectclassfour',$scope.CourseSubjectClassFour).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delCourseSubjectClassFour= {};
    $scope.deleteCourseSubjectClassFour = function (){
        $http.post('/deletecoursesubjectclassfour',$scope.CourseSubjectClassFour).success(getSuccess()).error(getError());
    };
    
    $scope.delCourseSubjectClassFour = function (rowcourseCourseSubjectClassFour) {
        $http.post('/deletecoursesubjectclassfour', rowcourseCourseSubjectClassFour).success(function (data) {
            getCourseSubjectClassFour();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    getCourseSubjectClassFour();
    
    
    
    $scope.courseSubjectClassFourshow = {};
        function getCourseSubjectClassFour(){
            $http.get('/getcoursesubjectclassfour').success(function(data){
                $scope.courseSubjectClassFourshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateCourseSubjectClassFour){
        $scope.CourseSubjectClassFour = updateCourseSubjectClassFour;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});