









var demoApp = angular.module('demoApp', []);



function SimpleController ( $scope ) {

	$scope.customers = [
		{ name: 'John Smith', city: 'Phoenix' },
		{ name: 'Sven Heimer', city: 'Asgaard' },
		{ name: 'Jens Lekman', city: 'Voltron' },
		{ name: 'Anders Johannssen', city: 'Mjolnirlindd' },
		{ name: 'Aarkandon Onandon', city: 'Bickspacefal' },
		{ name: 'Gerschwinn Humblemattr', city: 'Glasgow' }
	];

}


demoApp.controller( 'SimpleController', SimpleController );