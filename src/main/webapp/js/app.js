var app = angular.module('app', ['ngRoute', 'home', 'add_user','admin_add_information',
                                 'advise', 'appointment', 'behavior', 'course', 
                                 'course_add', 'course_subject_1', 'course_subject_2', 'course_subject_3', 
                                 'course_subject_4', 
                                 'parent', 'teacher','student',
                                 'timetable', 'checklist-model']);
        
var app = angular.module('app');

app.controller('appController', function ($scope, $http) {

});

app.config(function ($routeProvider) {
    $routeProvider
            .when('/home', {
                controller: 'homeController',
                templateUrl: 'home.html'
            })
            .when('/user_show', {
                controller: 'add_userController',
                templateUrl: 'admin_user_show.html'
            })
            .when('/parent', {
                controller: 'parentController',
                templateUrl: 'admin_add_parent.html'
            })
            .when('/student', {
                controller: 'studentController',
                templateUrl: 'admin_add_student.html'
            })
            .when('/teacher', {
                controller: 'teacherController',
                templateUrl: 'admin_add_teacher.html'
            })
            .when('/admin_add_information', {
                controller: 'admin_add_informationController',
                templateUrl: 'admin_add_information.html'
            })
            .when('/advise', {
                controller: 'adviseController',
                templateUrl: 'advise_show.html'
            })
            .when('/adviseAdd', {
                controller: 'adviseController',
                templateUrl: 'advise_add.html'
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
                templateUrl: 'behavior_show.html'
            })
            .when('/behaviorAdd', {
                controller: 'behaviorController',
                templateUrl: 'behavior_add.html'
            })
            .when('/course', {
                controller: 'course_addController',
                templateUrl: 'course_show.html'
            })
            .when('/course_subject_show', {
                controller: 'course_addController',
                templateUrl: 'course_show_subject.html'
            })
            .when('/courseAdd', {
                controller: 'courseController',
                templateUrl: 'course_add.html'
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
            .when('/parent_show', {
                controller: 'parentController',
                templateUrl: 'parent_show.html'
            })
            .when('/student_show', {
                controller: 'studentController',
                templateUrl: 'student_show.html'
            })
            .when('/teacher_show', {
                controller: 'teacherController',
                templateUrl: 'teacher_show.html'
            })
            .when('/timetable', {
                controller: 'timetableController',
                templateUrl: 'timetable_show.html'
            })
            .when('/timetableAdd', {
                controller: 'timetableController',
                templateUrl: 'timetable_add.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});