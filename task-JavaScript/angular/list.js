/**
 * Created by Shinelon on 2017/4/30.
 */
// angular.module('list',[])
//     .controller('listCtrl',function($scope,$http,finacing,industry){
//
//     })
    myApp.controller('listCtrl',function($scope,$http){
        $http.get('/carrots-admin-ajax/a/company/search').
        success(function(data){
            $scope.List = data.data;
            console.log($scope.List);
            console.log($scope.List[1].industryList[0]);
            // 修改融资规模，感觉略蠢
            for (i=0;i<$scope.List.length;i++){
                if ($scope.List[i].financing == 0){
                    $scope.List[i].financing = '无需融资'
                }
                else if($scope.List[i].financing == 1){
                    $scope.List[i].financing = '天使轮'
                }
                else if($scope.List[i].financing == 2){
                    $scope.List[i].financing = 'A轮'
                }
                else if($scope.List[i].financing == 3){
                    $scope.List[i].financing = 'B轮'
                }
                else if($scope.List[i].financing == 4){
                    $scope.List[i].financing = 'C轮'
                }
                else if($scope.List[i].financing == 5){
                    $scope.List[i].financing = 'D轮以上'
                }
                else if($scope.List[i].financing == 6){
                    $scope.List[i].financing = '上市公司'
                }
            }

            for (i=0;i<$scope.List.length;i++){
                if ($scope.List[i].industryList[0] == 0){
                   $scope.List[i].industryList[0] =  '移动互联网';
                }
                else if ($scope.List[i].industryList[0] == 1){
                   $scope.List[i].industryList[0] =  '电子商务';
                }
                else if ($scope.List[i].industryList[0] == 2){
                   $scope.List[i].industryList[0] =  '企业服务';
                }
                else if ($scope.List[i].industryList[0] == 3){
                   $scope.List[i].industryList[0] =  'O2O';
                }
                else if ($scope.List[i].industryList[0] == 4){
                   $scope.List[i].industryList[0] =  '教育';
                }
                else if ($scope.List[i].industryList[0] == 5){
                   $scope.List[i].industryList[0] =  '金融';
                }
                else if ($scope.List[i].industryList[0] == 6){
                   $scope.List[i].industryList[0] =  '游戏';
                }
            }
        }).
        error(function(){
            alert('error!')
        })
    });

