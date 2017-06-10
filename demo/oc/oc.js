/**
 * Created by Shinelon on 2017/5/30.
 */
var myApp=angular.module("myApp",["ui.router","oc.lazyLoad"]);
myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/home");
    $stateProvider.state('home',{
        url:"/home",
        templateUrl: 'homepage.html',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:"homeApp",
                    files:["homepage.js"]
                })
            }]
        }
    });
    $stateProvider.state('index',{
        url:"/home",
        templateUrl:'index.html'
    });
    $stateProvider.state('child',{
        url:"/child",
        templateUrl:'child.html',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:["child.js"]
                })
            }
        }
    })
    $stateProvider.state('third',{
        url:"/third",
        templateUrl:'third.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('js/AppCtrl.js')
            }]
        }
    })

});
myApp.controller("myController",function ($state,$scope,$location) {
    $scope.turnPage=function () {
        // $state.go('home');
        $location.path('/home')
    }
});