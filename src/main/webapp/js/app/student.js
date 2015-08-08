angular.module('student', []);
angular.module('student').controller('studentController', function ($scope, $http) {
    $scope.student = {};
    $scope.save = function () {
        $http.post('/savestudent', $scope.student).success(function (data) {
            growl('Save Success', 'success', 'top');
            getStudent();
        }).error(function (data) {
        });
    };
    
    $scope.delStudent = {};
    $scope.deleteStudent = function () {
        $http.post('/deletestudent', $scope.delStudent).success(function(data){
            growl('Delete success','info','top');
            getStudent();
        }).error(function(data){
            growl('Delete error','info','top');
        });
    };
    
    getStudent();
    
    $scope.students = {};
    function getStudent(){
      $http.get('/getstudent').success(function(data){
          $scope.students = data;
      }).error(function(data){});  
    };
    
    $scope.clickUpdate = function(updateStudent){
        $scope.student = updateStudent;
    };
    
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
