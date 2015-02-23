var express = require("express"); // call express
var app     = express();            // define our app using express
var bodyParser = require("body-parser");


var mongoose = require("mongoose");
mongoose.connect('mongodb://syed26:plzopen@ds041831.mongolab.com:41831/healthy-workforce');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var port = process.env.PORT || 8080; // set our port

// REQUIRING MODELS
// =============================================================================

var User     = require('./models/users');

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/index', function(req, res){
        //res.render('index.ejs');
        //res.sendfile('./views/index.html'); // load our public/index.html file
        //res.json({ message: 'hooray! welcome to our api!' });
        console.log("Just accessed route / ");
    
});



router.route('/users')

    // create a user (accessed at POST)
    .post(function(req, res) {
        console.log(req.body.name);
        //res.render('index.ejs');
        var user = new User();      // create a new instance of the Bear model
        user.fullName = req.body.name; // set the users name (comes from the request)

        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
            console.log("User Created!");
        });
        
    });


// REGISTER OUR ROUTES ------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// Listening on port
app.listen(port);
console.log('Accessing Port ' + port);
