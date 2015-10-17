angular.module('course', []);
angular.module('course').controller('courseController', function ($scope, $http) {

    getCourseCategory();
    $scope.coursecategoryshow = {};
    $scope.categoryGroup = {};
    $scope.groupShow;
    $scope.selectFreedom = false;
    $scope.select = {};
    $scope.select.categoryCourse = {};

    function getCourseCategory() {
        $http.get('/getcategorycourse').success(function (data) {
            $scope.coursecategoryshow = data;
            console.log(data);
        }).error(function (data) {

        });
    }
    ;


    $scope.selectCategoryGroup = function () {
        $scope.categoryGroup = $scope.select.categoryCourse.categoryGroupCourse;
        if ($scope.select.categoryCourse.categoryCourseName == 'หมวดวิชาเลือกเสรี') {
            $scope.selectFreedom = true;
        }
        else {
            $scope.selectFreedom = false;
        }
        console.log($scope.selectFreedom);
    };


    $scope.saveCourse = function () {
        $scope.select.categoryCourse = $scope.select.categoryCourse.categoryCourseName;
        if (!$scope.selectFreedom) {
            $scope.select.categoryGroupCourse = $scope.select.categoryGroupCourse.name;
        }
        console.log($scope.select);
        $http.post('/saveselectcategory', $scope.select).success(function (data) {
            getSuccess();
            $scope.clear();
        });
    };

    $scope.clear = function () {
        $scope.select = {};
    };


    $scope.delCourse = {};
    $scope.deleteCourse = function (del) {
        $http.post('/deletecourse', del).success(function (data) {
            $scope.select.categoryCourse;
        }).error(function (data) {
            getError();
        });
    };
    
    
    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }


});
