/**
 * Created by Kamlesh on 9/2/2014.
 */

angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider,$locationProvider){
    var routeRoleChecks = {
        admin:{
            auth: function(mvAuth){
                return mvAuth.authorizeCurrentUserForRoute('Admin');
            }
        }
    }
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{templateUrl:'/partials/main/main',controller:'mvMainCtrl'})
        .when('/admin/users',{templateUrl:'/partials/admin/user-list',
            controller:'mvUserListCtrl',resolve:routeRoleChecks.admin
        })
});

angular.module('app').run(function($rootScope,$location){
   $rootScope.$on('$routeChangeError',function(evt,current,previous,rejection){
     if(rejection === 'Not Authorized'){
         $location.path('/');
     }
   });
});