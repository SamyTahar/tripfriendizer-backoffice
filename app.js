var app = angular.module('villaSignIn', []);

app.controller('villaSignInCtrl', ['$scope', function ($scope) {
    $scope.checkData = function () {
        if ($scope.villaName.length > 5 && $scope.villaOwner.length > 5) {
            console.log("ok");
        }
        else {
            alert("Fill all the gaps (Min. 5 letters)!");
        }

    };

}]);