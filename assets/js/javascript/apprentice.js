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

