angular.module('advise',[]);
angular.module('advise').controller('adviseController',function($scope,$http){
    
    
    
    $scope.advise = {};
    
    
    
    $scope.save = function(){
        $http.post('/saveadvise',$scope.advise).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delAdvise= {};
    $scope.deleteAdvise = function (){
        $http.post('/deleteadvise',$scope.advise).success(getSuccess()).error(getError());
    };
    
    
    
    getAdvise();
    
    
    
    $scope.adviseshow = {};
        function getAdvise(){
            $http.get('/getadvise').success(function(data){
                $scope.adviseshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateAdvise){
        $scope.advise = updateAdvise;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});