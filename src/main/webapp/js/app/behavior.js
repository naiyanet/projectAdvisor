angular.module('behavior',[]);
angular.module('behavior').controller('behaviorController',function($scope,$http){
    
    
    
    $scope.behavior = {};
    
    
    
    $scope.save = function(){
        $http.post('/savebehavior',$scope.behavior).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delBehavior= {};
    $scope.deleteBehavior = function (){
        $http.post('/deletebehavior',$scope.behavior).success(getSuccess()).error(getError());
    };
    
    
    
    getBehavior();
    
    
    
    $scope.behaviorshow = {};
        function getBehavior(){
            $http.get('/getbehavior').success(function(data){
                $scope.behaviorshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateBehavior){
        $scope.behavior = updateBehavior;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});