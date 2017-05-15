/**
 * Created by Shinelon on 2017/4/30.
 */

myApp.controller('listCtrl', function($scope, $http, $state){



// 初始化请求数据
    $state.activePage = parseInt($state.params.page)||1;
    $state.size = $state.params.size ? parseInt($state.params.size) : 10;


    console.log($state.params);
    if ($state.params.type == undefined) {
        $state.params.type = ''
    }
    if ($state.params.status == undefined) {
        $state.params.status = ''
    }
    if ($state.params.startAt == undefined) {
        $state.params.startAt = ''
    }
    if (isNaN($state.params.startAt)) {
        $state.params.startAt = ''
    }
    if ($state.params.endAt == undefined) {
        $state.params.endAt = ''
    }
    if (isNaN($state.params.endAt)) {
        $state.params.endAt = ''
    }
    $scope.sea = function(){
        $state.go($state.current, {
            status:'',
            type:'',
            startAt:'',
            endAt:''
        }, { reload: true })
    };
    $scope.seg = function(){
        $state.go('PageTab.Page2', {
        }, { reload: true })
    };


    // 搜索请求
        $scope.sec = function (){
            b = new Date($scope.begin);
            e = new Date($scope.end);
            $state.go($state.current, {
                status:$scope.searchParams,
                type:$scope.types,
                startAt:b.valueOf(),
                endAt:e.valueOf()
            }, { reload: true })
        };

    // http请求
    $http({
        method : 'GET',
        url : '/carrots-admin-ajax/a/article/search?page=' + $state.activePage + '&size=' + $state.size + '&status=' + $state.params.status + '&type=' + $state.params.type + '&startAt=' + $state.params.startAt + '&endAt=' + $state.params.endAt,
        headers : {'Content-Type' : 'appliocation/x-www-form-urlencoded'}
    }).success(function(data){
        // 继承搜索参数
        s = parseInt($state.params.startAt);
        q = parseInt($state.params.endAt);
        $scope.start = new Date(s);
        $scope.end = new Date(q);
        $scope.searchParams = $scope.end;
        $scope.begin = $scope.start;
        $scope.types = $state.params.type;
        $scope.searchParams = $state.params.status;
        $scope.List = data.data.articleList;
        $scope.total = data.data.total;
        console.log($scope.List);
        console.log(data);
        // $state.data = $scope.total;
        // 修改融资规模，感觉略蠢
        for(i = 0; i < $scope.List.length; i){
            $scope.List[i].order = ++i;
        }
        for(i = 0; i < $scope.List.length; i++){
            if($scope.List[i].type == 0){
                $scope.List[i].type = '首页banner'
            }
            else if($scope.List[i].type == 1){
                $scope.List[i].type = '找职位banner'
            }
            else if($scope.List[i].type == 2){
                $scope.List[i].type = '找精英banner'
            }
            else if($scope.List[i].type == 3){
                $scope.List[i].type = '行业大图'
            }
        }
        for(i = 0; i < $scope.List.length; i++){
            if($scope.List[i].status == 1){
                $scope.List[i].status = '草稿'
            }
            else if($scope.List[i].status == 2){
                $scope.List[i].status = '上线'
            }
        }
    }).error(function(){
        alert('error!')
    });

    // 继承上次搜索结果



    // 自定义按钮
    $scope.up = function(index){
        console.log($scope.List[index].title)
    };
    $scope.down = function(index){
        console.log($scope.List[index].title)
    };
    $scope.edit = function(index){
        console.log($scope.List[index].title)
    };
    $scope.delete = function(index){
        console.log($scope.List[index].title)
    }
});


// // myApp.constant('industry', {
// //     0: "移动互联网",
// //     1: "电子商务",
// //     2: "企业服务",
// //     3: "020",
// //     4: "教育",
// //     5: "金融",
// //     6: "游戏"
// // });
// //     myApp.filter('industry',function(){
// //         // 公司行业过滤
// //         return function(industryNum){
// //             var industryText = [];
// //             for (i=0;i<industryNum.length;i++){
// //                 switch (industryNum[i]){
// //                     case 0:
// //                         industryText[i] = '移动互联网';
// //                         break;
// //                     case 1:
// //                         industryText[i] = '电子商务';
// //                         break;
// //                     case 2:
// //                         industryText[i] = '企业服务';
// //                         break;
// //                     case 3:
// //                         industryText[i] = 'O2O';
// //                         break;
// //                     case 4:
// //                         industryText[i] = '教育';
// //                         break;
// //                     case 5:
// //                         industryText[i] = '金融';
// //                         break;
// //                     case 6:
// //                         industryText[i] = '游戏';
// //                         break;
// //                 }
// //             }
// //             return industryText.join(',')
// //         }
// //     });
// // for (i=0;i<$scope.List.length;i++){
// //     if ($scope.List[i].financing == 0){
// //         $scope.List[i].financing = '无需融资'
// //     }
// //     else if($scope.List[i].financing == 1){
// //         $scope.List[i].financing = '天使轮'
// //     }
// //     else if($scope.List[i].financing == 2){
// //         $scope.List[i].financing = 'A轮'
// //     }
// //     else if($scope.List[i].financing == 3){
// //         $scope.List[i].financing = 'B轮'
// //     }
// //     else if($scope.List[i].financing == 4){
// //         $scope.List[i].financing = 'C轮'
// //     }
// //     else if($scope.List[i].financing == 5){
// //         $scope.List[i].financing = 'D轮以上'
// //     }
// //     else if($scope.List[i].financing == 6){
// //         $scope.List[i].financing = '上市公司'
// //     }
// // }
// //
// // for (i=0;i<$scope.List.length;i++){
// //     if ($scope.List[i].industryList[0] == 0){
// //        $scope.List[i].industryList[0] =  '移动互联网';
// //     }
// //     else if ($scope.List[i].industryList[0] == 1){
// //        $scope.List[i].industryList[0] =  '电子商务';
// //     }
// //     else if ($scope.List[i].industryList[0] == 2){
// //        $scope.List[i].industryList[0] =  '企业服务';
// //     }
// //     else if ($scope.List[i].industryList[0] == 3){
// //        $scope.List[i].industryList[0] =  'O2O';
// //     }
// //     else if ($scope.List[i].industryList[0] == 4){
// //        $scope.List[i].industryList[0] =  '教育';
// //     }
// //     else if ($scope.List[i].industryList[0] == 5){
// //        $scope.List[i].industryList[0] =  '金融';
// //     }
// //     else if ($scope.List[i].industryList[0] == 6){
// //        $scope.List[i].industryList[0] =  '游戏';
// //     }
// // }