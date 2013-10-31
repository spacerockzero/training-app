module.exports = function(app) {

  app.set('view options', {
  	layout: 'layouts/my-layout'
  });


  // frontier badges
  app.get('/frontier/apprentice', function(req, res){
    res.render("frontier/apprentice", {
    		person: {
    			name: "Jakob Anderson",
	    		title: 'Supreme Commander',
	    		weapon: 'orange jello'
	    	},
	    	pets: [
	    		{
	    			name: 'Paikea',
	    			breed: 'Pomeranian'
	    		},
	    		{
	    			name: "Apollo",
	    			breed: 'Australian Shepherd'
	    		}
	    	]
    });
  });

	app.get('/frontier/journeyman', function(req, res){
    res.render("frontier/journeyman", {});
  });

	function processForm( req, callback ){
		console.log('req.body',req.body);
		var procObj = {
			name: req.body.name + '_server-processed',
			secret: req.body.secret + '_server-processed'
		}
		callback(procObj);
	}

  app.post('/processform', function(req, res){
  	processForm(req, function(formObj){
	  	res.send({
	  		formObj: formObj
	  	});
  	})
  });


	// html5/css3 badges
	app.get('/html5css3/apprentice', function(req, res){
    res.render("html5css3/apprentice", {});
  });

  app.get('/html5css3/journeyman', function(req, res){
    res.render("html5css3/journeyman", {});
  });
  app.get('/html5css3/journeyman2', function(req, res){
    res.render("html5css3/journeyman2", {});
  });
  app.get('/html5css3/journeyman3', function(req, res){
    res.render("html5css3/journeyman3", {});
  });

  // javascript badges
  app.get('/javascript/apprentice', function(req, res){
    res.render("javascript/apprentice", {});
  });
  app.get('/javascript/journeyman', function(req, res){
    res.render("javascript/journeyman", {});
  });

  // testing badges
  app.get('/testing/apprentice', function(req, res){
    res.render("testing/apprentice", {});
  });
  app.get('/testing/journeyman', function(req, res){
    res.render("testing/journeyman", {});
  });

  app.get('/', function(req, res){
    res.render("index", {});
  });

  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });

}