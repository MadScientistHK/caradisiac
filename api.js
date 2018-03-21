// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
const {getModels} = require('node-car-api');
const {getBrands} = require('node-car-api');
var bodyParser = require('body-parser');


function printModel () {
  const models = getModels('PEUGEOT');
  return models;
}

var model = printModel();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9292;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to Caradisiac api!' });   
});


router.route('/populate')
    .get(function(req, res) {
        res.json({resultat : model});
        //res.json({ message: 'POPULATE!' });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API listen on port ' + port);





/*

async function printModel () {
  const models = await getModels('PEUGEOT');

  console.log(models);
}

printModel();


async function printBrand () {
  const brands = await getBrands();

  console.log(brands);
}

printBrand();
*/

