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

  app.get('/', function(req, res){
    res.render("index", {});
  });

  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });

}