var app = angular.module('villaSignIn', []);

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
        if ( ($scope.villaName.length > 5 && $scope.villaOwner.length > 5) && $scope.villaNumber > 0)
        {
            console.log("ok");
        }
        else
        {
            alert("Fill all the gaps !");
        }

    };

}]);