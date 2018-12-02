var appTicketSystem = angular.module('trafficTicketSystem', ['ngRoute']);

appTicketSystem.directive('mainTitle', function () {
    var ticket = {
        restrict: "E",
        template: "<h2 class='topic-title maroon common-font text-center bold bottom-border'>Traffic Tickets Management</h2>"
    };

    return ticket;
});

appTicketSystem.directive('camerasSummary', function () {
    return {
        restrict: "E",
        templateUrl: "/Presentations/Cameras.html"
    };
});

appTicketSystem.directive('driversTopics', function () {
    return {
        restrict: "E",
        templateUrl: "/Presentations/Drivers.html"
    };
});

appTicketSystem.directive('vehiclesOperators', function () {
    return {
        restrict: "E",
        templateUrl: "/Presentations/Vehicles.html"
    };
});

appTicketSystem.directive('violationsTypes', function () {
    return {
        restrict: "E",
        templateUrl: "/Presentations/ViolationsTypes.html"
    };
});

appTicketSystem.directive('trafficViolations', function () {
    return {
        restrict: "E",
        templateUrl: "/Presentations/TrafficViolations.html"
    };
});