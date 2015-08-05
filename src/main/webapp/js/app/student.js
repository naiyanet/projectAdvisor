angular.module('student', []);
angular.module('student').controller('studentController', function ($scope, $http) {
    $scope.student = {};
    $scope.save = function () {
        $http.post('/saveStudent',$scope.student).success(getSuccess()).error(getError());
    };
    function getSuccess(){
        alert('SaveSuccess');
    }
    function getError(){
        alert('Error');
    }
    $('#date').datepicker();
    
    
});



////angular.module('student', []);
//angular.module('student').controller('StudentController', function ($scope, $http) {
//    $scope.studentShow = {};
//    $scope.studentSave = {};
//    $scope.studentDelete = {};
//
//    $http.get('/student').success(function (data) {
//        $scope.studentShow = data;
//    }).error(function (data, status, header, config) {    });
//
//    $scope.showStudent = function () {
//        $http.get('/student').success(function (data) {
//            $scope.studentShow = data;
//        }).error(function (data, status, header, config) {   });
//    };
/////////////////// Update /////////////////////            
//    $scope.callUpdateStudent = function (id, name, email, mobile) {
//        $scope.student = {'id': id, 'name': name, 'email': email, 'mobile': mobile};
//    };
//
//
//////////////// Save and Update /////////////////////// 
//    $scope.saveStudent = function () {
//        $scope.showStudent();
//        $http.post('/student', $scope.student)
//                .success(function (data) {
//                    $scope.showStudent();
//                    $scope.errors = data;
//                }).error(function (data) {
//            console.log(data);
//            $scope.errors = data;
//
//        });
//
//    };
//
//
/////////////////// Delete ///////////////////////          
//    $scope.callDeleteStudent = function (id, name, email, mobile) {
//        $scope.studentss = {'id': id, 'name': name, 'email': email, 'mobile': mobile};
//        $scope.deleteStudent();
//    };
//
//
//    $scope.deleteStudent = function () {
//        $http.post('/deleteStudent', $scope.studentss)
//                .success(function (data) {
//                    $scope.showStudent();
//
//                    $scope.closeDialogDelete();
//                }).error(function (data) {
//        });
//    };
////////////////// ClearData /////////////////////            
//    $scope.Clear = function () {
//        $scope.student = {'id': 0, 'name': '', 'email': '', 'mobile': ''};
//    };
//    ///////////// show dialogDelete //////////////
//    $scope.showDialogDelete = function (id, name, email, mobile) {
//        $scope.studentss = {'id': id, 'name': name, 'email': email, 'mobile': mobile};
//        document.getElementById('popup-delete').style.display = 'initial';
//        document.getElementById('warpbody').style.display = 'initial';
//    };
//    //////////// close dialogDelete //////////////
//    $scope.closeDialogDelete = function () {
//        document.getElementById('popup-delete').style.display = 'none';
//        document.getElementById('warpbody').style.display = 'none';
//    };
//
//});
