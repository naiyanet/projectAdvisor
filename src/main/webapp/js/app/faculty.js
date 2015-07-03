angular.module('faculty', []);
angular.module('faculty')
        .controller('facultyController', function ($scope, $http) {

            $scope.facultys = {};
            $scope.faculty = {};
            $scope.error = {};
            load();
            function load () {
                $http.get('/faculty',{params:{page:0,size:20,sort:'name,desc'}}).success(function (data) {
                    $scope.facultys = data;
                }).error(function (data, status, header, config) {

                });
            };
            
            $scope.clear = function (){
              $scope.error = {};  
            };
            
            $scope.save = function() {
                $http.post('/saveFaculty', $scope.faculty).success(function (data) {
                    load();
                    $scope.error = {};
                }).error(function (data, status, header, config) {
                      $scope.error = data;
                });
            };
            $scope.delete = function(dep) {
                $http.post('/deleteFaculty',dep).success(function (data) {
                    load();
                }).error(function (data, status, header, config) {

                });
            };
        });