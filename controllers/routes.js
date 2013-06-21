module.exports = function(app) {
  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });
  app.get('/', function(req, res){
    res.render("index", {});
  });
  app.get('/hello', function(req, res){
    res.render("hello", {});
  });
}