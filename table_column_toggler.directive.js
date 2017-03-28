(function($){
angular.module('cmoro.tableColumnToggler', [])
.controller('tableColumnController', function($scope){
    $scope.tableTRefresh = function(){
        angular.forEach($scope.tableTHeadsElements, function(elem,index){
            var headObj  = $scope.tableTHeads[index];
            if(headObj && headObj.hide){
                $(elem).addClass('ng-hide');
            }else{
                $(elem).removeClass('ng-hide');
            } 
        });  
    
        var trs = $scope.tableTTable.find('tr'); 
        angular.forEach(trs, function(tr, index){ 
            var tds = $(tr).find('td'); 
            angular.forEach(tds, function(item, index){ 
                var headObj = $scope.tableTHeads[index]; 
                if(headObj && headObj.hide){ 
                    $(item).addClass('ng-hide');
                }else{
                    $(item).removeClass('ng-hide');
                }
            }); 
        });    
        
    }

})
.directive('tableColumnTogglerTable', function () {
    return {
        restrict: "A",
        link: function ($scope, element, attrs) {
            $scope.tableTTable = $(element);
            $scope.tableTHeads =[]; 
            $scope.tableTHeadsElements = $scope.tableTTable.find('th'); 
            angular.forEach($scope.tableTHeadsElements, function(elem,index){
                if($(elem).attr('ignore')=="") return;
                var hide = false;
                if($(elem).attr('hide')==""){
                    hide = true;
                    $(elem).addClass('ng-hide');
                }
                $scope.tableTHeads.push({'label':$(elem).text(), 'hide':hide});
            }); 
        }   
    };
}).directive('tableColumnTogglerRepeat', function () {
    return {
        restrict: "A",
        link: function ($scope, element, attrs) {
            var tds = element.find('td');    
            angular.forEach(tds, function(item, index){ 
                var headObj = $scope.tableTHeads[index];   
                if(headObj && headObj.hide) $(item).addClass('ng-hide');
            }); 
        }
    }; 
}).directive('tableColumnTogglerControl', ['$compile', function ($compile) {
    return {
        restrict: 'E',
        controller: 'tableColumnController',
        link: function ($scope, element, attrs) {
             var wt = $scope.$watch('tableHeads', function(newValue, oldValue) { 
                var tpl = '<div class="dropdown table-column-toggler-control"><button class="btn-group" data-toggle="dropdown">Editar Campos <span class="caret"></span></button> <ul class="dropdown-menu"><div ng-repeat="hd in tableTHeads"><input type="checkbox" ng-click="tableTRefresh()" ng-model="hd.hide" ng-true-value="false" ng-false-value="true">{{hd.label}}</div><ul></div>'; 
                var compHtml = $compile(tpl)($scope);
                $(element).html(compHtml);     
                wt();
            }, true);
        } 
    };
}]);
})(jQuery); 
