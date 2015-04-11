app.controller('weighinsController', ['$scope', '$resource', function($scope, $resource) {
  var Weighin = $resource('/api/weighins');

  Weighin.query(function(results) {
    $scope.weighins = results;
  });

  $scope.weighins = [];

  $scope.createWeighin = function() {
    var weighin = new Weighin();
    weighin.value = $scope.weighinValue;
    weighin.updatedAt = new Date();
    weighin.$save(function(result) {
      $scope.weighins.push(result);
    });
    $scope.weighinValue = '';
  }
}]);