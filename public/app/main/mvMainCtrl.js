/**
 * Created by Kamlesh on 9/9/2014.
 */

angular.module('app').controller('mvMainCtrl',function($scope){
    //$scope.myVar = "Hello Angular from Kamlesh";
    $scope.courses=[
        {name:'C# for Sociopaths',featured:true},
        {name:'C# for Non Sociopaths',featured:false},
        {name:'Complete References-Java',featured:true},
        {name:'C# in depth',featured:true}
    ]
});
