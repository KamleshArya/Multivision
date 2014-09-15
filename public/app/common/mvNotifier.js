/**
 * Created by Kamlesh on 9/13/2014.
 */

angular.module('app').value('mvToastr',toastr);

angular.module('app').factory('mvNotifier',function(mvToastr){
  return{
     notify:function(msg){
         mvToastr.success(msg);
     }
  }
});