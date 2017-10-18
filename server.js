var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');

var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public/css"));
app.use(express.static("app/public/javascript"));
app.use(express.static("app/public/images"));

htmlRoutes.survey(app, path);
apiRoutes.getFriends(app);
apiRoutes.postFriends(app);
apiRoutes.getBestFriend(app);
htmlRoutes.home(app, path);

app.listen(port);
