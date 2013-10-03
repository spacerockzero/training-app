function formyThing(el, config){

	var newConfig = {
		$nameField: $(el).find('#name'),
		$secretWordField: $(el).find('#secret')
	}

	function request(url, callback){
	  var xhr = new XMLHttpRequest();
	  xhr.onreadystatechange = callback.bind(null, xhr);
	  xhr.open('GET', url, true);
	  xhr.send('');
	}
	function request(url, callback){
	  var xhr = new XMLHttpRequest();
	  xhr.onreadystatechange = callback.bind(null, xhr);
	  xhr.open('GET', url, true);
	  xhr.send('');
	}
}

module.exports = function(config) {
  return new formyThing(config.container, config);
};