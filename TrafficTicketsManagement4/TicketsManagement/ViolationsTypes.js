appTicketSystem.controller('ViolationsTypesController', ['$scope', function ($scope) {
    $scope.violationsTypesTitle = "Violations Types";
    $scope.introduction = "The following violations and their definition/explanation are based on the regulations in our county and our state.";

    $scope.categories = violationsTypes;
}]);