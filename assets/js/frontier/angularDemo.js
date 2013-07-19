









var demoApp = angular.module('demoApp', []);

demoApp.config( function( $routeProvider ){
	$routeProvider
		.when('/view1',
		  {
		  	controller: 'SimpleController',
		  	template: '<div class="container">\
										<h2>View 1</h2>\
										Name:\
										<br/>\
										<input type="text" ng-model="name" />\
										<br/>\
										<ul>\
											<li ng-repeat="cust in customers | filter:name">\
												{{ cust.name | uppercase }} - {{ cust.city | lowercase }}\
											</li>\
										</ul>\
										Customer Name: <br/>\
										<input type="text" ng-model="newCustomer.name">\
										Customer City: <br/>\
										<input type="text" ng-model="newCustomer.city">\
										<br/>\
										<button ng-click="addCustomer()">Add Customer</button>\
									</div>'
		  })
		.when('/view2',
      {
      	controller: 'SimpleController',
      	template: '<div class="container">\
										<h2>View 2</h2>\
										Name:\
										<br/>\
										<input type="text" ng-model="name" />\
										<br/>\
										<ul>\
											<li ng-repeat="cust in customers | filter:name">\
												{{ cust.name | uppercase }} - {{ cust.city | lowercase }}\
											</li>\
										</ul>\
										Customer Name: <br/>\
										<input type="text" ng-model="newCustomer.name">\
										Customer City: <br/>\
										<input type="text" ng-model="newCustomer.city">\
										<br/>\
										<button ng-click="addCustomer()">Add Customer</button>\
									</div>'
      })
		.otherwise({ redirectTo: '/' });
});


var controllers = {};

controllers.SimpleController = function( $scope ) {
	$scope.customers = [
		{ name: 'John Smith', city: 'Phoenix' },
		{ name: 'Sven Heimer', city: 'Asgaard' },
		{ name: 'Jens Lekman', city: 'Voltron' },
		{ name: 'Anders Johannssen', city: 'Mjolnirlindd' },
		{ name: 'Aarkandon Onandon', city: 'Bickspacefal' },
		{ name: 'Gerschwinn Humblemattr', city: 'Glasgow' }
	];
	$scope.addCustomer = function(){
		$scope.customers.push(
		  {
		  	name: $scope.newCustomer.name,
		  	city: $scope.newCustomer.city
		  });
	}
};

demoApp.controller( controllers );