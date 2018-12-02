appTicketSystem.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            template: "<h2 class='text-center common-font maroon bold'>Welcome</h2>" +
                      "<p class='common-font text-center'>This section of our program gives details about the traffic violations that have been committed and the tickets that were issued.</p>"
        }).
        when('/Home', {
            templateUrl: "/TicketsManagement/Home.html"
        }).
        when('/Cameras', {
            controller: "CamerasController",
            templateUrl: "/TicketsManagement/Cameras.html"
        }).
        when('/Drivers', {
            controller: "DriversController",
            templateUrl: "/TicketsManagement/Drivers.html"
        }).
        when('/Vehicles', {
            controller: "VehiclesController",
            templateUrl: "/TicketsManagement/Vehicles.html"
        }).
        when('/ViolationsTypes', {
            controller: "ViolationsTypesController",
            templateUrl: "/TicketsManagement/ViolationsTypes.html"
        }).
        when('/TrafficViolations', {
            controller: "TrafficViolationsController",
            templateUrl: "/TicketsManagement/TrafficViolations.html"
        }).
        when('/TrafficViolations/:violationNumber', {
            controller: "TrafficViolationsController",
            templateUrl: "/TicketsManagement/Citation.html"
        }).
        otherwise({
            template: "<p>This section is under construction...</p>"
        });
});