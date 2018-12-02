appTicketSystem.controller('DriversController', ['$scope', function ($scope) {
    $scope.driversTitle = "Vehicles Owners/Drivers";
    $scope.driversInfo = "Here is information about vehicles owners/drivers.";

    $scope.drivers = owners;
}]);