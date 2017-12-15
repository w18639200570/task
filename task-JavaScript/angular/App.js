/**
 * Created by Shinelon on 2017/4/21.
 */
var myApp = angular.module("myApp", ['ngMessages','ui.router','angularFileUpload'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.when("", "/PageTab");
        $stateProvider
            .state("PageTab", {
                url : "/PageTab",
                templateUrl : "PageTab.html"
            })
            .state("PageTab.list", {
                url : "/list?page&size&status&type&startAt&endAt",
                templateUrl : "Page1.html"
            })
            .state("PageTab.add", {
                url : "/add?status&type&title&url&content&img",
                templateUrl : "Page2.html"
            })
            .state("PageTab.editor", {
                url : "/editor?status&type&title&url&content&img&id&industry",
                templateUrl : "Page3.html"
            })
            .state("PageTab.welcome", {
                url : "/welcome",
                templateUrl : "js/a.html"
            })
            // .state('PageTab.Page1',{
            //     url:'/search?page'
            // })
        ;
    }).directive('contenteditable',  function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || '');
                };

                element.on('blur keyup change', function() {
                    scope.$evalAsync(read);
                });
                read(); // initialize

                function read() {
                    var html = element.html();
                    if ( attrs.stripBr && html == '<br>' ) {    //清除 <br>
                        html = '';
                    }
                    ngModel.$setViewValue(html);
                }
            }
        };
    });

//     .directive('autoHeight', function(){
//     function autoHeight(elem){
//         elem.style.height = 'auto';
//         elem.scrollTop = 0; //防抖动
//         elem.style.height = elem.scrollHeight + 'px';
//     }
//
//     return {
//         scope: {},
//         link: function (scope, ele, attrs) {
//             var oriEle = $(ele).get(0);
//             $(oriEle).focus();
//             $(oriEle).bind('keyup click', function(e) {
//                 autoHeight($(this).get(0));
//             });
//             var timer = setInterval(function(){
//                 if($(oriEle).val()) {
//                     autoHeight(oriEle);
//                     clearInterval(timer);
//                 }
//             }, 100);
//         }
//     };
// });

// myApp.controller('listCtrl', function($scope, $http){
//     $http({
//         method : 'GET',
//         url : '/carrots-admin-ajax/a/article/search',
//         headers : {'Content-Type' : 'appliocation/x-www-form-urlencoded'}
//     }).success(function(data){
//         $scope.List = data.data.articleList;
//         $scope.total = data.data.total;
//         // size = data.data.size;
//         // page = data.data.page;
//         console.log($scope.List);
//         console.log(data);
//         // $state.data = $scope.total;
//         // 修改融资规模，感觉略蠢
//         for(i = 0; i < $scope.List.length; i){
//             $scope.List[i].order = ++i;
//         }
//         for(i = 0; i < $scope.List.length; i++){
//             if($scope.List[i].type == 0){
//                 $scope.List[i].type = '首页banner'
//             }
//             else if($scope.List[i].type == 1){
//                 $scope.List[i].type = '找职位banner'
//             }
//             else if($scope.List[i].type == 2){
//                 $scope.List[i].type = '找精英banner'
//             }
//             else if($scope.List[i].type == 3){
//                 $scope.List[i].type = '行业大图'
//             }
//         }
//         for(i = 0; i < $scope.List.length; i++){
//             if($scope.List[i].status == 1){
//                 $scope.List[i].status = '草稿'
//             }
//             else if($scope.List[i].status == 2){
//                 $scope.List[i].status = '上线'
//             }
//         }
//     }).error(function(){
//         alert('error!')
//     });
//     $scope.up = function(index){
//         console.log($scope.List[index].title)
//     };
//     $scope.down = function(index){
//         console.log($scope.List[index].title)
//     };
//     $scope.edit = function(index){
//         console.log($scope.List[index].title)
//     };
//     $scope.delete = function(index){
//         console.log($scope.List[index].title)
//     }

