function PetListCtrl($scope) {

  $scope.pets = [
		{
			name: 'Paikea',
			breed: 'Pomeranian'
		},
		{
			name: "Apollo",
			breed: 'Australian Shepherd'
		}
	];

	$scope.getTotalPets = function() {
		return $scope.pets.length;
	};

	$scope.addPet = function(item){
		$scope.pets.push(item);
		$scope.newPet = {};
		console.log($scope.pets);
	}

	$scope.removePet = function(pet){
		$scope.pets.splice($scope.pets.indexOf(pet),1)
	}

	$scope.editPet = function(pet){
		var i = $scope.pets.indexOf(pet);
		$scope.pets[i] = pet;
		console.log($scope.pets);
	}

}