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
			publicInterfaceElement: document.getElementById('public-interface'),
			playNameElement: document.getElementById('play-name'),
			playLifeStoryElement: document.getElementById('play-life-story'),
			playNickNameElement: document.getElementById('play-nick-name')
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
	// try {
	// 	if (!privateMethod || typeof privateMethod != 'function'){
	// 		throw 'privateMethod does not exist or not accessible from this scope';
	// 	}
	// }
	// catch (err){
	// 	console.log('privateMethod ERROR:',err)
	// 	if (typeof privateMethod != 'function'){
	// 		throw 'privateMethod ERROR: privateMethod does not exist or not accessible from this scope';
	// 	}
	// }
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
	getNickName: function(){
		return $('#nickName').val();
	},
	getNewPerson: function(){
		if (!personData.filterNickName(personData.getNickName()) && !personData.filterName(personData.getName()) && !personData.filterText(personData.getLifeStory())){
			$('#bad-words-alert').hide()
			console.log('all words used check out');
			personData.name = personData.getName();
			personData.lifeStory = personData.getLifeStory();
			personData.nickName = personData.getNickName();
		}
		else {
			$('#bad-words-alert').show()
			console.log('there was an inappropriate word in one or more input fields, please correct it.')
		}
	},
	logPerson: function(){
		console.log( "NAME:",personData.name,"LIFESTORY:",personData.lifeStory );
	},
	putNewPerson: function(){
		elements.playNameElement.textContent = personData.name;
		elements.playLifeStoryElement.textContent = personData.lifeStory;
		elements.playNickNameElement.textContent = personData.nickName;
	},
	filterName: function(text){
		return offensiveWordsPattern.test(text);
	},
	filterText: function(text){
		return offensiveWordsPattern.test(text);
	},
	filterNickName: function(text){
		return offensiveWordsPattern.test(text);
	}
};
var offensiveWordsPattern = new RegExp(/(stinky|gross|messy|nasty|smelly)/g);

// form-handling
$(document).ready(function(){
	$('input,textarea').on('keyup', function(e){
		e.preventDefault();
		console.log('inside binding event')
		personData.getNewPerson();
		personData.logPerson();
		personData.putNewPerson();
	});
});

var outerFunction = function(){
	var innerFunction = function(){
		var objectThing = {
			a: 2,
			b: 3,
			c: 'simple'
		}
		return objectThing;
	}
	console.log('innerFunction:',innerFunction());
}
outerFunction();

var Car = function(){
	this.wheels = 4;
};
Car.prototype.hood = true;

var toyota = new Car();
toyota.color = 'blue';
console.log('toyota:',toyota);