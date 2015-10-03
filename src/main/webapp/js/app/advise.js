angular.module('advise',[]);
angular.module('advise').controller('adviseController',function($scope,$http){
    
    $scope.advise = {};

    $scope.saveAd = function (){
        $http.post('/saveadvise',$scope.advise).success(function (data){
            getSuccess();
            getAdvise();
        });     
    };
    
    $scope.delAdvise= {};
    $scope.deleteAdvise = function (delAd){
        $http.post('/deleteadvise',delAd).success(function (data){
            getAdvise();
        });
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