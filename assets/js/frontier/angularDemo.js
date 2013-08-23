var demoApp = angular.module('demoApp', [])


.config( function( $routeProvider ){
	$routeProvider
		.when('/',
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


demoApp.factory('simpleFactory', function(){
	var customers = [
		{ name: 'John Smith', city: 'Phoenix' },
		{ name: 'Sven Heimer', city: 'Asgaard' },
		{ name: 'Jens Lekman', city: 'Voltron' },
		{ name: 'Anders Johannssen', city: 'Mjolnirlindd' },
		{ name: 'Aarkandon Onandon', city: 'Bickspacefal' },
		{ name: 'Gerschwinn Humblemattr', city: 'Glasgow' }
	];

	var factory = {};

	factory.getCustomers = function(){
		return customers;
	};

	factory.postCustomer = function(){

	};

	return factory;

});


demoApp.controller('SimpleController', function( $scope, simpleFactory ) {
	$scope.customers = [];

	init();

	function init(){
		$scope.customers = simpleFactory.getCustomers();
	}

	$scope.addCustomer = function(){
		$scope.customers.push(
		  {
		  	name: $scope.newCustomer.name,
		  	city: $scope.newCustomer.city
		  });
	}

});