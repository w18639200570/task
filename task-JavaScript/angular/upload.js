/**
 * Created by Shinelon on 2017/5/12.
 */
// 插件方法
myApp.controller('upload', ['$scope','$http','FileUploader', function($scope,$http, FileUploader) {
    // 上传相关
    $scope.save = function() {
        var fd = new FormData();
        // var file = document.querySelector('input[type=file]').files[0];
        fd.append('title', $scope.name);
        fd.append('type', $scope.type);
        fd.append('status', 1);
        fd.append('img', $scope.msg);
        fd.append('content', $scope.text);
        fd.append('url', $scope.ad);
        fd.append('industry', $scope.industry);
        console.log(fd);
        $http({
            method:'POST',
            url:"/carrots-admin-ajax/a/u/article",
            headers: {'Content-Type':undefined},

            data: fd,
            transformRequest: angular.identity
        }).then(function(d) {
            //请求成功
            console.log(d);
            // document.getElementsByClassName('show')[0].setAttribute('src',d.data.data.url)
        }).catch(function(err) {
            console.log(err);
        });
    };
    $scope.editorContent = '';
    // 提交函数
    $scope.submit = function(){
        var fd = new FormData();
        // var file = document.querySelector('input[type=file]').files[0];
        fd.append('title', $scope.name);
        fd.append('type', $scope.type);
        fd.append('status', 2);
        fd.append('img', $scope.msg);
        fd.append('content', $scope.text);
        fd.append('url', $scope.ad);
        fd.append('industry', $scope.industry);
        console.log(fd);
        $http({
            method:'POST',
            url:"/carrots-admin-ajax/a/u/article",
            headers: {'Content-Type':undefined},

            data: fd,
            transformRequest: angular.identity
        }).then(function(d) {
            //请求成功
            console.log(d);
            // document.getElementsByClassName('show')[0].setAttribute('src',d.data.data.url)
        }).catch(function(err) {
            console.log(err);
        });
    };

    // 上传图片相关
    var uploader = $scope.uploader = new FileUploader({
        url: '/carrots-admin-ajax/a/u/img/task'
    });

    // FILTERS

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.msg = response.data.url;
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };

    console.info('uploader', uploader);
}]);
myApp.directive('ngThumb', ['$window', function($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
            var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function(scope, element, attributes) {
            if (!helper.support) return;

            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file)) return;
            if (!helper.isImage(params.file)) return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}]);
// angular方法

    // myApp.controller('upload',["$scope","$http", function($scope,$http){
//     // 预览图片
//     // $scope.reader = new FileReader();  //创建一个FileReader接口
//     // $scope.form = {   //用于绑定提交内容，图片或其他数据
//     //     image:{}
//     // };
//     // $scope.thumb = {};   //用于存放图片的base64
//     // $scope.thumb_default = {  //用于循环默认的‘加号'添加图片的框
//     //     1111:{}
//     // };
//     //
//     // $scope.img_upload = function(files) {    //单次提交图片的函数
//     //     $scope.guid = (new Date()).valueOf();  //通过时间戳创建一个随机数，作为键名使用
//     //     $scope.reader.readAsDataURL(files[0]); //FileReader的方法，把图片转成base64
//     //     $scope.reader.onload = function(ev) {
//     //         $scope.$apply(function(){
//     //             $scope.thumb[$scope.guid] = {
//     //                 imgSrc : ev.target.result //接收base64
//     //             }
//     //         });
//     //     };
//     // };
//     //
//
//
// }]);



myApp.directive('contenteditable', function() {
    return {
        restrict: 'A' ,
        require: '?ngModel',
        // replace: false,
        // scope:{cont:'='},
        link: function(scope, element, attrs,ctrl) {
            // 噗，不记得是干嘛的啦
            // 初始化 编辑器内容
            // if (!ngModel) {
            //     return;
            // } // do nothing if no ng-model
            // // Specify how UI should be updated
            // ngModel.$render = function() {
            //     element.html(ngModel.$viewValue || '');
            // };
            // // Listen for change events to enable binding
            // element.on('blur keyup change', function() {
            //     scope.$apply(readViewText);
            // });
            // // No need to initialize, AngularJS will initialize the text based on ng-model attribute
            // // Write data to the model
            // function readViewText() {
            //     var html = element.html();
            //     // When we clear the content editable the browser leaves a <br> behind
            //     // If strip-br attribute is provided then we strip this out
            //     if (attrs.stripBr && html === '<br>') {
            //         html = '';
            //     }
            //     ngModel.$setViewValue(html);
            // }

            // 创建编辑器
            var editor = new wangEditor(element);
            editor.onchange = function () {
                // 从 onchange 函数中更新数据
                scope.$apply(function () {
                    var html = editor.$txt.formatText();
                    ctrl.$setViewValue(html);
                });
            };
            editor.create();
        }
    };
});
