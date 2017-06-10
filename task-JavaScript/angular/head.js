/**
 * Created by Shinelon on 2017/5/18.
 */
myApp.controller('head',function($scope,$http){

    $scope.out = function(){
        zeroModal.confirm({
            content: '确定下线吗？',
            okFn: function() {
                $http({
                    method:'post',
                    url:'/carrots-admin-ajax/a/login',
                    headers:{'Content-Type':undefined}
                })
                    .then(function(){
                        // $state.go($state.current,{},{reload:true})
                    })
            },
            cancelFn: function() {
            }
        });

    };
});