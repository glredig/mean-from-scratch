app.controller('weighinsController', ['$scope', '$resource', 
  function($scope, $resource) {
  $scope.weighins = [
    { value: 180.0 },
    { value: 181.2 }
  ]

  $scope.addWeighin = function() {
    $scope.weighins.push({ value: $scope.weighinValue });
    $scope.weighinValue = '';
  }
}]);