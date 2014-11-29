var app = angular.module('villaSignIn', ['angularFileUpload']);

app.controller('villaSignInCtrl', ['$scope', function ($scope) {
    $scope.tag = [];

    $scope.deleteTag = function(item) {
        var index = $scope.tag.indexOf(item);
        $scope.tag.splice(index, 1);
    };


    $scope.addTag = function()
    {
        if($scope.villaTag.length > 3)
        {
            $scope.tag.push({name: $scope.villaTag});
        }

    };

    $scope.checkData = function ()
    {
        if ( ($scope.villaName.length > 5 && $scope.villaOwnerName.length > 5) && $scope.villaNumber > 0)
        {
            console.log("ok");
        }
        else
        {
            alert("Fill all the gaps!");
        }

    };

}]);


//Uploading images
var ImageCtrl = [ '$scope', '$upload', function($scope, $upload) {
    $scope.onFileSelect = function($files) {
        //$files: an array of files selected, each file has name, size, and type.
        for (var i = 0; i < $files.length; i++) {
            if($files.type == "image")
            var file = $files[i];
            $scope.upload = $upload.upload({
                url: 'server/upload/url', //upload.php script, node.js route, or servlet url
                //method: 'POST' or 'PUT',
                //headers: {'header-key': 'header-value'},
                //withCredentials: true,
                data: {myObj: $scope.myModelObj},
                file: file
            }).progress(function(evt) {
                console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                // file is uploaded successfully
                console.log(data);
            }
            )
        }}

}];