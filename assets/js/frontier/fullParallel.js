/* Full Parallel Control Flow
   Author: Jakob Anderson, 2013
   Purpose: demonstrate how to make full-parallel API calls,
   and do something with them when they have all completed */


// Set up vars
var $target = $('#container'),
		users = [					/* interesting Flikr user id's */
			'87109756@N02', /* James Jardine (Australian landscapes) */
			'35199782@N08', /* Egzon Berisha (cars) */
			'24704567@N04', /* Robin Kiewiet (cars) */
			'12987346@N07', /* Roberto Bassi (nature landscapes) */
			'21664077@N00', /* Jololog (landscapes, citiscapes) */
			'76388440@N00'  /* Pablography (Seattle, Macro, landscapes) */
		],
		results = [];


function getData( callback ){
	// execute this loop to get all the API data
	users.forEach( function( item ) {
	  // fire all ajax calls in full parallel async without waiting for the previous to come back.
	  async( item, function( result ){
	    results.push( result );
	    if( results.length == users.length ) {
	      if (callback && typeof(callback) == "function"){
					callback();
				}
	    }
	  })
	});
}

// get API data
function async( userId, callback ) {
	// returns image data as JSON from given Flikr user id
	var url = '/flickr/services/feeds/photos_public.gne'+'?format=json'+'&id='+userId+'&jsoncallback=?';
	$.getJSON( url,
		function ( rsp ) {
			// all good!
			callback( rsp );
		}
	);
}

// do something with data, once all collected
function afterData( callback ) {
	var userSections = [];
	console.log('Done getting data, Results:',results);
	for (var i=0; i<results.length; i++){
		buildPhotos( results[i], function( itemResults ){
			userSections.push( itemResults );
		});
		if (userSections.length == results.length) {
			if (callback && typeof(callback) == "function"){
				callback( userSections )
			}
		}
	}
}

function buildPhotos( userData, callback ) {
	var items = userData.items,
			itemResults = [],
			html = '';
	for (var i=0; i<items.length; i++){
		buildPhoto( items[i], function( result ){
			itemResults.push( result );
			html += result;
			if( itemResults.length == items.length ){
				if (callback && typeof(callback) == "function"){
					callback( html )
				}
			}
		});
	}
}

// content building functions
function buildPhoto( item, callback ) {
	var photo =  '<div class=\"photo-item box\">\
									<a href=\"'+item.link+'\" >\
										<img src=\"'+item.media.m+'\" alt=\"'+item.title+'\" width=\"160\"/>\
									</a>\
							  </div>';
	if (callback && typeof(callback) == "function"){
		callback( photo );
	}
}

function buildContentHTML( photoObjects, callback ){
	var html = '',
			heading = '';
	for (var i=0; i<photoObjects.length; i++){
		heading = '<h3 class="author-name box">'+results[i].items[0].author.substr(18)+'</h3>';
		html += heading + photoObjects[i];
		if( i == photoObjects.length - 1 ) {
			if (callback && typeof(callback) == "function"){
				callback( html );
			}
		}
	}
}

function attachToDOM( completedContent, callback ) {
	$target.append( completedContent )
	if (callback && typeof(callback) == "function"){
		callback()
	}
}



// Time to celebrate!!
function finish(){
	console.log('DONE rendering init() chain! Time to celebrate!');
	// (function(){
	//   if ($('#container').masonry()){
	//     // do stuff i want to do with it
	//     $('#container').masonry('reload');
	//   } else {
	//     setTimeout(arguments.callee,50);
	//   }
	// })();

	// reload masonry after all images have loaded
	$(function(){
    $('#container').imagesLoaded( function(){
      setTimeout(function() {
        $('#container').masonry('reload');
      }, 0);
    });
  });

}

// Start function chain
function init(){
	getData( function(){
		afterData( function( photoObjects ){
			buildContentHTML( photoObjects, function( completedContent ){
				attachToDOM( completedContent, function(){
					finish();
				});
			});
		});
	});
}

init();



