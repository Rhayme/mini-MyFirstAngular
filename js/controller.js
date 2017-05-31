angular.module('firstAngular').controller('mainCtrl', function ($scope) {

  $scope.friends = ['ryan', 'jeff', 'kenny', 'steve', 'chedro'];

  $scope.addFriend = function (nameToAdd) {
    $scope.friends.push(nameToAdd);
  }

  $scope.removeFriend = function (nameToRemove) {
    //with a for Each
    $scope.friends.forEach(function (friend, index) {
      if (friend === nameToRemove) {
        $scope.friends.splice(index, 1);
      }
    })


    //with a for loop
    for (var i = 0; i < $scope.friends.length; i++) {
      if ($scope.friends[i] === nameToRemove) {
        $scope.friends.splice(i, 1);
      }
    }

  }
})