// }).directive('pagination', [
//     '$state',
//     function($state){
//         return {
//             restrict : 'EA',
//             templateUrl : 'js/directives/ptteng-paging/pagination.html',
//             replace : true,
//             scope : {total : '@'},
//
//             link : function(scope, element, attrs){
//                 // scope = $state.data;
//                 //当前页
//                 var activePage = parseInt($state.params.page) || 1;
//                 //size
//                 scope.size = $state.params.size ? parseInt($state.params.size) : 10;
//                 //总页数
//
//                 var totalPage = Math.ceil(parseInt(scope.total) / scope.size);
//                 scope.activePage = activePage;
//                 scope.totalPage = totalPage;
//                 scope.isHaveNextPage = isHaveNextPage;
//                 scope.isHavePrePage = isHavePrePage;
//                 scope.pageList = getPageList();
//                 scope.isDisabled = isDisabled;
//                 scope.isActive = isActive;
//                 //是否有下一页
//                 function isHaveNextPage(){
//                     if(activePage === totalPage){
//                         return false;
//                     }
//                     return true;
//                 }
//
//                 //是否有上一页
//                 function isHavePrePage(){
//                     if(activePage !== 1){
//                         return true;
//                     }
//                     return false;
//                 }
//
//                 //获得pageList
//                 function getPageList(){
//                     var pageList = [];
//                     //...在两边
//                     if(isHavePreDot() && isHaveNextDot()){
//                         for(var i = 0; i < 5; i++){
//                             pageList.push(activePage + i);
//                         }
//                         pageList.unshift('...');
//                         pageList.push('...');
//                     }
//                     //...在前面
//                     if(isHavePreDot() && !isHaveNextDot()){
//                         for(var i = totalPage - 4; i <= totalPage; i++){
//                             pageList.push(i);
//                         }
//                         pageList.unshift('...');
//                     }
//                     //...在后面
//                     if(!isHavePreDot() && isHaveNextDot()){
//                         if(totalPage > 5){
//                             for(var i = 0; i < 5; i++){
//                                 pageList.push(activePage + i);
//                             }
//                         } else {
//                             for(var i = 1; i < totalPage; i++){
//                                 pageList.push(i);
//                             }
//                         }
//                         pageList.push('...');
//                     }
//                     //没有...
//                     if(!isHavePreDot() && !isHaveNextDot()){
//                         for(var i = 1; i <= totalPage; i++){
//                             pageList.push(i);
//                         }
//                     }
//                     return pageList;
//                 }
//
//                 //是否有前面的 ...
//                 function isHavePreDot(){
//                     if(activePage - 1 > 4){
//                         return true;
//                     }
//                     return false;
//                 }
//
//                 //是否有后面的 ...
//                 function isHaveNextDot(){
//                     if(activePage < totalPage - 4){
//                         return true;
//                     }
//                     return false;
//                 }
//
//                 function isDisabled(page){
//                     if(Number(page) === activePage || page === '...' || Number(page) > totalPage){
//                         return true;
//                     }
//                     return false;
//                 }
//
//                 function isActive(page){
//                     if(page === activePage){
//                         return true;
//                     }
//                     return false;
//                 }
//
//                 scope.changeInput = function(){
//                     scope.jumpPage = scope.jumpPage.replace(/[^0-9]/g, '');
//                     if(scope.jumpPage > totalPage){
//                         scope.jumpPage = totalPage;
//                     }
//                 };
//                 scope.changeSize = function(){
//                     scope.size = scope.size.replace(/[^0-9]/g, '');
//                     if(parseInt(scope.size) === 0){
//                         scope.size = 10;
//                     }
//                 };
//                 //跳页
//                 scope.goPage = function(page){
//                     if(isDisabled(page))
//                         return;
//                     $state.go($state.current, {
//                         page : page || 1,
//                         size : scope.size
//                     }, {reload : true});
//                 };
//             }
//         };
//     }
// ]);