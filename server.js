// ========== Dependencies ============ //

var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')

var app = express();
// Open Server
var PORT = process.env.PORT || 6000;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});