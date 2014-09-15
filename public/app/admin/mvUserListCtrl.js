/**
 * Created by Kamlesh on 9/14/2014.
 */

angular.module('app').controller('mvUserListCtrl',function($scope,mvUser){
  $scope.users = mvUser.query();
});