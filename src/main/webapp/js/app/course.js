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
    }
    ;

    $scope.selectCategoryGroup = function () {
        $scope.categoryGroup = $scope.select.categoryCourse.categoryGroupCourse;
      };

    $scope.saveCourse= function (){
        $scope.select.categoryCourse = $scope.select.categoryCourse.categoryCourseName;
        $scope.select.categoryGroupCourse = $scope.select.categoryGroupCourse.name;
        $http.post('/saveselectcategory',$scope.select).success(function (data){
            
        }).error(function (data){
            
        });
    };

//    function getCourseCategory(){
//        $http.get('/getcategorygroupcourse').success(function (data) {
//            $scope.coursecategoryshow = data;
//            console.log(data);
//        }).error(function (data) {
//
//        });
//    };
//
//
//    $scope.course = {};
//
//
//
//    $scope.save = function () {
//        $http.post('/savecourse', $scope.course).success(getSuccess()).error(getError());
//    };
//
//
//
//
//    $scope.delCourse = {};
//    $scope.deleteCourse = function () {
//        $http.post('/deletecourse', $scope.course).success(getSuccess()).error(getError());
//    };
//
//    $scope.delCourse = function (rowcourse) {
//        $http.post('/deletecourse', rowcourse).success(function (data) {
//            getCourse();
//        }).error(function (data) {
//            alert('ลบไม่สำเร็จ');
//        });
//    };
//
//    getCourse();
//    getCourseCategory();
//    getCoursegroup();
//
//    $scope.courseshow = {};
//    function getCourse() {
//        $http.get('/getcourse').success(function (data) {
//            $scope.courseshow = data;
//        }).error(function (data) {
//
//        });
//    }
//    ;
//
//    $scope.coursecategoryshow = {};
//    getCourseCategory()
//    function getCourseCategory() {
//        $http.get('/getcategorycourse').success(function (data) {
//            $scope.coursecategoryshow = data;
//        }).error(function (data) {
//
//        });
//    }
//    ;
//
//    $scope.coursegroupshow = {};
//    function getCoursegroup() {
//        $http.get('/getcategorygroupcourse').success(function (data) {
//            $scope.coursegroupshow = data;
//        }).error(function (data) {
//
//        });
//    }
//    ;
//
//
//    $scope.clickUpdate = function (updateCourse) {
//        $scope.course = updateCourse;
//    };
//
//
//
//    function getSuccess() {
//        alert('Save Success');
//    }
//    function getError() {
//        alert('Error');
//    }
});