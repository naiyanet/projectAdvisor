angular.module('parent',[]);
angular.module('parent').controller('parentController',function($scope,$http){
    
    
    
    $scope.parent = {};
    
    
    
    $scope.saveParent = function(){
        $http.post('/saveparent',$scope.parent).success(getSuccess()).error(getError());
    };
    
    
    
    
    $scope.delParent = {};
    $scope.deleteParent = function (){
        $http.post('/deleteparent',$scope.parent).success(getSuccess()).error(getError());
    };
    
    $scope.delParent = function (rowparent) {
        $http.post('/deleteparent', rowparent).success(function (data) {
            getParent();
        }).error(function (data) {
            alert('ลบไม่สำเร็จ');
        });
    };
    
    getParent();
    
    
    
    $scope.parentshow = {};
        function getParent(){
            $http.get('/getparent').success(function(data){
                $scope.parentshow = data;
            }).error(function(data){
                
            });
        };
    
    
    
    
    $scope.clickUpdate = function(updateParent){
        $scope.parent = updateParent;
    };
    
    
    
    function getSuccess(){
        alert('Save Success');
    }
    function getError(){
        alert('Error');
    }
});