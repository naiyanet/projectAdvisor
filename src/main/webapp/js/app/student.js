angular.module('student', []);
angular.module('student')
        .controller('StudentController', function ($scope, $http) {
            $scope.students = {};
            $scope.student = {};
           

            $http.get('/student').success(function (data) {
                $scope.students = data;
            }).error(function (data, status, header, config) {

            });

            $scope.showStudent = function () {
                $http.get('/student').success(function (data) {
                    $scope.students = data;
                }).error(function (data, status, header, config) {

                });
            };


///////////////// Update /////////////////////            
            $scope.callUpdateStudent = function (id, name, email, mobile) {
                $scope.student = {'id': id, 'name': name, 'email': email, 'mobile': mobile};
            };


////////////// Save and Update /////////////////////// 
            $scope.saveStudent = function () {
                $scope.showStudent();
                $http.post('/student', $scope.student)
                        .success(function (data) {
                            $scope.showStudent();
                             $scope.errors = data;
                        }).error(function (data) {
                            console.log(data);
                     $scope.errors = data;
                     
                });

            };


///////////////// Delete ///////////////////////          
            $scope.callDeleteStudent = function (id, name, email, mobile) {
                $scope.studentss = {'id': id, 'name': name, 'email': email, 'mobile': mobile};
                $scope.deleteStudent();
            };

            $scope.studentss = {};
            $scope.deleteStudent = function () {
                $http.post('/deleteStudent', $scope.studentss)
                        .success(function (data) {
                            $scope.showStudent();
                   
                    $scope.closeDialogDelete();
                        }).error(function (data) {
                });
            };
//////////////// ClearData /////////////////////            
            $scope.Clear = function (){
              $scope.student = {'id': 0, 'name': '', 'email': '', 'mobile': ''};  
            };
              ///////////// show dialogDelete //////////////
           $scope.showDialogDelete = function (id, name, email, mobile) {
                $scope.studentss = {'id': id, 'name': name, 'email': email, 'mobile': mobile};
               document.getElementById('popup-delete').style.display = 'initial';
               document.getElementById('warpbody').style.display = 'initial';
           };
           //////////// close dialogDelete //////////////
           $scope.closeDialogDelete = function (){
               document.getElementById('popup-delete').style.display = 'none';
                document.getElementById('warpbody').style.display = 'none';
           };
           
        });