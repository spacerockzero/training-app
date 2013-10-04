function formyThing(el, config){

	var sources = {
				$formy: $(el),
				$nameField: $('#name'),
				$secretField: $('#secret'),
				$submitButton: $('#submit'),
				$playback: $('#formy-playback'),
				$playback_name: $('#playback-name'),
				$playback_secret: $('#playback-secret')
			};


	// function request(url, callback){
	//   var xhr = new XMLHttpRequest();
	//   xhr.onreadystatechange = callback.bind(null, xhr);
	//   xhr.open('GET', url, true);
	//   xhr.send('');
	// }
	// function request(url, callback){
	//   var xhr = new XMLHttpRequest();
	//   xhr.onreadystatechange = callback.bind(null, xhr);
	//   xhr.open('GET', url, true);
	//   xhr.send('');
	// }

	function getFormData(){
		var dataObj = {
					name: sources.$nameField.val(),
					secret: sources.$secretField.val()
				};
		return dataObj;
	}

	function applyBindings(){
		sources.$formy.on( 'submit', function(e) {
			e.preventDefault();
			e.stopPropagation();
			sendIt(getFormData());
		});
	}

	function init(){
		applyBindings();
	}

	function request( url, payload, callback ){
	  var xhr = $.ajax({
				url: url,
				type: 'POST',
				data: payload
			});
		xhr.done(function(data){
			callback(data);
		});
	}

	function injectServerData( dataObj ){
		sources.$playback_name.text( dataObj.name );
		sources.$playback_secret.text( dataObj.secret );
	}

	function sendIt( dataObj ){
		var url = '/processform',
				payload = dataObj;
		request( url, payload, function(data){
			var responseData = data.formObj;
			injectServerData( responseData )
		});
	}

	init();
}

module.exports = function(config) {
  return new formyThing(config.container, config);
};