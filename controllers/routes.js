module.exports = function(app) {

  // app.set('view options', {
  // 	layout: 'layouts/my-layout'
  // });

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
    res.render("frontier/journeyman", {

    });
  });

  app.get('/', function(req, res){
    res.render("index", {});
  });

  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });

}