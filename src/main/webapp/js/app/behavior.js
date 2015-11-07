angular.module('behavior', []);
angular.module('behavior').controller('behaviorController', function ($scope, $http) {

    $scope.behavior = {};


    $scope.saveBehavior = function () {
        $http.post('/savebehavior', $scope.behavior).success(function (data) {
            getSuccess();
            getBehavior();
            console.log(data);
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };

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