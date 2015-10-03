angular.module('behavior',[]);
angular.module('behavior').controller('behaviorController',function($scope,$http){
        
    $scope.behavior = {};
    
    
    $scope.saveBehavior = function (){
        $http.post('/savebehavior',$scope.behavior).success(function (data){
            getSuccess();
            getBehavior();
        });
    };
    
    
    $scope.delBehavior= {};
    $scope.deleteBehavior = function (delBehavior){
        $http.post('/deletebehavior',delBehavior).success(function (data){
            getBehavior();
        });
    };
    
    getBehavior();
    
    $scope.behaviorshow = {};
        function getBehavior(){
            $http.get('/getbehavior').success(function(data){
                $scope.behaviorshow = data;
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