
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var create_profile = require('./routes/create_profile');
var log_in = require('./routes/log_in');
var home = require('./routes/home');
var notifications = require('./routes/notifications');
var profile = require('./routes/profile');
var settings = require('./routes/settings');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// app.get('/project', project.viewProject);
// app.get('/project/:name', project.viewProject);
app.get('/create_profile', create_profile.page1);
app.get('/create_profile_2', create_profile.page2);
app.get('/home', home.view);
app.get('/log_in', log_in.view);
app.get('/notifications', notifications.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/add', create_profile.add);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
