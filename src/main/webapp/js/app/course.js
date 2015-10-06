angular.module('course', []);
angular.module('course').controller('courseController', function ($scope, $http) {

    getCourseCategory();
    $scope.coursecategoryshow = {};
    $scope.categoryGroup = {};
    $scope.groupShow;

    $scope.select = {};

    function getCourseCategory() {
        $http.get('/getcategorycourse').success(function (data) {
            $scope.coursecategoryshow = data;
            console.log(data);
        }).error(function (data) {

        });
    };
    
    $scope.selectCategoryGroup = function () {
        $scope.categoryGroup = $scope.select.categoryCourse.categoryGroupCourse;
    };

    $scope.saveCourse = function () {
        $scope.select.categoryCourse = $scope.select.categoryCourse.categoryCourseName;
        $scope.select.categoryGroupCourse = $scope.select.categoryGroupCourse.name;
        $http.post('/saveselectcategory', $scope.select).success(function (data){
            
        });
    };

    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }
    
    
});