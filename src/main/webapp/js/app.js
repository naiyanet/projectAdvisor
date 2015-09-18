var app = angular.module('app', ['ngRoute']);
var app = angular.module('app');
app.controller();

app.config(function ($routeProvider) {
    $routeProvider
            .when('/home', {
                controller: 'homeController',
                templateUrl: 'home.html'
            })
            .when('/admin_add_User', {
                controller: 'admin_add_UserController',
                templateUrl: 'admin_add_User.html'
            })
            .when('/admin_add_groupemail', {
                controller: 'admin_add_groupemailController',
                templateUrl: 'admin_add_groupemail.html'
            })
            .when('/admin_add_information', {
                controller: 'admin_add_informationController',
                templateUrl: 'admin_add_information.html'
            })
            .when('/advise', {
                controller: 'adviseController',
                templateUrl: 'advise.html'
            })
            .when('/adviseAdd', {
                controller: 'adviseController',
                templateUrl: 'adviseAdd.html'
            })
            .when('/appointment', {
                controller: 'appointmentController',
                templateUrl: 'appointment.html'
            })
            .when('/appointmentAdd', {
                controller: 'appointmentController',
                templateUrl: 'appointmentAdd.html'
            })
            .when('/behavior', {
                controller: 'behaviorController',
                templateUrl: 'behavior.html'
            })
            .when('/behaviorAdd', {
                controller: 'behaviorController',
                templateUrl: 'behaviorAdd.html'
            })
            .when('/course', {
                controller: 'courseController',
                templateUrl: 'course.html'
            })
            .when('/courseAdd', {
                controller: 'courseController',
                templateUrl: 'courseAdd.html'
            })
            .when('/course_subject', {
                controller: 'course_subjectController',
                templateUrl: 'course_subject.html'
            })
            .when('/course_subject_1', {
                controller: 'course_subject_1Controller',
                templateUrl: 'course_subject_1.html'
            })
            .when('/course_subject_2', {
                controller: 'course_subject_2Controller',
                templateUrl: 'course_subject_2.html'
            })
            .when('/course_subject_3', {
                controller: 'course_subject_3Controller',
                templateUrl: 'course_subject_3.html'
            })
            .when('/course_subject_4', {
                controller: 'course_subject_4Controller',
                templateUrl: 'course_subject_4.html'
            })
            .when('/course_subject_5', {
                controller: 'course_subject_5Controller',
                templateUrl: 'course_subject_5.html'
            })
            .when('/parent', {
                controller: 'parentController',
                templateUrl: 'parent.html'
            })
            .when('/parentAdd', {
                controller: 'parentController',
                templateUrl: 'parentAdd.html'
            })
            .when('/parentEdit', {
                controller: 'parentController',
                templateUrl: 'parentEdit.html'
            })
            .when('/student', {
                controller: 'studentController',
                templateUrl: 'student.html'
            })
            .when('/studentAdd', {
                controller: 'studentController',
                templateUrl: 'studentAdd.html'
            })
            .when('/studentEdit', {
                controller: 'studentController',
                templateUrl: 'studentEdit.html'
            })
            .when('/teacher', {
                controller: 'teacherController',
                templateUrl: 'teacher.html'
            })
            .when('/teacherAdd', {
                controller: 'teacherController',
                templateUrl: 'teacherAdd.html'
            })
            .when('/teacherEdit', {
                controller: 'teacherController',
                templateUrl: 'teacherEdit.html'
            })
            .when('/timetable', {
                controller: 'timetableController',
                templateUrl: 'timetable.html'
            })
            .when('/timetableAdd', {
                controller: 'timetableController',
                templateUrl: 'timetableAdd.html'
            });
});