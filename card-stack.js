var app = angular.module('myApp', []);

app.controller('CardstackCtrl', function($scope, $timeout){
	$scope.index = 1;
	$scope.cards = [
        {"btn": "SkipTony"},
        {"btn": "SkipNany"},
        {"btn": "SkipPony"},
        {"btn": "SkipJhony"},
    ];

    $scope.setFalse = function() {
        $scope.startFade1 = false;
        $scope.startFade2 = false;
        $scope.startFade3 = false;
        $scope.startFade4 = false;
    };

	$scope.hideStuff = function (card) {
        $scope.setFalse();
        var skippedElement = $scope.cards.splice($scope.index - 1, 1);
        $scope.cards.push(skippedElement[0]);

        if(skippedElement[0].btn === 'SkipTony'){
            $scope.startFade1 = true;
        }else if(skippedElement[0].btn === 'SkipNany'){
            $scope.startFade2 = true;
        }else if(skippedElement[0].btn === 'SkipPony'){
            $scope.startFade3 = true;
        }else if(skippedElement[0].btn === 'SkipJhony'){
            $scope.startFade4 = true;
        }
    };
});