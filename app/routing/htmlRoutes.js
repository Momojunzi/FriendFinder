

var routes = {
  survey: function(app,path){
    return app.get("/survey", function(req, res){
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
  },
  home: function(app, path){
    return app.use(["/", "/home"], function(req, res){
      res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
  }
};

module.exports = routes;
