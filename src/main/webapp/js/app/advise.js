angular.module('advise', []);
angular.module('advise').controller('adviseController', function ( $scope, $http) {

    $scope.advise = {};
    $scope.mo = {};


    $scope.saveAdvise = function () {
        $http.post('/saveadvise', $scope.advise).success(function (data) {
            getSuccess();
            getAdvise();
            console.log(data);
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };

    $scope.editAdvise = function (u) {
        $scope.advise = u;
     };



    $scope.delAdvise = {};
    $scope.deleteAdvise = function (delAd) {
        $http.post('/deleteadvise', delAd).success(function (data) {
            getAdvise();
        }).error(function (data) {
            getError();
        });
    };

    getAdvise();

    $scope.adviseshow = {};
    function getAdvise() {
        $http.get('/getadvise').success(function (data) {
            $scope.adviseshow = data;
            console.log('..........................' + data);
        }).error(function (data) {
            getError();
        });
    }
    ;

    getAdviseCategory();

    $scope.advisecateshow = {};
    function getAdviseCategory() {
        $http.get('/getcategory').success(function (data) {
            $scope.advisecateshow = data;
            console.log(data);
        }).error(function (data) {
            getError();
        });
    }
    ;

    $scope.clickUpdate = function (updateAdvise) {
        $scope.advise = updateAdvise;
    };

    $scope.clear = function () {
        $scope.advise = {};
    };

    function getSuccess() {
        alert('Save Success');
    }
    function getError() {
        alert('Error');
    }

    $('.datepicker-custom').datepicker({
        changeYear: true,
        yearRange: '-100:+100',
        dateFormat: 'yy-mm-dd'
    });



    $scope.adviseSearch = function (){
        $http.post('/categoryadvise/search', $scope.keyword).success(function (data){
            $scope.advise = data;
            
        });
    };

     $scope.dowloads = function(advises){
        location.href = '/getfileadvise/' + advises.fileUpload.id;
        
    };
    
    
    $scope.file;
    $scope.saveFileAdvise = function () {
        var fd = new FormData();
        fd.append('files', $scope.file);
        $http.post('/savefileadvise', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function (data) {
            console.log(data+'fileeeeeeeeeeeeee');
            $scope.advise.fileUpload = data;
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