angular.module('admin_add_information', []);
angular.module('admin_add_information').controller('admin_add_informationController', function ($scope, $http) {

    $scope.searchData = {};


    $scope.information = {};

    $scope.saveInfor = function () {
        console.log($scope.information);
        $http.post('/saveinformation', $scope.information).success(function (data) {
            getSuccess();
            getInformation();
            $scope.clear();
        }).error(function (data) {
            getError();
        });
    };

    $scope.editInformation = function (u) {
        $scope.information = u;
    };

    $scope.clear = function () {
        $scope.information = {};
    };

    $scope.delInformation = {};
    $scope.deleteInformation = function (del_information) {
        $http.post('/deleteinformation', del_information).success(function (data) {
            getInformation();
        }).error(function (data) {
            getError();
        });
    };

    getInformation();

    $scope.informationshow = {};
    function getInformation() {
        $http.get('/getinformation').success(function (data) {
            $scope.informationshow = data;
        }).error(function (data) {

        });
    }
    ;

    $scope.clickUpdate = function (updateInformation) {
        $scope.information = updateInformation;
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


    $scope.page = {};
    $scope.size = {};

    $scope.search = function () {
        search();
    };

    function search() {
        $scope.searchData.keyWord;
        $http.post('/searchinformation', $scope.searchData, {params: {page: $scope.page, size: $scope.size}})
                .success(function (data) {
                    $scope.information = data;
                    if (!data.content.length) {
                        $("#complete-dialog").modal('show');
                    }
                });
    }



});

