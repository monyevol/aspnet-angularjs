/*appTicketSystem.controller('TrafficViolationsController', ['$scope', function ($scope) { // appTicketSystem.controller('TrafficViolationsController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.trafficViolationsTitle = "Traffic Violations";
    $scope.trafficViolationsDetails = "Our review process gives you great details about each infraction, including where it occurred and how.";

    $scope.trafficViolations = infractions;

//    $scope.params = $routeParams;
  //  $scope.ticket = $scope.violations[$routeParams.violationNbr - 1];
}]); */

/* appTicketSystem.controller('TrafficViolationsController', ['$scope', function ($scope) {
    $scope.trafficViolationsTitle = "Traffic Violations";
    $scope.trafficViolationsDetails = "Our review process gives you great details about each infraction, including where it occurred and how.";

    $scope.trafficViolations = infractions;
}]); */

appTicketSystem.controller('TrafficViolationsController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.trafficViolationsTitle = "Traffic Violations";
    $scope.trafficViolationsDetails = "Our review process gives you great details about each infraction, including where it occurred and how.";

    $scope.params = $routeParams;
    $scope.trafficViolations = infractions;
    $scope.ticket = $scope.trafficViolations[$routeParams.violationNumber - 1];
}]);