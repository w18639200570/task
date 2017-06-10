/**
 * Created by Shinelon on 2017/5/17.
 */
myApp.controller('editor', ['$scope','$http','$state','FileUploader', function($scope,$http,$state, FileUploader) {
    // 获取信息
    $http({
        method:'GET',
        url:'/carrots-admin-ajax/a/article/'+$state.params.id}).then(function(data){
        $scope.data = data.data.data.article;
        console.log($scope.data);
        // 新的读取数据
        $scope.name = $scope.data.title;
        $scope.type = $scope.data.type;
        $scope.ad = $scope.data.url;
        $scope.msg = $scope.data.img;
        $scope.status = $scope.data.status;
        $(".ed").html($scope.data.content);
        $scope.pic = $scope.data.img;
        if ($scope.type == 3){
            $scope.industry = $scope.data.industry;
        }
    }); 
    console.log($scope.data);

    // if ($state.params.type == '首页banner'){
    //     $state.params.type = '0';
    // }
    // else if ($state.params.type == '找职位banner'){
    //     $state.params.type = '1';
    // }
    // else if ($state.params.type == '找精英banner'){
    //     $state.params.type = '2';
    // }
    // else if ($state.params.type == '行业大图'){
    //     $state.params.type = '3';
    // }
    // if ($state.params.industry == '移动互联网'){
    //     $state.params.industry = '0'
    // }
    // else if ($state.params.industry == '电子商务'){
    //     $state.params.industry = '1'
    // }
    // else if ($state.params.industry == '企业服务'){
    //     $state.params.industry = '2'
    // }
    // else if ($state.params.industry == 'O2O'){
    //     $state.params.industry = '3'
    // }
    // else if ($state.params.industry == '教育'){
    //     $state.params.industry = '4'
    // }
    // else if ($state.params.industry == '金融'){
    //     $state.params.industry = '5'
    // }
    // else if ($state.params.industry == '游戏'){
    //     $state.params.industry = '6'
    // }
    // console.log($state.params);

    // 读取数据
    // $scope.name = $state.params.title;
    // $scope.type = $state.params.type;
    // console.log($scope.type);
    // $(".ed").html($state.params.content);
    // $scope.ad = $state.params.url;
    // $scope.msg = $state.params.img;
    // // var id = parseInt($state.params.id);
    // console.log($state.params);
    // if ($state.params.type == 3){
    //     $scope.industry = $state.params.industry;
    // }
    // 提交数据
    $scope.put = function() {
        // formdata方法
        console.log($scope.data);

        // var fd = new FormData();
        // fd.append('title', $scope.name);
        // fd.append('type', $scope.type);
        // fd.append('status', $scope.status);
        // fd.append('img', $scope.msg);
        // fd.append('content', $scope.tex);
        // fd.append('url', $scope.ad);
        // fd.append('createAt', $scope.data.createAt);
        // fd.append('updateAt', $scope.data.updateAt);
        // // console.log($scope.industry);
        // if(typeof($scope.industry) == 'number'){
        //     fd.append('industry', $scope.industry);
        // }
        // $scope.tostr = $.param(fd);

        // json方法

        if($scope.industry == undefined) {
            $scope.industry = ''
        }

        // var fd = {};
        // fd.title = $scope.name;
        // // fd.type = $scope.type;
        // // fd.status = $scope.status;
        // // fd.img = $scope.msg;
        // fd.content = $scope.text;
        // fd.url = $scope.ad;
        // fd.createAt = $scope.data.createAt;
        // console.log($scope.industry);
        // if(typeof($scope.industry) == 'number'){
        //     fdindustry = $scope.industry;
        // }
        // tostr = JSON.stringify(fd);
        // console.log($scope.tostr);
        $http({
            method:'PUT',
            // url:"/carrots-admin-ajax/a/u/article/"+$state.params.id+'?type='+$scope.type+'&status='+$scope.status+'&img='+$scope.msg+'&title='+$scope.name+'&createAt='+$scope.data.createAt
            url:"/carrots-admin-ajax/a/u/article/"+$state.params.id+ "?status="+$scope.status+'&type='+$scope.type+'&title='+$scope.name+'&url='+$scope.ad+'&content='+$scope.tex+'&img='+$scope.msg+'&industry='+$scope.industry+'&createAt='+$scope.data.createAt+'&updateAt='+$scope.data.updateAt

            // headers: {'Content-Type':'x-www-form-urlencoded;charest=UTF-8'},
            // headers: {'Content-Type':undefined},
            // data:tostr
            // transformRequest: angular.identity
        }).then(function(d) {
            //请求成功
            console.log(d);
            $state.go('PageTab.list', {
            }, { reload: true });
            // document.getElementsByClassName('show')[0].setAttribute('src',d.data.data.url)
        }).catch(function(err) {
            console.log(err);
        });
    };
    // 上传图片相关
    var uploader = $scope.uploader = new FileUploader({
        url: '/carrots-admin-ajax/a/u/img/task'
    });
    // 上传成功
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.msg = response.data.url;
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    // 删除图片
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
        $scope.msg = $scope.data.img;
        console.log($scope.data.img)
    };
    // 取消
    $scope.remove = function(index){
        $state.go('PageTab.list', {
        }, { reload: true })
    };
}]);
