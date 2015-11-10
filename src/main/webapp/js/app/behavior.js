angular.module('behavior', []);
angular.module('behavior').controller('behaviorController', function (UserService,$scope, $http) {

    $scope.behavior = {};
     $scope.account = {};
    $scope.studentShow = UserService.user.student;
    $scope.keyword = "";
    $scope.currentPage = 0;
    var page = 0;
    var totalParent = 0;
    var totalPage = 0;

    $scope.saveBehavior = function () {
        $scope.behavior.teacher = $scope.account; 
        $http.post('/savebehavior', $scope.behavior).success(function (data) {
            getSuccess();
            getBehavior();
            console.log(data);
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };
    
      getAccountLogin();
    function getAccountLogin() {
        $http.get('/startpageuser').success(function (data) {
            $scope.account = data;
            console.log(data + '----------------------->');
        });
    }

    $scope.editBehavior = function (u) {
        $scope.behavior = u;
     };


    $scope.clear = function () {
        $scope.behavior = {};
    };



    $scope.delBehavior = {};
    $scope.deleteBehavior = function (delBehavior) {
        $http.post('/deletebehavior', delBehavior).success(function (data) {
            getBehavior();
        }).error(function (data) {
            getError();
        });
    };

    getBehavior();



    $scope.behaviorshow = {};
    function getBehavior() {
        $http.get('/getbehavior').success(function (data) {
            $scope.behaviorshow = data;
        });
    };

    function getSuccess() {
        alert('Save Success');
    }
    
    function getError() {
        alert('Error');
    }
    
    
     $('.datepicker-custom').datepicker({
        changeYear:true,
        yearRange:'-100:+100',
        dateFormat: 'yy-mm-dd'
    });
    
    
    getStudent();
    $scope.student = {};
    function getStudent() {
        $http.post('/getstudent', 'Student').success(function (data) {
            console.log(data + '...............'+data.totalElements);
            $scope.student = data;
       }).error(function (data) {

        });
    }
    ;

    $scope.selectStudent = function (student) {
        $scope.behavior.student = student;
        $scope.studentShow = student;
    };

    $scope.studentSearch = function () {
        console.log($scope.keyword);
        $http.post('/student/search', $scope.keyword).success(function (data) {
            $scope.student = data;
            console.log(data);
        });
    };

    countStudent();
    function countStudent() {
        $http.get('/countstudent').success(function (data) {
            totalStudent = data;
            console.log(data);
            totalPageStudent();
            console.log(totalPage);
        });

        function totalPageStudent() {
            totalPage = parseInt(totalStudent / 10);
            if ((totalStudent % 10) != 0) {
                totalPage++;
            }
            if ($scope.currentPage == 0) {
                $('#first-page').addClass('disabled');
                $('#pre-page').addClass('disabled');
                $('#next-page').addClass('disabled');
                $('#final-page').addClass('disabled');
            }
            if (totalPage > 1) {
                $('#next-page').removeClass('disabled');
                $('#final-page').removeClass('disabled');
            }
        }
    }

    $scope.firstPage = function () {
        if (!$('#first-page').hasClass('disabled')) {
            $scope.currentPage = 0;
            getParent();
            $('#first-page').addClass('disabled');
            $('#pre-page').addClass('disabled');
            $('#next-page').removeClass('disabled');
            $('#final-page').removeClass('disabled');
        }
    };

    $scope.prePage = function () {
        if (!$('#pre-page').hasClass('disabled')) {
            $scope.currentPage--;
            getParent();
            if ($scope.currentPage == 0) {
                $('#first-page').addClass('disabled');
                $('#pre-page').addClass('disabled');
            }
            $('#next-page').removeClass('disabled');
            $('#final-page').removeClass('disabled');
        }
    };

    $scope.nextPage = function () {
        if (!$('#next-page').hasClass('disabled')) {
            $scope.currentPage++;
            getParent();
            if ($scope.currentPage == totalPage - 1) {
                $('#next-page').addClass('disabled');
                $('#final-page').addClass('disabled');
            }
            $('#first-page').removeClass('disabled');
            $('#pre-page').removeClass('disabled');
        }
    };

    $scope.finalPage = function () {
        if (!$('#final-page').hasClass('disabled')) {
            $scope.currentPage = totalPage - 1;
            getParent();
            $('#next-page').addClass('disabled');
            $('#final-page').addClass('disabled');
            $('#first-page').removeClass('disabled');
            $('#pre-page').removeClass('disabled');
        }
    };
    
    
    
    
    
    
    
    
    
    
     $scope.dowloads = function(be){
        location.href = '/getfilebehavior/' + be.fileUpload.id;
        
    };
    
    $scope.file;
    $scope.saveFileBehavior = function () {
        var fd = new FormData();
        fd.append('files', $scope.file);
        $http.post('/savefilebehavior', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function (data) {
            console.log(data+'fileeeeeeeeeeeeee');
            $scope.behavior.fileUpload = data;
        });
    };
    
    
    
    
    
    
});








app.directive('fileModel', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
});

app.directive('customOnChange', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.customOnChange);
            element.bind('change', onChangeHandler);
        }
    };
});