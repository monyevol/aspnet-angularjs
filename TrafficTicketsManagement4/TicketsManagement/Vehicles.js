appTicketSystem.controller('VehiclesController', ['$scope', function ($scope) {
    $scope.vehiclesTitle = "Motor Vehicles";
    $scope.vehiclesDescriptions = "This is a database of vehicles that have committed infractions on our roads.";

    $scope.vehicles = cars;
}]);