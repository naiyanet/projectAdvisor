angular.module('course_subject_1', []);
angular.module('course_subject_1').controller('course_subject_1Controller', function ($scope, $http) {

$scope.CourseSubjectClassOne = {};
    
    
    
    $scope.saveCourseSubjectClassOne = function(){
        $http.post('/savecoursesubjectclassone',$scope.CourseSubjectClassOne).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delCourseSubjectClassOne= {};
    $scope.deleteCourseSubjectClassOne = function (){
        $http.post('/deletecoursesubjectclassone',$scope.CourseSubjectClassOne).success(getSuccess()).error(getError());
    };
    
    $scope.delCourseSubjectClassOne = function (rowcourseCourseSubjectClassOne) {
        $http.post('/deletecoursesubjectclassone', rowcourseCourseSubjectClassOne).success(function (data) {
            getCourseSubjectClassOne();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    getCourseSubjectClassOne();
    
    
    
    $scope.courseSubjectClassOneshow = {};
        function getCourseSubjectClassOne(){
            $http.get('/getcoursesubjectclassone').success(function(data){
                $scope.courseSubjectClassOneshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateCourseSubjectClassOne){
        $scope.CourseSubjectClassOne = updateCourseSubjectClassOne;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});