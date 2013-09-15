$(document).ready(function(){
	// handle tab interface content
	$('#myTab a').eq(1).tab('show'); // Select 2nd tab
	$('#myTab a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});
});



// skills code

// Task 1:
// main javascript module pattern
var thingamabob = (function () {

	var me = {},
			secretNumber = 13;

	function privateMethod() {
		// return secretNumber
		return secretNumber;
	}

	me.theOtherNumber = 17;
	me.getMultiple = function (number,multiple) {
		// get specified multiple of provided number
		return number * multiple;
	};
	me.multiplyBySecret = function(number){
		return number * secretNumber;
	}

	return me;

}());

// use the module object
var elements = {
			privateDataElement: document.getElementById('private-data'),
			privateMethodElement: document.getElementById('private-function'),
			publicInterfaceElement: document.getElementById('public-interface')
		}
		getters = {
			getPrivateData: function(){
				// this attribute should be out of scope here, since it is private to the module's scope
				return thingamabob.secretNumber || 'no scope access to this private feature';
			},
			getPrivateMethod: function(){
				// this method should be out of scope here, since it is private to the module's scope
				return thingamabob.privateMethod();
			},
			getPublicInterface: function(){
				return thingamabob;
			}
		};


function putPrivateData(){
	console.log('getters.getPrivateData()',getters.getPrivateData())
	elements.privateDataElement.textContent = getters.getPrivateData();
}
function putPrivateMethod(){
	// console.log('getters.getPrivateMethod()',getters.getPrivateMethod())
	// elements.privateMethodElement.textContent = getters.getPrivateMethod();
}
function putPublicInterface(){
	console.log('thingamabob',thingamabob);
	elements.publicInterfaceElement.textContent = JSON.stringify(getters.getPublicInterface());
}


putPrivateData();
putPrivateMethod();
putPublicInterface();


// Task 2

var personData = {
	name: '',
	lifeStory: '',
	getName: function(){
		return $('#name').val();
	},
	getLifeStory: function(){
		return $('#lifeStory').val();
	},
	getNewPerson: function(){
		personData.name = personData.getName();
		personData.lifeStory = personData.getLifeStory();
	},
	logPerson: function(){
		console.log( "NAME:",personData.name,"LIFESTORY:",personData.lifeStory );
	}
}

// form-handling
$(document).ready(function(){
	$('#form-submit').on('click', function(e){
		e.preventDefault();
		personData.getNewPerson();
		personData.logPerson();
	});
});